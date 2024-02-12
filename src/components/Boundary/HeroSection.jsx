import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { landingImgRow1, landingImgRow2 } from "../../constant";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative mt-[80px] w-full h-auto overflow-hidden mb-[3vw] py-[1vw] ">
      <div className="md:-mt-10 overflow-hidden flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-[40px] leading-10  xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] overflow-hidden tracking-normal  font-sans font-[900]">
          Think Creative,
          <br /> Do Effective
        </h1>
        <div className="md:-mt-5 flex justify-center items-center">
          <input
            className=" w-[84vw] sm:w-[66vw] md:w-[60vw] bg-[#ECECEC] rounded-md pl-3  sm:pl-6 py-[0.8rem]  xs:text-sm  sm:text-base md:text-lg outline-none focus:border-blue-200 border-solid focus:border-[0.8px]"
            type="text"
            placeholder="Search for any services"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <div className="w-[8vw] bg-[#ECECEC] xs:text-sm  sm:text-base md:text-lg rounded-md flex justify-center items-center py-[0.8rem]">
            <FaSearch />
          </div> */}
        </div>
      </div>
      <div className="w-[100vw] mt-8 md:mt-12 h-auto overflow-hidden">
        <Marquee className="my-2" speed={40}>
          {landingImgRow1.map((item, index) => (
            <div
              className={`w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
              key={index}
            >
              <img className="w-full h-full object-fill" src={item} />
            </div>
          ))}
        </Marquee>
        <Marquee className="my-4" speed={30} direction="right">
          {landingImgRow2.map((item, index) => (
            <div
              className={`w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
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
