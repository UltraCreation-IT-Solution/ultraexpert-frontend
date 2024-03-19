import React from "react";
import { serviceObjects } from "../../constant";
import { GrStar } from "react-icons/gr";
import { ServiceCategory } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";
import SearchByCategoriesSlider from "../../utilities/SearchByCategoriesSlider";

const Service = () => {
  return (
    <div>
      <div className="mt-[90px] px-[7vw] md:px-[10vw]">
        <Subheader heading={"Services"} />
      </div>
      <SearchByCategoriesSlider />
      <div className="mb-10 lg:mb-5">
        <ServiceCategory />
      </div>
      <div className="w-full px-[7vw] md:px-[10vw] mt-[-1vw] ">
        {serviceObjects.map((serviceObject, idx) => {
          return (
            <div key={idx} className="mb-4 py-3 xs:py-2 md:py-0">
              <div className="font-bold text-lg xs:text-xl  md:text-2xl lg:text-3xl mb-3 sm:mb-1 ">
                <span>Explore into {serviceObject.category} </span>
              </div>
              <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw] mb-[2vw] overflow-x-scroll">
                {serviceObject.serviceArray.map((item, index) => {
                  return (
                    // <div
                    //   key={index}
                    //   className="min-w-[64vw] min-h-[60vw] xs:min-w-[54vw] xs:min-h-[42vw] sm:min-w-[34vw] sm:min-h-[28vw] md:min-w-[28vw] md:min-h-[22vw] lg:min-w-[24vw] lg:min-h-[19vw]  rounded-xl shadow-lg border border-solid border-[#dfdfdf] pb-[0.4vw] flex flex-col gap-[1vw] xs:gap-[0.6vw] sm:gap-0"
                    // >
                    //   <div className="relative w-full h-[54%]  xs:h-[50%] md:h-[48%] flex items-end justify-center">
                    //     <img
                    //       className="absolute w-full h-full object-center"
                    //       src={item.banner}
                    //       alt=""
                    //     />
                    //     <div className="relative py-[0.8vw] sm:py-[0.2vw] w-full z-10 bg-white/30 text-center text-[#ffffff] font-semibold text-[3.65vw] xs:text-[2.8vw] sm:text-[1.85vw] md:text-[1.55vw] lg:text-[1.3vw]">
                    //       <span className="font-bold">Expert: </span>
                    //       {item.expertName}
                    //     </div>
                    //   </div>
                    //   <div className="flex justify-between px-[1.6vw] sm:px-[1vw] items-center mt-[1.6vw] md:mt-[1.2vw]">
                    //     <div className="flex w-full  items-center">
                    //       <div className="font-bold text-[4vw] xs:text-[3.2vw] sm:text-[2vw] md:text-[1.55vw] lg:text-[1.3vw]">
                    //         {item.category}
                    //       </div>
                    //     </div>
                    //     <div className="text-[4vw] xs:text-[3.2vw]  sm:text-[2vw] md:text-[1.55vw] lg:text-[1.3vw] font-bold shrink-0">
                    //       {item.price}
                    //     </div>
                    //   </div>
                    //   <div className="text-[3.65vw] xs:text-[2.8vw] sm:text-[1.85vw] md:text-[1.45vw] lg:text-[1.2vw] text-justify tracking-tight font-light px-[1.6vw] sm:px-[1vw] shrink-0 mt-[1.25vw] md:mt-[1.1vw]">
                    //     {item.title}
                    //   </div>
                    //   <div className="flex justify-between px-[1.6vw] sm:px-[1vw] mt-[1.05vw] md:mt-[0.6vw] text-[3.85vw] xs:text-[2.8vw] sm:text-[1.85vw] md:text-[1.55vw] lg:text-[1.3vw]">
                    //     <div className="flex items-center">
                    //       {item.rating} <GrStar />
                    //     </div>
                    //     <div className="text-[#262626]">
                    //       <span className="font-bold">Reviews : </span>
                    //       {item.reviews}
                    //     </div>
                    //   </div>
                    // </div>
                    <div
                      key={index}
                      className="shrink-0 w-full xs:w-[300px] md:w-[350px] rounded-xl bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 pb-4"
                    >
                      <img
                        src={item?.banner}
                        className="w-full h-[200px] object-cover  shrink-0 md:mb-[0.7vw]"
                        alt=""
                      />
                      <div className="px-2 md:px-[0.8vw] pt-2 md:pt-0">
                        <div className="flex items-center gap-4 font-semibold text-lg text-[#808080]">
                          <img src={item?.logo} className="h-9 w-9 rounded-full " alt="" />
                          <div>{item?.expertName}</div>
                        </div>
                        <div className="font-bold text-xl line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
                          {item?.category}
                        </div>
                        <div className="text-base md:text-lg my-2">
                          {item?.price}
                        </div>
                        <div className="text-sm line-clamp-3 md:mb-[1vw]">
                          {item?.title}
                        </div>
                        <div className="flex items-center justify-around text-base mt-2">
                          <div className="flex items-center gap-1">
                            <GrStar />
                            {item?.rating}
                          </div>
                          <div>Reviews: {item?.reviews}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
