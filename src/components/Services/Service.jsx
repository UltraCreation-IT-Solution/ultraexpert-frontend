import React, { useState } from "react";
import { allServiceObject, serviceObjects } from "../../constant";
import { GrStar } from "react-icons/gr";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ServiceCategory } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";
import SearchByCategoriesSlider from "../../utilities/SearchByCategoriesSlider";

export const ServiceCard = ({ item }) => {
  const [FavExpert, setFavExpert] = useState(false);
  return (
    <div className="relative shrink-0 w-[300px] md:w-[350px] rounded-xl bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 pb-4">
      <div className="absolute top-2 right-2 z-10 text-white text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid cursor-pointer">
        {FavExpert ? (
          <FaHeart onClick={() => setFavExpert(false)} />
        ) : (
          <FaRegHeart onClick={() => setFavExpert(true)} />
        )}
      </div>
      <img
        src={item?.banner}
        className="w-full h-[200px] object-cover shrink-0 md:mb-[0.7vw]"
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
        <div className="text-base md:text-lg my-2">{item?.price}</div>
        <div className="text-sm text-gray-500 line-clamp-3 md:mb-[1vw]">{item?.title}</div>
        <div className="flex items-center gap-6 text-sm mt-2">
          <div className="flex items-center gap-1">
            <GrStar />
            {item?.rating}
          </div>
          <div>Reviews: {item?.reviews}</div>
        </div>
      </div>
    </div>
  );
};
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
        {serviceObjects.map((serviceObject, index) => {
          return (
            <div key={index} className="mb-4 py-3 xs:py-2 md:py-0">
              <div className="font-bold text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-1 ">
                <span>Explore into {serviceObject.category} </span>
              </div>
              <div className=" serviceContainer flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw] mb-[2vw] overflow-x-scroll">
                {serviceObject.serviceArray.map((item, index) => {
                  return <ServiceCard key={index} item={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-[7vw] md:px-[10vw] lg:px-0 ">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-10 lg:px-[10vw]">All Services</div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-x-[2.5vw] gap-y-8">
          {allServiceObject.map((item) => (
            <div className="flex flex-col xs:flex-row xs:items-center gap-5 w-full lg:w-[40vw] rounded-xl bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 p-2">
              <img className="w-full h-48 xs:min-h-32 xs:min-w-36 xs:h-[10vw] xs:w-[12vw] object-fill shrink-0 rounded-lg" src={item?.banner} alt="" />
              <div>
                <div className="flex items-center gap-2  font-semibold text-base text-[#808080]">
                  <img
                    src={item?.logo}
                    className="h-7 w-7 rounded-full object-cover shrink-0"
                    alt=""
                  />
                  <div className="line-clamp-1">{item?.expertName}</div>
                </div>
                <div className="font-bold text-lg line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
                  {item?.category}
                </div>
                <div className="text-base my-1">{item?.price}</div>
                <div className="text-xs text-gray-500 line-clamp-2 md:mb-[1vw]">
                  {item?.title}
                </div>
                <div className="flex items-center gap-6 text-sm mt-2">
                  <div className="flex items-center gap-1">
                    <GrStar />
                    {item?.rating}
                  </div>
                  <div>Reviews: {item?.reviews}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
