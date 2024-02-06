import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

export const Footer = () => {
  return (
    <div className="relative w-full h-auto bg-[#F2F2F2] mt-[3vw] px-[8vw] py-[3vw] sm:py-[2vw] ">
      <div className="flex text-[#C5C3C3] text-[9vw] sm:text-[8vw] w-full font-bold text-center justify-between  items-center ">
        UltraXpert
        <span className="text-black text-xs xs:text-sm sm:text-base md:text-xl mt-[1vw] text-right">
          Think Creative, <br /> Do Effective
        </span>
      </div>
      <div className="flex flex-col  md:flex-row mt-[1.8vw] md:justify-between">
        <div className="w-full md:w-[55%] mb-[2vw] md:mb-0  md:px-4 font-medium text-[11.5px] leading-[1.1rem] md:text-sm lg:text-base xl:leading-6 text-justify">
          At UltraCreation, our mission is to transcend conventional boundaries
          and empower businesses with cutting-edge technological solutions. We
          are dedicated to being the catalyst for our clients' digital
          transformation, facilitating seamless connectivity, and maximizing
          their potential in the ever-evolving digital landscape.
          <div className="mt-[1.8vw] sm:mt-[1.4vw] font-bold text-xs xs:text-base md:text-xl py-[1vw]">
            Helping Millions, Grow Better
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-between md:justify-normal md:gap-8 mt-[1.2vw] sm:mt-[0vw]">
          <div className="w-1/3 list-none flex flex-col gap-[2.4vw] sm:gap-[1.4vw] font-semibold text-xs xs:text-sm md:text-[15px] md:leading-6 lg:text-base ml-[-4vw] xs:ml-[-2.5vw] md:ml-[0.5vw] overflow-hidden">
            <li className="underline underline-offset-[3px]  pl-5 hover:scale-105">
              Home
            </li>
            <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
              Experts
            </li>
            <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
              Blog
            </li>
            <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
              About
            </li>
            <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
              Service
            </li>
          </div>
          <div className="w-3/4 md:w-2/3 ml-[-6vw] gap-[1.85vw] sm:gap-[1.05vw] flex flex-col justify-start text-xs xs:text-sm md:text-sm lg:text-base">
            <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
              <b>Email:</b> <br /> Bhaveshbhanusali1@gmail.com
            </div>
            <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
              <b>Contact:</b> <br /> 1234567890
            </div>
            <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
              <b>Follow:</b> <br /> <FaLinkedin /> <FaFacebook />{" "}
              <FaInstagram /> <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
