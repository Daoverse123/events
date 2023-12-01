import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import axios from "axios";

import Card1 from "@/components/Card1";

//types
import { EventAll } from "@/types";

function Sec1() {
  const query = useQuery("fetch", async () => {
    let res = await axios.get(`${process.env.API}/truts-event`);
    return res.data.data.result as EventAll[];
  });

  return (
    <div className="flex flex-col w-full pl-16  max-[1150px]:px-3 max-[1150px]:max-w-[425px] max-[1150px]:mx-auto">
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        New & Trending Events
      </h1>
      <div className="flex max-[1150px]:justify-center mt-[32px] gap-[40px] max-[1150px]:gap-[20px] overflow-x-auto pb-4 max-[760px]:overflow-visible max-[1150px]:flex-wrap">
        {query.isSuccess &&
          query.data.map((cd, idx) => {
            return (
              <Card1
                title={cd.name}
                description={cd.description}
                place={cd.location}
                date={cd.start_date}
                time={"9:30 am IST"}
                key={"cd" + idx}
                image={cd?.banner?.secure_url}
                id={cd._id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Sec1;
