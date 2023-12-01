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

type LocationCount = {
  count: number;
  location: string;
};

type CategoryCount = {
  count: number;
  category: string;
};

import { create } from "zustand";

interface SortState {
  sort: string[];
  add: (st: string) => void;
  remove: (st: string) => void;
}

const useFilterStore = create<SortState>()((set) => ({
  sort: [],
  add: (st: string) => {
    return set((state) => {
      return { sort: [...state.sort, st] };
    });
  },
  remove: (st: string) => {
    return set((state) => {
      return { sort: state.sort.filter((ele) => ele !== st) };
    });
  },
}));

function DiscoverPage() {
  const [filterOpen, setfilterOpen] = useState(true);

  const query = useQuery("fetch", async () => {
    let res = await axios.get(`${process.env.API}/truts-event?limit=99999`);
    return res.data.data.result as EventAll[];
  });

  let { sort } = useFilterStore();
  console.log(sort);

  return (
    <div className="flex flex-col w-full h-max">
      <Nav />
      <section className="flex w-full min-h-screen px-[70px] gap-[34px] pt-[85px] h-max pb-28 max-[1150px]:px-4 max-[1150px]:pt-0">
        <Filters cn={"max-[1150px]:hidden flex"} />
        {filterOpen && (
          <Mfilters
            onClick={() => {
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
            <Selector
              className="mt-[24px] mb-[40px]"
              list={["All", "Conference", "Meetups"]}
              setter={() => {}}
            />
          </div>
          <div className="flex w-full gap-x-2 gap-y-6 flex-wrap h-min ">
            {query.isSuccess &&
              query.data.map((cd, idx) => {
                if (sort.length >= 1) {
                  if (sort.includes(cd.location)) {
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
                      />
                    );
                  }
                } else {
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
                    />
                  );
                }
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Filters({ cn, onClick }: { cn?: string; onClick?: () => any }) {
  const locals = useQuery("location", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/locations`);
    return res.data.data.result as LocationCount[];
  });

  const categories = useQuery("category", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/category`);
    return res.data.data.result as CategoryCount[];
  });

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
        <p className="text-red-600 cursor-pointer">Reset</p>
      </span>
      {locals.isSuccess && (
        <FilterSection
          name="Category"
          list={locals.data.map((ele) => {
            return { tag: ele.location, count: ele.count };
          })}
        />
      )}
      {categories.isSuccess && (
        <FilterSection
          name="Category"
          list={categories.data.map((ele) => {
            return { tag: ele.category, count: ele.count };
          })}
        />
      )}
    </nav>
  );
}

function Mfilters({ cn, onClick }: { cn?: string; onClick?: () => any }) {
  return (
    <nav
      className={`fixed px-2 min-w-full  min-[1150px]:hidden  flex-col gap-[24px] h-screen top-0 left-0 bg-white w-full  overflow-y-auto ${cn}`}
    >
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
      <Search />
      <span className="flex w-full justify-between">
        <h1 className="text-[20px] font-medium">Filters</h1>
        <p className="text-red-600 cursor-pointer">Reset</p>
      </span>
      {/* <FilterSection name="Category" list={["1", "2", "3"]} />
      <FilterSection name="Place" list={["1", "2", "3"]} /> */}
    </nav>
  );
}

const Search = () => {
  return (
    <div className="rounded-md p-[18px] flex flex-col gap-[14px] w-full bg-[#F2F2F2] h-[119px]">
      <p className="text-[16px]">Search by event name</p>
      <span className="flex gap-[10px] bg-white p-[12px] pr-0 rounded-md border">
        <SearchIcon />
        <input className="flex flex-1" type="text" />
      </span>
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

const FilterSection = ({
  name,
  list,
}: {
  name: string;
  list: { tag: string; count: number }[];
}) => {
  let { add, sort, remove } = useFilterStore();

  return (
    <div className="flex flex-col w-full border rounded-md">
      <h1 className="p-[18px] bg-[#E0E0E0] flex w-full h-[57px] text-[16px]">
        {name}
      </h1>
      <div className="flex px-[18px] py-[16px] flex-col gap-[14px]">
        {list.map((ele, idx) => {
          return (
            <span key={idx} className="flex justify-between w-full">
              <p className="text-[14px] flex gap-2 items-center">
                <input
                  className="w-[20px] h-[20px] rounded-2xl cursor-pointer"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      add(ele.tag);
                    } else {
                      remove(ele.tag);
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
