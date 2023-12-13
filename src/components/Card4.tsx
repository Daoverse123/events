import limitWords from "@/utils/limitwords";
import React from "react";

function Card4({
  idx,
  place,
  count,
}: {
  idx: number;
  place: string;
  count: any;
}) {
  console.log("c", count);
  return (
    <picture
      onClick={() => {
        window.open(`/discover/?city=${place}`, "_blank");
      }}
      key={idx + "city"}
      className="cursor-pointer flex max-[1150px]:flex-grow overflow-hidden relative w-[315.5px] h-[396px] max-[1150px]:w-[171px] max-[1150px]:h-[194px] bg-red-300 rounded-xl"
    >
      <img
        key={idx + "img"}
        className="w-full h-full brightness-50 object-cover"
        src={`/city/${idx + 1}-min.jpg`}
        alt=""
      />
      <span className="flex flex-col py-[30px] px-[17px]  top-0 left-0 absolute w-full h-full z-10 max-[1150px]:py-1">
        <span className="text-white mb-[16px] items-center mt-auto flex justify-between max-[1150px]:flex-col">
          <p className="text-[24px] max-[1150px]:text-[20px]">
            {limitWords(place, 15)}
          </p>
          <p className="text-[16px] max-[1150px]:text-[12px]">{count} Events</p>
        </span>
        <button className="text-white text-[14px]  w-full h-[48px] rounded-lg bg-black max-[1150px]:hidden">
          View Events
        </button>
      </span>
    </picture>
  );
}

export default Card4;
