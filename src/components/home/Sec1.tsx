import React, { useEffect, useState } from "react";
import { DM_Serif_Display } from "next/font/google";
import { useMediaQuery } from "usehooks-ts";

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

function Sec1({
  title,
  endpoint,
  id,
}: {
  title: string;
  endpoint: string;
  id?: string;
}) {
  const query = useQuery("fetch", async () => {
    let res = await axios.get(endpoint);
    return res.data.data.result as EventAll[];
  });

  const [limit, setlimit] = useState<number>(4);
  const matches = useMediaQuery("(max-width: 1150px)");

  return (
    <div
      id={id}
      className="flex flex-col w-full pl-16  max-[1150px]:px-3 max-[1150px]:max-w-[425px] max-[1150px]:mx-auto"
    >
      <h1
        className={`text-[42px] ${serif.className} max-[1150px]:text-[24px] `}
      >
        {title}
      </h1>
      <div className="flex max-[1150px]:justify-center mt-[32px] gap-[40px] max-[1150px]:gap-[20px] overflow-x-auto pb-4 max-[760px]:overflow-visible max-[1150px]:flex-wrap">
        {query.isSuccess &&
          (!matches ? query.data : query.data.slice(0, limit)).map(
            (cd, idx) => {
              return (
                <Card1
                  title={cd.name}
                  description={cd.description}
                  place={cd.location}
                  country={cd.country}
                  city={cd.city}
                  date={cd.start_date}
                  time={"9:30 am IST"}
                  key={"cd" + idx}
                  image={cd?.banner?.secure_url}
                  id={cd._id}
                />
              );
            }
          )}
      </div>
      {query.isSuccess && limit < query.data?.length && (
        <span
          onClick={() => {
            matches && setlimit((l) => l + 5);
          }}
          className="mx-auto text-blue-600 cursor-pointer hover:underline hidden max-[1150px]:block"
        >
          View More
        </span>
      )}
    </div>
  );
}

export default Sec1;
