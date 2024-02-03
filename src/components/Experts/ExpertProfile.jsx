import React from "react";
import { useState } from "react";
import { MdStar } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { RiFlowChart } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProjectsCarousel } from "../../utilities/HelperComponents";
import Navbar from "../Boundary/Navbar";
import Footer from "../Boundary/Footer";

export const ProfileCardHorizontal = ({ width }) => {
  return (
    <div
      className={`w-[${
        width + "%"
      }] p-[1.5vw] md:p-[1vw] bg-[#EDEDED] flex justify-between items-center rounded-lg`}
    >
      <div className="flex gap-[3vw] md:gap-[1.3vw] items-center">
        <img
          className="h-[20vw] w-[20vw] md:h-[10vw] md:w-[10vw] rounded-full shrink-0 object-cover"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col gap-[1.8vw] md:gap-[1.1vw]">
          <div className="text-[3.7vw] md:text-[1.8vw] font-semibold">
            Antony Phobes
          </div>
          <div className="text-[2vw]  md:text-[1vw]">UI/UX Designer</div>
          <div className="flex items-center gap-[0.5vw] text-[2vw]  md:text-[1vw]">
            <IoLocationSharp />
            <div>Maharastra, India</div>
          </div>
          <div className="text-[2vw] md:text-[1.2vw] font-[600]">
            Web Design and Figma Expert
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[3.6vw] md:gap-[4vw]">
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
  );
};

export const ExpertSummary = () => {
  return (
    <div className="">
      <div className="text-[2.8vw] md:text-[1.5vw] font-semibold font-montserrat">
        My projects
      </div>
      <ProjectsCarousel />
    </div>
  );
};

export const ExpertServices = () => {
  // const [Array, setArray] = useState([]);
  // if(Array.length===0){
  //   return <div className="text-[2.2vw] md:text-[1.4vw] font-semibold">No services provided by the expert yet!</div>
  // }
  return (
    <div>
      {[...Array(15)].map((temp) => (
        <div className="flex items-center justify-between py-[1vw] mb-[1.5vw] bg-white border-b border-solid border-slate-400">
          <div className="flex items-center gap-[1vw]">
            <RiFlowChart className="text-[3.7vw] md:text-[2.5vw]" />
            <h1 className="text-[2.7vw] md:text-[1.4vw] font-semibold">
              Web & App development
            </h1>
          </div>
          <div className="flex items-center gap-[2.5vw] md:gap-[1vw]">
            <Link to="service">
              <button className="bg-white px-[1.5vw] py-[0.4vw] text-[2.2vw] md:text-[1.1vw] text-black font-semibold border rounded-sm sm:rounded-md">
                View
              </button>
            </Link>
            <Link to="booking">
              <button className="bg-[#2A2A2A] px-[1.5vw] py-[0.5vw] text-[2.2vw] md:text-[1vw] text-white font-semibold border rounded-sm sm:rounded-md">
                Book
              </button>
            </Link>
            <CiBookmark className="text-[3.7vw] md:text-[2.5vw]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const RatingCard = () => {
  return (
    <div className="my-[3vw] md:my-[2vw] pb-[1vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-[9vw] w-[9vw] sm:h-[8vh] sm:w-[8vw] md:h-[3.5vw] md:w-[3.5vw] shrink-0 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="text-[3.2vw] sm:text-[2.8vw] md:text-[1.5vw] font-semibold">
            Antony Squash
          </div>
          <div className="flex items-center mt-[2vw] md:mt-[0.9vw] gap-[5vw]">
            <div className="flex gap-[0.5vw] items-center text-[2.8vw] sm:text-[2.1vw] md:text-[1.1vw]">
              <div>
                <MdStar color="#FF5E18" />
              </div>
              <div className="text-slate-600">4.9/5</div>
            </div>
            <div className=" text-[2.8vw] sm:text-[2.1vw] md:text-[1.1vw] text-slate-400">
              1 month ago
            </div>
          </div>
          <p className="text-[2.4vw] sm:text-[1.8vw] md:text-[1vw] text-justify font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae omnis, enim nesciunt vel id tempore veritatis ut ad, ipsum
            reprehenderit facilis sapiente ea voluptatibus, inventore eum non
            aspernatur labore quaerat similique assumenda at placeat. At
            voluptas dolorum quibusdam harum!
          </p>
        </div>
      </div>
    </div>
  );
};

export const ExpertRatings = () => {
  return (
    <div className="px-5">
      {[...Array(10)].map((temp, idx) => (
        <RatingCard />
      ))}
      <button className="px-[1.8vw] py-[0.5vw] text-[2.2vw] md:text-[1.4vw] text-black font-semibold border-2 rounded-sm sm:rounded-md mx-1">
        See more
      </button>
    </div>
  );
};

export const AboutExpert = () => {
  const SkillArray = [
    "Web Development",
    "React",
    "Graphic Design",
    "Javascript",
    "Differential",
    "Calculas",
    "Voice Over",
    "HTML",
    "CSS",
    "React Native",
    "Calculas",
    "Voice Over",
    "HTML",
    "CSS",
    "React Native",
  ];

  return (
    <div className="md:flex">
      <div className="md:w-[75%] px-[2.5vw] md:border-r border-solid border-slate-300">
        <ProfileCardHorizontal />
        <div className="mt-[4vw] md:mt-[2vw]">
          <div className="text-[2.4vw] md:text-[1.2vw] font-semibold">
            About me
          </div>
          <div className="text-[2vw] md:text-[1vw] mt-[1.5vw] md:mt-[0.7vw] pb-[2vw] md:border-b border-solid border-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            cum ipsum tenetur facilis, nemo explicabo ea recusandae minus iste
            deleniti ipsam, autem repellendus aliquam, quidem nobis reiciendis
            iure quod hic!
          </div>
        </div>
        <div />
      </div>
      <div className="md:w-[25%] px-[2.5vw]">
        <div className="text-[2.4vw] md:text-[1.2vw] font-semibold">Skills</div>
        <div className="flex flex-wrap gap-[1vw] mt-[1vw]">
          {SkillArray.map((temp, idx) => (
            <div className="px-[0.7vw] py-[0.5vw] text-[1.5vw] md:text-[0.8vw] border md:border-2 border-solid border-slate-200 font-semibold rounded-sm cursor-pointer">
              {temp}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Holder = ({ header, des }) => {
  const [hide, setHide] = useState(true);
  return (
    <div className="my-[2vw] border-b border-solid border-slate-400">
      <div
        className="flex items-center justify-between text-[2.8vw] md:text-[1.3vw] py-[1vw] cursor-pointer font-montserrat font-semibold"
        onClick={() => (hide ? setHide(false) : setHide(true))}
      >
        <div className="">{header}</div>
        <div>{hide ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</div>
      </div>
      {!hide && des === "" && (
        <div className="text-[2.2vw] md:text-[1vw] pb-[1vw] font-montserrat ">
          No information provided by the expert!
        </div>
      )}
      {!hide && des !== "" && (
        <div className="pb-[1vw] font-montserrat text-[2.2vw] md:text-[1vw]"></div>
      )}
    </div>
  );
};

export const EducationCard = () => {
  return (
    <div className="flex gap-[1vw] px-[1.5vw] md:px-0 my-[1.8vw]">
      <div className="text-[2vw]">
        <FaUserGraduate />
      </div>
      <div>
        <div className="text-[1.6vw] md:text-[1.2vw]">
          Lakshmi Narain College of Technology, Bhopal
        </div>
        <div className="text-[1.3vw] md:text-[1vw] my-[0.3vw]">
          Bechelor of Engineering - Information Technology
        </div>
        <div className="text-[1.3vw] md:text-[1vw] text-gray-400 ">
          2021-2025
        </div>
      </div>
    </div>
  );
};

export const WorkExperienceCard = () => {
  return (
    <div className="flex gap-[1vw] px-[1.5vw] md:px-0 my-[1.8vw]">
      <div className="text-[2vw]">
        <HiOfficeBuilding />
      </div>
      <div>
        <div className="text-[1.6vw] md:text-[1.2vw]">
          Ultracreation It Solution
        </div>
        <div className="text-[1.3vw] md:text-[1vw] my-[0.3vw]">
          Software Developer
        </div>
        <div className="text-[1.3vw] md:text-[1vw] text-gray-400 ">
          2023-2024
        </div>
      </div>
    </div>
  );
};

export const AchievementCard = () => {
  return (
    <div className="flex gap-[1vw] px-[1.5vw] md:px-0 my-[1.8vw]">
      <div className="text-[2vw]">
        <GiAchievement />
      </div>
      <div>
        <div className="text-[1.6vw] md:text-[1.2vw]">
          Winner of Smart India Hackethon
        </div>
        <div className="text-[1.3vw] md:text-[1vw] text-gray-400 my-[0.3vw]">
          2024
        </div>
      </div>
    </div>
  );
};

export const ExpertInfo = () => {
  const [summary, setSummary] = useState(true);
  const [services, setServices] = useState(false);
  const [ratings, setRatings] = useState(false);
  const [education, setEducation] = useState(false);
  const [achievements, setAchievements] = useState(false);
  const [workExperience, setWorkExperience] = useState(false);
  const [temp, setTemp] = useState(0);

  const MakeSummaryTrue = () => {
    setSummary(true);
    setServices(false);
    setRatings(false);
  };
  const MakeServicesTrue = () => {
    setSummary(false);
    setServices(true);
    setRatings(false);
  };
  const MakeRatingsTrue = () => {
    setSummary(false);
    setServices(false);
    setRatings(true);
  };

  return (
    <div className="md:flex">
      <div className="md:w-[75%] px-[2.5vw] md:border-r border-solid border-slate-300">
        {/* Three buttons are present here */}
        <div className="flex items-center justify-around mt-[6vw] md:mt-[1.5vw] ">
          <div
            className={`cursor-pointer text-[3vw] md:text-[1.6vw] underline ${
              summary ? "font-bold" : null
            }`}
            onClick={() => MakeSummaryTrue()}
          >
            Summary
          </div>
          <div
            className={`cursor-pointer text-[3vw] md:text-[1.6vw] underline ${
              services ? "font-bold" : null
            }`}
            onClick={() => MakeServicesTrue()}
          >
            Services
          </div>
          <div
            className={`cursor-pointer text-[3vw] md:text-[1.6vw] underline ${
              ratings ? "font-bold" : null
            }`}
            onClick={() => MakeRatingsTrue()}
          >
            Ratings
          </div>
        </div>
        <div className="mt-[3vw] ">
          {summary && <ExpertSummary />}
          {services && <ExpertServices />}
          {ratings && <ExpertRatings />}
        </div>
      </div>

      {/* ***Accordian starts from here*** */}
      <div className="md:w-[25%] px-[2.5vw] sticky top-[150px]">
        <div className="my-[2vw]">
          {/* This is Education accordian */}
          <div className="border-b border-solid border-slate-400 mb-[3vw] md:mb-[2vw]">
            <div
              className="flex items-center justify-between text-[2.2vw] md:text-[1.3vw] py-[1vw] cursor-pointer font-montserrat font-semibold"
              onClick={() =>
                education ? setEducation(false) : setEducation(true)
              }
            >
              <div className="">Education</div>
              {!education ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>

            {education && temp === 0 && (
              <div>
                <EducationCard />
                <EducationCard />
              </div>
            )}
          </div>

          {/* This is Work Experience accordian */}
          <div className="border-b border-solid border-slate-400 mb-[3vw] md:mb-[2vw]">
            <div
              className="flex items-center justify-between text-[2.2vw] md:text-[1.3vw] py-[1vw] cursor-pointer font-montserrat font-semibold"
              onClick={() =>
                workExperience
                  ? setWorkExperience(false)
                  : setWorkExperience(true)
              }
            >
              <div>Work Experience</div>
              {!workExperience ? (
                <MdKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowUp />
              )}
            </div>

            {workExperience && temp === 0 && (
              <div>
                <WorkExperienceCard />
                <WorkExperienceCard />
              </div>
            )}
          </div>

          {/* This is Achievements accordian */}
          <div className="border-b border-solid border-slate-400 mb-[3vw] md:mb-[2vw]">
            <div
              className="flex items-center justify-between text-[2.2vw] md:text-[1.3vw] py-[1vw] cursor-pointer font-montserrat font-semibold"
              onClick={() =>
                achievements ? setAchievements(false) : setAchievements(true)
              }
            >
              <div>Achievements</div>
              {!achievements ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>

            {achievements && temp === 0 && (
              <div>
                <AchievementCard />
                <AchievementCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//This is the main expert profile component.
const ExpertProfile = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[80px]">
        <AboutExpert />
        <ExpertInfo />
      </div>
      <Footer />
    </div>
  );
};

export default ExpertProfile;
