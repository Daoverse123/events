import React from "react";

let secs = ["Trending", "Popular Events", "Meetups", "Cities"];
let icons = [TrendingIcon, StarIcon, MeetupsIcon, CitiesIcon];

function Anchors() {
  return (
    <div className="hidden  flex-wrap w-full justify-between px-4 py-6 bg-[#FAFAFB] mb-4 gap-4 max-[1150px]:flex">
      {secs.map((sc, idx) => {
        let Icon = icons[idx];
        return (
          <span
            onClick={() => {
              document.getElementById(sc)!.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="flex flex-col items-center cursor-pointer"
            key={"ac" + sc}
          >
            <Icon />
            <p className="text-sm mt-1">{sc}</p>
          </span>
        );
      })}
    </div>
  );
}

function TrendingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="61"
      fill="none"
      viewBox="0 0 62 61"
    >
      <rect
        width="60.014"
        height="60.014"
        x="0.923"
        y="0.303"
        fill="#fff"
        rx="30.007"
      ></rect>
      <rect
        width="60.014"
        height="60.014"
        x="0.923"
        y="0.303"
        stroke="#8C93A3"
        strokeWidth="0.606"
        rx="30.007"
      ></rect>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M42.088 21.906L31.963 32.031l-4.218-4.218-7.594 7.593"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M42.088 28.656v-6.75h-6.75"
      ></path>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      fill="none"
      viewBox="0 0 61 61"
    >
      <rect
        width="60.014"
        height="60.014"
        x="0.303"
        y="0.303"
        fill="#fff"
        rx="30.007"
      ></rect>
      <rect
        width="60.014"
        height="60.014"
        x="0.303"
        y="0.303"
        stroke="#8C93A3"
        strokeWidth="0.606"
        rx="30.007"
      ></rect>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.021"
        d="M30.865 38.228l6.365 4.042c.821.517 1.832-.253 1.592-1.2l-1.844-7.25a1.098 1.098 0 01.366-1.11l5.708-4.762c.745-.619.367-1.869-.606-1.932l-7.451-.48a1.048 1.048 0 01-.922-.682l-2.778-6.996a1.048 1.048 0 00-1.97 0l-2.779 6.996a1.048 1.048 0 01-.922.682l-7.451.48c-.972.063-1.351 1.314-.606 1.932l5.708 4.761a1.099 1.099 0 01.366 1.112l-1.704 6.718c-.291 1.137.921 2.06 1.894 1.44l5.923-3.75a1.036 1.036 0 011.111 0v0z"
      ></path>
    </svg>
  );
}

function MeetupsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="61"
      fill="none"
      viewBox="0 0 62 61"
    >
      <rect
        width="60.014"
        height="60.014"
        x="1.113"
        y="0.303"
        fill="#fff"
        rx="30.007"
      ></rect>
      <rect
        width="60.014"
        height="60.014"
        x="1.113"
        y="0.303"
        stroke="#8C93A3"
        strokeWidth="0.606"
        rx="30.007"
      ></rect>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.02"
        d="M31.12 36.5a5 5 0 100-10 5 5 0 000 10zM23.92 41a8.013 8.013 0 0114.4 0M40.682 28.575A7.512 7.512 0 0145.62 31.5M36.007 22.775a4 4 0 114.613 5.6M21.62 28.375a4 4 0 114.612-5.6M16.62 31.5a7.512 7.512 0 014.937-2.925"
      ></path>
    </svg>
  );
}

function CitiesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      fill="none"
      viewBox="0 0 62 62"
    >
      <rect
        width="60.014"
        height="60.014"
        x="0.923"
        y="0.923"
        fill="#fff"
        rx="30.007"
      ></rect>
      <rect
        width="60.014"
        height="60.014"
        x="0.923"
        y="0.923"
        stroke="#8C93A3"
        strokeWidth="0.606"
        rx="30.007"
      ></rect>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.02"
        d="M17 42h28M33 42V20a1 1 0 00-1-1H20a1 1 0 00-1 1v22M43 42V28a1 1 0 00-1-1h-9M23.5 24H27M25 32h3.5M23.5 37H27M37.5 37h1M37.5 32h1"
      ></path>
    </svg>
  );
}

export default Anchors;
