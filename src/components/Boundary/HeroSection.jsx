import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import { landingImgRow1, landingImgRow2 } from "../../constant";

export const WhatWeDo = () => {
  return(
    <div className="relative px-[5vw] md:px-[10vw] pb-[20vw] py-[10vw] lg:py-[6vw] my-20 lg:my-0">
        <div className="bg-[#E9F2FF] h-36 w-36 md:h-44 md:w-44 absolute top-0 lg:top-24 -left-28 sm:-left-20 rounded-full"></div>
        <div className="bg-[#DFC7FF] h-20 w-20 absolute top-6 lg:top-32 -right-14 sm:-right-5 rounded-full"></div>
        <div className="bg-[#FFE1D3] h-32 w-32 md:h-40 md:w-40 absolute bottom-0 -right-24 sm:-right-20 rounded-full"></div>
        <div className="text-[1.8rem] xs:text-4xl md:text-5xl font-bold text-center overflow-hidden">What is it we do?</div>

        <div className="flex flex-wrap gap-[2vw] lg:gap-[1vw] mt-10">
          <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
            <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#B276FF]"></div>
            <div className="text-xl md:text-2xl font-bold shrink-0">Web Design</div>
            <div className="mt-5 line-clamp-5 text-ellipsis text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
            <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#75ACFF]"></div>
            <div className="text-xl md:text-2xl font-bold shrink-0">Web Development</div>
            <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-[2vw] lg:gap-[1vw] my-5">
          <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
            <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFA37B]"></div>
            <div className="text-xl md:text-2xl font-bold shrink-0">Product Design</div>
            <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
            <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFA6A6]"></div>
            <div className="text-xl md:text-2xl font-bold shrink-0">Branding</div>
            <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>
        </div>
        <div className="bg-[#DAE9FF] rounded-3xl pl-5 sm:pl-8 pr-5 py-10 flex gap-2 sm:gap-5 items-center justify-between ">
          <div className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-[#795CFF] rounded-full"></div>
          <div className="text-xl md:text-2xl font-bold">Extended design services</div>
          <div className="ml-auto text-2xl md:text-3xl cursor-pointer shrink-0">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
  )
}

const HeroSection = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative mt-[80px] w-full h-auto overflow-hidden mb-[3vw] py-[1vw] ">
      <div className="md:-mt-10 overflow-hidden flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-[40px] leading-10  xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] overflow-hidden tracking-normal  font-sans font-[900]">
          Think Creative,
          <br /> Do Effective
        </h1>
        <div className="md:-mt-5 flex justify-center items-center">
          <input
            className=" w-[84vw] sm:w-[66vw] md:w-[60vw] bg-[#ECECEC] rounded-md pl-3  sm:pl-6 py-[0.8rem]  xs:text-sm  sm:text-base md:text-lg outline-none focus:border-blue-200 border-solid focus:border-[0.8px]"
            type="text"
            placeholder="Search for any services"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <div className="w-[8vw] bg-[#ECECEC] xs:text-sm  sm:text-base md:text-lg rounded-md flex justify-center items-center py-[0.8rem]">
            <FaSearch />
          </div> */}
        </div>
      </div>
      <div className="w-[100vw] mt-8 md:mt-12 h-auto overflow-hidden">
        <Marquee className="my-2" speed={40}>
          {landingImgRow1.map((item, index) => (
            <div
              className={`w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
              key={index}
            >
              <img className="w-full h-full object-fill" src={item} />
            </div>
          ))}
        </Marquee>
        <Marquee className="my-4" speed={30} direction="right">
          {landingImgRow2.map((item, index) => (
            <div
              className={`w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden`}
              key={index}
            >
              <img className="w-full h-full object-fill" src={item} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="relative px-[5vw] md:px-[11vw] py-[6vw] mt-20 sm:mt-[6vw] xl:mt-0 ">
        <div className="bg-[#E0C8FF] h-12 w-12 sm:h-[7.1rem] sm:w-[7.1rem] lg:h-32 lg:w-32 absolute top-20 md:top-24 left-1 sm:left-5 lg:left-20 rounded-full"></div>
        <div className="bg-[#FC9D9D] h-6 w-6 xs:h-11 xs:w-11 md:h-14 md:w-14 absolute top-32 sm:top-[11rem] md:top-48 left-12  sm:left-28 md:left-32 lg:left-48 rounded-full"></div>
        <div className="bg-[#FFF500] h-10 w-10 sm:h-20 sm:w-20 absolute top-24 sm:top-[8vw] right-1 sm:right-[4vw] lg:right-[9vw] rounded-full"></div>
        <div className="text-2xl xs:text-3xl md:text-5xl font-bold text-center overflow-hidden py-1">
          We are creating a<br />
          Consulting platform
        </div>
        <div className="text-center text-base xs:text-xl md:text-2xl mt-3 md:mt-5">
          Consult & get mentored <br />
          by our experts
        </div>
        <div className="flex items-center justify-center flex-wrap gap-7 my-10">
          <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5 ">
            <div className="text-xl">01</div>
            <div className="my-3 text-2xl font-bold">Lorem</div>
            <div className="line-clamp-5 text-ellipsis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>

          <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5">
            <div className="text-xl">02</div>
            <div className="my-3 text-2xl font-bold">Lorem</div>
            <div className="line-clamp-5 text-ellipsis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>

          <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5">
            <div className="text-xl">03</div>
            <div className="my-3 text-2xl font-bold">Lorem</div>
            <div className="line-clamp-5 text-ellipsis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut ut totam neque repellat accusantium ipsam itaque
              porro. Laboriosam laudantium iure non sapiente quaerat? Reiciendis
              facilis quam saepe consectetur molestias?
            </div>
          </div>
        </div>
        <div className="bg-[#FDE1D8] rounded-2xl p-5 lg:p-10">
          <div className="font-bold text-lg md:text-2xl line-clamp-3 text-ellipsis">
            Ashi Di is a phenomenal creative strategist and designer.... an
            absolute joy to work with - and the results are spectacular. Bhavesh
            Bhanusali President of AIC
          </div>
          <div className="flex items-center gap-5 mt-5">
            <img
              className="h-9 w-9 rounded-full shrink-0 object-cover border-2 border-solid border-white"
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="text-base">Bhavesh Bhanusali President of AIC</div>
          </div>
        </div>
      </div>
      <WhatWeDo/>
      
    </div>
  );
};

export default HeroSection;
