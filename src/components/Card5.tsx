import React from "react";

function Card5() {
  return (
    <div className="w-[412.5px] relative overflow-hidden h-[266.9px] bg-red-200 rounded-2xl">
      <picture>
        <img src={"https://picsum.photos/412/267"} alt="" />
      </picture>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
        }}
        className="absolute flex flex-col h-full w-full top-0 left-0 text-white justify-center items-center"
      >
        <h1 className="text-[30.3px] font-semibold">ETH India</h1>
        <p className="text-[12.6px] font-semibold">29 Side-events</p>
      </div>
    </div>
  );
}

export default Card5;
