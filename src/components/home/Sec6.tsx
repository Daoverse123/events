import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Card5 from "../Card5";

function Sec6() {
  return (
    <div className="flex mt-14 flex-col w-full pl-16  max-[1150px]:px-3 max-[1150px]:max-w-[425px] max-[1150px]:mx-auto max-[1150px]:mt-[70px]">
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        New & Trending Events
      </h1>
      <div className="flex flex-wrap mt-[32px] gap-[16px] pb-4">
        <Card5 />
        <Card5 />
        <Card5 />
        <Card5 />
        <Card5 />
      </div>
    </div>
  );
}

export default Sec6;
