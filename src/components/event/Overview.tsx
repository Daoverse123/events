import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import { Event } from "@/types";

function Overview({ data }: { data: Event }) {
  let dateobj = new Date(data.start_date).toLocaleDateString().split("/");
  let timeObj = new Date(data.start_date).toLocaleTimeString();
  return (
    <div className="flex flex-col w-[1300px]  max-[1150px]:w-[100vw] max-[1150px]:px-2 max-[1150px]:mb-36">
      <span className="flex w-full max-[1150px]:flex-col">
        <span className="max-[1150px]:px-2">
          <h1
            className={`text-[48px] ${serif.className} mt-6 max-[1150px]:text-[36px]`}
          >
            {data.name}
          </h1>
          <span className="flex items-center text-[18px] gap-2 underline max-[1150px]:text-[14px]">
            <Pin />
            {data.location}
          </span>
        </span>
        {/* <button className="mt-14 ml-auto flex justify-center px-11 h-[42px] items-center gap-2 outline rounded-lg ">
          <Calender />
          <p className="text-black">Add to Calender</p>
        </button> */}
      </span>

      <div className="flex w-[1300px] max-[1150px]:w-full  mt-[67.5px] max-[1150px]:mt-12 gap-[50px]  max-[1150px]:flex-col">
        <span className="border rounded-lg h-fit flex w-[800px] max-[1150px]:w-full flex-col py-[36px] px-[40px] max-[1150px]:px-4">
          <p className="text-[18px] max-[1150px]:text-[16px]">Date & Timings</p>
          {
            <span className="flex gap-[32px] mt-[21px]">
              <span className="flex items-center gap-3">
                <Clock />
                <p className="text-[24px] max-[1150px]:text-[16.6px]">
                  {data.start_date ? timeObj : "N/A"}
                </p>
              </span>

              <span className="flex items-center gap-3">
                <Calender />
                <p className="text-[24px] max-[1150px]:text-[16.6px]">
                  {data.start_date ? data?.start_date?.split("T")[0] : "N/A"}
                </p>
              </span>
            </span>
          }
          <p className="text-[18px] font-medium mt-[40px] max-[1150px]:text-[16px]">
            About Event
          </p>
          <p className="text-[16px] max-[1150px]:text-[14px] font-normal mt-[20px] text-[#4F4F4F]">
            {data.description}
          </p>
        </span>
        {/* <span className="flex flex-col">
          <p className="text-[20px] max-[1150px]:text-[16px] font-medium">
            Truts Exclusive offers
          </p>
          <p className="text-[16px] max-[1150px]:text-[14px] mt-4 text-[#4F4F4F]">
            Complete ETH India Truts Mission to stand a chance to win this offer
          </p>
          <Ticket />
        </span> */}
      </div>
    </div>
  );
}

const Ticket = () => {
  return (
    <div className="flex flex-col border w-[450px]  max-[1150px]:w-full max-[1150px]:mx-auto pt-[37px] pb-[19px] mt-[24px] rounded-[14px]">
      <span className="flex items-center gap-[24px] justify-center border-[#A4A9B6] pb-[8px]">
        <picture>
          <img
            className="w-[90px] h-[90px] object-cover rounded-[24px]"
            src="/eth.png"
            alt=""
          />
        </picture>
        <span>
          <h1
            className={`text-[49.62px] ${serif.className} max-[1150px]:text-[39.4px]`}
          >
            20% off
          </h1>
          <p className="leading-3 mb-4 text-[#4F4F4F] max-[1150px]:text-[11.7px]">
            Exclusive Offer for ETH India Tickets
          </p>
        </span>
      </span>
      <div
        style={{
          transformOrigin: "center",
          transform: "scaleX(1.005)",
        }}
        className="z-20 w-full flex h-[24px] justify-between bg-white items-center relative overflow-hidden"
      >
        <span className="flex w-[24px] h-[24px] border rounded-full bg-white absolute left-[-12px]"></span>
        <span className="flex w-[85%] mx-auto border-dotted border-b-[2px] border-[#A4A9B6] h-[0.1px] "></span>
        <span className="flex w-[24px] h-[24px] border rounded-full bg-white absolute right-[-12px]"></span>
      </div>
      <button className="w-[386px] max-[1150px]:w-[80%]  mt-[8px] text-[16px] py-[10px] bg-black mx-auto rounded-lg text-white">
        Get Offer
      </button>
    </div>
  );
};

function Calender() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
      className="max-[1150px]:w-[19.4px] max-[1150px]:h-[19.4px]"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M23.416 4.864H5.895a.876.876 0 00-.876.876v17.52c0 .484.392.877.876.877h17.52a.876.876 0 00.877-.876V5.74a.876.876 0 00-.876-.876zM19.912 2.673v2.19M9.4 2.673v2.19M5.019 10.12h19.273"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M10.275 14.5h3.066l-1.752 2.19a1.752 1.752 0 11-1.237 2.99M16.846 15.814l1.752-1.314v5.694"
      ></path>
    </svg>
  );
}

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
      className="max-[1150px]:w-[19.4px] max-[1150px]:h-[19.4px]"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M14.017 25.012c5.806 0 10.512-4.706 10.512-10.512S19.823 3.987 14.017 3.987 3.504 8.694 3.504 14.5s4.707 10.512 10.513 10.512z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.628"
        d="M14.017 8.368V14.5h6.132"
      ></path>
    </svg>
  );
}

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M9 9.563a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.688"
        d="M14.626 7.313c0 5.062-5.626 9-5.626 9s-5.625-3.938-5.625-9a5.625 5.625 0 1111.25 0v0z"
      ></path>
    </svg>
  );
}

export default Overview;
