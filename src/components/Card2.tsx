import limitWords from "@/utils/limitwords";
import React from "react";

function Card2({
  logo,
  title,
  description,
  startdate,
  id,
}: {
  logo: string;
  title: string;
  description: string;
  startdate: string;
  id: string;
}) {
  let dateobj = new window.Date(startdate).toLocaleDateString();
  let date = null;
  console.log(dateobj);
  if (startdate && dateobj) {
    date = dateobj;
  }

  //debugger;
  return (
    <div
      onClick={() => {
        window.open(`/event/${id}`, "_blank");
      }}
      className="flex border rounded-xl gap-[17px] w-[401px] items-center h-[64px] px-[18px] py-[13px] bg-white cursor-pointer"
    >
      <picture className="w-[34px] h-[34px]">
        <img
          className="w-full h-full object-cover rounded-[6px]"
          src={logo}
          alt=""
        />
      </picture>
      <span className="flex h-full flex-col">
        <h1 className="text-[18px] leading-6">{limitWords(title, 20)}</h1>
        <p className="text-[10px]">{limitWords(description, 30)}</p>
      </span>
      {startdate && (
        <span className="flex items-center gap-1 min-w-max  ml-auto h-full">
          <Date />
          <p className="text-xs">{date}</p>
        </span>
      )}
    </div>
  );
}

function Date() {
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
        d="M10.675 2.739H2.927a.387.387 0 00-.387.387v7.748c0 .214.173.388.387.388h7.748a.387.387 0 00.388-.388V3.126a.387.387 0 00-.388-.387zM9.126 1.77v.969M4.477 1.77v.969M2.54 5.063h8.523"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.162"
        d="M4.864 7H6.22l-.775.969a.775.775 0 11-.547 1.322M7.77 7.582L8.545 7V9.52"
      ></path>
    </svg>
  );
}

export default Card2;
