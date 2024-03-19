import React, { useEffect, useState } from "react";
import { FaEdit, FaTags, FaWallet, FaMedal } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdSpaceDashboard,
  MdInsertPageBreak,
  MdOutlineStarBorderPurple500,
} from "react-icons/md";
import {
  BsFillPersonLinesFill,
  BsFillChatSquareTextFill,
} from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown, IoMdSettings } from "react-icons/io";
import {
  IoEyeSharp,
  IoPersonAdd,
  IoSettings,
  IoLocationOutline,
} from "react-icons/io5";
import { BsFillPatchCheckFill, BsGlobe, BsThreeDotsVertical } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { PiCrownFill } from "react-icons/pi";
import { ExpertBlogs } from "./ExpertProfile";
import { expertDashInfo as expert, leaderboardRanking } from "../../constant";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Outlet, Link } from "react-router-dom";
import Update from "./EditDashboardProfile";

const generateRandomData = () => {
  const today = new Date();
  const yearAgo = new Date(new Date().setFullYear(today.getFullYear() - 1));
  const values = [];

  for (let d = new Date(yearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    values.push({
      date: new Date(d),
      count: Math.floor(Math.random() * 4),
    });
  }

  return values;
};

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
const dataPie = [
  { name: "Contributions", value: 120 },
  { name: "Meetings", value: 80 },
  { name: "Blogs", value: 240 },
];

const COLORS = ["#629BF0", "#FF5E18", "#9747FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full bg-[#ececec] rounded-full">
      <div
        className={`h-[1.56vw] xs:h-[1.12vw] md:h-[0.85vw] lg:h-[0.6vw] rounded-full ${color}`}
        style={{
          width: `${percentage}%`,
          transition: "width 1.2s ease-in-out",
        }}
      ></div>
    </div>
  );
};
const Contributioncard = ({
  serviceName,
  date,
  customerName,
  serviceDuration,
  servicePrice,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-between gap-5 px-3 py-4 my-4 rounded-md bg-[#ececec] text-sm md:text-base font-semibold"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <div className=" whitespace-nowrap overflow-hidden text-ellipsis w-[70%]">
          {serviceName}
        </div>
        <div className="flex items-center gap-6">
          <div>{!open ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
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
export const Dashboard = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      seta(
        (dataPie[0].value /
          (dataPie[0].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
      setb(
        (dataPie[1].value /
          (dataPie[1].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
      setc(
        (dataPie[2].value /
          (dataPie[2].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
    }, 500);
  }, [a, b, c]);

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

  //heatmap data
  const values = generateRandomData();
  const [updateDate, setUpdateDate] = useState("");
  const [updateCount, setUpdateCount] = useState("");

  const handleUpdate = () => {
    const updatedValues = values.map((value) => {
      if (value.date.toDateString() === updateDate) {
        return { ...value, count: parseInt(updateCount) };
      }
      return value;
    });
    setValues(updatedValues);
  };
  return (
    <section className=" w-full md:w-[68%] h-full flex flex-col gap-[4.5vw] xs:gap-[3vw] md:gap-[2vw]">
      <div className="block md:hidden w-full h-auto px-[0.8vw] py-[4.5vw] xs:py-[3vw] border-b-[0.01px] border-[#dcdcdc] border-solid">
        <div className="flex justify-between">
          <div className="flex gap-[2.65vw] xs:gap-[2.25vw]">
            <img
              src={expert.profile}
              className="w-[20vw] h-[20vw] xs:w-[14vw] xs:h-[14vw] sm:w-[12vw] sm:h-[12vw] rounded-lg obj"
              alt="profileImg"
            />
            <div className="flex flex-col justify-between py-[0.2vw]">
              <div className=" flex flex-col gap-[0.8vw] xs:gap-[0.5vw] ">
                <div className="font-bold text-[4vw] xs:text-[2.8vw] sm:text-[2.65vw]">
                  {expert?.name}
                </div>
                <div className="font-medium text-[3.55vw] xs:text-[2.25vw] sm:text-[2vw] text-[#8F8F8F]">
                  @{expert?.username}
                </div>
              </div>
              <div className="font-semibold text-[3.8vw] xs:text-[2.5vw] sm:text-[2.25vw] text-black/60">
                {expert?.designation}
              </div>
            </div>
          </div>
          <div className="text-[5vw] xs:text-[3.12vw] sm:text-[2.85vw]">
            <FaEdit />
          </div>
        </div>
        <div className="mt-[4vw] xs:mt-[2.25vw] w-full text-[3.25vw] xs:text-[2.25vw] sm:text-[2vw] text-[#525252]">
          {expert.title}
        </div>
        <div className="mt-[3.65vw] xs:mt-[2vw] flex flex-col gap-[2.25vw] xs:gap-[1.65vw]">
          <div className="flex gap-[1.85vw] items-center text-[3.45vw] xs:text-[2.25vw] sm:text-[2vw] text-[#515151]">
            <FaLocationDot className="text-[4.45vw] xs:text-[2.9vw] sm:text-[2.65vw]" />
            {expert?.location}
          </div>
          <div className="flex gap-[1.65vw] items-center text-[3.25vw] xs:text-[2.25vw] sm:text-[2vw] text-[#515151]">
            <FaTags className="text-[4.45vw] xs:text-[2.9vw] sm:text-[2.65vw]" />
            <div className="flex ">
              {expert?.topSkills.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="px-[3vw] xs:px-[2.2vw] sm:px-[2.4vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] border border-[#cdcdcd] border-solid"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row border border-[#c7c7c7] border-solid rounded-lg py-[3vw] xs:py-[2vw] md:py-[1vw] shadow-md">
        <div className=" w-[108%] xs:w-[104%] lg:w-[70%] overflow-hidden">
          <div className="text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold px-[2vw]">
            Average Ratings
          </div>
          <div className="w-full h-[38vw] xs:h-[28vw] md:h-[16vw] lg:h-[13vw] ml-[-10vw] xs:ml-[-7.65vw] sm:ml-[-6vw] md:ml-[-3.4vw] lg:ml-[-2.6vw] mt-[2vw] md:mt-[0.8vw] mb-[-1vw] text-[2.65vw] xs:text-[1.8vw] sm:text-[1.6vw] md:text-[1vw]">
            <ResponsiveContainer>
              <ComposedChart data={data} className="overflow-hidden">
                <CartesianGrid stroke="#629BF0" />
                <XAxis
                  className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                  dataKey="name"
                  interval={0}
                />
                <YAxis
                  className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                  dataKey={"avgRating"}
                  interval={0}
                />
                <Tooltip />
                <Area dataKey="avgRating" fill="#ececec" />
                <Bar dataKey="avgRating" barSize={22} fill="#629BF0" />
                <Line dataKey="avgRating" stroke="#5950C9" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] lg:border-l border-solid px-[2vw]">
          <div className="text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold">
            Statistics
          </div>
          <div className="flex lg:flex-col justify-between lg:justify-evenly h-[80%] mt-[1.4vw] md:mt-[1vw] lg:mt-[0.2vw] text-[#575757] text-[2.65vw] xs:text-[1.8vw] md:text-[1.2vw] lg:text-[1vw] mb-[1vw] md:mb-[0.4vw] lg:mb-0">
            <div className="flex items-center gap-[1.2vw] ">
              <IoEyeSharp className="text-[#FF5E18] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Views <span>{expert.viewCount}</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <IoPersonAdd className="text-[#5900C9] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Followers <span>{expert.viewCount}</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <RiPagesFill className="text-[#EF0064] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Blogs <span>{expert.viewCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[1vw] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] py-[3vw] xs:py-[2vw] md:py-[1.25vw]">
        <div className="font-bold text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.45vw]">
          Skills
        </div>
        <div className="flex flex-wrap gap-[2vw] xs:gap-[1.6vw] md:gap-[1vw]">
          {expert.allskils.map((item, index) => {
            return (
              <div
                key={index}
                className="px-[3vw] md:px-[2vw] lg:px-[1.6vw] py-[1vw] md:py-[0.6vw] rounded-sm xs:rounded bg-[#ececec] mt-[1.45vw] xs:mt-[1vw] md:mt-auto text-[2.8vw] xs:text-[1.8vw] md:text-[1.18vw] lg:text-[1vw]"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-[1.5vw]">
        <div className="relative w-full lg:w-[60%] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] pt-[3vw] xs:pt-[2vw] md:pt-[1vw]">
          <div className="text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold">
            Contribution Stats
          </div>
          <div className="flex w-full  justify-between items-center text-[3vw] xs:text-[1.6vw] md:text-[1.15vw] lg:text-[0.85vw] overflow-hidden">
            <PieChart
              width={200}
              height={200}
              className="mt-[-4.5vw] xs:mt-auto mb-[-6vw] xs:mb-auto overflow-hidden"
            >
              <Pie
                data={dataPie}
                cx="40%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={75}
                fill="#8884d8"
                dataKey="value"
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
            <div className="w-3/5 md:w-1/2 z-30 text-[1.08vw]">
              <div className=" flex flex-col text-[3vw] xs:text-[1.85vw] md:text-[1.15vw] lg:text-[1vw] gap-[3vw] xs:gap-[2.25vw] md:gap-[1.25vw] lg:gap-[1vw]">
                <div className="flex flex-col gap-[0.4vw]">
                  <div className="">Successful Contributions</div>

                  <ProgressBar percentage={a} color="bg-blue-500" />
                </div>
                <div className="flex flex-col gap-[0.4vw]">
                  <div className="">Sucessful Meetings</div>
                  <ProgressBar percentage={b} color="bg-green-500" />
                </div>
                <div className="flex flex-col gap-[0.4vw]">
                  <div className="">Blogs</div>
                  <ProgressBar percentage={c} color="bg-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-[44vw] xs:h-[32vw] md:h-[24vw] lg:h-auto  border border-[#c7c7c7] border-solid rounded-lg overflow-hidden">
          {/* <div className="text-[1.35] font-bold">Badges</div>
            <div className="text-[1vw] text-[#989898]">{expert.badgecount}</div> */}
          <img
            src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full object-center"
            alt=""
          />
        </div>
      </div>
      <div className="w-full px-[1.8vw] py-[3vw] xs:py-[2vw] md:py-[1.25vw]  rounded-lg border border-[#c7c7c7] border-solid ">
        <div className="w-full">
          <div className="font-bold text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.45vw] mb-[1.6vw]">
            Contribution Heatmap
          </div>
          <div className="w-full overflow-x-scroll">
            <div className="min-w-[220%] xs:min-w-[180%] sm:min-w-[140%] lg:min-w-[100%]">
              <CalendarHeatmap
                startDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                }
                endDate={new Date()}
                values={values}
                classForValue={(value) => {
                  if (!value) {
                    return "color-empty";
                  }
                  return `color-blue-${value.count}`;
                }}
                tooltipDataAttrs={(value) => {
                  return {
                    "data-tip": `${value.date.toDateString()}: ${
                      value.count
                    } contributions`,
                  };
                }}
              />
            </div>
          </div>
        </div>
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
            {expert?.recentContributions?.map((item, idx) => (
              <Contributioncard key={idx} {...item} />
            ))}
          </div>
        )}
        {meetings && (
          <div>
            {expert?.recentMeetings?.map((item, idx) => (
              <div
                key={idx}
                className={`px-3 py-4 my-5 rounded-md ${
                  idx % 2 === 0
                    ? `bg-[#ececec]`
                    : `border border-[#c7c7c7] border-solid`
                }`}
              >
                <div className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                  {item?.serviceTitle}
                </div>
                <div className="sm:flex justify-between gap-5 mt-4">
                  <div className="text-sm">
                    <div>Customer Name: {item?.customerName}</div>
                    <div className="my-2">
                      Service Price: {item?.servicePrice}
                    </div>
                    <div>Service Details: XYZ</div>
                  </div>
                  <div className="text-sm mt-2 sm:mt-0">
                    <div>Time Stamp: {item?.serviceDuration}</div>
                    <div className="my-2">Meeting Id: {item?.meetingId}</div>
                    <div>Date of Meeting: {item?.serviceDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {blogs && <ExpertBlogs />}
      </div>
    </section>
  );
};

export const Chats = () => {
  const [chatDetail, setChatDetail] = useState(false);
  return (
    <div className="w-full md:w-[68%] ">
      <div className="flex items-center justify-between text-xl font-bold border-b border-solid border-slate-200 pb-3">
        <div className="">
          Chats
        </div>
        <div className="flex justify-center gap-3">
          <IoMdSettings/>
          <BsThreeDotsVertical/>
        </div>
      </div>
      <div className="mt-6 flex gap-5">
        <div className="w-full">
          {expert?.chats.map((item) => (
            <div
              className="cursor-default px-2 py-3 flex items-center gap-4 border border-solid border-slate-200"
              onClick={() =>
                chatDetail ? setChatDetail(false) : setChatDetail(true)
              }
            >
              <img
                src={item?.img}
                className="h-12 w-12 rounded-full object-cover shrink-0"
                alt="img"
              />
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold">{item?.name}</div>
                <div className="text-xs line-clamp-1 xs:w-[200px]">
                  {item?.comment}
                </div>
              </div>
              <div className="ml-auto text-xs shrink-0">{item?.lastSeen}</div>
            </div>
          ))}
        </div>
        {chatDetail && (
          <div className="w-[100%] bg-red-600">
            <div>naman</div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Leaderboard = () => {
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState(true);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState(false);
  const handleWeeklyLeaderboard = () => {
    setWeeklyLeaderboard(true);
    setMonthlyLeaderboard(false);
  };
  const handleMonthlyLeaderboard = () => {
    setWeeklyLeaderboard(false);
    setMonthlyLeaderboard(true);
  };
  return (
    <div className="w-full md:w-[68%] flex flex-col ">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Leaderboard
      </div>
      <div className="flex self-center gap-[10vw] bg-[#ececec] p-2 rounded-xl w-fit mt-10">
        <div
          className={`px-3 py-2 text-center text-sm sm:text-base rounded-xl cursor-pointer ${
            weeklyLeaderboard ? "bg-[#bdb8b8]" : "bg-[#ececec]"
          }`}
          onClick={() => handleWeeklyLeaderboard()}
        >
          Weekly Leaderboard
        </div>
        <div
          className={`px-3 py-2 text-center text-sm sm:text-base rounded-xl cursor-pointer ${
            monthlyLeaderboard ? "bg-[#bdb8b8]" : "bg-[#ececec]"
          }`}
          onClick={() => handleMonthlyLeaderboard()}
        >
          Monthly Leaderboard
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly flex-wrap gap-2">
        <div className="text-sm flex flex-col self-center gap-3 mt-10 border border-solid border-slate-300 rounded-xl px-[3vw] py-4 shrink-0">
          <div>Current Week: 17-23 Mar</div>
          <div>No. of participants: 30</div>
        </div>
        <div className="flex flex-col items-center self-center gap-3 mt-10 border border-solid border-slate-300 rounded-xl px-[vw] py-2 shrink-0">
          <div className="text-base">Your Ranking</div>
          <div className="flex items-center">
            <div className="flex flex-col items-center px-5 text-sm">
              <MdOutlineStarBorderPurple500 />
              <div>19209</div>
            </div>
            <div className="flex flex-col items-center px-5 text-sm border-x border-solid border-slate-300">
              <BsGlobe />
              <div>12875</div>
            </div>
            <div className="flex flex-col items-center px-5 text-sm">
              <IoLocationOutline />
              <div>87678</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-solid border-slate-300 flex flex-col items-center justify-center rounded-xl mt-10 px-4">
        <div className="relative flex h-[50vw] sm:h-[280px] items-end mt-12">
          <div className="w-[25vw] min-h-[28vw] max-h-[28vw] sm:w-36 sm:min-h-36 sm:max-h-36 bg-[#1E2237] text-white text-center rounded-l-lg sm:rounded-l-xl">
            <img
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww"
              className="absolute top-[12vw] left-[5vw] sm:top-20 sm:left-8 h-[15vw] w-[15vw] sm:h-20 sm:w-20 rounded-full object-cover shrink-0 border-2 border-solid border-[#009BD6]"
              alt=""
            />
            <div className="bg-[#009BD6] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[24vw] left-[10.5vw] sm:top-36 sm:left-[3.8rem] flex items-center justify-center">
              <div className="-rotate-45">2</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-white text-center font-semibold mt-[8vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base">Jackson</div>
              <div className="text-[#009BD6] my-[1.3vw] sm:my-0">1847</div>
              <div className="text-[#009BD6]">@username</div>
            </div>
          </div>
          <div className="w-[27vw] min-h-[33vw] max-h-[33vw] sm:w-36 sm:min-h-44 sm:max-h-44 bg-[#252A40] text-white text-center rounded-t-lg sm:rounded-t-xl">
            <div className="text-[#FFAA00] absolute text-[6.5vw] sm:text-4xl top-0 left-[35vw] sm:top-0 sm:left-[12.6rem]">
              <PiCrownFill />
            </div>
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D"
              className="absolute top-[6vw] left-[30vw] h-[17vw] w-[17vw] sm:top-8 sm:left-[170px] sm:h-24 sm:w-24 rounded-full object-cover shrink-0 border-2 border-solid border-[#FFAA00]"
              alt=""
            />
            <div className="bg-[#FFAA00] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[20vw] left-[37vw] sm:top-28 sm:left-[12.8rem] flex items-center justify-center">
              <div className="-rotate-45">1</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-[#FFAA00] text-center font-semibold mt-[9vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base text-white">Eiden</div>
              <div className="my-[1.3vw] sm:my-0">2430</div>
              <div className="text-[#FFAA00]">@username</div>
            </div>
          </div>
          <div className="w-[25vw] min-h-[28vw] max-h-[28vw] sm:w-32 sm:min-h-32 sm:max-h-32 bg-[#1E2237] text-white text-center rounded-r-lg sm:rounded-r-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute top-[12vw] right-[5vw] sm:top-24 sm:right-8 h-[15vw] w-[15vw] sm:h-20 sm:w-20 rounded-full object-cover shrink-0 border-2 border-solid border-[#00D95F]"
              alt=""
            />
            <div className="bg-[#00D95F] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[24vw] right-[10.5vw] sm:top-40 sm:right-[3.8rem] flex items-center justify-center">
              <div className="-rotate-45">3</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-white font-semibold mt-[8vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base">Jackson</div>
              <div className="text-[#00D95F] my-[1.3vw] sm:my-0">1847</div>
              <div className="text-[#00D95F]">@username</div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mt-10 mb-5 border-b border-solid border-slate-200 pb-3 text-base sm:text-lg">
            <div className="flex items-center gap-[8vw]">
              <div>Rank</div>
              <div>Name</div>
            </div>
            <div>Score</div>
          </div>
          <div>
            {leaderboardRanking.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-1 py-3"
              >
                <div className="flex items-center gap-[8vw]">
                  <div className="text-sm sm:text-base shrink-0">
                    {item?.rank}
                  </div>
                  <div className="flex gap-3 sm:gap-6 items-center w-[300px] ">
                    <img
                      src={item?.img}
                      alt="img"
                      className="h-10 w-10 rounded-full object-cover shrink-0"
                    />
                    <div className="text-sm sm:text-base shrink-0">
                      {item?.name}
                    </div>
                  </div>
                </div>
                <div className="text-sm sm:text-base shrink-0">
                  {item?.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertDashboard = () => {
  const [showEditProfile,setShowEditProfile] = useState(false); 
  const handleShowEditProfile = () => {
    setShowEditProfile(false);
  }

  return (
    <div className={`${showEditProfile ? "overflow-y-hidden" : "overflow-y-auto"} mt-[85px] px-[7vw] w-full h-full flex gap-[1vw]`}>
      {
        <section className={`w-[32%] hidden md:flex h-fit border border-[#c7c7c7] border-solid flex-col rounded-lg`}>
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
              <div className= "py-[0.4vw] text-[1.25vw]">
                <FaEdit onClick={()=> !showEditProfile ? setShowEditProfile(true):null }  />
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
              <Link to="">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <MdSpaceDashboard className="text-[1.65vw]" />
                  Dashboard
                </li>
              </Link>
              <Link to="leaderboard">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaMedal className="text-[1.65vw]" />
                  Leaderboard
                </li>
              </Link>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <FaWallet className="text-[1.55vw]" />
                Wallet
              </li>
              <Link to="chats">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <BsFillChatSquareTextFill className="text-[1.55vw]" />
                  Chat
                </li>
              </Link>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <BsFillPatchCheckFill className="text-[1.55vw]" />
                Get Certified
              </li>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <BsFillPersonLinesFill className="text-[1.55vw]" />
                Go to Experts
              </li>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <MdInsertPageBreak className="text-[1.55vw]" />
                My Blogs
              </li>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <IoSettings className="text-[1.55vw]" />
                Settings
              </li>
            </ul>
          </div>
        </section>
      }
      <Outlet>
        <Dashboard />
        <Chats />
      </Outlet>
      {showEditProfile===true && <Update profile={showEditProfile} handleShowEditProfile={handleShowEditProfile}/>}
    </div>
  );
};

export default ExpertDashboard;
