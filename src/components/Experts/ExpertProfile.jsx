import React from "react";
import { useState, useEffect } from "react";
import { MdStar, MdGroupAdd } from "react-icons/md";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { RiFlowChart } from "react-icons/ri";
import { IoDiamondSharp } from "react-icons/io5";
import { FaUserGraduate, FaUserCheck, FaBookmark} from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BsBookmarkPlusFill, BsBookmarkDashFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { expertDetailsObj, ProjectsCarousel, BlogCardHorizontal, ShowSchedule } from "../../constant";

export const ExpertSummary = () => {
  return (
    <div className="mt-3">
      {expertDetailsObj?.carrierJourney.length !== 0 && (
        <>
          <div className="border border-solid border-slate-300 rounded-md p-4 mb-6">
            <div className="text-xl md:text-2xl font-semibold">
              Carrer Journey
            </div>
            <div className="mt-6">
              {expertDetailsObj?.carrierJourney?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row md:items-center md:gap-10 py-6 md:py-0 border-t border-solid border-slate-200"
                  >
                    {/* 1st portion */}
                    <div className="text-sm flex md:flex-col order-2 md:order-1 md:w-[150px] pt-2 md:py-5 md:text-right">
                      {item.present ? (
                        <>
                          <div>Present</div>
                          <div className="block md:hidden"> - </div>
                        </>
                      ) : (
                        <>
                          <div>
                            {item?.endMonth}, {item?.endYear}
                          </div>
                          <div className="block md:hidden"> - </div>
                        </>
                      )}
                      <div>
                        {item?.startMonth}, {item?.startYear}
                      </div>
                    </div>
                    {/* 2nd portion */}
                    <div className="hidden md:block absolute left-[180px] h-5 w-5 rounded-full bg-slate-200"></div>

                    {/* 3rd portion */}
                    <div className="md:pl-10 flex flex-col order-1 md:order-2 md:border-l border-solid border-slate-200 md:py-5">
                      <div className="text-base font-semibold">
                        {item?.designation}
                      </div>
                      <div className="text-sm text-slate-500">
                        {item?.companyName}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <div className="text-xl md:text-2xl font-semibold font-montserrat">
        My projects
      </div>
      <ProjectsCarousel />
    </div>
  );
};
export const ExpertProfileServiceCard = ({item}) => {
  
  const [saveService, setSaveService] = useState(false);
  return(
    <div
         
    className="flex justify-between items-start gap-2 py-4 md:py-[1vw] mb-[1.5vw] bg-white border-b border-solid border-slate-400"
  >
    <RiFlowChart className="mt-3 xs:mt-4 text-xl lg:text-3xl" />
    <div className="w-full md:flex items-start justify-between gap-5">
      <h1 className="text-base xs:text-xl lg:text-2xl font-semibold ">
        {item?.title}
      </h1>

      <div className="mt-3 xs:mt-4 flex items-center gap-[2.5vw] md:gap-[1vw] shrink-0">
        <Link to={"service/" + item?.id}>
          <button className="bg-white px-8 py-1 md:px-[1.8vw] md:py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm cursor-pointer">
            View
          </button>
        </Link>
        {/* <Link to={"booking/" + temp?.id}>
          <button className="bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.3vw] text-sm md:text-base text-white font-semibold border rounded-sm sm:rounded-md cursor-pointer">
            Book
          </button>
        </Link> */}
      </div>
    </div>
    {!saveService ? <BsBookmarkPlusFill className="mt-3 xs:mt-4 text-3xl md:text-3xl lg:text-4xl cursor-pointer" onClick={() => setSaveService(true)} />: <BsBookmarkDashFill className="mt-3 xs:mt-4 text-3xl md:text-3xl lg:text-4xl cursor-pointer" onClick={()=>setSaveService(false)}/>}
    
  </div>
  )
}
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
      {expertDetailsObj.services.map((item, index) => (
        <ExpertProfileServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

export const RatingCard = ({ img, name, commentDate, comment }) => {
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
          <div className="mt-[2vw] md:mt-[0.9vw] text-xs sm:text-base text-slate-400">
            {commentDate}
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
    <div className="px-1 xs:px-5 mb-10 lg:mb-0">
      <div className="border-b border-solid border-slate-300 pb-10">
        <div className="text-xl md:text-2xl font-semibold mt-6 md:mt-0">
          50 reviews
        </div>
        <div className="mt-6 text-base md:text-lg">Rating Breakdown</div>
        <div className="flex items-center gap-[4vw]">
          <div className="w-80 text-base">
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Availability</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.availability}
                </div>
              </div>
              <div className=" bg-red-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-red-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.availability / 5) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Skills</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.skills}
                </div>
              </div>
              <div className=" bg-blue-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-blue-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.skills / 5) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col ">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Coorporation</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.coorporation}
                </div>
              </div>
              <div className=" bg-purple-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-purple-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.coorporation / 5) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-80 text-base">
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Deadline</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.deadline}
                </div>
              </div>
              <div className=" bg-red-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-red-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.deadline / 5) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Quality</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.quality}
                </div>
              </div>
              <div className=" bg-blue-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-blue-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.quality / 5) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col ">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Communication</div>
                <div>
                  <MdStar /> {expertDetailsObj?.ratingBreakdown?.communication}
                </div>
              </div>
              <div className=" bg-purple-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-purple-500 rounded-full"
                  style={{
                    width: `${
                      (expertDetailsObj?.ratingBreakdown?.communication / 5) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-6">
          <input
            type="text"
            placeholder="Write a comment"
            className="w-full bg-[#F4F4F4] py-2 px-2 md:py-[0.7vw] rounded-sm text-xs xs:text-sm outline-none"
          />
          <button className="mt-2 md:mt-4 px-[3vw] py-2 md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer shrink-0">
            Comment
          </button>
        </div>
      </div>
      <div>
        <div className="mt-8 mb-12 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-semibold ">Top Reviews</div>
          <select
            name="Sort by"
            id=""
            className="px-4 py-2 text-sm md:text-lg border border-solid border-slate-300 outline-none"
          >
            <option value="newest" className="text-xs md:text-sm px-4 py-2">
              Newest
            </option>
            <option value="oldest" className="text-xs md:text-sm px-4 py-2">
              Oldest
            </option>
          </select>
        </div>
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

export const ExpertBlogs = () => {
  return (
    <div>
      {expertDetailsObj?.blogs?.map((item, idx) => (
        <BlogCardHorizontal key={idx} index={idx} items={item} />
      ))}
    </div>
  );
};

export const AboutExpert = () => {
  return (
    <div>
      <div className=" px-[2.5vw] lg:border-r border-solid border-slate-300">
        <div className="lg:p-3 sm:pb-6 border border-solid border-slate-300 sm:rounded-md sm:mb-4">
          <div className="relative pb-20">
            <img
              className="h-32 md:h-40 w-full object-cover rounded-md p-1"
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
            <div className="flex items-center justify-between mr-1">
              <div className="text-2xl md:text-3xl font-semibold">
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
            <div className="text-base md:text-lg text-[#565454] mt-3">
              {expertDetailsObj?.personalDetails?.designation}
            </div>
            <div className="md:w-[600px] text-sm sm:text-base text-[#565454] mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a
              quia deserunt aut unde inventore. Adipisci voluptate deleniti
              beatae rerum sapiente, vitae unde neque totam itaque nobis
              placeat. Veniam, quod?
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center gap-2 text-lg md:text-xl text-[#565454] font-semibold">
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
    setRatings(false);
    setBlogs(true);
  };

  return (
    <div className="">
      <div className=" px-[2.5vw] lg:border-r border-solid border-slate-300 ">
        {/* Four buttons are present here */}
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
                className="flex items-center justify-between text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
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
                className="flex items-center justify-between text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
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
                className="flex items-center justify-between text-lg lg:text-xl py-[1vw] mb-2 cursor-pointer font-montserrat font-semibold"
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
  const [education, setEducation] = useState(true);
  const [achievements, setAchievements] = useState(true);
  const [workExperience, setWorkExperience] = useState(true);

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
    <div className="sticky-sidebar ">
      <div className="px-[2.5vw] mt-4 sm:mt-0">
        <div className="text-base md:text-lg lg:text-xl font-semibold mt-5 lg:mt-0">
          Skills
        </div>
        <div className="flex flex-wrap gap-2 md:gap-[1vw] mt-3 pb-1">
          {expertDetailsObj.skills.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 text-xs md:text-sm border border-solid border-[#dedede] font-semibold rounded-sm cursor-pointer shadow-sm drop-shadow-sm"
            >
              {item}
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
        <div className="lg:w-[70%]">
          <AboutExpert />
          <ExpertInfo />
        </div>
        <div className="hidden lg:block w-[30%]">
          <SideComponent />
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
