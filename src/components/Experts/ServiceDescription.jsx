import React, { useEffect } from "react";
import { RiFlowChart } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { FcVideoCall } from "react-icons/fc";
import { ProjectsCarousel, ShowSchedule } from "../../constant";
import { ExpertRatings } from "./ExpertProfile";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import {RatingCard} from "../Experts/ExpertProfile";

export const ServiceProfileCard = ({ item }) => {
  console.log(item);
  return (
    <div
      className={`w-full px-3 py-5 bg-[#EDEDED] flex justify-between items-center shadow-sm drop-shadow-md rounded-md`}
    >
      <div className="flex gap-3 items-center">
        <img
          className="h-10 w-10 rounded-full shrink-0 object-cover"
          src={item?.expert_data?.profile_img}
          alt=""
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">
            {item?.expert_data?.first_name} {item?.expert_data?.last_name}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="text-base text-gray-600 cursor-pointer shrink-0">
          Services
        </div>
        <a href="#projects" className="decoration-transparent">
          <div className="text-base text-gray-600 cursor-pointer shrink-0">
            Projects
          </div>
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

const ServiceDescription = () => {

  const [showChat, setShowChat] = useState(false);
  const params = useParams();
  const { id } = params;

  const [servDesc, setServDesc] = useState({});

  const getServiceDesc = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=2&service_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      console.log(json);
      setServDesc(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceDesc();
  }, []);

  // const service = services.find(service => service.id === id);

  // if (!service) return null;
  const [comments, setComments] = useState({
    comment: "",
  });
  const postNewComment = async() =>{
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try{
      const res = await axios.post("/customers/connect/",{
        action: 8,
        service_id: id,
        content: comments.comment
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      })
      const json = res.data;
      if(!json){
        console.log("no data");
        return;
      }
      console.log(json);
      getAllServiceComments();
    }catch(error){
      console.log(error);
    }
  }

  const [serviceComments, setServiceComments] = useState([]);

  const getAllServiceComments = async() =>{
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try{
      const res = await axios.get(`/customers/connect/?action=5&service_id=${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      })
      const json = res.data;
      if(!json){
        console.log("no data");
        return;
      }
      console.log(json);
      setServiceComments(json.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getAllServiceComments();
  }, []);


  return (
    <>
      <div className="lg:flex mt-[100px] ">
        <div className="w-full lg:w-[70%] px-[2.5vw] border-r border-solid border-slate-300">
          <ServiceProfileCard item={servDesc} />
          <div className="h-auto mt-5 md:mt-10">
            <div className="text-xl md:text-3xl gap-4 font-semibold flex items-start my-5">
              <RiFlowChart className="mt-1" />
              <div>{servDesc?.service_name}</div>
            </div>
            {/* <div className="flex items-center gap-6 overflow-x-scroll mt-[2vw] shadow-sm drop-shadow-md">
              {servDesc?.banners?.map((temp, idx) => (
                <img
                  key={idx}
                  className="h-[12rem] w-[17rem] lg:h-[17vw] lg:w-[24vw] shrink-0 object-cover"
                  src={temp}
                  alt=""
                />
              ))}
            </div> */}
            <div className="mt-[3vw] text-base xl:text-lg text-gray-500">
              <b className="text-black">Description: </b>
              {servDesc?.description}
            </div>
            <div>
              <div className="text-base md:text-lg lg:text-xl font-semibold mt-[2vw]">
                Skills
              </div>
              <div className="flex flex-wrap gap-[1vw] mt-[3vw] md:mt-[0.7vw]">
                {servDesc?.tags?.map((temp, idx) => (
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
                <ProjectsCarousel projectsArray={servDesc?.expert_projects} />
              </div>
            </div>
            <div className="lg:hidden w-full">
              <div className="my-8">
                <ShowSchedule price={servDesc?.price} id={servDesc?.id} />
              </div>
            </div>
            <div id="ratings" className="mt-10">
            <div className="px-1 xs:px-5 mb-10 lg:mb-0">
            <div className="border-b border-solid border-slate-300 pb-10">
              <div className="text-xl md:text-2xl font-semibold mt-6 md:mt-0">
                50 reviews
              </div>
              <div className=" mt-6">
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  value={comments.comment}
                  onChange={(e) => setComments({ ...comments, comment: e.target.value })}
                  placeholder="Write a comment"
                  className="w-full bg-[#F4F4F4] py-2 px-2 md:py-[0.7vw] rounded-sm text-xs xs:text-sm outline-none"
                />
                <button onClick={postNewComment} className="mt-2 md:mt-4 px-[3vw] py-2 md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer shrink-0">
                  Comment
                </button>
              </div>
            </div>
            <div>
              <div className="mt-8 mb-12 flex items-center justify-between">
                <div className="text-xl md:text-2xl font-semibold ">
                  Top Reviews
                </div>
                <select
                  name="Sort by"
                  id=""
                  className="px-4 py-2 text-sm md:text-lg border border-solid border-slate-300 outline-none"
                >
                  <option
                    value="newest"
                    className="text-xs md:text-sm px-4 py-2"
                  >
                    Newest
                  </option>
                  <option
                    value="oldest"
                    className="text-xs md:text-sm px-4 py-2"
                  >
                    Oldest
                  </option>
                </select>
              </div>
              {serviceComments?.map((temp, idx) => (
                <RatingCard key={idx} temp={temp} />
              ))}
            </div>
            <button className="bg-white px-[1.5vw] py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm sm:rounded-md">
              Show more
            </button>
          </div>
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
            <ShowSchedule price={servDesc?.price} id={servDesc?.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
