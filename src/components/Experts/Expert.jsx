import React, { useState, useEffect, useRef } from "react";
import Footer from "../Boundary/Footer";
import ExpertBody from "./ExpertBody";
import Navbar from "../Boundary/Navbar";
import { motion } from "framer-motion";
import { searchCategories } from "../../constant";
import { TopExperts } from "../Landing/Landing";

export const SearchByCategories = () => {
  const [width, setWidth] = useState(0);
  const carosel = useRef();
  useEffect(() => {
    setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth);
  }, []);
  return (
    <div className="w-full h-auto py-[3vw] ">
      <div className="flex text-[2vw] font-bold w-full h-auto">
        Browse By Categories
      </div>
      <motion.div
        ref={carosel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab overflow-hidden w-full h-full flex flex-row py-2"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 overflow-visible "
        >
          {searchCategories.map((item, index) => {
            return (
              <motion.div className=" text-black flex flex-col justify-center">
                <h2
                  className={` shrink-0 w-full px-4 py-2 object-cover border border-solid border-black rounded-sm pointer-events-none  flex items-center justify-center text-[1.4vw] font-bold`}
                >
                  <span className="shrink-0">{item}</span>
                </h2>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
const Expert = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[80px] px-[8vw] md:px-[12vw]">
        <div className="flex uppercase w-full h-[8.5vw] text-[4.5vw] font-extrabold bg-[#2A2A2A] text-white items-center justify-center">
          Experts
        </div>
        <SearchByCategories />
      </div>
      <TopExperts />
      <ExpertBody />
      <Footer />
    </>
  );
};

export default Expert;
