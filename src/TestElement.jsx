import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";

const TestElement = () => {
  const location = useLocation().pathname;
  const [activeNo, setActiveNo] = useState(0);
  const topExpertList = [
    {
      name: "Bhavesh Bhanusali",
      image:
        "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
      profession: "Software Developer",
    },
    {
      name: "Naman Paliwal",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
      profession: "Software Developer",
    },
    {
      name: "Naman Paliwal",
      image:
        "https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
      rating: 4.5,
      profession: "Software Developer",
    },
    {
      name: "Naman Paliwal",
      image:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      profession: "Software Developer",
    },
    {
      name: "Naman Paliwal",
      image:
        "https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      rating: 4.5,
      profession: "Software Developer",
    },
  ];
  return (
    <div className="relative w-full h-auto py-[5vw] md:py-[3vw] bg-[#F2F2F2] px-[6vw] md:px-[10vw] overflow-hidden mb-[3vw]">
      <Link
        to={"/experts"}
        className={`${
          location === "/experts" ? "hidden" : "block"
        } text-[#C5C3C3] text-4xl xs:text-5xl md:text-7xl lg:text-[84px]  font-bold flex justify-start md:justify-end decoration-transparent`}
      >
        EXPERTS
      </Link>
      <div className="flex flex-col sm:flex-row mb-[12.5vw] sm:mb-[10vw] md:mb-[5vw] gap-5 md:gap-8 w-full  mt-[3vw] md:mt-[2vw]">
        {topExpertList.map((expert, index) => (
          <div
            key={index}
            onMouseOver={() => setActiveNo(index)}
            onMouseLeave={() => setActiveNo(index)}
            className={`${
              activeNo === index
                ? "activeExpert"
                : "w-full sm:w-1/2 h-[36vh] md:h-[56vh] lg:h-[65vh]"
            } expertDiv relative flex flex-col gap-4  items-start rounded`}
          >
            <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[60%] ">
              <img
                src={expert.image}
                alt="expert profile"
                className={`absolute left-0 right-0 brightness-[60%] w-full h-full shrink-0 ${
                  activeNo === index
                    ? "object-center"
                    : "object-center  object-cover"
                }`}
              />
              <h2>{expert.profession}</h2>
              {activeNo === index ? (
                <div className=" absolute right-4 justify-start  bottom-0">
                  <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                    {expert.name}
                  </h3>
                  <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                    <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                    {expert.rating} /5
                  </h3>
                  <Link
                    to={"experts/expertprofile"}
                    className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3"
                  >
                    <span className="underline  text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                      See More
                    </span>
                    <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.1vw]" />
                  </Link>
                </div>
              ) : (
                <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                  <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                    {expert.name}
                  </h3>
                  <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                    <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                    {expert.rating} /5
                  </h3>
                  <Link
                    to={"experts/expertprofile"}
                    className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3"
                  >
                    <span className="underline text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                      See More
                    </span>{" "}
                    <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link
        to={"/experts"}
        className={`${
          location === "/experts" ? "hidden" : "block"
        } text-[2.4vw] md:text-[1.6vw] text-black flex items-cemter justify-end no-underline mt-[-10vw] sm:mt-[-8vw] md:mt-[-3vw]`}
      >
        See More Experts
        <GrFormNextLink className="mt-[0.5vw] text-[2vw] md:text-[1.4vw]" />
      </Link>
    </div>
  );
};

export default TestElement;
