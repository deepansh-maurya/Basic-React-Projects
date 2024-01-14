import React, { useState } from "react";
import { RxDot } from "react-icons/rx";
import { RxDotFilled } from "react-icons/rx";
import "./Slide.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export const Slides = (props) => {
  let slide = props.images;
  let [index, setindex] = useState(0);
  let [balls, setballs] = useState(0);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div>
        <img className="w-[80%]" src={slide[index].image} />
        <div>
          <div
            className=" relative bottom-50 right-8  bottom-44 "
            onClick={() => {
              if (index == 0) {
                setindex(slide.length - 1);
                setballs(slide.length - 1);
              } else {
                setindex(index - 1);
                setballs(index - 1);
              }
            }}
          >
            <FaArrowLeft />
          </div>
          <div
            className="relative leftkar rightkar "
            onClick={() => {
              if (index == slide.length - 1) {
                setindex(0);
                setballs(0);
              } else {
                setindex(index + 1);
                setballs(index + 1);
              }
            }}
          >
            <FaArrowRight />
          </div>
        </div>
        <div>
          {slide.map((ele, ind) => {
            return (
              <div key={ind}>{ind == balls ? <RxDotFilled /> : <RxDot />}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
