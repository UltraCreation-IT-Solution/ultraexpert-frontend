import React from "react";

const ExpertProfileShimmer = () => {
  return (
    <div className="md:flex gap-5 md:gap-10 mt-[90px] md:mt-[80px] mx-[2.5vw]">
      <div className="md:w-[70%] h-[88vh]">
        <div className="shimmer w-full h-[30%] rounded-lg"></div>
        <div className="mt-5 md:mt-10 shimmer w-full h-[70%] rounded-lg"></div>
      </div>
      <div className="shimmer hidden md:block w-[30%] rounded-lg"></div>
    </div>
  );
};

export default ExpertProfileShimmer;
