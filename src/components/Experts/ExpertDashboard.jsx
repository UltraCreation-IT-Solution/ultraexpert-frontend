import React, { useEffect, useState } from "react";
import Update from "./EditDashboardProfile";
import Instructions from "../GetCertified/Instructions";
import {
  FaEdit,
  FaTags,
  FaWallet,
  FaMedal,
  FaRegTrashAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdSpaceDashboard,
  MdInsertPageBreak,
  MdOutlineStarBorderPurple500,
  MdOpenInNew,
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
  IoBookmarksSharp,
} from "react-icons/io5";
import {
  BsFillPatchCheckFill,
  BsGlobe,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { RiPagesFill, RiArrowRightSLine, RiCustomerService2Fill } from "react-icons/ri";
import { PiCrownFill } from "react-icons/pi";
import ShowBlogs from "../../subsitutes/ShowBlogs";
import {
  BookingCard,
  expertDashInfo as expert,
  expertDashInfo,
  expertDetailsObj,
  leaderboardRanking,
} from "../../constant";
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Outlet, Link } from "react-router-dom";
import axios from "../../axios";
import CreateProject from "./CreateProject";

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
//linegrapgh data
const userProfileData = [
  {
    name: "Jan",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Feb",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Mar",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Apr",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "May",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Jun",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Jul",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Aug",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Sep",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Oct",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Nov",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
  {
    name: "Dec",
    views: 4000,
    followers: 2400,
    blogs: 2400,
  },
];

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
export const TestimonialsCard = ({ item, index }) => {
  const [comment, setComment] = useState(item?.content);
  const [readOnly, setReadOnly] = useState(true);
  const [editTestimonial, setEditTestimonial] = useState(false);
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleEdit = () => {
    setReadOnly(false);
    setEditTestimonial(true);
  };
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const handleSubmitEditedTestimonial = async (e, id) => {
    try {
      const response = await axios.post(
        "/testimonial/",
        {
          action: 2,
          id: { id },
          content_json: { comment },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      setEditTestimonial(false);
      setReadOnly(true);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`px-14 py-4 my-5 rounded-md relative ${
          index % 2 == 0
            ? "bg-[#ececec]"
            : "border border-solid border-[#c7c7c7]"
        }`}
      >
        <div className="flex items-center justify-between text-sm font-semibold">
          <div className="text-sm ">{item?.date_created?.split("T")[0]}</div>
          <div className="flex items-center gap-3">
            <FaEdit className="text-xl" onClick={handleEdit} />
            <FaRegTrashAlt className="text-xl" />
          </div>
        </div>
        <textarea
          readOnly={readOnly}
          value={comment}
          onChange={handleComment}
          rows="5"
          className={`bg-inherit min-w-[100%] max-w-[100%] line-clamp-3 text-sm mt-4 focus:outline-none rounded-md ${
            editTestimonial ? "border border-solid border-[#c7c7c7] p-1" : ""
          }`}
        />
        {editTestimonial && (
          <div
            className="px-3 py-2 mt-4 rounded-sm bg-green-500 text-white w-fit cursor-pointer"
            onClick={handleSubmitEditedTestimonial(item.id)}
          >
            Submit
          </div>
        )}
      </div>
    </>
  );
};

const ShowMyProjects = () => {
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("/experts/?action=1", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        console.log(response.data.data.projects);
        setMyProjects(response.data.data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, [addProjectOpen]);
  return (
    <div>
      {!addProjectOpen && (
        <div
          onClick={() => setAddProjectOpen(true)}
          className="text-sm md:text-base text-white bg-emerald-500 rounded-md px-4 py-2 w-fit flex items-center gap-2 cursor-pointer"
        >
          Add a new project <MdOpenInNew className="text-base ms:text-xl" />
        </div>
      )}
      {addProjectOpen && (
        <CreateProject setAddProjectOpen={setAddProjectOpen} />
      )}
      {console.log(myProjects)}
      {!addProjectOpen &&
        myProjects?.map((items, index) => (
          <div
            className={`px-3 py-4 my-6 rounded-md sm:flex justify-between gap-5  ${
              index % 2 === 0
                ? `bg-[#ececec]`
                : `border border-[#c7c7c7] border-solid `
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <img
                className=" w-full h-48 object-cover sm:h-36 sm:w-40 rounded-md shrink-0 self-start"
                src={items?.image}
                alt=""
              />
              <div className="text-[#575757]">
                <div className="text-lg font-semibold line-clamp-2 text-balance">
                  {items?.title}
                </div>
                <div className="my-2 text-sm line-clamp-3 text-balance">
                  {items?.description}
                </div>
              </div>
            </div>
          </div>
        ))}
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

  // API integration for testimonials of expert start--->>>
  const [expertAllTestimonials, setExpertAllTestimonials] = useState([]);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getExpertAllTestimonials = async () => {
    try {
      const response = await axios.get(`/testimonial/?action=3`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      console.log(response.data.data);
      setExpertAllTestimonials(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // API integration for testimonials of expert end--->>>

  const [contributions, setContributions] = useState(true);
  const [meetings, setMeetings] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  const [projects, setProjects] = useState(false);
  const [avgRating, setAvgRating] = useState(true);
  const [ratingDistribution, setRatingDistribution] = useState(false);

  const HandleContributions = () => {
    setContributions(true);
    setMeetings(false);
    setBlogs(false);
    setTestimonials(false);
    setProjects(false);
  };
  const HandleMeetings = () => {
    setContributions(false);
    setMeetings(true);
    setBlogs(false);
    setTestimonials(false);
    setProjects(false);
  };
  const HandleBlogs = () => {
    setContributions(false);
    setMeetings(false);
    setBlogs(true);
    setTestimonials(false);
    setProjects(false);
  };
  const HandleTestimonials = () => {
    setContributions(false);
    setMeetings(false);
    setBlogs(false);
    setTestimonials(true);
    setProjects(false);
  };
  const HandleProjects = () => {
    setContributions(false);
    setMeetings(false);
    setBlogs(false);
    setTestimonials(false);
    setProjects(true);
  };
  const HandleAvgRating = () => {
    setAvgRating(true);
    setRatingDistribution(false);
  };
  const HandleRatingDistribution = () => {
    setAvgRating(false);
    setRatingDistribution(true);
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
  const userProfileData = [
    {
      month: "Jan",
      views: 3962,
      followers: 2289,
      blogs: 3095,
    },
    {
      month: "Feb",
      views: 4527,
      followers: 3429,
      blogs: 2790,
    },
    {
      month: "Mar",
      views: 4669,
      followers: 3209,
      blogs: 2277,
    },
    {
      month: "Apr",
      views: 3211,
      followers: 2321,
      blogs: 2798,
    },
    {
      month: "May",
      views: 4578,
      followers: 3243,
      blogs: 3191,
    },
    {
      month: "Jun",
      views: 3506,
      followers: 2834,
      blogs: 3599,
    },
    {
      month: "Jul",
      views: 4623,
      followers: 2397,
      blogs: 3120,
    },
    {
      month: "Aug",
      views: 4251,
      followers: 2856,
      blogs: 2368,
    },
    {
      month: "Sep",
      views: 4713,
      followers: 2623,
      blogs: 2212,
    },
    {
      month: "Oct",
      views: 4138,
      followers: 2310,
      blogs: 3783,
    },
    {
      month: "Nov",
      views: 3801,
      followers: 3492,
      blogs: 3939,
    },
    {
      month: "Dec",
      views: 3365,
      followers: 3053,
      blogs: 3640,
    },
  ];
  return (
    <section className="w-full md:w-[68%] h-full flex flex-col gap-[4.5vw] xs:gap-[3vw] md:gap-[2vw]">
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
      <div className="w-full h-[36vw] xs:h-[28vw] md:h-[16vw] lg:h-[18vw]  text-[2.65vw] xs:text-[1.8vw] sm:text-[1.6vw] md:text-[1vw] border border-[#c7c7c7] border-solid rounded-lg py-[3vw] xs:py-[2vw] md:py-[1vw] overflow-hidden">
        <div className="text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.35vw] font-bold px-[2vw]  pb-[0.4vw]">
          Statistics
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-between overflow-hidden">
          <ResponsiveContainer
            className="-ml-[2vw] mb-[1vw] overflow-hidden"
            width="75%"
            height="90%"
          >
            <LineChart
              className="overflow-hidden"
              data={userProfileData}
              margin={{
                top: 20,
                right: 50,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                dataKey="month"
                interval={0}
              />
              <YAxis
                className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                dataKey="views"
                interval={0}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#8884d8" />
              <Line type="monotone" dataKey="followers" stroke="#82ca9d" />
              <Line type="monotone" dataKey="blogs" stroke="#f2e426" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex md:flex-col justify-between md:justify-around h-[80%] mt-[1.4vw] md:mt-[1vw] lg:mt-[0.2vw] text-[#575757] text-[2.65vw] xs:text-[1.8vw] md:text-[1.2vw] lg:text-[1vw] mb-[1vw] md:mb-[0.4vw] lg:mb-0 px-[2vw] md:border-l border-[#2e2e2e] border-solid">
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
      <div className="w-full flex flex-col lg:flex-row border border-[#c7c7c7] border-solid rounded-lg py-[3vw] xs:py-[2vw] md:py-[1vw] shadow-md">
        <div className=" w-[108%] xs:w-[100%]  overflow-hidden">
          <div className="flex gap-3 border-b border-solid border-[#c7c7c7] pb-4 mb-4 text-sm md:text-base overflow-x-scroll px-2">
            <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                avgRating && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleAvgRating()}
            >
              Average Rating
            </div>
            <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                ratingDistribution && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleRatingDistribution()}
            >
              Rating Distribution
            </div>
          </div>
          {avgRating && (
            <div className="flex justify-between px-[1vw]">
              <div className="w-[110%] h-[38vw] xs:h-[28vw] md:h-[16vw] lg:h-[14vw] ml-[-10vw] xs:ml-[-7.65vw] sm:ml-[-6vw] md:ml-[-3.4vw] lg:ml-[-2.6vw] mt-[2vw] md:mt-[0.8vw] mb-[-1vw] text-[2.65vw] xs:text-[1.8vw] sm:text-[1.6vw] md:text-[1vw] overflow-hidden">
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
                    <Bar dataKey="avgRating" barSize={30} fill="#629BF0" />
                    <Line dataKey="avgRating" stroke="#5950C9" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          {ratingDistribution && (
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
          )}
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
          <div
            className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
              testimonials && `bg-[#ececec] rounded-sm`
            }`}
            onClick={() => {
              getExpertAllTestimonials();
              HandleTestimonials();
            }}
          >
            Testimonials
          </div>
          <div
            className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
              projects && `bg-[#ececec] rounded-sm`
            }`}
            onClick={() => HandleProjects()}
          >
            Projects
          </div>
        </div>
        {/* Contributions section of dashboard */}
        {contributions && (
          <div>
            {expert?.recentContributions?.map((item, idx) => (
              <Contributioncard key={idx} {...item} />
            ))}
          </div>
        )}
        {/* Meetings section of dashboard */}
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
                <div className="text-base font-semibold line-clamp-2">
                  {item?.serviceTitle}
                </div>
                <div className="sm:flex justify-between gap-5 mt-4">
                  <div className="text-sm">
                    <div>Customer Name: {item?.customerName}</div>
                    <div className="my-2">
                      Service Price: {item?.servicePrice}
                    </div>
                    <div className="my-2">Meeting Id: {item?.meetingId}</div>
                  </div>
                  <div className="text-sm mt-2 sm:mt-0">
                    <div>Date of Meeting: {item?.serviceDate}</div>
                    <div className="my-2">Start Time: {item?.startTime}</div>
                    <div>End Time: {item?.startTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Blogs section of dashboard */}
        {blogs && <ShowBlogs />}
        {/* Testimonials section of dashboard */}
        {testimonials &&
          expertAllTestimonials?.map((item, index) => (
            <TestimonialsCard key={index} item={item} index={index} />
          ))}
        {/* Project section of dashboard */}
        {projects && <ShowMyProjects />}
      </div>
    </section>
  );
};

export const Chats = () => {
  const [chatDetail, setChatDetail] = useState(false);
  return (
    <div className="w-full md:w-[68%] ">
      <div className="flex items-center justify-between text-xl font-bold border-b border-solid border-slate-200 pb-3">
        <div className="">Chats</div>
        <div className="flex justify-center gap-3">
          <IoMdSettings />
          <BsThreeDotsVertical />
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
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  useEffect(() => {
    handleWeeklyLeaderboard();
  }, []);
  const handleWeeklyLeaderboard = async () => {
    try {
      const response = await axios.get("/experts/?action=2", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      console.log(response.data);
      const expData = response.data.data;
      console.log(expData);
      setLeaderBoardData(expData);
      setWeeklyLeaderboard(true);
      setMonthlyLeaderboard(false);
    } catch (error) {
      console.log(error);
    }
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
            {leaderBoardData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-1 py-3"
              >
                <div className="flex items-center gap-[8vw]">
                  <div className="text-sm sm:text-base shrink-0">
                    {item.rank}
                  </div>
                  <div className="flex gap-3 sm:gap-6 items-center w-[300px] ">
                    <img
                      src={item.profile_img}
                      alt="Profile"
                      className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-center object-cover shrink-0"
                    />
                    <div className="text-sm sm:text-base shrink-0">
                      {item.expert_name}
                    </div>
                  </div>
                </div>
                <div className="text-sm sm:text-base shrink-0">
                  {item.avg_score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyBookings = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Active Bookings
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600 font-bold my-5 overflow-x-scroll">
        <div className="flex items-center xs:gap-[4vw] shrink-0">
          <div className="w-[200px]">Client Name</div>
          <div className="hidden sm:block w-[120px] ">Scheduled Date</div>
          <div className="shrink-0 w-[60px]">Action</div>
        </div>
        <div className="shrink-0 text-right w-[60px] "></div>
      </div>
      {expertDashInfo?.myBookings.map((item, index) => (
        <BookingCard item={item} key={index} />
      ))}
    </div>
  );
};

const ExpertDashboard = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const handleShowEditProfile = () => {
    setShowEditProfile(false);
  };
  const [showInstructions, setShowInstructions] = useState(false);
  const handleShowInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <div
      className={`${
        showEditProfile ? "overflow-y-hidden" : "overflow-y-auto"
      } mt-[85px] px-[7vw] w-full h-full flex gap-[1vw]`}
    >
      {
        <section
          className={`w-[32%] hidden md:flex h-fit border border-[#c7c7c7] border-solid flex-col rounded-lg`}
        >
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
                <FaEdit
                  onClick={() =>
                    !showEditProfile ? setShowEditProfile(true) : null
                  }
                />
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
              <Link to="" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <MdSpaceDashboard className="text-[1.65vw]" />
                  Dashboard
                </li>
              </Link>
              <Link to="leaderboard" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaMedal className="text-[1.65vw]" />
                  Leaderboard
                </li>
              </Link>
              <Link to="mybookings" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <IoBookmarksSharp className="text-[1.65vw]" />
                  Bookings
                </li>
              </Link>
              <Link to="createservice" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <RiCustomerService2Fill className="text-[1.65vw]" />
                  Create service
                </li>
              </Link>
              <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <FaWallet className="text-[1.55vw]" />
                Wallet
              </li>
              <Link to="chats" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <BsFillChatSquareTextFill className="text-[1.55vw]" />
                  Chat
                </li>
              </Link>
              <li
                className="cursor-pointer flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]"
                onClick={() => setShowInstructions(true)}
              >
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
        <Leaderboard />
        <MyBookings />
      </Outlet>
      {showEditProfile === true && (
        <Update handleShowEditProfile={handleShowEditProfile} />
      )}
      {showInstructions === true && (
        <Instructions handleShowInstructions={handleShowInstructions} />
      )}
    </div>
  );
};

export default ExpertDashboard;
