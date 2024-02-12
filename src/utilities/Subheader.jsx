import React from "react";

const Subheader = ({ heading }) => {
  return (
    <div className="relative flex uppercase w-full text-[34px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-[#3f3f3f] text-[#fff] items-center justify-center overflow-hidden font-montserrat tracking-wide shadow-lg">
      <span className=" py-[2.5vw] md:py-[1.5vw]  px-[2vw]">{heading}</span>
    </div>
  );
};

export default Subheader;
