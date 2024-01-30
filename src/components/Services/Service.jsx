import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Boundary/Navbar";
import Footer from "../Boundary/Footer";
import { searchCategories, serviceObj } from "../../constant";
import { motion } from "framer-motion";
import { GrFormNextLink, GrStar } from "react-icons/gr";
import { ServiceCategory } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";

const Service = () => {
  const [width, setWidth] = useState(0);
  const carosel = useRef();
  useEffect(() => {
    setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] px-[7vw] sm:px-[10vw]">
        <Subheader heading={"Services"} />
      </div>
      <div className="w-full h-auto px-[7vw] md:px-[10vw] mt-[3vw] ">
        <div className=" relative w-full shrink-0 h-auto  text-[#262626] font-bold text-[4.2vw] sm:text-[3.5vw] md:text-[2vw]">
          Most Popular Services...
        </div>
        <motion.div
          ref={carosel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden w-full h-full flex flex-row py-2  md:mt-0 "
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-[1.6vw] overflow-visible "
          >
            {searchCategories.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className=" text-black flex flex-col justify-center border-[#e1e1e1] border border-solid rounded-lg shadow-md font-bold my-[0.6vw] px-[1.2vw] md:px-[0.8vw]"
                >
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-[5.5vw] h-[5.5vw] sm:w-[5vw] sm:h-[5vw] md:w-[4vw] md:h-[4vw] lg:w-[2vw] lg:h-[2vw] object-cover rounded-md mr-[1vw]"
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                      alt=""
                    />
                    <h2 className="text-[2vw] sm:text-[1.85vw] md:text-[1.65vw] lg:text-[1.15vw] font-semibold text-center py-[0.5vw] shrink-0">
                      {item}
                    </h2>
                    <div className="text-[2.4vw] sm:text-[2vw] md:text-[1.6vw] mt-[0.5vw]">
                      <GrFormNextLink />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <ServiceCategory />
      <div className="w-full px-[7vw] md:px-[10vw] mt-[-1vw] ">
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-[4vw] sm:text-[3.2vw] md:text-[1.8vw] mt-[2.4vw]">
          <span>Explore into Video & Editing </span>
        </div>
        <div className=" serviceContainer flex gap-[2.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[38vw] min-h-[32vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[3.6vw] h-[3.6vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.2vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.15vw] sm:text-[1.45vw] md:text-[1.05vw]">
                  <div className="flex items-center">
                    {item.rating} <GrStar />
                  </div>
                  <div className="text-[#262626]">
                    <span className="font-bold">Reviews : </span>
                    {item.reviews}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
