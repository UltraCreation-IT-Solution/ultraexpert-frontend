import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute top-[5380px] bg-black flex flex-col justify-between w-full h-[520px] items-start pt-12  pl-16">
      <div className="flex flex-row h-16 gap-10 w-1/3 items-start">
        <div className="text-[44px] font-extrabold font-montserrat text-white">
          ultraXpert
        </div>
        <div className="text-white font-normal mt-3">
          think creative,
          <br /> do effective
        </div>
      </div>
      <div className="flex flex-row justify-between text-[18px] w-full items-start pb-14">
        <div className="flex flex-col justify-between w-20 h-48 items-start">
          <div className="text-xl text-white">Home</div>
          <div className="text-xl text-white">Services</div>
          <div className="text-xl text-white">Experts</div>
          <div className="text-xl text-white">Blog</div>
          <div id="About" className="text-xl text-white">
            About
          </div>
        </div>
        <div className="flex flex-col w-3/4 h-full  justify-between">
          <div className="flex justify-center w-full h-full gap-40 pr-32">
            <div className="flex flex-col border-t border-solid border-white w-2/3 h-28 justify-between pt-8">
              <div className="text-[22px] font-semibold text-white">Email</div>
              <div className="text-[18px] font-extralight text-white">
                Bhaveshbhanusalip884@gmail.com
              </div>
            </div>
            <div className="flex flex-col border-t border-solid border-white w-2/3 h-28 justify-between pt-8">
              <div className="text-[22px] font-semibold text-white">
                Contact
              </div>
              <div className="text-[18px] font-extralight text-white">
                1234567890
              </div>
            </div>
          </div>

          <div className="flex flex-col border-t border-solid border-white w-[36%] h-40 justify-between pt-8 ">
            <div className="text-[22px] font-semibold text-white">Follow</div>
            <div className="flex flex-row gap-8 text-white">
              <FaLinkedin className="text-[24px]" />
              <FaFacebook className="text-[24px]" />
              <FaInstagram className="text-[24px]" />
              <FaTwitter className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
