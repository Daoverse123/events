import React from "react";

function Card3() {
  return (
    <div className="flex border flex-col w-[313px] h-[197px] rounded-xl overflow-hidden max-[1150px]:w-full">
      <picture className="w-full h-[144px] relative">
        <img
          className="w-full h-[144px] object-cover"
          src="https://picsum.photos/412/267"
          alt=""
        />
        <span
          className="flex w-full h-full top-0 left-0 absolute"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
          }}
        >
          <span className="text-white mt-auto ml-3 mb-2">
            <p className="text-[10px]">Offer for</p>
            <h1 className="text-[19.6px]">ETH India</h1>
          </span>
        </span>
      </picture>
      <span className="w-full py-[10px] px-4 flex h-full items-center justify-between">
        <p>20% off on Tickets</p>
        <button className="bg-black h-[32px] rounded-[8px] text-white text-[10px] px-[14px]">
          Get Offer
        </button>
      </span>
    </div>
  );
}

export default Card3;
