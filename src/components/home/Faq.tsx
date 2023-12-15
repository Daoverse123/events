import React, { useState } from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

let faqs = [
  {
    question: "What is Truts Events?",
    answer:
      "Truts Events is a dedicated aggregator platform that curates and lists upcoming events in the web3 scene. Our platform is tailored to provide comprehensive, up-to-date information about conferences, meetups, workshops, and other events related to the web3 ecosystem.",
  },
  {
    question:
      "How does Truts Events differ from other event listing platforms?",
    answer:
      "What sets Truts Events apart is our specialized focus on the web3 scene. Our platform is not just a listing site; it's a curated experience designed to connect enthusiasts, professionals, and newcomers with relevant, high-quality web3 events.",
  },
  {
    question: "Can I list my web3 event on Truts Events?",
    answer:
      "Absolutely! If you're organizing an event related to blockchain, DeFi, NFTs, or any other web3 technology, we encourage you to list it on Truts Events. Please visit our 'Submit Event' page and fill out the necessary details. Our team will review your submission and get in touch if additional information is needed.",
  },
];

type faqstate = {
  [key: string]: boolean;
};

export const Faq = () => {
  const [arr, setarr] = useState<faqstate>({
    faq1: false,
    faq2: false,
    faq3: false,
  });

  console.log(arr);

  return (
    <section className="flex mx-auto max-[1200px]:flex-col-reverse  py-[78px] max-[1200px]:py-[49px] max-[1200px]:px-[29px] gap-[120px] max-[1200px]:gap-9">
      <p className="max-[1200px]:flex hidden  items-center text-[#3065F3] gap-2 border-b-2 border-[#3065F3] w-max">
        More FAQ{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          fill="none"
          viewBox="0 0 15 14"
        >
          <path
            fill="#3065F3"
            fillRule="evenodd"
            d="M0 6.532A.933.933 0 01.933 5.6h10.81L7.736 1.595A.934.934 0 019.058.274l5.598 5.598a.934.934 0 010 1.32l-5.598 5.599a.934.934 0 01-1.322-1.321l4.007-4.005H.933A.933.933 0 010 6.532z"
            clipRule="evenodd"
          ></path>
        </svg>
      </p>
      <div className="flex flex-col  border-t-[1px] border-[rgba(0, 0, 0, 0.20)]">
        {faqs.map((faq, key) => {
          return (
            <span
              className="flex flex-col  border-b-[1px] border-[rgba(0, 0, 0, 0.20)] p-[37px]"
              key={"faq" + key}
              onClick={() => {
                setarr((r) => {
                  let kx = `faq${key}`;
                  r[kx] = !r[kx];
                  return { ...r };
                });
              }}
            >
              <span className="flex w-[616px] max-[1200px]:w-full justify-between  px-2">
                <h1 className="text-[20px]">{faq.question}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="min-w-[24px] cursor-pointer"
                >
                  <path
                    fill="url(#paint0_linear_11445_35319)"
                    d="M12 17a.968.968 0 00.713-.288A.967.967 0 0013 16v-3h3.025a.926.926 0 00.7-.288A.99.99 0 0017 12a.968.968 0 00-.288-.713A.967.967 0 0016 11h-3V7.975a.928.928 0 00-.287-.7A.993.993 0 0012 7a.967.967 0 00-.712.287A.968.968 0 0011 8v3H7.975a.928.928 0 00-.7.287A.993.993 0 007 12c0 .283.096.52.287.712.192.192.43.288.713.288h3v3.025c0 .283.096.517.288.7A.99.99 0 0012 17zm0 5a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_11445_35319"
                      x1="12"
                      x2="12"
                      y1="2"
                      y2="22"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#BCBFFF"></stop>
                      <stop offset="1" stopColor="#D094FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {arr[`faq${key}`] && (
                <span className="w-[92%] mb-4 ml-2 text-gray-500 pt-4">
                  {faq.answer}
                </span>
              )}
            </span>
          );
        })}
      </div>
      <div className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:w-full">
        <h1
          className={
            "text-[40px] max-[1200px]:text-[32px] max-[1200px]:leading-[52px] font-medium leading-[64px] " +
            `${serif.className}`
          }
        >
          Stay Updated
        </h1>
        <p
          className={
            "mt-[12px] max-w-[558px] text-[20px] text-[#00000099] font-normal leading-[36px]" +
            ``
          }
        >
          Follow our newsletter. We will regularly update you with our latest
          developments
        </p>
        <span className="flex gap-2 mt-[32px] max-[425px]:flex-col  max-[425px]:items-center">
          <input
            className="p-0 h-12 px-[18px] m-0 w-[307px]  text-4  bg-[#FAFAFB] text-white rounded-[8px] max-[425px]:w-full"
            type="text"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <button className=" text-[18px] px-[24px] py-[10px] bg-black text-white rounded-[8px] max-[425px]:w-full">
            Connect
          </button>
        </span>
        {/* <p className="max-[1200px]:hidden mt-[42px] flex items-center text-[#3065F3] gap-2 border-b-2 border-[#3065F3] w-max">
          More FAQ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            fill="none"
            viewBox="0 0 15 14"
          >
            <path
              fill="#3065F3"
              fillRule="evenodd"
              d="M0 6.532A.933.933 0 01.933 5.6h10.81L7.736 1.595A.934.934 0 019.058.274l5.598 5.598a.934.934 0 010 1.32l-5.598 5.599a.934.934 0 01-1.322-1.321l4.007-4.005H.933A.933.933 0 010 6.532z"
              clipRule="evenodd"
            ></path>
          </svg>
        </p> */}
      </div>
    </section>
  );
};

export default Faq;
