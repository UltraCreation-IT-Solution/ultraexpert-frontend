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
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ProjectsCarousel } from "../../constant";
import { expertDetailsObj } from "../../constant";

export const ProfileCardBig = ({ personalDetails }) => {
  return (
    <div className="w-full px-3 sm:px-[1.5vw] py-3 md:p-[1vw] bg-[#EDEDED] flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center rounded-lg shadow-sm drop-shadow-lg sm:shadow-none sm:drop-shadow-none">
      <div className="flex items-center justify-between sm:gap-5 ">
        <img
          className="h-28 w-28 xs:h-32 xs:w-32 xl:h-40 xl:w-40 rounded-xl shrink-0 object-cover"
          src={personalDetails?.img}
          alt=""
        />
        <div className="flex flex-col gap-[1.8vw] md:gap-[1.1vw] items-end sm:items-start">
          <div className="text-xl xs:text-xl font-semibold">
            {personalDetails?.name}
          </div>
          <div className="text-xs xs:text-base">
            {personalDetails?.designation}
          </div>
          <div className="flex items-center gap-[0.5vw] text-xs xs:text-sm text-right">
            <IoLocationSharp />
            <div>
              {personalDetails?.location}, {personalDetails?.country}
            </div>
          </div>
          <div className="text-[10px] xs:text-sm font-[600] text-right">
            {personalDetails?.title}
          </div>
        </div>
      </div>

      <div className="">
        <div className="hidden sm:flex flex-col gap-[3.6vw] md:gap-[4vw]">
          <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold">
            Follow
          </button>
          <div className="py-2 flex gap-[0.3vw] justify-center items-center text-[10px] xs:text-sm xl:text-lg border-[0.5px] border-solid border-slate-300 rounded-sm ">
            <div>
              <MdStar color="#FF5E18" />
            </div>
            <div>{personalDetails?.rating}/5</div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex justify-between gap-2">
        <div className="px-3 py-2 flex gap-1 justify-center items-center shrink-0 text-md xs:text-sm xl:text-lg border-[0.5px] border-solid border-slate-300 rounded-md ">
          <div>
            <MdStar color="#FF5E18" />
          </div>
          <div>{personalDetails?.rating}</div>
        </div>
        <button className="px-[10vw] py-2 sm:px-[3vw] sm:py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-md md:rounded-sm tracking-wider text-base xs:text-base font-semibold">
          Follow
        </button>
      </div>
    </div>
  );
};

export const ExpertSummary = () => {
  return (
    <div className="mt-3">
      <div className="text-base md:text-2xl font-semibold font-montserrat">
        My projects
      </div>
      <ProjectsCarousel />
    </div>
  );
};

export const ExpertServices = () => {
  if (expertDetailsObj?.services.length === 0) {
    return (
      <div className="text-center text-xl sm:text-2xl lg:text-3xl text-[#2e2e2e] font-semibold px-3 mt-10 mb-10 lg:mb-0 ">
        No services provided by the expert yet!
      </div>
    );
  }
  return (
    <div className="mb-10 lg:mb-0">
      {expertDetailsObj.services.map((temp, idx) => (
        <div
          key={idx}
          className="flex justify-between items-start gap-2 py-4 md:py-[1vw] mb-[1.5vw] bg-white border-b border-solid border-slate-400"
        >
          <RiFlowChart className="mt-3 xs:mt-4 text-xl lg:text-3xl" />
          <div className="w-full md:flex items-start justify-between gap-5">
            <h1 className="text-base xs:text-xl lg:text-2xl font-semibold ">
              {temp?.title}
            </h1>

            <div className="mt-3 xs:mt-4 flex items-center gap-[2.5vw] md:gap-[1vw] shrink-0">
              <Link to={"service/" + temp?.id}>
                <button className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm sm:rounded-md cursor-pointer">
                  View
                </button>
              </Link>
              <Link to={"booking/" + temp?.id}>
                <button className="bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.3vw] text-sm md:text-base text-white font-semibold border rounded-sm sm:rounded-md cursor-pointer">
                  Book
                </button>
              </Link>
            </div>
          </div>

          <CiBookmark className="mt-3 xs:mt-4 text-3xl md:text-3xl lg:text-4xl" />
        </div>
      ))}
    </div>
  );
};

export const RatingCard = ({ img, name, rating, commentDate, comment }) => {
  return (
    <div className="my-[5vw] md:my-[2vw] pb-[1vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 xl:h-14 xl:w-14 shrink-0 object-cover rounded-full"
          src={img}
          alt=""
        />
        <div>
          <div className="text-lg sm:text-xl font-semibold">{name}</div>
          <div className="flex items-center mt-[2vw] md:mt-[0.9vw] gap-[5vw]">
            <div className="flex gap-[0.5vw] items-center text-xs sm:text-base">
              <div>
                <MdStar color="#FF5E18" />
              </div>
              <div className="text-slate-600">{rating}/5</div>
            </div>
            <div className=" text-xs sm:text-base text-slate-400">
              {commentDate}
            </div>
          </div>
          <p className="text-xs sm:text-base font-montserrat">{comment}</p>
          <div className="mb-2 flex items-center gap-5 text-xs sm:text-base md:text-lg">
            <div className="flex items-center gap-1">
              <BiLike />
              <div>25</div>
            </div>
            <div className="flex items-center gap-1">
              <BiDislike />
              <div>14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExpertRatings = () => {
  return (
    <div className="px-5 mb-10 lg:mb-0">
      <div>
        {expertDetailsObj.ratings.map((temp, idx) => (
          <RatingCard key={idx} {...temp} />
        ))}
      </div>
      <button className="bg-white px-[1.5vw] py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm sm:rounded-md">
        Show more
      </button>
    </div>
  );
};

export const AboutExpert = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-[75%] px-[2.5vw] lg:border-r border-solid border-slate-300">
        <div className=" sm:p-3 sm:pb-6 lg:border border-solid sm:border-slate-300 sm:rounded-md sm:mb-4 sm:shadow-md sm:drop-shadow-lg">
          <ProfileCardBig {...expertDetailsObj} />
          <div className="mt-8 md:mt-9">
            <div className="text-base md:text-lg lg:text-xl font-semibold">
              About me
            </div>
            <div className="text-sm md:text-base mt-[1.5vw] md:mt-[0.7vw] ">
              {expertDetailsObj?.personalDetails?.aboutMe}
            </div>
          </div>
        </div>
        <div />
      </div>
      <div className="lg:w-[25%] px-[2.5vw] mt-6  lg:mt-0">
        <div className="text-base md:text-lg lg:text-xl font-semibold">
          Skills
        </div>
        <div className="flex flex-wrap gap-[1vw] mt-3">
          {expertDetailsObj.skills.map((temp, idx) => (
            <div
              key={idx}
              className="px-2 py-1 text-xs md:text-sm border md:border-2 border-solid border-slate-200 font-semibold rounded-sm cursor-pointer"
            >
              {temp}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const EducationCard = ({ instituteName, degreeName, duration }) => {
  return (
    <div className="flex items-start gap-3 px-[1.5vw] lg:px-0 my-4">
      <div className="text-3xl sm:text-3xl shrink-0 mt-[0.6vw]">
        <FaUserGraduate />
      </div>
      <div>
        <div className="text-sm xs:text-base">{instituteName}</div>
        <div className="text-xs xs:text-sm my-1">{degreeName}</div>
        <div className="text-xs xs:text-sm text-gray-400 ">{duration}</div>
      </div>
    </div>
  );
};

export const WorkExperienceCard = ({ companyName, position, duration }) => {
  return (
    <div className="flex items-start gap-3 px-[1.5vw] lg:px-0 my-4">
      <div className="text-3xl sm:text-4xl shrink-0 mt-[0.6vw]">
        <HiOfficeBuilding />
      </div>
      <div>
        <div className="text-sm xs:text-base">{companyName}</div>
        <div className="text-xs xs:text-sm my-1">{position}</div>
        <div className="text-xs xs:text-sm text-gray-400 ">{duration}</div>
      </div>
    </div>
  );
};

export const AchievementCard = ({ name, year }) => {
  return (
    <div className="flex items-start gap-3 px-[1.5vw] lg:px-0 my-4">
      <div className="text-4xl sm:text-5xl items-center shrink-0 mt-[0.6vw]">
        <GiAchievement />
      </div>
      <div>
        <div className="text-sm xs:text-base">{name}</div>
        <div className="text-xs xs:text-sm text-gray-400 my-1">{year}</div>
      </div>
    </div>
  );
};

export const ExpertInfo = () => {
  const [summary, setSummary] = useState(true);
  const [services, setServices] = useState(false);
  const [ratings, setRatings] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [education, setEducation] = useState(false);
  const [achievements, setAchievements] = useState(false);
  const [workExperience, setWorkExperience] = useState(false);

  const MakeSummaryTrue = () => {
    setSummary(true);
    setServices(false);
    setRatings(false);
    setBlogs(false);
  };
  const MakeServicesTrue = () => {
    setSummary(false);
    setServices(true);
    setRatings(false);
    setBlogs(false);
  };
  const MakeRatingsTrue = () => {
    setSummary(false);
    setServices(false);
    setRatings(true);
    setBlogs(false);
  };
  const MakeBlogsTrue = () => {
    setSummary(false);
    setServices(false);
    setRatings(true);
    setBlogs(true);
  };

  return (
    <div className="lg:flex">
      <div className="lg:w-[75%] px-[2.5vw] lg:border-r border-solid border-slate-300 ">
        {/* Three buttons are present here */}
        {/* <div className="h-20 pt-3 flex items-center justify-around mt-[6vw] md:mt-[1.5vw]  bg-[#EDEDED] rounded-b-none rounded-lg">
          <div
            className={`h-full cursor-pointer text-[3vw] md:text-[1.2vw] flex items-center px-[2vw] ${
              summary ? "font-semibold rounded-b-none rounded-xl bg-white" : null
            }`}
            onClick={() => MakeSummaryTrue()}
          >
            Summary
          </div>
          <div
            className={`h-full cursor-pointer text-[3vw] md:text-[1.2vw] flex items-center px-[2vw] ${
              services ? "font-semibold rounded-b-none rounded-xl bg-white" : null
            }`}
            onClick={() => MakeServicesTrue()}
          >
            Services
          </div>
          <div
            className={`h-full cursor-pointer text-[3vw] md:text-[1.2vw] px-[2vw] flex items-center ${
              ratings ? "font-semibold bg-white rounded-b-none rounded-xl " : null
            }`}
            onClick={() => MakeRatingsTrue()}
          >
            Ratings
          </div>
        </div> */}
        <div className="flex items-center justify-between md:justify-around mt-10 border-b border-solid border-slate-300 pb-3 ">
          <div
            className={` cursor-pointer text-sm xs:text-base md:text-xl ${
              summary ? "font-semibold bg-[#EDEDED] px-6 py-2 rounded-md" : null
            }`}
            onClick={() => MakeSummaryTrue()}
          >
            Summary
          </div>
          <div
            className={`cursor-pointer text-sm xs:text-base md:text-xl ${
              services ? "font-semibold bg-[#EDEDED] px-6 py-2" : null
            }`}
            onClick={() => MakeServicesTrue()}
          >
            Services
          </div>
          <div
            className={`cursor-pointer text-sm xs:text-base md:text-xl ${
              ratings ? "font-semibold bg-[#EDEDED] px-6 py-2" : null
            }`}
            onClick={() => MakeRatingsTrue()}
          >
            Ratings
          </div>
          <div
            className={`cursor-pointer text-sm xs:text-base md:text-xl ${
              blogs ? "font-semibold bg-[#EDEDED] px-6 py-2" : null
            }`}
            onClick={() => MakeBlogsTrue()}
          >
            Blogs
          </div>
        </div>
        <div className="mt-[3vw]">
          {summary && <ExpertSummary />}
          {services && <ExpertServices />}
          {ratings && <ExpertRatings />}
          {blogs && <ExpertBlogs />}
        </div>
      </div>

      {/*******Accordian starts from here*******/}

      {
        <div
          className={`${
            summary
              ? ` lg:w-[25%] px-[2.5vw] mt-6 lg:mt-0`
              : `hidden lg:block lg:w-[25%] px-[2.5vw] mt-6 lg:mt-0`
          }`}
        >
          <div className="">
            {/* This is Education accordian */}
            <div className="border-b-[0.1px] border-solid border-slate-300 mb-[5vw] md:mb-[2vw]">
              <div
                className="flex items-center justify-between text-base sm:text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
                onClick={() =>
                  education ? setEducation(false) : setEducation(true)
                }
              >
                <div>Education</div>
                <div className="text-xl md:text-2xl">
                  {!education ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </div>
              </div>

              {education && expertDetailsObj.education.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {education &&
                expertDetailsObj.education.map((temp, idx) => (
                  <EducationCard key={idx} {...temp} />
                ))}
            </div>

            {/* This is Work Experience accordian */}
            <div className="border-b-[0.1px] border-solid border-slate-300 mb-[5vw] md:mb-[2vw]">
              <div
                className="flex items-center justify-between text-base sm:text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
                onClick={() =>
                  workExperience
                    ? setWorkExperience(false)
                    : setWorkExperience(true)
                }
              >
                <div>Work Experience</div>
                <div className="text-xl md:text-2xl">
                  {!workExperience ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </div>
              </div>
              {workExperience &&
                expertDetailsObj.workExperience.length === 0 && (
                  <div className="text-xs xs:text-base pb-[1vw]">
                    No information provided by the expert
                  </div>
                )}
              {workExperience &&
                expertDetailsObj.workExperience.map((temp, idx) => (
                  <WorkExperienceCard key={idx} {...temp} />
                ))}
            </div>

            {/* This is Achievements accordian */}
            <div className="border-b-[0.1px] border-solid border-slate-300 mb-[5vw] md:mb-[2vw]">
              <div
                className="flex items-center justify-between text-base sm:text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
                onClick={() =>
                  achievements ? setAchievements(false) : setAchievements(true)
                }
              >
                <div>Achievements</div>
                <div className="text-xl md:text-2xl">
                  {!achievements ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </div>
              </div>
              {achievements && expertDetailsObj.achievements.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {achievements &&
                expertDetailsObj.achievements.map((temp, idx) => (
                  <AchievementCard key={idx} {...temp} />
                ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

//This is the main expert profile component.
const ExpertProfile = () => {
  return (
    <div>
      <div className="mt-[90px] md:mt-[80px]">
        <AboutExpert />
        <ExpertInfo />
      </div>
    </div>
  );
};

export default ExpertProfile;
