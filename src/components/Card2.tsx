import limitWords from "@/utils/limitwords";
import React from "react";

function Card2({
  logo,
  title,
  description,
}: {
  logo: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex border rounded-xl gap-[17px] w-[401px] items-center h-[64px] px-[18px] py-[13px] bg-white">
      <picture className="w-[34px] h-[34px]">
        <img
          className="w-full h-full object-cover rounded-[6px]"
          src={logo}
          alt=""
        />
      </picture>
      <span className="flex h-full flex-col">
        <h1 className="text-[18px] leading-6">{limitWords(title, 40)}</h1>
        <p className="text-[10px]">{limitWords(description, 50)}</p>
      </span>
    </div>
  );
}

export default Card2;
