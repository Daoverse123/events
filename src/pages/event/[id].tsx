import React, { useState } from "react";

//components
import Overview from "@/components/event/Overview";
import SideEvents from "@/components/event/SideEvents";
import Offer from "@/components/event/Offer";

import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Nav from "@/components/Nav";
import { useQuery } from "react-query";
import axios from "axios";

//types
import { Event } from "@/types";

function EventPage() {
  const [selected, setselected] = useState("Overview");

  let eventData = useQuery("event-data", async () => {
    let id =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    let res = await axios.get(`${process.env.API}/truts-event/${id}`);
    return res.data.data.event as Event;
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <Nav />
      <picture className="w-[1300px] mt-[85px]  rounded-xl shadow overflow-hidden max-[1150px]:w-full h-fit  max-[1150px]:mt-0  max-[1150px]:rounded-[0]">
        <img
          src={eventData.data?.banner.secure_url}
          className="w-full h-full object-cover max-h-[650px] "
          alt=""
        />
      </picture>
      <span className="flex w-[1300px] mx-auto gap-[14px] mt-2 border-b max-[1150px]:w-full">
        {["Overview"].map((ele, idx) => {
          return (
            <p
              onClick={() => {
                setselected(ele);
              }}
              style={{
                borderColor: `${ele == selected ? "#2F80ED" : "#ffff"}`,
              }}
              className={`cursor-pointer px-[10px] text-[16px] border-b-[3px]  pb-[10px]`}
              key={idx + ele}
            >
              {ele}
            </p>
          );
        })}
      </span>
      {eventData.isSuccess && (
        <div className="flex min-h-screen">
          {"Overview" == selected && (
            <Overview data={eventData.data as Event} />
          )}
          {/* {"Side Events" == selected && <SideEvents />}
        {"Offers" == selected && <Offer />} */}
        </div>
      )}
    </div>
  );
}

export default EventPage;
