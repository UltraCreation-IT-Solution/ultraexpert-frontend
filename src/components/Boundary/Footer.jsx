import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

export const Footer = () => {
  return (
    <div className="relative w-full h-auto bg-[#F2F2F2] mt-[3vw] px-[8vw] py-[2vw] ">
      <div className="flex text-[#C5C3C3] text-[8vw] w-full font-bold text-center justify-between  items-center ">
        UltraXpert
        <span className="text-black text-[1.4vw] text-right">
          Think Creative, Do Effective
        </span>
      </div>
      <div className="flex flex-col md:flex-row mt-[1.8vw] md:justify-between">
        <div className="w-11/12 md:w-1/2 mb-[2vw] md:mb-0  md:px-4 font-medium text-[1.8vw] md:text-[1.2vw] text-justify">
          At UltraCreation, our mission is to transcend conventional boundaries
          and empower businesses with cutting-edge technological solutions. We
          are dedicated to being the catalyst for our clients' digital
          transformation, facilitating seamless connectivity, and maximizing
          their potential in the ever-evolving digital landscape.
          <div className="mt-[1.4vw] font-bold text-[2.2vw]">
            Helping Millions, Grow Better
          </div>
        </div>
        <div className=" w-2/3 md:w-1/2 flex justify-between md:justify-normal md:gap-8">
          <div className="w-1/3 list-none flex flex-col gap-4 font-medium text-[1.8vw] md:text-[1.2vw] ml-[-2vw] md:ml-[6vw] overflow-hidden">
            <li className="underline  pl-5 hover:scale-105">Home</li>
            <li className="underline pl-5 hover:scale-105">Experts</li>
            <li className="underline pl-5 hover:scale-105">Blog</li>
            <li className="underline pl-5 hover:scale-105">About</li>
            <li className="underline pl-5 hover:scale-105">Service</li>
          </div>
          <div className="w-2/3 ml-[-6vw] flex flex-col justify-between text-[1.8vw] md:text-[1.2vw]">
            <div className="w-full border-t-2 border-black border-solid pt-2">
              <b>Email:</b> <br /> Bhaveshbhanusali1@gmail.com
            </div>
            <div className="w-full border-t-2 border-black border-solid pt-2">
              <b>Contact:</b> <br /> 1234567890
            </div>
            <div className="w-full border-t-2 border-black border-solid pt-2">
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
