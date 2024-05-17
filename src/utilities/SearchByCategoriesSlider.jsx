import React from "react";
import { motion } from "framer-motion";
import { searchCategories } from "../constant";
import axios from "../axios";

const SearchByCategoriesSlider = ({setSearchedServices,setShowSearchedServices}) => {
  const getServices = async (item) => {
    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=3&service_tag=${item}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data= res.data.data
      setSearchedServices(data)
      setShowSearchedServices(true)
    } catch (error) {
      console.log(error);
    }
  }; 
  return (
    <div className="w-full h-auto px-[7vw] md:px-[10vw] mt-[3vw] ">
      <div className=" relative w-full shrink-0 h-auto  text-[#262626] font-bold text-lg xs:text-2xl  md:text-3xl lg:text-4xl mt-[4vw] md:mt-[2vw]">
        Most Popular Services...
      </div>
      <motion.div className="overflow-scroll w-full h-full flex flex-row  ">
        <motion.div className="flex gap-[3.6vw] md:gap-[1.6vw] overflow-visible ">
          {searchCategories.map((item, index) => {
            return (
              <motion.div
                key={index}
                className=" text-black flex flex-col justify-center"
              >
                <h2
                  className={` shrink-0 w-full px-[8vw] xs:px[4vw] md:px-[1.6vw] py-[0.7vw] object-center border-[0.7px] border-solid border-[#e1e1e1] rounded-sm sm:rounded-md md:rounded-lg cursor-pointer  flex items-center justify-center text-base xs:text-base md:text-lg lg:text-xl font-bold shadow-md`}
                  onClick={() => getServices(item)}
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

export default SearchByCategoriesSlider;
