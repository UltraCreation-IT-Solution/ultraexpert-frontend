import React from "react";
import { useState, useEffect } from "react";
import { MdStar, MdGroupAdd } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { IoDiamondSharp } from "react-icons/io5";
import { FaUserGraduate, FaUserCheck } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BsBookmarkPlusFill, BsBookmarkDashFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProjectsCarousel from "../../subsitutes/ProjectCarousel";
import ShowBlogs from "../../subsitutes/ShowBlogs";
import { BlogCardHorizontal } from "../Blogs/Blogs/Blog";
import ExpertProfileShimmer from "../../subsitutes/Shimmers/ExpertProfileShimmer";
import axios from "../../axios";
import HorizontalCardShimmer from "../../subsitutes/Shimmers/HorizontalCardShimmer";

export const ExpertSummary = ({ experienceArray, projectsArray }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="mt-3">
      {console.log(experienceArray?.length)}

      <div className="border border-solid border-slate-300 rounded-md p-4 mb-6">
        <div className="text-xl md:text-2xl font-semibold ">Career Journey</div>
        <div className="mt-6">
          {experienceArray?.length === 0 ? (
            <div className="text-center font-bold text-lg md:text-2xl text-gray-600 my-10 md:my-15">
              No information provided by the expert
            </div>
          ) : (
            experienceArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center md:gap-10 py-6 md:py-0 border-t border-solid border-slate-200"
                >
                  {/* 1st portion */}
                  <div className="text-sm flex md:flex-col order-2 md:order-1 md:w-[150px] pt-2 md:py-5 md:text-right">
                    {item.is_present ? (
                      <>
                        <div>Present</div>
                        <div className="block md:hidden"> - </div>
                      </>
                    ) : (
                      !item?.end_date.length === 0 && (
                        <>
                          <div>{formatDate(item?.end_date)}</div>
                          <div className="block md:hidden"> - </div>
                        </>
                      )
                    )}
                    <div>{formatDate(item?.start_date)}</div>
                  </div>
                  {/* 2nd portion */}
                  <div
                    className={`hidden md:block ${
                      item?.present ? "bg-emerald-300" : "bg-slate-200"
                    } absolute left-[180px] h-5 w-5 rounded-full `}
                  ></div>

                  {/* 3rd portion */}
                  <div className="md:pl-10 flex flex-col order-1 md:order-2 md:border-l border-solid border-slate-200 md:py-5">
                    <div className="text-base font-semibold">
                      {item?.designation}
                    </div>
                    <div className="text-sm text-slate-500">
                      {item?.company_name}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div>
        <div className="mb-5 text-xl md:text-2xl font-semibold font-montserrat">
          My projects
        </div>
        {projectsArray?.length === 0 || projectsArray === undefined ? (
          <div className="text-center font-bold text-lg md:text-2xl text-gray-600 my-10 md:my-15">
            No projects found
          </div>
        ) : (
          <ProjectsCarousel projectsArray={projectsArray} />
        )}
      </div>
    </div>
  );
};
export const ExpertProfileServiceCard = ({ item }) => {
  const navigate = useNavigate();
  const [saveService, setSaveService] = useState(false);

  return (
    <div className="flex justify-between items-start gap-2 py-4 md:py-[1vw] mb-[1.5vw] bg-white border-b border-solid border-slate-400">
      <RiFlowChart className="mt-3 xs:mt-4 text-xl lg:text-3xl" />
      <div className="w-full md:flex items-start justify-between gap-5">
        <h1 className="text-base xs:text-xl lg:text-2xl font-semibold ">
          {item?.service_name}
        </h1>

        <div className="mt-3 xs:mt-4 flex items-center gap-[2.5vw] md:gap-[1vw] shrink-0">
          <button
            className="bg-white px-8 py-1 md:px-[1.8vw] md:py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm cursor-pointer"
            onClick={() => navigate(`/experts/service/${item?.id}`)}
          >
            View
          </button>
          {/* <Link to={"booking/" + temp?.id}>
          <button className="bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.3vw] text-sm md:text-base text-white font-semibold border rounded-sm sm:rounded-md cursor-pointer">
            Book
          </button>
        </Link> */}
        </div>
      </div>
      {!saveService ? (
        <BsBookmarkPlusFill
          className="mt-3 xs:mt-4 text-3xl md:text-3xl lg:text-4xl cursor-pointer"
          onClick={() => setSaveService(true)}
        />
      ) : (
        <BsBookmarkDashFill
          className="mt-3 xs:mt-4 text-3xl md:text-3xl lg:text-4xl cursor-pointer"
          onClick={() => setSaveService(false)}
        />
      )}
    </div>
  );
};
export const ExpertServices = () => {
  const [services, setServices] = useState([]);
  const [shimmer, setShimmer] = useState(false);
  const params = useParams();
  const { id } = params;
  console.log(id);
  const getExpServices = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setShimmer(true);
    try {
      const res = await axios.get(
        `/customers/services/?action=1&expert_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(res);
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 500
      ) {
        setShimmer(false);
        return;
      }
      const json = res.data.data.all;
      console.log(json);
      setServices(json);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };
  useEffect(() => {
    getExpServices();
  }, []);

  return shimmer === true ? (
    <div className="px-[2.5vw] flex flex-wrap justify-center gap-[2vw]">
      {Array.from({ length: 4 }).map((_, index) => (
        <HorizontalCardShimmer key={index} />
      ))}
    </div>
  ) : services?.length === 0 ? (
    <div className="text-center text-xl sm:text-2xl lg:text-3xl text-[#2e2e2e] font-semibold px-3 mt-10 mb-10 lg:mb-0 ">
      No services provided by the expert yet!
    </div>
  ) : (
    <div className="mb-10 lg:mb-0">
      {services.map((item, index) => (
        <ExpertProfileServiceCard item={item} key={index} />
      ))}
    </div>
  );
};

export const RatingCard = ({ temp }) => {
  console.log(temp);

  const date = temp?.timestamp.split("T")[0];
  const commentDate = date;

  return (
    <div className="my-[5vw] md:my-[2vw] pb-[1vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 xl:h-14 xl:w-14 shrink-0 object-cover rounded-full"
          src={temp?.user_profile_img}
          alt=""
        />
        <div>
          <div className="text-lg sm:text-xl font-semibold">
            {temp?.user_first_name} {temp?.user_last_name}
          </div>
          <div className="mt-[2vw] md:mt-[0.9vw] text-xs sm:text-base text-slate-400">
            {commentDate}
          </div>

          <p className="text-xs sm:text-base font-montserrat">
            {temp?.content}
          </p>
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

export const ExpertRatings = ({ expert }) => {
  return (
    <div className="px-1 xs:px-5 mb-10 lg:mb-0">
      {console.log(expert)}
      <div className="border-b border-solid border-slate-300 pb-10">
        <div className="text-xl md:text-2xl font-semibold mt-6 md:mt-0">
          {expert?.customer_ratings?.length} reviews
        </div>
        <div className="mt-6 text-base md:text-lg">Rating Breakdown</div>
        <div className="flex items-center gap-[4vw]">
          <div className="w-80 text-base">
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Availability</div>
                <div>
                  <MdStar /> {Math.round(expert?.avg_availability * 10) / 10}
                </div>
              </div>
              <div className=" bg-red-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-red-500 rounded-full"
                  style={{
                    width: `${
                      (Math.round(expert?.avg_availability * 10) / 10 / 5) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Skills</div>
                <div>
                  <MdStar /> {Math.round(expert?.avg_skills * 10) / 10}
                </div>
              </div>
              <div className=" bg-blue-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-blue-500 rounded-full"
                  style={{
                    width: `${(expert?.avg_skills / 5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col ">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Cooperation</div>
                <div>
                  <MdStar /> {Math.round(expert?.avg_cooperation * 10) / 10}
                </div>
              </div>
              <div className=" bg-purple-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-purple-500 rounded-full"
                  style={{
                    width: `${(expert?.avg_cooperation / 5) * 100}%`,
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
                  <MdStar /> {Math.round(expert?.avg_deadline * 10) / 10}
                </div>
              </div>
              <div className=" bg-red-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-red-500 rounded-full"
                  style={{
                    width: `${(expert?.avg_deadline / 5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Quality</div>
                <div>
                  <MdStar /> {Math.round(expert?.avg_quality * 10) / 10}
                </div>
              </div>
              <div className=" bg-blue-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-blue-500 rounded-full"
                  style={{
                    width: `${(expert?.avg_quality / 5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="my-4 flex flex-col ">
              <div className="flex justify-between text-xs xs:text-sm md:text-base">
                <div>Communication</div>
                <div>
                  <MdStar /> {Math.round(expert?.avg_communication * 10) / 10}
                </div>
              </div>
              <div className=" bg-purple-100 rounded-full">
                <div
                  className="border-[3px] border-solid border-purple-500 rounded-full"
                  style={{
                    width: `${(expert?.avg_communication / 5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="font-semibold text-xl sm:text-2xl mt-5">
          Top reviews
        </div>
        {expert?.customer_ratings?.map((item, index) => (
          <div
            key={index}
            className="my-6 border-b border-solid border-slate-300 pb-2"
          >
            <div className="flex gap-4 items-center">
              <img
                className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 object-cover rounded-full"
                src={item?.customer_profile_img}
                alt="profile"
              />
              <div className="text-lg sm:text-xl font-semibold">
                {item?.customer_first_name} {item?.customer_last_name}
              </div>
            </div>
            <div className="text-xs sm:text-base font-montserrat mt-3 pl-3">
              {item?.review}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutExpert = ({ getExpertDetails, ...expert }) => {
  const cookie = document.cookie.split(";");
  const jsonData = {};
  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const followExpert = async (id) => {
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 1,
          expert_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      getExpertDetails();
    } catch (error) {
      console.log(error);
    }
  };
  const unfollowExpert = async (id) => {
    console.log(id);
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 2,
          expert_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      getExpertDetails();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" px-[2.5vw] lg:border-r border-solid border-slate-300">
        <div className="lg:p-3 sm:pb-6 border border-solid border-slate-300 sm:rounded-md sm:mb-4">
          <div className="relative pb-20">
            <img
              className="h-32 md:h-40 w-full object-cover rounded-md p-1"
              src={expert?.expert?.expert?.user?.banner_img}
              alt=""
            />
            <img
              className="h-32 w-32 md:h-40 md:w-40 rounded-xl shrink-0 object-cover absolute top-16 left-5 md:left-10 border-[3px] border-solid border-white"
              src={expert?.expert?.expert?.user?.profile_img}
              alt=""
            />
          </div>

          <div className="ml-5 md:ml-10">
            <div className="flex items-center justify-between mr-1">
              <div className="text-2xl md:text-3xl font-semibold">
                {expert?.expert?.expert?.user?.first_name}{" "}
                {expert?.expert?.expert?.user?.last_name}
              </div>
              <div className="hidden md:flex gap-2">
                {localStorage.getItem("isExpert") === "false" && (
                  <div>
                    {expert?.expert?.is_following === false ? (
                      <button
                        className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white btnBlack rounded-sm text-xs xs:text-base font-semibold cursor-pointer"
                        onClick={() => followExpert(expert?.expert?.expert?.id)}
                      >
                        Follow
                      </button>
                    ) : (
                      <button
                        className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white btnBlack rounded-sm text-xs xs:text-base font-semibold cursor-pointer"
                        onClick={() =>
                          unfollowExpert(expert?.expert?.expert?.id)
                        }
                      >
                        Unfollow
                      </button>
                    )}
                  </div>
                )}

                <button className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm flex items-center justify-center gap-2 cursor-pointer">
                  <div className="text-2xl text-[#565454]">
                    <IoIosChatboxes />
                  </div>
                  <div>Chat with me</div>
                </button>
              </div>
            </div>
            <div className="text-base md:text-lg text-[#565454] mt-3">
              {expert?.expert?.expert?.profession}
            </div>
            {expert?.expert?.skills?.skills_json?.length === 0 ? null : (
              <div className="flex flex-col mt-4">
                <div className="flex items-center gap-2 text-lg md:text-xl text-[#565454] font-semibold">
                  <IoDiamondSharp />
                  <div>Top skills</div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  {expert?.expert?.skills?.skills_json
                    ?.slice(0, 3)
                    ?.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#E7E7E7] px-4 py-1 text-sm rounded-sm"
                      >
                        {item?.technology_name}
                      </div>
                    ))}
                </div>
              </div>
            )}
            <div className="flex items-center gap-5 text-[#565454] text-lg xs:text-xl mt-5">
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <MdStar color="#FF5E18" />

                <div>{expert?.expert?.rating_count}</div>
              </div>
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <MdGroupAdd />

                <div>
                  {/* {expertDetailsObj?.personalDetails?.meetingCount} Meetings */}
                </div>
              </div>
              <div className="py-2 flex gap-[0.3vw] justify-center items-center">
                <FaUserCheck />

                <div>{expert?.expert?.followers_count}</div>
              </div>
            </div>
            <div className="hidden lg:block mt-8 md:mt-4">
              <div className="text-base md:text-lg lg:text-xl font-semibold">
                About me
              </div>
              <div className="text-sm md:text-base mt-[1.5vw] md:mt-[0.7vw] ">
                {expert?.expert?.expert?.about_me}
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>

      <div className="lg:hidden px-[2.5vw] mt-4 sm:mt-0">
        {expert?.expert?.skills?.skills_json?.length === 0 ? null : (
          <>
            <div className="text-base md:text-lg lg:text-xl font-semibold mt-5 lg:mt-0">
              Skills
            </div>
            <div className="flex flex-wrap gap-2 md:gap-[1vw] mt-3 pb-1">
              {expert?.expert?.skills?.skills_json?.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 text-xs md:text-sm border border-solid border-[#dedede] font-semibold rounded-sm cursor-pointer shadow-sm drop-shadow-sm"
                >
                  {item?.technology_name}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-8 md:mt-4">
          <div className="text-base md:text-lg lg:text-xl font-semibold">
            About me
          </div>
          <div className="text-sm md:text-base mt-[1.5vw] md:mt-[0.7vw] ">
            {expert?.expert?.expert?.about_me}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EducationCard = ({ institute_name, type, passing_year }) => {
  return (
    <div className="flex items-start gap-3 px-[1.5vw] lg:px-0 my-4">
      <div className="text-3xl sm:text-3xl shrink-0 mt-[0.6vw]">
        <FaUserGraduate />
      </div>
      <div>
        <div className="text-sm xs:text-base">{institute_name}</div>
        <div className="text-xs xs:text-sm my-1">{type}</div>
        <div className="text-xs xs:text-sm text-gray-400 ">{passing_year}</div>
      </div>
    </div>
  );
};

export const AchievementCard = ({ name, year, certificate }) => {
  return (
    <div className="flex items-start gap-3 px-[1.5vw] lg:px-0 my-4">
      <div className="text-4xl sm:text-5xl items-center shrink-0 mt-[0.6vw]">
        <GiAchievement />
      </div>
      <div>
        <div className="text-sm xs:text-base">{name}</div>
        <div className="text-xs xs:text-sm text-gray-400 my-1">{year}</div>
        <a
          href=""
          className="text-xs xs:text-sm text-red-500 no-underline hover:underline"
        >
          {" "}
          View certificate
        </a>
      </div>
    </div>
  );
};

export const ExpertInfo = ({ ...expert }) => {
  const location = useLocation();
  console.log(location);

  const [summary, setSummary] = useState(true);
  const [services, setServices] = useState(false);
  const [ratings, setRatings] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [education, setEducation] = useState(false);
  const [achievements, setAchievements] = useState(false);

  const experienceArray = expert?.expert?.experience?.experience;
  const educationArray = expert?.expert?.education?.education;
  const achievementsArray = expert?.expert?.achievements?.achievements;
  const projectsArray = expert?.expert?.projects[0]?.projects;
  const blogArray = expert?.expert?.blogs;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    if (location.state !== null && location.state.check === true) {
      setSummary(false);
      setServices(true);
      setRatings(false);
      setBlogs(false);
    }
  }, []);

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
          {summary && (
            <ExpertSummary
              experienceArray={experienceArray}
              projectsArray={projectsArray}
            />
          )}
          {services && <ExpertServices />}
          {ratings && <ExpertRatings expert={expert?.expert} />}
          {blogs &&
            (blogArray?.length === 0 ? (
              <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
                No blogs found
              </div>
            ) : (
              blogArray.map((item, idx) => (
                <BlogCardHorizontal
                  key={item?.id}
                  index={idx}
                  items={item}
                  likes={item?.reaction_count}
                  views={item?.blog_view_count}
                  title={item?.title}
                  tags={item?.tags}
                  image={item?.images[0]}
                  id={item?.id}
                  date={formatDate(item.date_created.split("T")[0])}
                />
              ))
            ))}
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
              {education && educationArray?.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {education &&
                educationArray?.map((item, idx) => (
                  <EducationCard key={idx} {...item} />
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
              {achievements && achievementsArray?.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {achievements &&
                achievementsArray?.map((item, idx) => (
                  <AchievementCard key={idx} {...item} />
                ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export const SideComponent = ({ ...expert }) => {
  const [summary, setSummary] = useState(true);
  const [services, setServices] = useState(false);
  const [ratings, setRatings] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [education, setEducation] = useState(true);
  const [achievements, setAchievements] = useState(true);

  const educationArray = expert?.expert?.education?.education;
  const achievementsArray = expert?.expert?.achievements?.achievements;

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
          {expert?.expert?.skills?.skills_json?.length === 0 ? (
            <div className="text-xs xs:text-base pb-[1vw]">
              No information provided by the expert
            </div>
          ) : (
            expert?.expert?.skills?.skills_json?.map((item, index) => (
              <div
                key={index}
                className="px-2 py-1 text-xs md:text-sm border border-solid border-[#dedede] font-semibold rounded-sm cursor-pointer shadow-sm drop-shadow-sm"
              >
                {item?.technology_name}
              </div>
            ))
          )}
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

              {education && educationArray?.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {education &&
                educationArray?.map((item, idx) => (
                  <EducationCard key={idx} {...item} />
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
              {achievements && achievementsArray?.length === 0 && (
                <div className="text-xs xs:text-base pb-[1vw]">
                  No information provided by the expert
                </div>
              )}
              {achievements &&
                achievementsArray?.map((temp, idx) => (
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
  const params = useParams();
  const { id } = params;
  const [shimmer, setShimmer] = useState(false);
  const [expertDetail, setExpertDetail] = useState(null);
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getExpertDetails = async () => {
    setShimmer(true);
    try {
      const res = await axios.get(
        `/customers/experts/?action=2&expert_id=${id} `,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        console.log(res.data.message);
        setShimmer(false);
        return;
      }
      const data = res.data.data;
      setExpertDetail(data);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };
  const getExpertDetailsWithToken = async () => {
    setShimmer(true);
    try {
      const res = await axios.get(
        `/customers/experts/?action=2&expert_id=${id} `,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        console.log(res.data.message);
        setShimmer(false);
        return;
      }
      const data = res.data.data;
      setExpertDetail(data);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };
  useEffect(() => {
    localStorage.getItem("username")
      ? getExpertDetailsWithToken()
      : getExpertDetails();
  }, [id]);
  useEffect(() => {
    console.log(expertDetail);
  }, [expertDetail]);

  if (shimmer === true) {
    return <ExpertProfileShimmer />;
  }
  return !expertDetail ? (
    <div className="text-center font-bold text-lg md:text-2xl text-gray-600  mt-[100px]">
      Expert details not found{" "}
    </div>
  ) : (
    <div>
      <div className="lg:flex mt-[90px] md:mt-[80px]">
        <div className="lg:w-[70%] h-[88vh]">
          <AboutExpert
            expert={expertDetail}
            getExpertDetails={getExpertDetails}
          />
          <ExpertInfo expert={expertDetail} />
        </div>
        <div className="hidden lg:block w-[30%]">
          <SideComponent expert={expertDetail} />
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
