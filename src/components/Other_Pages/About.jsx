import React from "react";
import { WhatWeDo } from "../Boundary/HeroSection";
import { Testimonial } from "../Landing/Landing";
import { PiCheckCircleLight } from "react-icons/pi";
const About = () => {
  return (
    <div className="mt-[70px]">
      <div className="text-center bg-[#FBFBFB] py-24 px-5">
        <div className="text-3xl md:text-4xl font-bold text-[#2A2A2A]">
          About Us
        </div>
        <div className="mt-3 mx-auto text-base text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellat tempore animi magnam. Excepturi hic sapiente.
        </div>
      </div>

      <WhatWeDo />

      <div className="border border-solid border-slate-300 flex gap-[3vw] md:gap-0 flex-col md:flex-row items-center rounded-lg py-8 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[45%] px-4 md:px-[1.5vw]">
          <div className="text-xl md:text-2xl font-bold text-center">
            Special features of our website
          </div>
          <div className="text-sm md:text-base mt-2 md:mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem
            unde iure quidem corrupti totam laboriosam dignissimos aut!
            Voluptatum, quae.
          </div>
        </div>
        <div className="md:w-[55%] px-3 md:px-[1.5vw]">
          <div className="">
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">
                  Live mentoring by experts
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex item-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold textlgl">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="md:flex items-center justify-around gap-10 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[40%] text-center md:text-left">
          <div className=" text-2xl font-bold">
            Want to add your testimonial ?
          </div>
          <div className="mt-3 text-sm text-gray-600 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
            pariatur recusandae non nisi ipsam et molestiae, ipsa quas optio a
            quibusdam necessitatibus tenetur!
          </div>
        </div>
        <div className="md:w-[60%] mt-10 md:mt-0">
          <textarea
            name=""
            id=""
            rows="10"
            placeholder="Add your testimonial here"
            className="min-w-full max-w-full border border-solid border-slate-400 text-base rounded-md p-2"
          ></textarea>
          <div className="px-6 py-2 mt-3 text-white bg-[#2A2A2A] rounded-sm w-fit ml-auto cursor-pointer">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
