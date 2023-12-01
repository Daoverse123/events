import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Card4 from "../Card4";
import { useQuery } from "react-query";
import axios from "axios";
import { EventAll } from "@/types";

type LocationCount = {
  count: number;
  location: string;
};

function Sec5() {
  const query = useQuery("location", async () => {
    let res = await axios.get(`${process.env.API}/truts-event/locations`);
    return res.data.data.result as LocationCount[];
  });

  return (
    <div className="flex flex-col w-full pl-16  max-[1150px]:px-3 mt-[60px] max-[1150px]:max-w-[425px] max-[1150px]:mx-auto">
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        City Events
      </h1>
      <div className="flex flex-wrap mt-[32px] gap-[16px] pb-4">
        {query.isSuccess &&
          query.data.slice(0, 6).map((cd, idx) => {
            return (
              <Card4
                place={cd.location}
                count={cd.count}
                key={idx + "city"}
                idx={idx}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Sec5;
