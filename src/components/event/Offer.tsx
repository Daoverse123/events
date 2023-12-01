import React from "react";

import Selector from "../Selector";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

function Offer() {
  const options = ["All", "10% Off", "20% Off", "30% Off", "40% Off"];

  return (
    <div className="flex flex-col w-[1162px] pt-[60px] items-center">
      <Selector list={options} setter={() => {}} />
      <div className="flex flex-col mx-auto mt-[28px] gap-[20px] pb-24">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}

const Ticket = () => {
  return (
    <div className="flex gap-[17px] items-center w-[1162px] border h-[120px] rounded-xl px-[38px] ">
      <picture>
        <img
          src="/eth.png"
          alt=""
          className="w-[68px] h-[68px] rounded-lg object-cover"
        />
      </picture>

      <span className="flex flex-col">
        <h1 className={`${serif.className} text-[37.1px] leading-10`}>
          20% off
        </h1>
        <p className="text-[12px] w-[675px] ">
          Exclusive Offer for ETH India Tickets Featuring free WiFi throughout
          the property, Lakeside Motel Waterfront offers accommodations in Lakes
          Entrance
        </p>
      </span>
      <div
        style={{
          transformOrigin: "center",
          transform: "scaleY(1.03)",
        }}
        className="z-20 h-full flex w-[40px] justify-between bg-white items-center relative overflow-hidden"
      >
        <span className="flex w-[40px] h-[40px] border rounded-full bg-white absolute top-[-20px]"></span>
        <span className="flex h-[45%] mx-auto border-dotted border-r-[2px] border-[#A4A9B6] -[0.1px] "></span>
        <span className="flex w-[40px] h-[40px] border rounded-full bg-white absolute bottom-[-20px]"></span>
      </div>
      <span className="ml-auto">
        <button className="text-white  w-[245px] h-[52px] grid items-center bg-black rounded-[10px]">
          Get Offer
        </button>
      </span>
    </div>
  );
};

export default Offer;
