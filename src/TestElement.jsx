import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { motion } from "framer-motion";
const allTestimonials = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl aliquet nunc",
    date: "12 Jan 2024",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl aliquet nunc",
    date: "12 Jan 2024",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl aliquet nunc",
    date: "12 Jan 2024",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl aliquet nunc",
    date: "12 Jan 2024",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nunc, vel aliquet nunc nisl aliquet nunc",
    date: "12 Jan 2024",
  },
];

const TestimonialCard = ({ id, image, name, text, date }) => {
  const val = id % 5;
  return (
    <motion.div className="w-[58vw] h-[55vw] sm:w-[34vw] sm:h-[28vw] md:w-[32vw] md:h-[25vw]  text-white flex flex-col justify-center">
      <div
        className={`relative w-full h-full object-cover ${
          val == 1
            ? "bg-[#EA7794]"
            : val == 2
            ? "bg-[#78A7EE]"
            : val == 3
            ? "bg-[#F66B3A]"
            : val == 4
            ? "bg-[#804EDA]"
            : val == 5
            ? "bg-[#78A7EE]"
            : "bg-[#EA7794]"
        }   rounded-xl pointer-events-none border-white border flex flex-col`}
      >
        <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[1.4vw] sm:gap-[0.8vw] px-[1.15vw]">
          <img
            className="shrink-0 w-[10vw] h-[10vw] xs:w-[9.5vw] xs:h-[9.5vw] sm:h-[4.5vw] sm:w-[4.5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
            src={image}
            alt=""
          />
          <div>
            <h2 className="shrink-0 text-[4vw] sm:text-[2vw] tracking-wide sm:tracking-normal mb-0">
              {name}
            </h2>
            <h4 className="mt-[0.25vw] font-medium text-[2.8vw] xs:text-[2vw] sm:text-[1.15vw]">
              {date}
            </h4>
          </div>
        </div>
        <div className="w-full h-2/3 text-[2.98vw] sm:text-[1.55vw] md:text-[1.45vw] flex items-start justify-start px-[2vw]">
          {text}
        </div>
      </div>
    </motion.div>
  );
};
const FinalElement = () => {
  return (
    <div className="relative w-full h-auto flex flex-col border-y my-[5vw] sm:my-[3vw] border-solid  md:px-[12vw] px-[8vw] items-center pt-[3vw] sm:pt-[2vw] pb-[6vw] sm:pb-[4vw] ">
      <div className="w-full h-full text-start  justify-between  flex flex-row">
        <div className="">
          <h3 className="text-2xl xs:text-4xl md:text-5xl lg:text-6xl font-extralight mb-[-3.6vw]">
            what our user <br /> thinks of
          </h3>
          <h1 className="text-3xl xs:text-5xl  md:text-6xl lg:text-7xl font-sans font-extrabold tracking-wide">
            UltraXperts
          </h1>
        </div>
        <span className="flex items-center justify-center no-underline text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl">
          See More <GrFormNextLink />
        </span>
      </div>
      <motion.div className=" overflow-scroll w-full h-full flex flex-row">
        <motion.div className="flex gap-[4vw] md:gap-[1.4vw] overflow-visible ">
          {allTestimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
const TestElement = () => {
  return (
    <>
      <FinalElement />
    </>
  );
};
export default TestElement;
