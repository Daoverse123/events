/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
const scaleFactor = 0.8;
const gap = 20;
const slides = [1, 2, 3, 4, 5, 6];

function Hero() {
  const [sliderpos, setsliderpos] = useState<number>(2);
  const [slideW, setslideW] = useState<number>(0);

  useEffect(() => {
    setslideW(window.screen.width);
    window.addEventListener(
      "resize",
      function (event) {
        setslideW(window.screen.width);
      },
      true
    );
  }, []);

  return (
    <div className="flex w-full overflow-hidden relative max-h-[540px] ">
      <div
        style={{
          transform: `translateX(-${
            (slideW + gap * 2) * scaleFactor * sliderpos
          }px) scale(${scaleFactor})`,
        }}
        className={`flex w-full transition-transform`}
      >
        {slides.map((ele, id) => {
          return (
            <Slide
              current={sliderpos}
              total={slides.length}
              id={id}
              key={"slide" + id}
            />
          );
        })}
      </div>
      <div className="flex w-full justify-between absolute text-[100px] top-0 bottom-[5%] px-6">
        <button
          onClick={() => {
            if (sliderpos >= 2) {
              setsliderpos((sp) => sp - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="77"
            fill="none"
            viewBox="0 0 77 77"
            className="w-[77px] h-[77px]"
          >
            <path
              stroke="#8C93A3"
              strokeMiterlimit="10"
              strokeWidth="6"
              d="M38.5 67.375c-15.947 0-28.875-12.928-28.875-28.875S22.553 9.625 38.5 9.625 67.375 22.553 67.375 38.5 54.447 67.375 38.5 67.375z"
            ></path>
            <path
              stroke="#8C93A3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
              d="M42.11 27.672L30.077 38.5 42.11 49.328"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => {
            console.log("r", sliderpos, slides.length - 1);
            if (sliderpos < slides.length - 2) {
              setsliderpos((sp) => sp + 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="77"
            fill="none"
            viewBox="0 0 77 77"
            className="w-[77px] h-[77px]"
          >
            <path
              stroke="#8C93A3"
              strokeMiterlimit="10"
              strokeWidth="6"
              d="M38.5 67.375c15.947 0 28.875-12.928 28.875-28.875S54.447 9.625 38.5 9.625 9.625 22.553 9.625 38.5 22.553 67.375 38.5 67.375z"
            ></path>
            <path
              stroke="#8C93A3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
              d="M34.89 27.672L46.923 38.5 34.89 49.328"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

const Slide = ({
  id,
  current,
  total,
}: {
  id: number;
  current: number;
  total: number;
}) => {
  return (
    <img
      alt=""
      src="/placeholder.png"
      style={{ margin: `0 ${gap}px`, scale: `${current == id ? "1" : "0.9"}` }}
      className={`${
        id == 0 || id == total - 1 ? "opacity-0" : ""
      } flex object-cover justify-center items-center text-[100px] min-w-full h-[540px] bg-red-500 rounded-2xl`}
    ></img>
  );
};

export default Hero;
