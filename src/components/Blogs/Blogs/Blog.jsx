import React from "react";
import { blogObj, recentBlog, searchCategories } from "../../../constant";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import Subheader from "../../../utilities/Subheader";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="mt-[90px] mb-[4vw] px-[8vw] md:px-[10vw]">
        <Subheader heading={"Blogs"} />
      </div>
      <div className="flex flex-col-reverse md:flex-row px-[8vw] md:px-[10vw] border-b border-solid border-[#d4d4d4] pb-[2vw]">
        <div className="flex gap-[2.5vw] flex-wrap w-full md:w-[65%]">
          {blogObj.map((item, index) => {
            return (
              <div
                key={index}
                className=" w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
              >
                <img
                  src={item.image}
                  className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw]">
                  <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
                    {item.head}
                  </div>
                  <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
                    {item.detail}
                  </div>
                  <div className="w-full flex  text-white justify-between items-center">
                    <Link
                      to={"blogdetail"}
                      className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
                    >
                      Read More
                    </Link>
                    <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex h-fit flex-wrap w-full md:w-1/3 items-start justify-start md:ml-[2vw]">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Blogs"
              className=" w-[80vw] sm:w-[48vw] md:w-[28vw] focus:border-none h-[6vw] sm:h-[4.5vw] md:h-[3vw] bg-[#ECECEC] rounded-sm md:rounded-md rounded-r-none px-[1.2vw] shadow-md text-[2.4vw] sm:text-[1.6vw] md:text-[1.2vw]"
            />
            <div className="w-[6vw] md:w-[3vw] h-[6vw] sm:h-[4.5vw] md:h-[3vw] bg-[#ECECEC] rounded-l-none flex items-center justify-center rounded-sm md:rounded-md">
              <FaSearch className="text-[2.4vw] sm:w-[1.6vw] md:w-[1.2vw]" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-[3.2vw] sm:text-[2.5vw] md:text-[2vw]">
              Categories
            </h1>
            <div className="flex flex-nowrap md:flex-wrap gap-[2.4vw] sm:gap-[1.8vw] overflow-scroll pb-[5vw]">
              {searchCategories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" px-[1.4vw] md:px-[1vw] py-[0.8vw] md:py-[0.6vw] rounded-sm border border-solid border-[#dedede] sm:text-[1.4vw] text-[2vw] md:text-[1.1vw] font-bold shadow-md shrink-0"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8vw] md:px-[10vw] py-[3vw]">
        <div className="w-full h-auto flex gap-[1.5vw] overflow-scroll">
          {recentBlog.map((item, index) => {
            return (
              <div
                key={index}
                className=" shrink-0 w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
              >
                <img
                  src={item.image}
                  className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw]">
                  <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
                    {item.head}
                  </div>
                  <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
                    {item.detail}
                  </div>
                  <div className="w-full flex  text-white justify-between items-center">
                    <Link
                      to={"blogdetail"}
                      className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
                    >
                      Read More
                    </Link>
                    <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
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

export default Blogs;
