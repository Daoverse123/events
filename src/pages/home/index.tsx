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

function HomePage() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <Nav />
      {/* <Hero /> */}
      <picture className="flex w-full my-12 max-[1500px]:my-6  overflow-hidden justify-center">
        <img
          className="flex w-[90%] object-contain rounded-2xl"
          src="/placeholder.png"
          alt=""
        />
      </picture>
      <Sec1 />
      <Sec2 />

      <Sec3 />
      {/* <Sec4 /> */}
      <Sec5 />
      {/* <Sec6 /> */}
      <Faq />
    </section>
  );
}

export default HomePage;
