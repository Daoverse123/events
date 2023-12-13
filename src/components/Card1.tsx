import React from "react";

import { DM_Sans } from "next/font/google";
import { type } from "os";
import limitWords from "@/utils/limitwords";
import monthMap from "@/utils/monthMap";

const serif = DM_Sans({
  subsets: ["latin"],
});

type Card1 = {
  date: string;
  title: string;
  description: string;
  place: string;
  time: string;
  image: string;
  id: string;
  city: string;
  country: string;
};

function Card1({
  date,
  title,
  description,
  place,
  time,
  image,
  id,
  city,
  country,
}: Card1) {
  let dateobj = new Date(date).toLocaleDateString().split("/");
  let timeObj = new Date(date).toLocaleTimeString();

  // dd/mm/yyyy
  return (
    <div
      onClick={() => {
        window.open(`/event/${id}`, "_blank");
      }}
      className="flex cursor-pointer min-w-[327.5px] flex-col h-[322px] overflow-hidden border-[2px] border-[#EEEFF2] rounded-[18px]"
    >
      <picture className="w-full">
        <img src={image} className="h-[197.11px] w-full object-cover" alt="" />
      </picture>
      <div className="flex w-full py-[12.8px] px-6 gap-[20px]">
        <span className="flex flex-col items-center mt-1">
          <p className="text-[11.3px] font-[700] text-[#3D37F1] uppercase">
            {monthMap(parseInt(dateobj[1]))}
          </p>
          <h1 className="text-[28.4px] font-bold leading-8">{dateobj[0]}</h1>
        </span>
        <span className="flex flex-col">
          <h1
            className={`text-[20px] ${serif.className} font-bold leading-[30px]`}
          >
            {limitWords(title || "", 18)}
          </h1>
          <span className="flex w-full gap-4 mt-[4px]">
            <span className="flex items-center gap-1">
              <Pin />
              <p className="underline text-[12px]">
                {limitWords(city || country || place || "", 15)}
              </p>
            </span>
            {!(timeObj == "00:00:00") && (
              <span className="flex items-center gap-1">
                <Time />
                <p className="text-[12px]">
                  {timeObj == "00:00:00" ? "N/A" : timeObj}
                </p>
              </span>
            )}
          </span>
          <p className="text-[12px] mt-[8px] text-[#6A6A6A]">
            {limitWords(description || "", 65)}
          </p>
        </span>
      </div>
    </div>
  );
}

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      fill="none"
      viewBox="0 0 13 14"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.162"
        d="M6.486 7.387a1.55 1.55 0 100-3.099 1.55 1.55 0 000 3.1z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.162"
        d="M10.36 5.838c0 3.486-3.874 6.198-3.874 6.198S2.612 9.324 2.612 5.838a3.874 3.874 0 017.748 0v0z"
      ></path>
    </svg>
  );
}

function Time() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.162"
        d="M6.815 11.648a4.648 4.648 0 100-9.296 4.648 4.648 0 000 9.296z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.162"
        d="M6.815 4.288V7h2.711"
      ></path>
    </svg>
  );
}

export default Card1;
