import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import Card2 from "../Card2";

import { useQuery } from "react-query";
import axios from "axios";

import { EventAll } from "@/types";

function Sec2({ id }: { id?: string }) {
  const query = useQuery("fetch-popular", async () => {
    let res = await axios.get(
      `${process.env.API}/truts-event?sort={"start_date": -1}`
    );
    return res.data.data.result as EventAll[];
  });

  return (
    <div
      id={id}
      className="flex flex-col w-full pl-16 mt-[80px] max-[1150px]:mt-[64px] Popular Events max-[1150px]:px-3 max-[1150px]:max-w-[425px] max-[1150px]:mx-auto mb-12"
    >
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        Popular Events
      </h1>
      {query.isSuccess && (
        <div className="flex w-full mt-[32px] max-[1150px]:mt-[24px] gap-x-[40px] gap-y-[32px]  pb-4 flex-wrap max-[1150px]:gap-[16px]">
          {query.data
            .map((cd, idx) => {
              return (
                <Card2
                  title={cd.name}
                  logo={cd?.banner?.secure_url}
                  description={cd.description}
                  key={"scd" + idx}
                  startdate={cd.start_date}
                  id={cd._id}
                />
              );
            })
            .reverse()
            .splice(0, 6)}
        </div>
      )}
    </div>
  );
}

export default Sec2;
