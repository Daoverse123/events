import React from "react";
import Coin from "./Coin";
import Chip from "./Chip";

function MissionCard() {
  return (
    <div
      onClick={() => {
        const newTab = window.open(
          "https://truts.xyz/mission/65cc9260d4d75109886e7069",
          "_blank"
        );
        newTab?.focus(); // Optional: Set focus on the new tab
      }}
      className=" text-white flex flex-col w-[313px] max-[425px]:w-[95%] h-[274px] rounded-2xl border border-[#CACDD5] cursor-pointer"
    >
      <div className="p-4">
        <picture>
          <img
            className="w-[59px] h-[59px] object-cover rounded-full border"
            src={
              "https://truts-listings.s3.ap-south-1.amazonaws.com/truts-logo.webp"
            }
            alt=""
          />
        </picture>
        <span>
          <p className="text-xs m-0 mt-2 text-black">Truts</p>
          <h3 className="text-lg m-0 mt-1 gradText font-semibold text-black">
            TEAMZ Web3 / AI Summit
          </h3>
          <p className="text-sm font-normal m-0 mt-1 mb-2 text-black">
            {limitTextWords(
              "TEAMZ WEB3 / AI SUMMIT 2024 is an upgraded version of TEAMZ WEB3 SUMMIT 2023, one of the largest and most influential events in the Japanese Web3 industry.",
              12
            )}
          </p>
          <span className="mt-top">
            <Chip />
          </span>
        </span>
      </div>
      <span className="p-4 flex items-center w-full border-t border-t-[#EEEFF2] mt-auto">
        <Coin />
        <p className="text-base ml-2 gradText font-semibold text-black">
          {1000} XP
        </p>
      </span>
    </div>
  );
}

function limitTextWords(text: string, limit: number) {
  // Split the text into words using whitespace as a delimiter
  const words = text.split(/\s+/);

  // Check if the number of words is greater than the limit
  if (words.length > limit) {
    // If it is, slice the array to get only the first 'limit' words
    words.length = limit;
    return words.join(" ") + "..."; // Add ellipsis for indication
  }

  // If the number of words is less than or equal to the limit, return the original text
  return text;
}

export default MissionCard;
