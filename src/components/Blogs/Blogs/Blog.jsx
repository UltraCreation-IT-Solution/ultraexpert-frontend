import React from "react";
import Navbar from "../../Boundary/Navbar";
import { blogObj, searchCategories } from "../../../constant";
import { FaSearch } from "react-icons/fa";
import Footer from "../../Boundary/Footer";
import { CiBookmark } from "react-icons/ci";
import Headbg from "../../../assets/images/HeadBg.png";
import Subheader from "../../../utilities/Subheader";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[90px] mb-[4vw] px-[12vw]">
        <Subheader heading={"Blogs"} />
      </div>
      <div className="flex px-[6vw] border-b border-solid border-[#d4d4d4] pb-[2vw]">
        <div className="flex  gap-[2.5vw] flex-wrap w-[65%]">
          {blogObj.map((item) => {
            return (
              <div className="w-[24vw] h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg">
                <img
                  src={item.image}
                  className="w-full h-1/2 mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw]">
                  <div className="flex mb-[1.5vw] justify-between font-semibold text-[1.15vw] text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-[1.05vw] mb-[0.2vw]">
                    {item.head}
                  </div>
                  <div className="text-[0.9vw] mb-[1vw]">{item.detail}</div>
                  <div className="w-full flex  text-white justify-between items-center">
                    <div className="w-[90%] flex justify-center items-center bg-black text-center py-[0.5vw] font-semibold rounded-sm text-[1.12vw]">
                      Read More
                    </div>
                    <CiBookmark className="w-[3.5vw] h-[3vw] text-black" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex h-fit flex-wrap w-2/5 items-start justify-start ml-[2vw]">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Blogs"
              className="w-[28vw] focus:border-none h-[3vw] bg-[#ECECEC] rounded-md rounded-r-none px-[1.2vw] shadow-md "
            />
            <div className="w-[3vw] h-[3vw] bg-[#ECECEC] rounded-l-none flex items-center justify-center rounded-md">
              <FaSearch className="w-[1.2vw]" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-[2vw]">Categories</h1>
            <div className="flex flex-wrap gap-[1.8vw] ">
              {searchCategories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="px-[1vw] py-[0.6vw] rounded-sm border border-solid border-[#dedede] text-[1.1vw] font-bold shadow-md"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
