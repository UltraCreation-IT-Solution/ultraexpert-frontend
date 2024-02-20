import React from "react";
import { useState } from "react";
import { MdStar, MdGroupAdd } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { RiFlowChart } from "react-icons/ri";
import { IoLocationSharp, IoDiamondSharp } from "react-icons/io5";
import { FaUserGraduate, FaUserCheck } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ProjectsCarousel } from "../../constant";
import { expertDetailsObj } from "../../constant";

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
    <div className="">
      <div className=" px-[2.5vw] lg:border-r border-solid border-slate-300">
        <div className="lg:p-3 sm:pb-6 lg:border border-solid sm:border-slate-300 sm:rounded-md sm:mb-4">
          <div className="relative pb-20">
            <img
              className="h-32 md:h-40 w-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="h-32 w-32 md:h-40 md:w-40 rounded-xl shrink-0 object-cover absolute top-16 left-5 md:left-10 border-[3px] border-solid border-white"
              src={expertDetailsObj?.personalDetails?.img}
              alt=""
            />
          </div>

          <div className="ml-5 md:ml-10">
            <div className="flex items-center justify-between">
              <div className="text-2xl xs:text-3xl font-semibold">
                {expertDetailsObj?.personalDetails?.name}
              </div>
              <div className="hidden md:flex gap-2">
                <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer">
                  Follow
                </button>
                <button className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm flex items-center justify-center gap-2 cursor-pointer">
                  <div className="text-2xl text-[#565454]">
                    <IoIosChatboxes />
                  </div>

                  <div>Chat with me</div>
                </button>
              </div>
            </div>
            <div className="text-md xs:text-lg text-[#565454] mt-3">
              {expertDetailsObj?.personalDetails?.designation}
            </div>
            <div className="md:w-[600px] text-md sm:text-base text-[#565454] mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a
              quia deserunt aut unde inventore. Adipisci voluptate deleniti
              beatae rerum sapiente, vitae unde neque totam itaque nobis
              placeat. Veniam, quod?
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center gap-2 xs:text-md text-xl font-semibold">
                <IoDiamondSharp />
                <div>Top skills</div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {[...Array(3)].map((temp) => (
                  <div className="bg-[#E7E7E7] px-4 py-1 text-sm rounded-sm">
                    React
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-5 text-[#565454] text-lg xs:text-xl mt-5">
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <MdStar color="#FF5E18" />

                <div>{expertDetailsObj?.personalDetails?.rating}</div>
              </div>
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <MdGroupAdd />

                <div>50+ Meetings</div>
              </div>
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <FaUserCheck />

                <div>1k</div>
              </div>
            </div>
            <div className="hidden lg:block mt-8 md:mt-4">
              <div className="text-base md:text-lg lg:text-xl font-semibold">
                About me
              </div>
              <div className="text-sm md:text-base mt-[1.5vw] md:mt-[0.7vw] ">
                {expertDetailsObj?.personalDetails?.aboutMe}
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>

      <div className="lg:hidden px-[2.5vw] mt-4 sm:mt-0">
        <div className="text-base md:text-lg lg:text-xl font-semibold mt-5 lg:mt-0">
          Skills
        </div>
        <div className="flex flex-wrap gap-2 md:gap-[1vw] mt-3 pb-1">
          {expertDetailsObj.skills.map((temp, idx) => (
            <div
              key={idx}
              className="px-2 py-1 text-xs md:text-sm border border-solid border-[#dedede] font-semibold rounded-sm cursor-pointer shadow-sm drop-shadow-sm"
            >
              {temp}
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-4">
              <div className="text-base md:text-lg lg:text-xl font-semibold">
                About me
              </div>
              <div className="text-sm md:text-base mt-[1.5vw] md:mt-[0.7vw] ">
                {expertDetailsObj?.personalDetails?.aboutMe}
              </div>
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
    <div className="">
      <div className=" px-[2.5vw] lg:border-r border-solid border-slate-300 ">
        {/* Three buttons are present here */}
        <div className="flex items-center justify-between gap-3 overflow-x-scroll md:justify-evenly mt-10 border-b border-solid border-slate-300 pb-3 ">
          <div
            className={` cursor-pointer  text-base sm:text-lg md:text-xl px-6 py-2 shrink-0 ${
              summary ? "font-semibold bg-[#EDEDED] rounded-md" : null
            }`}
            onClick={() => MakeSummaryTrue()}
          >
            Summary
          </div>
          <div
            className={`cursor-pointer text-base sm:text-lg md:text-xl px-6 py-2 shrink-0 ${
              services ? "font-semibold bg-[#EDEDED] " : null
            }`}
            onClick={() => MakeServicesTrue()}
          >
            Services
          </div>
          <div
            className={`cursor-pointer text-base sm:text-lg md:text-xl px-6 py-2 shrink-0 ${
              ratings ? "font-semibold bg-[#EDEDED]" : null
            }`}
            onClick={() => MakeRatingsTrue()}
          >
            Ratings
          </div>
          <div
            className={`cursor-pointer text-base sm:text-lg md:text-xl px-6 py-2 shrink-0 ${
              blogs ? "font-semibold bg-[#EDEDED]" : null
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
              ? `lg:hidden  px-[2.5vw] mt-6 lg:mt-0`
              : `hidden px-[2.5vw] mt-6 lg:mt-0`
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

export const SideComponent = () => {
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
    <div>
      <div className="px-[2.5vw] mt-4 sm:mt-0">
        <div className="text-base md:text-lg lg:text-xl font-semibold mt-5 lg:mt-0">
          Skills
        </div>
        <div className="flex flex-wrap gap-2 md:gap-[1vw] mt-3 pb-1">
          {expertDetailsObj.skills.map((temp, idx) => (
            <div
              key={idx}
              className="px-2 py-1 text-xs md:text-sm border border-solid border-[#dedede] font-semibold rounded-sm cursor-pointer shadow-sm drop-shadow-sm"
            >
              {temp}
            </div>
          ))}
        </div>
      </div>

      {/*******Accordian starts from here*******/}
      {
        <div
          className={`${
            summary
              ? ` px-[2.5vw] mt-6 lg:mt-10`
              : `hidden lg:block px-[2.5vw] mt-6 lg:mt-0`
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
      <div className="lg:flex mt-[90px] md:mt-[80px]">
        <div className="lg:w-[75%]">
          <AboutExpert />
          <ExpertInfo />
        </div>
        <div className="hidden lg:block w-[25%]">

        <SideComponent />
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
