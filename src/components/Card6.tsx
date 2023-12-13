import limitWords from "@/utils/limitwords";
import React from "react";

type Card6 = {
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

function Card6({
  date,
  title,
  description,
  place,
  time,
  image,
  id,
  city,
  country,
}: Card6) {
  let dateobj = new Date(date).toLocaleDateString();
  let timeObj = new Date(date).toLocaleTimeString();
  return (
    <div
      onClick={() => {
        window.open(`/event/${id}`, "_blank");
      }}
      className="flex cursor-pointer flex-col w-[313px] h-[192px] rounded-xl border-[2px] overflow-hidden"
    >
      <picture className="w-full min-h-[144px]">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </picture>
      <span className="flex w-full h-[313px] py-2 px-3 justify-between">
        <span>
          <p className="text-[8px]">Event Name</p>
          <h1 className="text-[12px]"> {limitWords(title || "", 18)}</h1>
        </span>
        <div className="flex flex-col gap-1">
          <span className="flex gap-2 items-center">
            <p className="flex text-[8px] gap-1">
              <Clock />
              {timeObj == "00:00:00" ? "N/A" : timeObj}
            </p>
            <p className="flex text-[8px] gap-1">
              <Callender />
              {dateobj}
            </p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="flex text-[8px] gap-1">
              <Pin />
              {limitWords(city || country || place || "", 20)}
            </p>
            {/* <p className="flex text-[8px] gap-1">
              <Seats />
              29 Side Events
            </p> */}
          </span>
        </div>
      </span>
    </div>
  );
}

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M4.833 8.708a3.625 3.625 0 100-7.25 3.625 3.625 0 000 7.25z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M4.833 2.969v2.114h2.115"
      ></path>
    </svg>
  );
}

function Callender() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      fill="none"
      viewBox="0 0 11 10"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M8.687 1.76H2.646a.302.302 0 00-.302.302v6.042c0 .167.135.302.302.302h6.041a.302.302 0 00.302-.302V2.062a.302.302 0 00-.302-.302zM7.479 1.005v.755M3.854 1.005v.755M2.344 3.573h6.645"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M4.156 5.083h1.057l-.604.755a.604.604 0 11-.427 1.031M6.422 5.536l.604-.453v1.964"
      ></path>
    </svg>
  );
}

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M4.833 5.218a1.208 1.208 0 100-2.416 1.208 1.208 0 000 2.416z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.906"
        d="M7.854 4.01c0 2.719-3.02 4.833-3.02 4.833S1.812 6.73 1.812 4.01a3.02 3.02 0 016.041 0z"
      ></path>
    </svg>
  );
}

function Seats() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        stroke="url(#paint0_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M2.895 7.448a.984.984 0 100-1.969.984.984 0 000 1.969z"
      ></path>
      <path
        stroke="url(#paint1_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M1.207 8.291a2.11 2.11 0 013.375 0"
      ></path>
      <path
        stroke="url(#paint2_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M2.895 3.65a.984.984 0 100-1.968.984.984 0 000 1.969z"
      ></path>
      <path
        stroke="url(#paint3_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M1.207 4.495a2.11 2.11 0 013.375 0"
      ></path>
      <path
        stroke="url(#paint4_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M6.27 7.448a.984.984 0 100-1.969.984.984 0 000 1.969z"
      ></path>
      <path
        stroke="url(#paint5_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M4.582 8.291a2.11 2.11 0 013.375 0"
      ></path>
      <path
        stroke="url(#paint6_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M6.27 3.65a.984.984 0 100-1.968.984.984 0 000 1.969z"
      ></path>
      <path
        stroke="url(#paint7_linear_12014_35419)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.7"
        d="M4.582 4.495a2.11 2.11 0 013.375 0"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_12014_35419"
          x1="1.91"
          x2="3.879"
          y1="6.463"
          y2="6.463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_12014_35419"
          x1="1.207"
          x2="4.582"
          y1="7.87"
          y2="7.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_12014_35419"
          x1="1.91"
          x2="3.879"
          y1="2.667"
          y2="2.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_12014_35419"
          x1="1.207"
          x2="4.582"
          y1="4.073"
          y2="4.073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_12014_35419"
          x1="5.285"
          x2="7.254"
          y1="6.463"
          y2="6.463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_12014_35419"
          x1="4.582"
          x2="7.957"
          y1="7.87"
          y2="7.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_12014_35419"
          x1="5.285"
          x2="7.254"
          y1="2.667"
          y2="2.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_12014_35419"
          x1="4.582"
          x2="7.957"
          y1="4.073"
          y2="4.073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E1ED1"></stop>
          <stop offset="1" stopColor="#3065F3"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Card6;
