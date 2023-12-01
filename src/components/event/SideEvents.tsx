import React from "react";

import Selector from "../Selector";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

function SideEvents() {
  const options = ["All", "9 Dec", "10 Dec", "11 Dec", "12 Dec"];

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
    <div className="flex items-center w-[1162px] border h-[120px] rounded-xl px-[32px] py-[16px]">
      <span className="flex flex-col items-center h-full pr-[40px]">
        <p className="text-[20px]">Mon</p>
        <p className="text-[60px] leading-[50px] font-bold">11</p>
      </span>
      <span className="flex h-[85%] my-auto items-center gap-4 pl-[40px] border-l-[1px] border-[#8C93A3]">
        <Clock />
        <span>
          <p className="text-[16px]">9:30 am GMT</p>
          <p className="text-[16px]">9:30 am GMT</p>
        </span>
      </span>
      <span className="flex gap-[18px] pl-[40px]">
        <span className="flex h-[72px] w-[72px] rounded-[19px] bg-[#D9D9D9] "></span>
        <div>
          <h1 className="text-[24px] font-medium">ETH India Events</h1>
          <div className="flex mt-1 gap-2">
            <span className="bg-[#EEEFF2] px-4 py-1 rounded-[32px] text-[#747C90] text-[14px]">
              Hackathon
            </span>
            <span className="bg-[#EEEFF2] px-4 py-1 rounded-[32px] text-[#747C90] text-[14px]">
              Hackathon
            </span>
          </div>
        </div>
      </span>
      <button className="text-[16px] w-[245px] h-[52px] rounded-[10px] ml-auto text-black border-[1px] border-black">
        Visit Event Site
      </button>
    </div>
  );
};

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      fill="none"
      viewBox="0 0 29 30"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M14.017 25.512c5.805 0 10.512-4.706 10.512-10.512S19.822 4.487 14.017 4.487C8.21 4.487 3.504 9.194 3.504 15s4.707 10.512 10.513 10.512z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M14.017 8.868V15h6.132"
      ></path>
    </svg>
  );
}

export default SideEvents;
