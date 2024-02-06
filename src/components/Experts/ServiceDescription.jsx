import React from "react";
import { MdStar } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { ProjectsCarousel } from "../../utilities/HelperComponents";
import { serviceImgObject } from "../../constant";
import { serviceSkills } from "../../constant";
import { ExpertRatings,RatingCard } from "./ExpertProfile";
import { Link } from "react-router-dom";

export const ProfileCardSmall = () => {
  return(
    <div
      className={`w-[100%] p-[1.5vw] md:p-[1vw] bg-[#EDEDED] flex justify-between items-center rounded-lg`}
    >
      <div className="flex gap-[3vw] md:gap-[1.3vw] items-center">
        <img
          className="h-20 w-20 rounded-full shrink-0 object-cover"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col gap-[1.8vw] md:gap-[1.1vw]">
          <div className="text-[3.7vw] md:text-[1.8vw] font-semibold">
            Antony Phobes
          </div>
          <div className="text-[2vw]  md:text-[1vw]">UI/UX Designer</div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="px-[2.5vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-[2.5vw] sm:text-[2.2vw] md:text-[1.2vw] font-semibold">
          Follow
        </button>
        <div className="flex gap-[0.3vw] justify-center items-center text-[2vw] md:text-[1vw]">
          <div>
            <MdStar color="#FF5E18" />
          </div>
          <div>4.9/5{" (112)"}</div>
        </div>
      </div>
    </div>
  )
}

const ServiceDescription = () => {
  
  return (
    <div className="flex gap-[3vw] mt-[80px] px-[6vw]">
      <div className="w-[70%] ">
        <ProfileCardSmall />
        <div className="text-3xl gap-4 font-semibold flex items-center mt-[3vw]">
          <RiFlowChart/>
          <div>Converting figma design to HTML, CSS code</div>
          
        </div>
        <div className="flex items-center gap-6 overflow-x-scroll scroll mt-[2vw] ">
          {serviceImgObject.map((temp)=> <img className="h-[20vw] w-[30vw] shrink-0 object-cover" src={temp.image} alt="" /> )}
        </div>
        <div className="mt-[3vw] text-lg text-gray-600">
          <b className="text-black">Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea,
          animi consectetur, dolorum temporibus quibusdam quo voluptas facilis
          debitis nisi autem cumque laudantium omnis dolore. Voluptates minima
          distinctio labore maiores ipsum! Dolores?
        </div>
        <div>
          <div className="text-base md:text-lg lg:text-xl font-semibold mt-[2vw]">Skills</div>
          <div className="flex flex-wrap gap-[1vw] mt-[3vw] md:mt-[0.7vw]">
            {serviceSkills.map((temp, idx) => (
              <div className="px-2 py-1 text-xs md:text-sm border md:border-2 border-solid border-slate-200 font-semibold rounded-sm cursor-pointer">
                {temp}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[2vw]">
          <div className="text-base md:text-2xl font-semibold font-montserrat">
            My projects
          </div>
          <ProjectsCarousel />
        </div>
      <div>
        <ExpertRatings/>
      </div>
      </div>

      
    </div>
  );
};

export default ServiceDescription;
