import React from "react";

//sections
import Hero from "@/components/home/Hero";
import Sec1 from "@/components/home/Sec1";
import Sec2 from "@/components/home/Sec2";
import Sec3 from "@/components/home/Sec3";
import Sec4 from "@/components/home/Sec4";
import Sec5 from "@/components/home/Sec5";
import Sec6 from "@/components/home/Sec6";
import Faq from "@/components/home/Faq";
import Anchors from "@/components/home/Anchors";

import Nav from "@/components/Nav";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

//types
import { EventAll } from "@/types";

import axios from "axios";
import mq from "@/utils/mq";
let secs = ["Trending", "Popular Events", "Meetups", "Cities"];

function HomePage() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <Nav />
      {/* <Hero /> */}
      <picture
        className={
          "flex w-full my-12 max-[1500px]:my-6 overflow-hidden justify-center max-[1150px]:my-0"
        }
      >
        <img
          className={
            "flex w-[90%] object-contain rounded-2xl max-[1150px]:w-full max-[1150px]:rounded-none"
          }
          src="/placeholder.png"
          alt=""
        />
      </picture>
      {/* Anchors */}
      <Anchors />
      {/* News and trending */}
      <Sec1
        title={"New and trending"}
        endpoint={`${process.env.API}/truts-event?sort={"start_date": 1}`}
        id={secs[0]}
      />
      {/* Popular Events */}
      <Sec2 id={secs[1]} />
      {/* Meetups */}
      <Sec1
        title={"Meetups"}
        endpoint={`${process.env.API}/truts-event?sort={"start_date": 1}`}
        id={secs[2]}
      />
      {/* <Sec4 /> */}
      {/* City Events */}
      <Sec5 id={secs[3]} />
      {/* <Sec6 /> */}
      <Faq />
    </section>
  );
}

export default HomePage;
