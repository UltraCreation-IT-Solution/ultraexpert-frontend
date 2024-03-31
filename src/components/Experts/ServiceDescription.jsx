import React from "react";
import { MdStar, MdMessage } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { IoChatboxOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FcVideoCall, FcClock } from "react-icons/fc";
import { FaPersonChalkboard } from "react-icons/fa6";
import { ProjectsCarousel, ShowSchedule } from "../../constant";
import { ExpertRatings } from "./ExpertProfile";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ServiceProfileCard = () => {
  return (
    <div
      className={`w-full px-3 py-5 bg-[#EDEDED] flex justify-between items-center shadow-sm drop-shadow-md rounded-md`}
    >
      <div className="flex gap-3 items-center">
        <img
          className="h-10 w-10 rounded-full shrink-0 object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Antony Phobes</div>
          <div className="text-xs text-gray-600">UI/UX Designer</div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="text-base text-gray-600 cursor-pointer shrink-0">Services</div>
        <a href="#projects" className="decoration-transparent">
          <div className="text-base text-gray-600 cursor-pointer shrink-0">Projects</div>
        </a>
        <a href="#ratings" className="decoration-transparent">
          <div className="text-base text-gray-600 cursor-pointer shrink-0">
            {" "}
            Ratings
          </div>
        </a>
        <button className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm text-black font-semibold border rounded-sm sm:rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};

const ServiceDescription = ({ services, skills }) => {
  const [currentDateClick, setCurrentDateClick] = useState("")

  const [showChat, setShowChat] = useState(false);
  const params = useParams();
  const { id } = params;

  return (
    <>
      <div className="lg:flex mt-[100px] ">
        <div className="w-full lg:w-[70%] px-[2.5vw] border-r border-solid border-slate-300">
          <ServiceProfileCard />
          <div className="h-auto mt-5 md:mt-10">
            <div className="text-xl md:text-3xl gap-4 font-semibold flex items-start my-5">
              <RiFlowChart className="mt-1"/>
              <div>{services[params?.id - 1]?.title}</div>
            </div>
            <div className="flex items-center gap-6 overflow-x-scroll mt-[2vw] shadow-sm drop-shadow-md">
              {services[params?.id - 1]?.banners.map((temp, idx) => (
                <img
                  key={idx}
                  className="h-[12rem] w-[17rem] lg:h-[17vw] lg:w-[24vw] shrink-0 object-cover"
                  src={temp}
                  alt=""
                />
              ))}
            </div>
            <div className="mt-[3vw] text-base xl:text-lg text-gray-500">
              <b className="text-black">Description: </b>
              {services[params?.id - 1]?.description}
            </div>
            <div>
              <div className="text-base md:text-lg lg:text-xl font-semibold mt-[2vw]">
                Skills
              </div>
              <div className="flex flex-wrap gap-[1vw] mt-[3vw] md:mt-[0.7vw]">
                {skills.map((temp, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-1 text-xs md:text-sm border md:border-2 border-solid border-slate-200 font-semibold rounded-sm cursor-pointer"
                  >
                    {temp}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[2vw]">
              <div className="text-base md:text-2xl font-semibold font-montserrat">
                My projects
              </div>
              <div id="projects">
                <ProjectsCarousel />
              </div>
            </div>
            <div className="lg:hidden w-full">
              <div className="my-8">
              <ShowSchedule/>
              </div>
               
              <div className="w-full px-2 py-6 border border-solid border-slate-300 rounded-lg">
                <div className="pb-3 font-bold">
                  Book a 1:1 trial with Antony
                </div>
                <div className="my-3 border-b border-solid border-slate-200"></div>
                <div className="mt-3 text-3xl font-semibold ">₹ 12,500</div>
                <div className="mt-6 border-2 border-solid border-black text-lg font-semibold text-center p-3 rounded-lg cursor-pointer">
                  Buy the service
                </div>
                <div className="my-5 text-base text-gray-500">
                  Every month of mentorship includes
                </div>
                <div className="text-sm flex items-center gap-2">
                  <FcVideoCall className="text-xl" /> 1 session / week{" "}
                  <span className="text-xs text-gray-500">(1:1 session)</span>{" "}
                </div>
                <div className="mt-2 text-sm flex items-center gap-2">
                  <MdMessage className="text-xl text-blue-500" />
                  Within 2 hours{" "}
                  <span className="text-xs text-gray-500">
                    (Chat support)
                  </span>{" "}
                </div>
                <div className="mt-2 text-sm flex items-center gap-2">
                  <FcClock className="text-xl" />
                  Every 2 days{" "}
                  <span className="text-xs text-gray-500">
                    (Task & followup)
                  </span>{" "}
                </div>
                <div className="mt-2 text-sm flex items-center gap-2">
                  <FaPersonChalkboard className="text-xl" />
                  Community lead{" "}
                  <span className="text-xs text-gray-500">
                    (Job referral)
                  </span>{" "}
                </div>
              </div>
            </div>
            <div id="ratings" className="mt-10">
              <ExpertRatings />
            </div>
          </div>
        </div>

        <div className="hidden lg:w-[30%] px-[2.5vw] lg:flex flex-col items-center">
          {/* {!showChat && (
            <div className="px-6 py-5 h-fit rounded-2xl border-2 border-solid border-slate-300 sticky top-0">
              <div className="flex items-center gap-5 ">
                <img
                  className="h-16 w-16 rounded-full shrink-0 object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">Antony Phobes</div>
                  <div className="text-green-600 text-base">Online</div>
                </div>
              </div>
              <div onClick={() => setShowChat(true)}>
                <button className="flex gap-3 items-center justify-center w-full mt-8 cursor-pointer bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.5vw] text-base text-white font-semibold border rounded-sm sm:rounded-md">
                  <IoChatboxOutline />
                  Chat with me
                </button>
              </div>
            </div>
          )}  */}

          {/* {showChat && (
            <div className="flex flex-col border border-solid border-slate-300 w-full">
              <div className="flex justify-between items-center border-b border-solid border-slate-300 p-2">
                <div className="flex items-center gap-2">
                  <GoArrowLeft
                    onClick={() => setShowChat(false)}
                    className="text-3xl"
                  />
                  <div className="flex items-center gap-2 ">
                    <img
                      className="h-12 w-12 rounded-full shrink-0 object-cover"
                      src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="text-xl font-semibold">Antony Phobes</div>
                      <div className="text-xs">last seen- 2 min ago</div>
                    </div>
                  </div>
                </div>
                <PiDotsThreeVerticalBold className="text-3xl" />
              </div>
              <div className="h-[20vw] border-b border-solid border-slate-300"></div>
              <div className="flex items-center justify-between p-2">
                <CiSquarePlus className="text-3xl" />
                <input
                  type="text"
                  className="outline-none border border-solid border-slate-500 rounded-lg px-2 py-3"
                />
                <IoMdSend className="text-3xl" />
              </div>
            </div>
          )}  */}
          {/* <div className="mt-[2vw] flex flex-col ">
            <div className="text-3xl font-semibold">
              Service Price: ₹{services[params?.id - 1]?.price}
            </div>
            <button className=" w-full mt-5 cursor-pointer bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.5vw] text-lg text-white font-semibold border rounded-sm sm:rounded-md">
              Book Now
            </button>
          </div> */}
          <div className="mx-[2.5vw] w-full">
            <ShowSchedule/>
          </div>
          

          <div className="mt-5 w-full mx-[2.5vw] px-2 py-6 border border-solid border-slate-300 rounded-lg">
            <div className="pb-3 font-bold">Book a 1:1 trial with Antony</div>
            <div className="my-3 border-b border-solid border-slate-200"></div>
            <div className="mt-3 text-3xl font-semibold ">₹ 12,500</div>
            <div className="mt-6 border-2 border-solid border-black text-lg font-semibold text-center p-3 rounded-lg cursor-pointer">
              Buy the service
            </div>
            <div className="my-5 text-base text-gray-500">
              Every month of mentorship includes
            </div>
            <div className="text-sm flex items-center gap-2">
              <FcVideoCall className="text-xl" /> 1 session / week{" "}
              <span className="text-xs text-gray-500">(1:1 session)</span>{" "}
            </div>
            <div className="mt-2 text-sm flex items-center gap-2">
              <MdMessage className="text-xl text-blue-500" />
              Within 2 hours{" "}
              <span className="text-xs text-gray-500">(Chat support)</span>{" "}
            </div>
            <div className="mt-2 text-sm flex items-center gap-2">
              <FcClock className="text-xl" />
              Every 2 days{" "}
              <span className="text-xs text-gray-500">
                (Task & followup)
              </span>{" "}
            </div>
            <div className="mt-2 text-sm flex items-center gap-2">
              <FaPersonChalkboard className="text-xl" />
              Community lead{" "}
              <span className="text-xs text-gray-500">(Job referral)</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
