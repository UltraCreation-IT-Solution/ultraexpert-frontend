import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { landingImgRow1, landingImgRow2 } from "../../constant";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div className="-mt-10 overflow-hidden">
        <h1 className="w-[45vw] text-center text-[6vw] leading-[1.1] overflow-hidden tracking-normal  font-sans font-[900] break-words ml-[50%] translate-x-[-50%]">
          Think creative, Do effective
        </h1>
        <div className="-mt-5">
          <input
            className="w-[32vw] h-[40px] bg-[#ECECEC] rounded-md pl-4 ml-[50%] translate-x-[-50%] text-[16px]"
            type="text"
            placeholder="Search for any services"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute text-black right-[35vw]  mt-[12px] font-thin  text-[20px]" />
        </div>
      </div>
      <div className="w-[100vw] mt-8 h-auto overflow-hidden">
        <Marquee className="my-2" speed={30}>
          {landingImgRow1.map((item, index) => (
            <div
              className={`w-40 h-40 mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
              key={index}
            >
              <img className="w-full h-full object-fill" src={item} />
            </div>
          ))}
        </Marquee>
        <Marquee className="my-4" speed={30} direction="right">
          {landingImgRow2.map((item, index) => (
            <div
              className={`w-40 h-40 mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
              key={index}
            >
              <img className="w-full h-full object-fill" src={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
