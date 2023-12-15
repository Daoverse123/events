import React, { useEffect, useState } from "react";

import Card6 from "@/components/Card6";
import Card1 from "@/components/Card1";
import Selector from "@/components/Selector";

import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Nav from "@/components/Nav";

import { useQuery } from "react-query";
import axios from "axios";

import { EventAll } from "@/types";
import limitWords from "@/utils/limitwords";

import { create } from "zustand";
import { json } from "stream/consumers";
import { useMediaQuery } from "usehooks-ts";
import Head from "next/head";
import Footer from "@/components/Footer";

type Label = "city" | "country" | "tag";

type FilterObj = {
  city: string[];
  country: string[];
  tag: string[];
};

type DateRange = { start: string; end: string };

interface SortState {
  filters: FilterObj;
  daterange: DateRange;
  add: (label: Label, item: string) => void;
  remove: (label: Label, item: string) => void;
  reset: (label: Label) => void;
  setrange: (label: "start" | "end", date: string) => void;
  resetrange: () => void;
}

const useFilterStore = create<SortState>()((set) => ({
  filters: {
    city: [],
    country: [],
    tag: [],
  },
  daterange: { start: "", end: "" },
  add: (label: Label, item: string) => {
    return set((st) => {
      st.filters[label].push(item);
      return { ...st };
    });
  },
  remove: (label: Label, item: string) => {
    return set((st) => {
      st.filters[label] = st.filters[label].filter((it: string) => it !== item);
      return { ...st };
    });
  },
  reset: (label: Label) => {
    return set((st) => {
      st.filters[label] = [];
      return { ...st };
    });
  },
  setrange: (label: "start" | "end", date: string) => {
    return set((st) => {
      st.daterange[label] = date;
      return { ...st };
    });
  },
  resetrange: () => {
    return set((st) => {
      st.daterange["start"] = "";
      st.daterange["end"] = "";
      return { ...st };
    });
  },
}));

const generateFilters = (filKeys: FilterObj, daterange_init: DateRange) => {
  let dateRange = {};
  // end_date: { gte: new Date().toISOString() },

  if (daterange_init.start.length > 0) {
    dateRange = {
      ...dateRange,
      start_date: { gte: new Date(daterange_init.start).toISOString() },
    };
  }
  if (daterange_init.end.length > 0) {
    dateRange = {
      ...dateRange,
      end_date: { lte: new Date(daterange_init.end).toISOString() },
    };
  }

  if (
    filKeys.tag.length == 0 &&
    filKeys.city.length == 0 &&
    filKeys.country.length == 0
  ) {
    return `&filter=${JSON.stringify(dateRange)}`;
  } else {
    let updateObj = {};
    if (filKeys.tag.length != 0) {
      updateObj = { ...updateObj, category: filKeys.tag };
    }
    if (filKeys.city.length != 0) {
      updateObj = { ...updateObj, city: filKeys.city };
    }
    if (filKeys.country.length != 0) {
      updateObj = { ...updateObj, country: filKeys.country };
    }
    updateObj = { ...updateObj, ...dateRange };
    let query = `&filter=${JSON.stringify(updateObj)}`;
    return query;
  }
};

function DiscoverPage() {
  const [filterOpen, setfilterOpen] = useState(true);

  let { filters, add, daterange } = useFilterStore();

  const query = useQuery(["fetch", filters, daterange], async (parms) => {
    let filKeys = parms.queryKey[1] as FilterObj;
    let dateRange = parms.queryKey[2] as DateRange;

    let baseURL = `${
      process.env.API
    }/truts-event?limit=9999&sort={"start_date": 1}${generateFilters(
      filKeys,
      dateRange
    )}`;
    let url = baseURL;
    let res = await axios.get(url);

    return res.data.data.result as EventAll[];
  });

  const matches = useMediaQuery("(max-width: 1150px)");

  useEffect(() => {
    !matches && setfilterOpen(false);
  }, [matches]);

  return (
    <>
      <Head>
        <title>Truts Events</title>
      </Head>
      <div className="flex flex-col w-full h-max">
        <Nav />
        <section className="flex w-full min-h-screen px-[70px] gap-[34px] pt-[85px] h-max pb-28 max-[1150px]:px-4 max-[1150px]:pt-0 relative">
          <SideNav cn={"max-[1150px]:hidden flex"} />
          {filterOpen && (
            <MobileFilter
              close={() => {
                setfilterOpen(!filterOpen);
              }}
            />
          )}
          <div className="flex flex-col w-full mt-[80px]">
            <div className="flex flex-col w-full text-[24px] font-bold">
              <h1 className="max-[1150px]:text-[20px] flex justify-between">
                Showing {query.isSuccess && query.data?.length} results{" "}
                <Filtericon
                  onClick={() => {
                    setfilterOpen(!filterOpen);
                  }}
                  cn="hidden max-[1150px]:flex"
                />
              </h1>
              {/* <Selector
                className="mt-[24px] mb-[40px]"
                list={["All", "Conference", "Meetups"]}
                setter={() => {}}
              /> */}
            </div>
            <div className="flex w-full gap-x-2 gap-y-6 flex-wrap h-min mt-8 max-[425px]:justify-center">
              {query.isSuccess &&
                query.data.map((cd, idx) => {
                  return (
                    <Card6
                      id={cd._id}
                      place={cd.location}
                      time={cd.start_date}
                      title={cd.name}
                      description={cd.description}
                      image={cd.banner.secure_url}
                      date={cd.start_date}
                      key={"c6" + idx}
                      city={cd.city}
                      country={cd.country}
                    />
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

type CityCount = {
  count: number;
  city: string;
};

type CountryCount = {
  count: number;
  country: string;
};

type CategoryCount = {
  count: number;
  tag: string;
};

function SideNav({ cn, onClick }: { cn?: string; onClick?: () => any }) {
  return (
    <nav className={`min-w-[295px]  flex-col gap-[24px]  bg-white  ${cn}`}>
      <h1 className={`${serif.className} text-[42px] max-[1150px]:hidden`}>
        Events
      </h1>
      <span
        className={`hidden max-[1150px]:flex py-4 border-b text-[18px] font-medium justify-center`}
      >
        <svg
          onClick={() => {
            onClick!();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 25 25"
          className="absolute left-[10px] h-4 w-4 top-[20px]"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.344"
            d="M19.531 5.469L5.47 19.53M19.531 19.531L5.47 5.47"
          ></path>
        </svg>
        Filters
      </span>
      {/* <Search /> */}
      <span className="flex w-full justify-between">
        <h1 className="text-[20px] font-medium">Filters</h1>
      </span>
      <FilterSection />
    </nav>
  );
}

const MobileFilter = ({ close }: { close: () => void }) => {
  return (
    <div className="flex fixed w-full h-screen bg-[#0000008a] top-0 left-0">
      <div className="flex flex-col w-full bg-white mt-36 rounded-t-3xl">
        <span className="flex relative items-center h-min w-full border-b pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 25 25"
            className="absolute left-4 top-4 cursor-pointer"
            onClick={() => {
              close();
            }}
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.344"
              d="M19.531 5.469L5.47 19.53M19.531 19.531L5.47 5.47"
            ></path>
          </svg>
          <h1 className="text-[20px] mx-auto mt-3">Filters</h1>
        </span>
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

const FilterSection = () => {
  const city = useQuery("city", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/cities`);
    return res.data.data.result as CityCount[];
  });

  const country = useQuery("country", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/countries`);
    return res.data.data.result as CountryCount[];
  });

  const categories = useQuery("category", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/tags`);
    return res.data.data.result as CategoryCount[];
  });

  return (
    <>
      <DateRange />
      {city.isSuccess && (
        <FilterGroup
          name="city"
          list={city.data.map((ele) => {
            return { tag: ele.city, count: ele.count };
          })}
        />
      )}
      {country.isSuccess && (
        <FilterGroup
          name="country"
          list={country.data.map((ele) => {
            return { tag: ele.country, count: ele.count };
          })}
        />
      )}
      {categories.isSuccess && (
        <FilterGroup
          name="tag"
          list={categories.data.map((ele) => {
            return { tag: ele.tag, count: ele.count };
          })}
        />
      )}
    </>
  );
};

const DateRange = () => {
  let { setrange, resetrange, filters, daterange } = useFilterStore();

  return (
    <div className="flex flex-col w-full border rounded-md">
      <h1 className="p-[18px] bg-[#E0E0E0] flex justify-between w-full h-[57px] text-[16px] capitalize">
        Date Range
        <p
          onClick={() => {
            resetrange();
          }}
          className="text-red-500 cursor-pointer"
        >
          Reset
        </p>
      </h1>
      <div className="flex flex-col px-4">
        <span className="flex justify-between py-4 items-center">
          <h1>Start Date : </h1>
          <input
            value={daterange.start}
            onChange={(e) => {
              setrange("start", e.target.value);
            }}
            className="border-[1px] px-2 text-gray-500"
            type="date"
          />
        </span>
        <span className="flex  justify-between py-4 items-center">
          <h1>End Date : </h1>
          <input
            value={daterange.end}
            onChange={(e) => {
              setrange("end", e.target.value);
            }}
            className="border-[1px] px-2 text-gray-500"
            type="date"
          />
        </span>
      </div>
    </div>
  );
};

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.167 16.333A6.667 6.667 0 109.167 3a6.667 6.667 0 000 13.333zM17.5 18l-3.625-3.625"
      ></path>
    </svg>
  );
}

const FilterGroup = ({
  name,
  list,
}: {
  name: string;
  list: { tag: string; count: number }[];
}) => {
  const genList = () => {
    let obj: { [key: string]: boolean } = {};
    list
      .filter((ele) => {
        return ele.tag;
      })
      .map((ele, idx) => {
        obj[ele.tag] = false;
      });
    return obj;
  };

  let { add, remove, reset } = useFilterStore();
  const [state, setstate] = useState(genList());

  useEffect(() => {
    let params = location.search;
    if (params && name == "city") {
      let city = params.split("=")[1];
      add("city", city);
      setstate((s) => {
        s[city] = true;
        return { ...s };
      });
    }
  }, []);

  return (
    <div className="flex flex-col w-full border rounded-md">
      <h1 className="p-[18px] bg-[#E0E0E0] flex justify-between w-full h-[57px] text-[16px] capitalize">
        {name == "tag" ? "Category" : name}
        <p
          onClick={() => {
            reset(name as Label);
            setstate(genList());
          }}
          className="text-red-500 cursor-pointer"
        >
          Reset
        </p>
      </h1>
      <div className="flex px-[18px] py-[16px] flex-col gap-[14px]">
        {list
          .filter((ele) => {
            return ele.tag;
          })
          .map((ele, idx) => {
            return (
              <span key={idx} className="flex justify-between w-full">
                <p className="text-[14px] flex gap-2 items-center">
                  <input
                    className="w-[20px] h-[20px] rounded-2xl cursor-pointer"
                    type="checkbox"
                    checked={state[ele.tag]}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setstate((s) => {
                          s[ele.tag] = true;
                          return { ...s };
                        });
                        add(name as Label, ele.tag);
                      } else {
                        setstate((s) => {
                          s[ele.tag] = false;
                          return { ...s };
                        });
                        remove(name as Label, ele.tag);
                      }
                    }}
                  />
                  {limitWords(ele.tag, 30)}
                </p>
                <p className="text-[#333]">{ele.count}</p>
              </span>
            );
          })}
      </div>
    </div>
  );
};

function Filtericon({ cn, onClick }: { cn?: string; onClick?: () => any }) {
  return (
    <svg
      onClick={() => {
        onClick!();
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      className={cn}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 16h13.5M4 16h3.5M13.5 16a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM24 7h3.5M4 7h13.5M23.5 7a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM20 25h7.5M4 25h9.5M19.5 25a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
      ></path>
    </svg>
  );
}

export default DiscoverPage;
