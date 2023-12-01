import React, { useState, useEffect } from "react";

const Selector = ({
  list,
  setter,
  className,
}: {
  list: string[];
  setter: (value: any) => any;
  className?: string;
}) => {
  const [current, setCurrent] = useState<string>(list[0]);

  useEffect(() => {
    setter(current);
  }, [current]);

  return (
    <span
      className={`${className} overflow-hidden gap-[1px] flex text-[15px] font-normal rounded-lg border-[1px] bg-[#2F80ED] border-[#2F80ED] h-[40px] min-w-fit max-w-fit `}
    >
      {list.map((ele, idx) => {
        return (
          <span
            key={idx + "ele"}
            style={{
              background: `${ele == current ? "rgb(233, 241, 252)" : "white"}`,
              color: `${ele == current ? "#2F80ED" : "#4F4F4F"}`,
            }}
            className="flex justify-center items-center min-w-fit py-[10px] px-[18px] leading-5 bg-white text-[15px] cursor-pointer"
            onClick={() => {
              setCurrent(ele);
            }}
          >
            {ele}
          </span>
        );
      })}
    </span>
  );
};

export default Selector;
