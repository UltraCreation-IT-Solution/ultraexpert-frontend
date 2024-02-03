import React from "react";
import { searchCategories, serviceObj } from "../../constant";
import { motion } from "framer-motion";
import { GrStar } from "react-icons/gr";
import { ServiceCategory } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";

const Service = () => {
  return (
    <div>
      <div className="mt-[90px] px-[7vw] sm:px-[10vw]">
        <Subheader heading={"Services"} />
      </div>
      <div className="w-full h-auto px-[7vw] md:px-[10vw] mt-[3vw] ">
        <div className=" relative w-full shrink-0 h-auto  text-[#262626] font-bold text-[4.2vw] sm:text-[3.5vw] md:text-[2vw]">
          Most Popular Services...
        </div>
        <motion.div className="overflow-scroll w-full h-full flex flex-row py-2  md:mt-0 ">
          <motion.div className="flex gap-[1.6vw] overflow-visible ">
            {searchCategories.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className=" text-black flex flex-col justify-center"
                >
                  <h2
                    className={` shrink-0 w-full px-[2vw] md:px-[1.6vw] py-[0.7vw] object-center border-[0.7px] border-solid border-[#e1e1e1] rounded-sm sm:rounded-md md:rounded-lg pointer-events-none  flex items-center justify-center text-[2.4vw] sm:text-[2vw] md:text-[1.4vw] font-bold shadow-md`}
                  >
                    <span className="shrink-0">{item}</span>
                  </h2>
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
        <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw]  mb-[2vw] overflow-x-scroll">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="min-w-[44vw] min-h-[38vw] sm:min-w-[26vw] sm:min-h-[24vw] md:min-w-[20vw] md:min-h-[18vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] "
              >
                <div className="relative w-full h-[50%] md:h-[48%] flex items-end justify-center">
                  <img
                    className="absolute w-full h-full object-center"
                    src={item.banner}
                    alt=""
                  />
                  <div className="relative py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[2.25vw] sm:text-[1.6vw] md:text-[1.12vw]">
                    <span className="font-bold">Expert: </span>
                    {item.expertName}
                  </div>
                </div>
                <div className="flex justify-between px-[0.6vw] items-center mt-[1.6vw] md:mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.3vw]">
                    <img
                      src={item.logo}
                      className="w-[4.2vw] h-[4.2vw] sm:w-[2.4vw] sm:h-[2.4vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[2vw] lg:h-[2vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[2.55vw] sm:text-[1.6vw] md:text-[1.2vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[2.35vw] sm:text-[1.45vw] md:text-[1.05vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[2.45vw] sm:text-[1.45vw] md:text-[1.05vw]">
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
    </div>
  );
};

export default Service;
