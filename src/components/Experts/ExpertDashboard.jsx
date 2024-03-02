import React, { useState } from "react";
import { FaEdit, FaTags, FaWallet } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdSpaceDashboard, MdInsertPageBreak } from "react-icons/md";
import {
  BsFillPersonLinesFill,
  BsFillChatSquareTextFill,
} from "react-icons/bs";
import { IoEyeSharp, IoPersonAdd, IoSettings } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { expertDashInfo as expert } from "../../constant";
import { ExpertBlogs } from "./ExpertProfile";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "JAN",
    avgRating: 2,
  },
  {
    name: "FEB",
    avgRating: 4.5,
  },
  {
    name: "MAR",
    avgRating: 5,
  },
  {
    name: "APR",
    avgRating: 4.2,
  },
  {
    name: "MAY",
    avgRating: 3,
  },
  {
    name: "JUN",
    avgRating: 3,
  },
  {
    name: "JUL",
    avgRating: 4.2,
  },
  {
    name: "AUG",
    avgRating: 2,
  },
  {
    name: "SEP",
    avgRating: 4.8,
  },
  {
    name: "OCT",
    avgRating: 5,
  },
  {
    name: "NOV",
    avgRating: 4.2,
  },
  {
    name: "DEC",
    avgRating: 3.6,
  },
];

const ExpertDashboard = () => {
  const [contributions, setContributions] = useState(true);
  const [meetings, setMeetings] = useState(false);
  const [blogs, setBlogs] = useState(false);

  const HandleContributions = () => {
    setContributions(true);
    setMeetings(false);
    setBlogs(false);
  };
  const HandleMeetings = () => {
    setContributions(false);
    setMeetings(true);
    setBlogs(false);
  };
  const HandleBlogs = () => {
    setContributions(false);
    setMeetings(false);
    setBlogs(true);
  };
  return (
    <div className="mt-[85px] px-[7vw] w-full h-full md:flex gap-[1vw]">
      <section className="w-[32%] h-fit border border-[#c7c7c7] border-solid flex flex-col rounded-lg">
        <div className="w-full h-auto px-[0.8vw] py-[2vw] border-b-[0.01px] border-[#dcdcdc] border-solid">
          <div className="flex justify-between">
            <div className="flex gap-[0.75vw]">
              <img
                src={expert.profile}
                className="w-[6.5vw] h-[6.5vw] rounded-lg"
                alt="profileImg"
              />
              <div className="flex flex-col justify-between py-[0.2vw]">
                <div className=" flex flex-col gap-[0.5vw] ">
                  <div className="font-bold text-[1.4vw]">{expert?.name}</div>
                  <div className="font-medium text-[1vw] text-[#8F8F8F]">
                    @{expert?.username}
                  </div>
                </div>
                <div className="font-semibold text-[1.3vw] text-black/60">
                  {expert?.designation}
                </div>
              </div>
            </div>
            <div className="py-[0.4vw] text-[1.25vw]">
              <FaEdit />
            </div>
          </div>
          <div className=" mt-[1.6vw] w-full text-[1vw] text-[#525252]">
            {expert.title}
          </div>
          <div className="mt-[1.25vw] flex flex-col gap-[1vw]">
            <div className="flex gap-[1.25vw] items-center text-[1.25vw] text-[#515151]">
              <FaLocationDot />
              {expert?.location}
            </div>
            <div className="flex gap-[1.25vw] items-center text-[1.25vw] text-[#515151]">
              <FaTags />
              <div className="flex">
                {expert?.topSkills.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="px-[2.65vw] xs:px-[2.2vw] sm:px-[1.8vw] lg:px-[1vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] text-[2.85vw] xs:text-[2.25vw] sm:text-[1.45vw] lg:text-[1vw] border border-[#cdcdcd] border-solid"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="p-0 mt-0 mb-0">
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <MdSpaceDashboard className="text-[1.65vw]" />
              Dashboard
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <FaWallet className="text-[1.55vw]" />
              Wallet
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <BsFillChatSquareTextFill className="text-[1.55vw]" />
              Chat
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <BsFillPersonLinesFill className="text-[1.55vw]" />
              Go to Experts
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <MdInsertPageBreak className="text-[1.55vw]" />
              My Blogs
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.45vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <IoSettings className="text-[1.55vw]" />
              Settings
            </li>
          </ul>
        </div>
      </section>
      <section className="md:w-[68%] h-full flex flex-col gap-[2vw]">
        <div className="w-full flex border border-[#c7c7c7] border-solid rounded-lg py-[1vw] shadow-md">
          <div className="w-[70%]">
            <div className="text-[1.35vw] font-bold px-[2vw]">
              Average Ratings
            </div>
            <div className="w-full h-[180px] ml-[-2.6vw] mt-[0.8vw] mb-[-1vw] text-[1vw]">
              <ResponsiveContainer>
                <ComposedChart data={data}>
                  <CartesianGrid stroke="#629BF0" />
                  <XAxis
                    className="text-[0.8vw]"
                    dataKey="name"
                    interval={"preserveStartEnd"}
                  />
                  <YAxis
                    className="text-[0.8vw]"
                    dataKey={"avgRating"}
                    interval={"preserveStartEnd"}
                  />
                  <Tooltip />
                  <Area dataKey="avgRating" fill="#eddced" />
                  <Bar dataKey="avgRating" barSize={22} fill="#629BF0" />
                  <Line dataKey="avgRating" stroke="#5950C9" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-[30%] border-l border-solid px-[2vw]">
            <div className="text-[1.35vw] font-bold">Statistics</div>
            <div className="flex flex-col justify-evenly h-[80%]">
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <IoEyeSharp className="text-[#FF5E18] text-[1.45vw]" /> Views{" "}
                <span>{expert.viewCount}</span>
              </div>
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <IoPersonAdd className="text-[#5900C9] text-[1.45vw]" />{" "}
                Followers <span>{expert.viewCount}</span>
              </div>
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <RiPagesFill className="text-[#EF0064] text-[1.45vw]" /> Blogs{" "}
                <span>{expert.viewCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[1vw] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] py-[1.25vw]">
          <div className="font-bold text-[1.45vw]">Skills</div>
          <div className="flex flex-wrap gap-[1vw]">
            {expert.allskils.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-[1.6vw] py-[0.6vw] rounded bg-[#ececec] text-[1vw]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-[2vw]">
          <div className="w-[50%] h-[15vw] border border-[#c7c7c7] border-solid rounded-lg">
            gh
          </div>
          <div className="w-[50%] h-[15vw] border border-[#c7c7c7] border-solid rounded-lg">
            gh
          </div>
        </div>
        <div className="w-full h-[16vw] rounded-lg border border-[#c7c7c7] border-solid ">
          contribution graph
        </div>

        <div className="border border-[#c7c7c7] border-solid rounded-lg px-5 py-4 ">
          <div className="flex gap-3 border-b border-solid border-[#c7c7c7] pb-4 mb-4 text-sm md:text-base overflow-x-scroll">
            <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                contributions && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleContributions()}
            >
              Recent Contributions
            </div>
            <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                meetings && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleMeetings()}
            >
              Recent Meetings
            </div>
            <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                blogs && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleBlogs()}
            >
              Recent Blogs
            </div>
          </div>
          {contributions && (
            <div>
              {expert?.recentContributions?.map((item,idx) => (
                <Contributioncard key={idx} {...item}/>
              ))}
            </div>
          )}
          {meetings && 
            <div>
              {expert?.recentMeetings?.map((item,idx) => 
                  
                    <div key={idx} className={`px-3 py-4 my-5 rounded-md ${idx%2===0 ?`bg-[#ececec]`:`border border-[#c7c7c7] border-solid`}`}>
                      <div className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item?.serviceTitle}</div>
                      <div className="sm:flex justify-between gap-5 mt-4">
                        <div className="text-sm">
                          <div>Customer Name: {item?.customerName}</div>
                          <div className="my-2">Service Price: {item?.servicePrice}</div>
                          <div>Service Details: XYZ</div>
                        </div>
                        <div className="text-sm mt-2 sm:mt-0">
                          <div>Time Stamp: {item?.serviceDuration}</div>
                          <div className="my-2">Meeting Id: {item?.meetingId}</div>
                          <div>Date of Meeting: {item?.serviceDate}</div>
                        </div>
                      </div>
                    </div>
              )}
            </div>
          }
          {
            blogs && <ExpertBlogs/>
          }
        </div>
      </section>
    </div>
  );
};

export default ExpertDashboard;

const Contributioncard = ({serviceName,date,customerName,serviceDuration,servicePrice}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-between gap-5 px-3 py-4 my-4 rounded-md bg-[#ececec] text-sm md:text-base font-semibold"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <div className=" whitespace-nowrap overflow-hidden text-ellipsis w-[70%]">{serviceName}</div>
        <div className="flex items-center gap-6">
          <div>
            {!open ?<IoIosArrowDown/>:<IoIosArrowUp/>}
          </div>
        </div>
      </div>
      {open && (
        <div className=" px-3 py-4 border border-[#c7c7c7] border-solid rounded-md">
          <div className="text-sm">
            <div>Customer Name: {customerName} </div>
            <div className="my-2">Duration: {serviceDuration} </div>
            <div>Service price: ₹ {servicePrice} </div>
          </div>
        </div>
      )}
    </div>
  );
};
