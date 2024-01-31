import React from "react";
import Headbg from "../assets/images/HeadBg.png";

const Subheader = ({ heading }) => {
  return (
    <div className="relative flex uppercase w-full h-[8.5vw] text-[4vw] font-extrabold bg-[#2A2A2A] text-white items-center justify-center overflow-hidden">
      <img
        src={Headbg}
        className="absolute w-full h-full object-cover"
        alt=""
      />
      <span className=" py-[1.5vw]  px-[2vw]">{heading}</span>
    </div>
  );
};

export default Subheader;
