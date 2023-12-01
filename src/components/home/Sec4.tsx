import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Card3 from "../Card3";

function Sec4() {
  return (
    <div className="flex flex-col w-full pl-16  max-[1150px]:px-3 mt-[60px] max-[1150px]:max-w-[425px] max-[1150px]:mx-auto">
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        Get Offers on Tickets
      </h1>
      <p className="max-[1150px]:text-[12px]">
        Complete Missions and get discounts on these event tickets
      </p>
      <div className="flex w-full mt-[32px] gap-5 pb-4 max-[1150px]:flex-wrap max-[1150px]:justify-center">
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
    </div>
  );
}

export default Sec4;
