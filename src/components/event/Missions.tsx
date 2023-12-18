import React from "react";
import MissionCard from "../Mission";

function Missions() {
  return (
    <div className="flex flex-col w-[1300px]  max-[1150px]:w-[100vw] max-[1150px]:px-2 max-[1150px]:mb-36">
      <span className="flex w-full max-[1150px]:flex-col pt-8 max-[425px]:items-center">
        <MissionCard key={"idx"} />
      </span>
    </div>
  );
}

export default Missions;
