import React from "react";
import "./Load.css";
export const Load = (props) => {
  let photo = props.photo;
  let setphoto = props.setphoto;
  return (
    <div className="forbutton flex justify-center">
      {photo == 210 ? (
        <div className="flex flex-col centerkar ">
          <div className=" mt-9 text flex justify-center text-pretty">
            You have reached the maximum limit
          </div>
          <button className=" borderlaga border-blue-700 w-[200px] mx-auto mt-2 bg-slate-500 ">
            Load More
          </button>
        </div>
      ) : (
        <button className="bg-red-100 w-[200px] mt-6" onClick={props.load}>
          Load More
        </button>
      )}
    </div>
  );
};
