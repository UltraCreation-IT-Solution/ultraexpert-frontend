import React from "react";

const ExpertCardShimmer = () => {
  return (
    <>
      {[...Array(6)].map((item, index) => (
        <div
          key={index}
          className="shimmer relative w-[90vw] h-[81vw] xs:w-[84vw] xs:h-[66vw] sm:w-[42vw] sm:h-[46vw] md:w-[38vw]  lg:w-[25vw] lg:h-[33vw] rounded-md md:rounded-lg shadow-lg my-[2vw] md:my-[0.65vw] border-[0.001vw] border-[#dbdbdb] border-solid overflow-hidden"
        ></div>
      ))}
    </>
  );
};

export default ExpertCardShimmer;
