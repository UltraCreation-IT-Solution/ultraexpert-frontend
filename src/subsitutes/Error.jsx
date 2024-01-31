import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center font-montserrat  text-[#5a5656]  ">
      <img
        className="w-[25vw]"
        src="https://www.magnacast.com/images/404.gif"
        alt=""
      />
      <div className="text-[3vw] mt-[1.5vw] tracking-wide">Woops!</div>
      <div className="text-[2vw] tracking-wide">
        Something went wrong! :(^◕.◕^)
      </div>
      <Link to="/">
        <button className="px-[2vw] py-[0.5vw] text-white bg-black rounded-md text-[2.5vw] md:text-[1.2vw] font-semibold mt-[1.5vw]">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;
