import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Boundary/Navbar";
import Footer from "../Boundary/Footer";
import { searchCategories, serviceObj } from "../../constant";
import { motion } from "framer-motion";
import { GrFormNextLink, GrStar } from "react-icons/gr";

const Service = () => {
  const [width, setWidth] = useState(0);
  const carosel = useRef();
  useEffect(() => {
    setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-auto mt-[80px] px-[7vw] md:px-[10vw]">
        <div className=" relative w-full shrink-0 h-auto text-[#262626] font-bold text-[2vw]">
          Most Popular Services...
        </div>
        <motion.div
          ref={carosel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden w-full h-full flex flex-row py-2 mt-[-1vw] md:mt-0 "
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
                  className=" text-black flex flex-col justify-center bg-white rounded-lg shadow-lg drop-shadow-xl my-[1vw] px-[1vw]"
                >
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-[3vw] h-[3vw] object-cover rounded-md mr-[1vw]"
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                      alt=""
                    />
                    <h2 className="text-[1.4vw] font-semibold text-center py-[0.7vw] shrink-0">
                      {item}
                    </h2>
                    <div className="text-[1.6vw] mt-[0.5vw]">
                      <GrFormNextLink />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <div className="font-bold text-[1.6vw] mt-[2vw] flex justify-between">
          <span>Explore into Video & Editing </span>{" "}
          <span className="text-[1.2vw] underline flex items-center">
            See More{" "}
            <span className="text-[1.4vw] mt-[0.6vw]">
              <GrFormNextLink />
            </span>
          </span>
        </div>
        <div className="flex gap-12 flex-wrap py-[2vw]">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[24vw] h-[24vw] rounded-xl shadow-xl drop-shadow-xl"
              >
                <img
                  className="w-full h-1/2 object-fill"
                  src={item.banner}
                  alt=""
                />
                <div className="flex justify-between items-center mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.8vw]">
                    <img
                      src={item.logo}
                      className="w-[3vw] h-[3vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[1.4vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[1.15vw] font-light px-[1vw] shrink-0  mt-[0.8vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1vw] mt-[1vw]">
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
        <div className="font-bold text-[1.6vw] mt-[2vw] flex justify-between">
          <span>Explore into Video & Editing </span>{" "}
          <span className="text-[1.2vw] underline flex items-center">
            See More{" "}
            <span className="text-[1.4vw] mt-[0.6vw]">
              <GrFormNextLink />
            </span>
          </span>
        </div>
        <div className="flex gap-12 flex-wrap py-[2vw]">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[24vw] h-[24vw] rounded-xl shadow-xl drop-shadow-xl"
              >
                <img
                  className="w-full h-1/2 object-fill"
                  src={item.banner}
                  alt=""
                />
                <div className="flex justify-between items-center mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.8vw]">
                    <img
                      src={item.logo}
                      className="w-[3vw] h-[3vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[1.4vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[1.15vw] font-light px-[1vw] shrink-0  mt-[0.8vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1vw] mt-[1vw]">
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
        <div className="font-bold text-[1.6vw] mt-[2vw] flex justify-between">
          <span>Explore into Video & Editing </span>{" "}
          <span className="text-[1.2vw] underline flex items-center">
            See More{" "}
            <span className="text-[1.4vw] mt-[0.6vw]">
              <GrFormNextLink />
            </span>
          </span>
        </div>
        <div className="flex gap-12 flex-wrap py-[2vw]">
          {serviceObj.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[24vw] h-[24vw] rounded-xl shadow-xl drop-shadow-xl"
              >
                <img
                  className="w-full h-1/2 object-fill"
                  src={item.banner}
                  alt=""
                />
                <div className="flex justify-between items-center mt-[0.8vw]">
                  <div className="flex w-full px-[1vw] items-center gap-[0.8vw]">
                    <img
                      src={item.logo}
                      className="w-[3vw] h-[3vw] rounded-full object-cover object-center"
                      alt=""
                    />
                    <div className="font-bold text-[1.2vw]">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-[1.4vw] font-bold px-[1vw]">
                    {item.price}
                  </div>
                </div>
                <div className="text-[1.15vw] font-light px-[1vw] shrink-0  mt-[0.8vw]">
                  {item.title}
                </div>
                <div className="flex justify-between px-[1vw] mt-[1vw]">
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
