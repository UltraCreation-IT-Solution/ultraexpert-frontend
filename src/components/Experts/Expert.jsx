import React from "react";
import { TopExperts } from "../Landing/Landing";
import { profileObj } from "../../constant";
import Subheader from "../../utilities/Subheader";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchByCategoriesSlider from "../../utilities/SearchByCategoriesSlider";

export const AllExperts = () => {
  return (
    <div className="relative w-full h-auto py-[5vw] sm:py-[3vw] px-[6vw] md:px-[10vw] flex flex-col">
      <div className="flex w-full justify-between">
        <div className="text-[3.8vw] sm:text-[2.8vw] md:text-[2vw] font-bold mb-[1.5vw]">
          Experts
        </div>
        <div className="flex gap-[1.4vw] pr-[1.5vw] sm:pr-[4vw] md:pr-[3.8vw]">
          <div className=" text-[2.4vw] sm:text-[1.4vw] md:text-[1.2vw] justify-center px-[2vw] md:px-[1.5vw] py-[1vw] md:py-[0.8vw] font-bold mb-[1.5vw] text-white rounded-sm sm:rounded-md bg-[#262626]">
            Prew
          </div>
          <div className=" text-[2.4vw] sm:text-[1.4vw] md:text-[1.2vw] justify-center px-[2vw] md:px-[1.5vw] py-[1vw] md:py-[0.8vw] font-bold mb-[1.5vw] text-white rounded-sm sm:rounded-lg bg-[#262626]">
            Next
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-[3vw] sm:gap-[1.4vw] md:gap-[1.1vw] pb-[2vw] justify-centerjada   items-center">
        {profileObj.map((item, index) => {
          return (
            <div
              key={index}
              className="relative  flex flex-col w-[42vw] h-[36vw] sm:w-[20vw] sm:h-[22vw] md:w-[18vw] md:h-[20vw] rounded-md md:rounded-lg justify-center items-center shadow-lg my-[2vw] md:my-[0.65vw]  "
            >
              <div className="absolute top-[0.6vw] right-[0.3vw] z-10 text-white text-[3vw] sm:text-[2.4vw] md:text-[2.2vw] lg:text-[2vw] py-[0.4vw] px-[0.4vw] flex items-center border-solid  ">
                <FaRegHeart />
              </div>
              <img
                className="absolute top-0 w-full h-1/3 object-cover opacity-80"
                src={item.banner}
                alt="banner"
              />
              <img
                className="absolute top-[14%] sm:top-[14%] md:top-[12%] z-10 w-[9.5vw] h-[9.5vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] border-white border-solid border-[0.4vw] rounded-full object-cover"
                src={item.profile}
                alt="profile"
              />
              <div className=" absolute bottom-0 w-full h-2/3 bg-white px-[2.5vw] sm:px-[1.6vw]">
                <div className="mt-[2.4vw] sm:mt-[1.8vw] md:mt-[1vw] text-center flex flex-col gap-[0.6vw] justify-center text-[2.65vw] sm:text-[1.35vw] md:text-[1.2vw]">
                  <h3 className=" shrink-0 h-[2vw] flex items-center justify-center mb-[-0.6vw] text-[2.78vw] sm:text-[1.35vw] md:text-[1.2vw]">
                    {item.name}
                  </h3>
                  <p className="mb-0 mt-[0.5vw]  md:mt-0 font-light text-[2.55vw] sm:text-[1.25vw] md:text-[1.1vw] text-[#383838]">
                    {item.designation}
                  </p>
                  <p className="mb-[0.2vw]  mt-0 font-semibold">60 Meetings</p>
                  <Link
                    to={"expertprofile"}
                    className=" w-full py-[0.8vw] rounded-lg bg-[#262626] text-white mt-0 mb-0 no-underline"
                  >
                    See profile
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Expert = () => {
  return (
    <>
      <div className="mt-[80px] px-[7vw] md:px-[10vw]">
        <Subheader heading={"Experts"} />
      </div>
      <SearchByCategoriesSlider />
      <TopExperts />
      <AllExperts />
    </>
  );
};

export default Expert;
