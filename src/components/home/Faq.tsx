import React from "react";
import { DM_Serif_Display } from "next/font/google";

const serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export const Faq = () => {
  return (
    <section className="flex max-w-[1440px] mx-auto max-[1200px]:flex-col-reverse px-[120px] py-[78px] max-[1200px]:py-[49px] max-[1200px]:px-[29px] gap-[120px] max-[1200px]:gap-9">
      <p className="max-[1200px]:flex hidden  items-center text-[#3065F3] gap-2 border-b-2 border-[#3065F3] w-max">
        More FAQ{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6.53216C0 6.28471 0.0982978 6.0474 0.273269 5.87243C0.44824 5.69746 0.685551 5.59916 0.932997 5.59916H11.7427L7.73641 1.59474C7.56122 1.41955 7.4628 1.18193 7.4628 0.934176C7.4628 0.686417 7.56122 0.448806 7.73641 0.273614C7.9116 0.098422 8.14921 0 8.39697 0C8.64473 0 8.88234 0.098422 9.05754 0.273614L14.6555 5.8716C14.7424 5.95826 14.8113 6.06122 14.8584 6.17457C14.9054 6.28792 14.9296 6.40944 14.9296 6.53216C14.9296 6.65488 14.9054 6.77639 14.8584 6.88974C14.8113 7.00309 14.7424 7.10605 14.6555 7.19272L9.05754 12.7907C8.88234 12.9659 8.64473 13.0643 8.39697 13.0643C8.14921 13.0643 7.9116 12.9659 7.73641 12.7907C7.56122 12.6155 7.4628 12.3779 7.4628 12.1301C7.4628 11.8824 7.56122 11.6448 7.73641 11.4696L11.7427 7.46516H0.932997C0.685551 7.46516 0.44824 7.36686 0.273269 7.19189C0.0982978 7.01692 0 6.7796 0 6.53216Z"
            fill="#3065F3"
          />
        </svg>
      </p>
      <div className="flex flex-col  border-t-[1px] border-[rgba(0, 0, 0, 0.20)]">
        {[
          "How do i sign up for the project?",
          "What thing that i should prepare before starting?",
          "Does my company need help for marketing advices?",
        ].map((faq, key) => {
          return (
            <span className="flex flex-col" key={"faq" + key}>
              <span className="flex w-[616px] max-[1200px]:w-full justify-between py-[32px] px-2 border-b-[1px] border-[rgba(0, 0, 0, 0.20)]">
                <h1 className="text-[20px]">{faq}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="min-w-[24px]"
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
          How we can help you?
        </h1>
        <p
          className={
            "mt-[12px] max-w-[558px] text-[20px] text-[#00000099] font-normal leading-[36px]" +
            ``
          }
        >
          Follow our newsletter. We will regulary update our latest project and
          availability.
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
        <p className="max-[1200px]:hidden mt-[42px] flex items-center text-[#3065F3] gap-2 border-b-2 border-[#3065F3] w-max">
          More FAQ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6.53216C0 6.28471 0.0982978 6.0474 0.273269 5.87243C0.44824 5.69746 0.685551 5.59916 0.932997 5.59916H11.7427L7.73641 1.59474C7.56122 1.41955 7.4628 1.18193 7.4628 0.934176C7.4628 0.686417 7.56122 0.448806 7.73641 0.273614C7.9116 0.098422 8.14921 0 8.39697 0C8.64473 0 8.88234 0.098422 9.05754 0.273614L14.6555 5.8716C14.7424 5.95826 14.8113 6.06122 14.8584 6.17457C14.9054 6.28792 14.9296 6.40944 14.9296 6.53216C14.9296 6.65488 14.9054 6.77639 14.8584 6.88974C14.8113 7.00309 14.7424 7.10605 14.6555 7.19272L9.05754 12.7907C8.88234 12.9659 8.64473 13.0643 8.39697 13.0643C8.14921 13.0643 7.9116 12.9659 7.73641 12.7907C7.56122 12.6155 7.4628 12.3779 7.4628 12.1301C7.4628 11.8824 7.56122 11.6448 7.73641 11.4696L11.7427 7.46516H0.932997C0.685551 7.46516 0.44824 7.36686 0.273269 7.19189C0.0982978 7.01692 0 6.7796 0 6.53216Z"
              fill="#3065F3"
            />
          </svg>
        </p>
      </div>
    </section>
  );
};

export default Faq;
