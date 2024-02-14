import React from "react";
import MissionCard from "../Mission";
import TrutsCard from "../TrutsCard";
import Teamz from "../Teamz";

function Missions({ missionType }: { missionType: string }) {
  if (missionType == "trutsday") {
    return (
      <div className="flex flex-col w-[1300px]  max-[1150px]:w-[100vw] max-[1150px]:px-2 max-[1150px]:mb-36">
        <span className="flex w-full max-[1150px]:flex-col pt-8 max-[425px]:items-center">
          <TrutsCard key={"idx"} />
        </span>
      </div>
    );
  }
  if (missionType == "teamz") {
    return (
      <div className="flex flex-col w-[1300px]  max-[1150px]:w-[100vw] max-[1150px]:px-2 max-[1150px]:mb-36">
        <span className="flex w-full max-[1150px]:flex-col pt-8 max-[425px]:items-center">
          <Teamz key={"idx"} />
        </span>
      </div>
    );
  }
}

export default Missions;
