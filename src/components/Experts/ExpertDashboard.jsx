import React, { useEffect, useState } from "react";
import Update from "./EditDashboardProfile";
import {
  FaEdit,
  FaTags,
  FaWallet,
  FaMedal,
  FaRegTrashAlt,
  FaUser,
  FaChalkboardTeacher,
  FaPlus,
} from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import {
  MdSpaceDashboard,
  MdOpenInNew,
  MdOutlineContentCopy,
  MdOutlineEdit,
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
  IoStar,
} from "react-icons/io5";
import {
  BsFillPatchCheckFill,
  BsGlobe,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  RiPagesFill,
  RiArrowRightSLine,
  RiCustomerService2Fill,
  RiDeleteBin6Fill,
} from "react-icons/ri";
import { PiCrownFill } from "react-icons/pi";
import ShowBlogs from "../../subsitutes/ShowBlogs";
import BookingCard from "../../subsitutes/BookingCard";
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  BarChart,
  Rectangle,
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
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import UpdateProject from "./UpdateProjeect";
import EditProfileExpert from "../Auth/EditProfileExpert";
import SkillList from "../GetCertified/Instructions";
import TextShimmer from "../../subsitutes/Shimmers/TextShimmer";

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
export const TestimonialsCard = ({
  item,
  index,
  HandleBlogs,
  HandleTestimonials,
  getExpertAllTestimonials,
}) => {
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
    e.preventDefault();
    console.log(id);
    try {
      const response = await axios.post(
        "/testimonial/",
        {
          action: 2,
          id: id,
          content_json: comment,
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
      handleupdates();
      setReadOnly(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleupdates = () => {
    HandleBlogs();
    getExpertAllTestimonials();
    HandleTestimonials();
  };
  const handleDeleteTestimonial = async (id) => {
    console.log(id);
    try {
      const response = await axios.post(
        "/testimonial/",
        {
          action: 3,
          testimonial_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response);
      handleupdates();
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
            <FaEdit className="text-xl text-blue-800" onClick={handleEdit} />
            <FaRegTrashAlt
              onClick={() => handleDeleteTestimonial(item.id)}
              className="text-xl text-red-500"
            />
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
            onClick={(e) => handleSubmitEditedTestimonial(e, item.id)}
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
          className="text-sm md:text-base text-white btnBlack rounded-sm px-4 py-2 w-fit flex items-center gap-2 cursor-pointer"
        >
          Add or Edit a project <MdOpenInNew className="text-base ms:text-xl" />
        </div>
      )}
      {addProjectOpen && (
        <UpdateProject
          setAddProjectOpen={setAddProjectOpen}
          getBackWidth={window.scrollY}
        />
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
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  const [loading, setLoading] = useState(false);

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
  const changeAuth = async () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
    const refresh_token = getCookie("refresh_token");
    if (!refresh_token) {
      //clear local storage and go back to login
      localStorage.clear();
      navigate("/login");
    } else {
      try {
        const res = await axios.post(
          "/refresh/",
          {
            refresh: `${refresh_token}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        const expirationDateforAccess = new Date();
        const expirationDateforRefresh = new Date();
        expirationDateforAccess.setDate(expirationDateforAccess.getDate() + 7);
        expirationDateforRefresh.setDate(
          expirationDateforRefresh.getDate() + 8
        );
        document.cookie = `access_token=${
          res.data.access
        };expires=${expirationDateforAccess.toUTCString()};  SameSite=Lax;`;
        document.cookie = `refresh_token=${
          res.data.refresh
        };expires=${expirationDateforRefresh.toUTCString()};  SameSite=Lax;`;
        // localStorage.setItem("userId", `${res.data.id}`);
        localStorage.setItem("username", `${res.data.user.first_name}`);
        localStorage.setItem("profile", `${res.data.user.profile_img}`);
        localStorage.setItem("isExpert", `${res.data.user.is_expert}`);
        localStorage.setItem("isAuthor", `${res.data.user.is_author}`);
        localStorage.setItem("isCustomer", `${res.data.user.is_customer}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const isAuthChecked = sessionStorage.getItem("isAuthChecked");
    if (!isAuthChecked) {
      // If not, call the function and set the flag in sessionStorage
      changeAuth();
      sessionStorage.setItem("isAuthChecked", "true");
    }
  }, []);
  const [expertData, setExpertData] = useState({});
  const [expertStatistics, setExpertStatistics] = useState([]);
  const getCurrentExpert = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        response.data.status === 401 ||
        response.data.status === 400 ||
        response.data.status === 500
      ) {
        console.log(response.data.message);
        return;
      }
      console.log(response.data);
      setLoading(false);
      setExpertData(response.data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getExpertStatistics = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=3", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        response.data.status === 401 ||
        response.data.status === 400 ||
        response.data.status === 500
      ) {
        console.log(response.data.message);
        return;
      }
      console.log("statistics", response.data);
      setLoading(false);
      setExpertStatistics(response.data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getExpertStatistics();
    getCurrentExpert();
  }, []);

  // API integration for testimonials of expert start--->>>
  const [expertAllTestimonials, setExpertAllTestimonials] = useState([]);
  const getExpertAllTestimonials = async () => {
    setLoading(true);
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
        setExpertAllTestimonials([]);
        return;
      }
      console.log(response.data.data);
      setLoading(false);
      setExpertAllTestimonials(response.data.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setExpertAllTestimonials([]);
    }
  };
  // API integration for testimonials of expert end--->>>

  const [meetings, setMeetings] = useState(true);
  const [blogs, setBlogs] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  const [projects, setProjects] = useState(false);
  const [avgRating, setAvgRating] = useState(true);
  const [ratingDistribution, setRatingDistribution] = useState(false);

  const [blogData, setBlogData] = useState([]);

  const HandleMeetings = () => {
    setMeetings(true);
    setBlogs(false);
    setTestimonials(false);
    setProjects(false);
  };
  const HandleBlogs = () => {
    setMeetings(false);
    setBlogs(true);
    setTestimonials(false);
    setProjects(false);
  };

  const getExpertAllBlogs = async () => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setLoading(true);
    try {
      const res = await axios.get("/blogs/?action=2", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const allData = res.data.data;
      console.log(allData);
      setLoading(false);
      setBlogData(allData);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const HandleTestimonials = () => {
    setMeetings(false);
    setBlogs(false);
    setTestimonials(true);
    setProjects(false);
  };
  const HandleProjects = () => {
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
  const [basicStats, setBasicStats] = useState(true);
  const [extraStats, setExtraStats] = useState(false);
  const HandleBasicStats = () => {
    setLoading(true);
    setBasicStats(true);
    setExtraStats(false);
    setLoading(false);
  };
  const HandleExtraStats = () => {
    setLoading(true);
    setBasicStats(false);
    setExtraStats(true);
    setLoading(false);
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

  const navigate = useNavigate();
  return (
    <section className="w-full md:w-[68%] h-full flex flex-col gap-[4.5vw] xs:gap-[3vw] md:gap-[2vw]">
      <div className="block md:hidden w-full h-auto px-[0.8vw] py-[4.5vw] xs:py-[3vw] border-b-[0.01px] border-[#dcdcdc] border-solid">
        <div className="flex justify-between">
          <div className="flex gap-[2.65vw] xs:gap-[2.25vw]">
            <img
              src={expertData.profile_img}
              className="w-[20vw] h-[20vw] xs:w-[14vw] xs:h-[14vw] sm:w-[12vw] sm:h-[12vw] rounded-lg object-cover object-center shrink-0"
              alt="profileImg"
            />
            <div className="flex flex-col justify-between py-[0.2vw]">
              <div className=" flex flex-col gap-[0.8vw] xs:gap-[0.5vw] ">
                <div className="font-bold text-[4vw] xs:text-[2.8vw] sm:text-[2.65vw]">
                  {expertData.first_name} {expertData.last_name}
                </div>
                <div className="font-medium text-[3.55vw] xs:text-[2.25vw] sm:text-[2vw] text-[#8F8F8F]">
                  UltraXpert
                </div>
              </div>
              <div className="font-semibold text-[3.8vw] xs:text-[2.5vw] sm:text-[2.25vw] text-black/60">
                {expertData?.profession}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4vw] xs:mt-[2.25vw] w-full text-[3.25vw] xs:text-[2.25vw] sm:text-[2vw] text-[#525252] line-clamp-3">
          {expertData.about_me}
        </div>
        <div className="mt-[3.65vw] xs:mt-[2vw] flex flex-col gap-[2.25vw] xs:gap-[1.65vw]">
          <div className="flex gap-[1.65vw] items-center text-[3.25vw] xs:text-[2.25vw] sm:text-[2vw] text-[#515151]">
            <FaTags className="text-[4.45vw] xs:text-[2.9vw] sm:text-[2.65vw]" />
            <div className="flex ">
              {expertData?.skills?.slice(0, 3)?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="px-[3vw] xs:px-[2.2vw] sm:px-[2.4vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] border border-[#cdcdcd] border-solid"
                  >
                    {item.technology_name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[36vw] xs:h-[28vw] md:h-[18vw] lg:h-[20vw]  text-[2.65vw] xs:text-[1.8vw] sm:text-[1.6vw] md:text-[1vw] border border-[#c7c7c7] border-solid rounded-lg py-[3vw] xs:py-[2vw] md:py-[1vw] flex justify-between">
        <div className="w-[72%] h-full px-2">
          <div className="flex gap-3 border-b border-solid border-[#c7c7c7] pb-4 mb-4 text-sm md:text-base overflow-x-scroll px-2">
            <div
              className={
                loading
                  ? `text-gray-300`
                  : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                      basicStats && `bg-[#ececec] rounded-sm`
                    }`
              }
              onClick={() => HandleBasicStats()}
            >
              Basic Stats
            </div>
            <div
              className={
                loading
                  ? `text-gray-300`
                  : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                      extraStats && `bg-[#ececec] rounded-sm`
                    }`
              }
              onClick={() => HandleExtraStats()}
            >
              Other Stats
            </div>
          </div>
          {basicStats && (
            <ResponsiveContainer
              className="-ml-[2vw] mb-[1vw] overflow-hidden"
              width="110%"
              height="70%"
            >
              <LineChart
                className="overflow-hidden"
                data={expertStatistics}
                margin={{
                  top: 20,
                  right: 50,
                  left: 2,
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
                  dataKey="profile_view_count"
                  interval={0}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="profile_view_count"
                  stroke="#8884d8"
                />
                <Line
                  type="monotone"
                  dataKey="service_view_count"
                  stroke="#82ca9d"
                />
                <Line
                  type="monotone"
                  dataKey="blog_views_count"
                  stroke="#f2e426"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
          {extraStats && (
            <ResponsiveContainer width="105%" height="70%">
              <BarChart
                width={500}
                height={300}
                data={expertStatistics}
                margin={{
                  top: 5,
                  right: 30,
                  left: -20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="followers_count"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="avg_score"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
                <Bar
                  dataKey="service_count"
                  fill="#822a9d"
                  activeBar={<Rectangle fill="red" stroke="purple" />}
                />
                <Bar
                  dataKey="rating_count"
                  fill="#82fa9d"
                  activeBar={<Rectangle fill="blue" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="w-[28%] h-full md:border-l border-[#2e2e2e] border-solid">
          <div className="flex md:flex-col justify-between md:justify-around h-[80%] mt-[1.4vw] md:mt-[1vw] lg:mt-[0.2vw] text-[#575757] text-[2.65vw] xs:text-[1.8vw] md:text-[1.2vw] lg:text-[1vw] mb-[1vw] md:mb-[0.4vw] lg:mb-0 px-[2vw]">
            <div className="flex items-center gap-[1.2vw] ">
              <IoEyeSharp className="text-[#FF5E18] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Views <span>{expertData.profile_view_count}</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <IoPersonAdd className="text-[#5900C9] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Followers <span>{expertData.followers_count}</span>
            </div>
            <div className="flex items-center gap-[1.2vw]">
              <RiPagesFill className="text-[#EF0064] text-[3.65vw] xs:text-[2.65vw] md:text-[1.65vw] lg:text-[1.45vw]" />{" "}
              Blogs <span>{expertData.blog_views_count}</span>
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
            {/* <div
              className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                ratingDistribution && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleRatingDistribution()}
            >
              Rating Distribution
            </div> */}
          </div>
          {avgRating && (
            <div className="flex justify-between px-[1vw]">
              <div className="w-[110%] h-[38vw] xs:h-[28vw] md:h-[16vw] lg:h-[14vw] ml-[-10vw] xs:ml-[-7.65vw] sm:ml-[-6vw] md:ml-[-3.4vw] lg:ml-[-2.6vw] mt-[2vw] md:mt-[0.8vw] mb-[-1vw] text-[2.65vw] xs:text-[1.8vw] sm:text-[1.6vw] md:text-[1vw] overflow-hidden">
                <ResponsiveContainer>
                  <ComposedChart
                    data={expertStatistics}
                    className="overflow-hidden"
                  >
                    <CartesianGrid stroke="#629BF0" />
                    <XAxis
                      className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                      dataKey="month"
                      interval={0}
                    />
                    <YAxis
                      className="text-[2vw] xs:text-[1.35vw] md:text-[1vw] lg:text-[0.8vw]"
                      dataKey={"avg_rating"}
                      interval={0}
                    />
                    <Tooltip />
                    <Area dataKey="avg_rating" fill="#ececec" />
                    <Bar dataKey="avg_rating" barSize={30} fill="#629BF0" />
                    <Line dataKey="avg_rating" stroke="#5950C9" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
          {/* {ratingDistribution && (
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
          )} */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-[1vw] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] py-[3vw] xs:py-[2vw] md:py-[1.25vw]">
        <div className="font-bold flex justify-between text-[3.45vw] xs:text-[2.65vw] md:text-[1.8vw] lg:text-[1.45vw]">
          <div>Skills</div>
          <div
            onClick={() => navigate("/expertdashboard/editprofile")}
            className="text-sm underline cursor-pointer font-light"
          >
            <FaPlus size={10} /> Add Skills
          </div>
        </div>
        <div className="flex flex-wrap gap-[2vw] xs:gap-[1.6vw] md:gap-[1vw]">
          {expertData.skills?.map((item, index) => {
            return (
              <div
                key={index}
                className="px-[3vw] md:px-[2vw] lg:px-[1.6vw] py-[1vw] md:py-[0.6vw] rounded-sm xs:rounded bg-[#ececec] mt-[1.45vw] xs:mt-[1vw] md:mt-auto text-[2.8vw] xs:text-[1.8vw] md:text-[1.18vw] lg:text-[1vw]"
              >
                {item.technology_name}
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
            onClick={() => {
              getExpertAllBlogs();
              HandleBlogs();
            }}
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

        {/* Meetings section of dashboard */}
        {/* {meetings && (
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
        )} */}
        {/* Blogs section of dashboard */}
        {blogs && (
          <ShowBlogs
            HandleBlogs={HandleBlogs}
            HandleTestimonials={HandleTestimonials}
            getExpertAllBlogs={getExpertAllBlogs}
            blogArray={blogData}
          />
        )}
        {/* Testimonials section of dashboard */}
        {testimonials && expertAllTestimonials.length === 0 ? (
          <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
            No testimonials found
          </div>
        ) : (
          expertAllTestimonials?.map((item, index) => (
            <TestimonialsCard
              key={index}
              item={item}
              index={index}
              HandleBlogs={HandleBlogs}
              HandleTestimonials={HandleTestimonials}
              getExpertAllTestimonials={getExpertAllTestimonials}
            />
          ))
        )}
        {/* Project section of dashboard */}
        {projects && <ShowMyProjects />}
      </div>
    </section>
  );
};

export const MyServices = () => {
  const navigate = useNavigate();
  const services = Array.from({ length: 3 });
  const [shimmer, setShimmer] = useState(false);
  const [myServices, setMyServices] = useState([]);
  const getMyServices = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setShimmer(true);
    try {
      const res = await axios.get("/experts/services/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (res.data.status === 404) {
        setMyServices([]);
        setShimmer(false);
        return;
      }
      if (!res.data || res.data.status === 400 || res.data.status === 401) {
        console.log(res.data.message);
        setShimmer(false);
        return;
      }
      const json = res.data;
      setMyServices(json.data);
      setShimmer(false);
      console.log(myServices);
    } catch (error) {
      setShimmer(false);
      if (error.response.status === 404) {
        setMyServices([]);
      } else {
        console.log(error);
      }
    }
  };
  const deleteService = async (id) => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 3,
          service_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(res);
      if (!res.data || res.data.status === 400 || res.data.status === 401) {
        console.log(res.data);
        return;
      } else {
        getMyServices();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyServices();
  }, []);
  return (
    <div className="w-full md:w-[68%] ">
      <div className="flex justify-between border-b border-solid border-slate-200 pb-3">
        <div className="text-xl font-bold">My services</div>
        <div
          className="text-base cursor-pointer btnBlack px-4 py-2 rounded-sm text-white"
          onClick={() => {
            navigate("/expertdashboard/createservice");
          }}
        >
          Create a new service
        </div>
      </div>
      <div>
        {shimmer ? (
          <div className="w-full flex flex-col items-center gap-10 mt-5">
            {Array.from({ length: 4 }).map((item, index) => (
              <TextShimmer key={index} />
            ))}
          </div>
        ) : myServices.length === 0 ? (
          <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
            No services created yet
          </div>
        ) : (
          myServices.map((service, index) => (
            <div
              key={index}
              className="mt-5 border border-solid border-slate-300 px-2 sm:px-5 py-2 rounded-md"
            >
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-white text-sm px-3 py-1 rounded-sm text-black cursor-pointer border border-solid border-black">
                  <MdOutlineEdit size={18} /> Edit
                </button>
                <button
                  onClick={() => deleteService(service.id)}
                  className="flex gap-2 items-center btnBlack text-sm px-3 py-1 rounded-sm text-white cursor-pointer"
                >
                  <RiDeleteBin6Fill size={15} /> Delete
                </button>
              </div>
              <div
                className="text-base sm:text-lg font-bold mt-2 line-clamp-3 cursor-pointer"
                onClick={() => navigate(`/experts/service/${service.id}`)}
              >
                {service.service_name}
              </div>
              <div className="mt-2 text-sm text-gray-500 line-clamp-3">
                {service.description}
              </div>
              <div className="flex items-center mt-3 gap-3 text-sm sm:text-base">
                <div className="flex items-center gap-1">
                  <AiOutlineLike /> {service.service_view_count} views
                </div>
                <div className="flex items-center gap-1">
                  <IoStar /> rating
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
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
          {/* {expert?.chats.map((item) => (
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
          ))} */}
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
  const [userData, setUserData] = useState({});
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
      setUserData(response.data.user_data);
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
      {/* <div className="flex self-center gap-[10vw] bg-[#ececec] p-2 rounded-xl w-fit mt-10">
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
      </div> */}

      <div className="border border-solid border-slate-300 flex flex-col items-center justify-center rounded-xl mt-10 px-4">
        <div className="relative flex h-[50vw] sm:h-[280px] items-end mt-12">
          {/* Rank 2 card */}
          <div className="w-[25vw] min-h-[28vw] max-h-[28vw] sm:w-36 sm:min-h-36 sm:max-h-36 bg-[#1E2237] text-white text-center rounded-l-lg sm:rounded-l-xl">
            <img
              src={leaderBoardData[1]?.profile_img}
              className="absolute top-[12vw] left-[5vw] sm:top-20 sm:left-8 h-[15vw] w-[15vw] sm:h-20 sm:w-20 rounded-full object-cover shrink-0 border-2 border-solid border-[#009BD6]"
              alt=""
            />
            <div className="bg-[#009BD6] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[24vw] left-[10.5vw] sm:top-36 sm:left-[3.8rem] flex items-center justify-center">
              <div className="-rotate-45">2</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-white text-center font-semibold mt-[8vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base">
                {leaderBoardData[1]?.expert_first_name}{" "}
                {leaderBoardData[1]?.expert_last_name}
              </div>
              <div className="text-[#009BD6]">
                {/* {leaderBoardData[1].avg_score}{" "}  */}
                {"1"}
              </div>
            </div>
          </div>
          {/* Rank 1 card */}
          <div className="w-[27vw] min-h-[33vw] max-h-[33vw] sm:w-36 sm:min-h-44 sm:max-h-44 bg-[#252A40] text-white text-center rounded-t-lg sm:rounded-t-xl">
            <div className="text-[#FFAA00] absolute text-[6.5vw] sm:text-4xl top-0 left-[35vw] sm:top-0 sm:left-[12.6rem]">
              <PiCrownFill />
            </div>
            <img
              src={leaderBoardData[0]?.profile_img}
              className="absolute top-[6vw] left-[30vw] h-[17vw] w-[17vw] sm:top-8 sm:left-[170px] sm:h-24 sm:w-24 rounded-full object-cover shrink-0 border-2 border-solid border-[#FFAA00]"
              alt=""
            />
            <div className="bg-[#FFAA00] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[20vw] left-[37vw] sm:top-28 sm:left-[12.8rem] flex items-center justify-center">
              <div className="-rotate-45">1</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-[#FFAA00] text-center font-semibold mt-[9vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base text-white">
                {leaderBoardData[0]?.expert_first_name}{" "}
                {leaderBoardData[0]?.expert_last_name}
              </div>
              <div className="text-[#FFAA00]">
                {/* {leaderBoardData[0].avg_score}{" "} */}
                {"1"}
              </div>
            </div>
          </div>
          {/* Rank 3 card */}
          <div className="w-[25vw] min-h-[28vw] max-h-[28vw] sm:w-32 sm:min-h-32 sm:max-h-32 bg-[#1E2237] text-white text-center rounded-r-lg sm:rounded-r-xl">
            <img
              src={leaderBoardData[2]?.profile_img}
              className="absolute top-[12vw] right-[5vw] sm:top-24 sm:right-8 h-[15vw] w-[15vw] sm:h-20 sm:w-20 rounded-full object-cover shrink-0 border-2 border-solid border-[#00D95F]"
              alt=""
            />
            <div className="bg-[#00D95F] w-[4vw] h-[4vw] sm:w-6 sm:h-6 rounded-md text-center text-[2vw] sm:text-xs rotate-45 absolute top-[24vw] right-[10.5vw] sm:top-40 sm:right-[3.8rem] flex items-center justify-center">
              <div className="-rotate-45">3</div>
            </div>
            <div className="text-[2.7vw] sm:text-sm text-white font-semibold mt-[8vw] sm:mt-10">
              <div className="text-[3vw] sm:text-base">
                {leaderBoardData[2]?.expert_first_name}{" "}
                {leaderBoardData[2]?.expert_last_name}
              </div>
              <div className="text-[#00D95F]">
                {/* {leaderBoardData[2]?.avg_score} */}
                {"1"}
              </div>
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
          {/* user data */}
          <div className="flex items-center justify-between gap-1 py-2 my-5 border-y border-solid border-slate-400">
            <div className="flex items-center gap-[8vw]">
              <div className="text-sm sm:text-base shrink-0">
                {userData.rank}
              </div>
              <div className="flex gap-3 sm:gap-6 items-center w-[300px] ">
                <img
                  src={userData.profile_img}
                  alt="Profile"
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-center object-cover shrink-0"
                />
                <div className="text-sm sm:text-base shrink-0">
                  {userData.expert_name}
                </div>
              </div>
            </div>
            <div className="text-sm sm:text-base shrink-0">
              {userData.avg_score}
            </div>
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
                      {item.expert_first_name} {item.expert_last_name}
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

export const MyBookings = ({ expertData, expertId }) => {
  const [shimmer, setShimmer] = useState(false);
  const [myBookings, setMyBookings] = useState([]);
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  useEffect(() => {
    getMyBookings();
  }, []);

  const getMyBookings = async () => {
    setShimmer(true);
    try {
      const res = await axios.get(
        `/experts/services/?action=4&expert_id=${17}`,
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
      setMyBookings(res.data.data);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Active Bookings
      </div>
      {shimmer ? (
        <div className="w-full flex flex-col items-center gap-10 mt-5">
          {Array.from({ length: 4 }).map((item, index) => (
            <TextShimmer key={index} />
          ))}
        </div>
      ) : myBookings.length === 0 ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600">
          No Active Bookings
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between text-sm text-gray-600 font-bold my-5 overflow-x-scroll">
            <div className="flex items-center xs:gap-[4vw] shrink-0">
              <div className="w-[200px]">Client Name</div>
              <div className="hidden sm:block w-[120px] ">Scheduled Date</div>
              <div className="shrink-0 w-[60px]">Action</div>
            </div>
            <div className="shrink-0 text-right w-[60px] "></div>
          </div>
          {myBookings?.map((item, index) => (
            <BookingCard item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
const ExpertDashboard = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const [expertData, setExpertData] = useState({});
  const [expertId, setExpertId] = useState(null);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  const getCurrentExpert = async () => {
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        response.data.status === 401 ||
        response.data.status === 400 ||
        response.data.status === 500
      ) {
        console.log(response.data.message);
        return;
      }
      const json = response.data;
      console.log(json);
      console.log(json.data);
      setExpertData(json.data);
      setExpertId(json.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentExpert();
  }, []);

  console.log(expertId);

  const handleShowEditProfile = () => {
    setShowEditProfile(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(expertData.refer_code)
      .then(() => {
        alert("Referral code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
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
                  src={expertData.profile_img}
                  className="w-[6.5vw] h-[6.5vw] rounded-lg shrink-0 object-cover object-center"
                  alt="profileImg"
                />
                <div className="flex flex-col justify-between py-[0.2vw]">
                  <div className=" flex flex-col gap-[0.5vw] ">
                    <div className="font-bold text-[1.4vw]">
                      {expertData.first_name} {expertData.last_name}
                    </div>
                    <div className="font-medium text-[1vw] text-[#8F8F8F]">
                      UltraXpert
                    </div>
                  </div>
                  <div className="font-semibold text-[1.3vw] text-black/60">
                    {expertData.profession}
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-[1.6vw] w-full text-sm text-[#525252] line-clamp-3">
              {expertData.about_me}
            </div>
            {expertData?.skills?.length !== 0 && (
              <div className="mt-[1.25vw] flex flex-col gap-[1vw]">
                <div className="flex gap-[1.25vw] items-center text-[1.25vw] text-[#515151]">
                  <FaTags />
                  <div className="flex">
                    {expertData?.skills?.slice(0, 3)?.map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className="px-[2.65vw] xs:px-[2.2vw] sm:px-[1.8vw] lg:px-[1vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] text-[2.85vw] xs:text-[2.25vw] sm:text-[1.45vw] lg:text-[1vw] border border-[#cdcdcd] border-solid"
                        >
                          {item.technology_name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            <div className="flex mt-[1.25vw] gap-2 items-center">
              <div className="font-bold text-sm">Referal code: </div>
              <span className="text-sm">{expertData.refer_code}</span>
              <MdOutlineContentCopy
                className="cursor-pointer"
                onClick={handleCopyToClipboard}
              />
              <IoMdShareAlt />
            </div>
          </div>
          <div>
            <ul className="p-0 mt-0 mb-0">
              <Link to="editprofile" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaUser className="text-[1.65vw]" />
                  Update Profile
                </li>
              </Link>
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
              <Link to="myservices" className="no-underline">
                <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaChalkboardTeacher className="text-[1.65vw]" />
                  My services
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
              <Link
                to={"getcertified"}
                className="cursor-pointer flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]"
              >
                <BsFillPatchCheckFill className="text-[1.55vw]" />
                Get Certified
              </Link>
              {/* <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
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
              </li> */}
            </ul>
          </div>
        </section>
      }
      <Outlet>
        <EditProfileExpert />
        <Dashboard />
        <MyServices />
        <Chats />
        <Leaderboard />
        <SkillList />
        {/* {expertData.length!==0 && <MyBookings {...expertData} />} */}

        {expertData && expertId && (
          <MyBookings expertData={{ ...expertData }} expertId={expertId} />
        )}

        {/* <MyBookings id={expertId} /> */}
      </Outlet>
      {showEditProfile === true && (
        <Update handleShowEditProfile={handleShowEditProfile} />
      )}
    </div>
  );
};

export default ExpertDashboard;
