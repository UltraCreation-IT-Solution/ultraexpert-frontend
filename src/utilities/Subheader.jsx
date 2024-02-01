import React from "react";

const Subheader = ({ heading }) => {
  return (
    <div className="relative flex uppercase w-full h-[8.5vw] text-[5vw] font-extrabold bg-[#e7e7e7] text-[#C5C3C3] items-center justify-center overflow-hidden font-montserrat tracking-wide shadow-lg">
      <span className=" py-[1.5vw]  px-[2vw]">{heading}</span>
    </div>
  );
};

export default Subheader;
