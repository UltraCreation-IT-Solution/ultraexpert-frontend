import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import ultraXpert from "../../assets/images/ultraXpert.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaUser,
  FaMedal,
  FaChalkboardTeacher,
  FaWallet,
  FaUserAlt,
  FaHistory,
} from "react-icons/fa";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { MdClose, MdSpaceDashboard, MdVideoChat } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoBookmarksSharp } from "react-icons/io5";
import { BsFillChatSquareTextFill, BsFillPatchCheckFill } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { AiFillCustomerService } from "react-icons/ai";
import { PiBookBookmarkFill } from "react-icons/pi";
import { LiaChessRookSolid } from "react-icons/lia";

import axios from "../../axios";

const cookies = document.cookie.split("; ");
const jsonData = {};

cookies.forEach((item) => {
  const [key, value] = item.split("=");
  jsonData[key] = value;
});
const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
  document.cookie =
    "access_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  document.cookie =
    "refresh_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
};

const Navbar = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [showLogo, setshowLogo] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setshowLogo(false);
  }, [location]);

  const notifications = [
    "Welcome to UltraXpert!",
    "Read the updated terms and conditions",
    "update your profile to earn more rewards and points",
    "your meeeting was scheduled! click here to check details",
    "you may have new notifications",
    "subscribe to our newslatter to get daily updates",
    "you have successfully created an account!",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function determineNavigation(qualified) {
    // Convert the values of the qualified object to an array
    const skillValues = Object.values(qualified);

    // Check if all skills are false
    const allSkillsFalse = skillValues.every((skill) => skill === false);

    // Navigate based on the skill values
    if (allSkillsFalse) {
      navigate("/expertdashboard/getcertified");
    } else {
      navigate("/expertdashboard/createservice");
    }
  }
  const getAllQualifiedSkills = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const response = await axios.get("/inspections/test/?action=2", {
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
      determineNavigation(response.data.data.qualified);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed w-full max-h-[90px] overflow-visible z-[10000000000] shadow-sm bg-white">
      <div className="mx-5 flex justify-between items-center ">
        <div className="">
          <Link
            to={"/"}
            className={`${
              showLogo ? "mt-6" : null
            } flex gap-5 md:mt-0 decoration-transparent `}
          >
            <img
              src={logo}
              className="block sm:hidden w-[80px] h-[60px] "
              alt="logo"
            />
            <img src={ultraXpert} className="hidden sm:block" alt="" />
          </Link>
        </div>
        <div className="flex items-center gap-10 md:gap-5">
          <div className=" flex flex-col items-center">
            <IoIosNotificationsOutline
              className="text-xl"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {notifications.length > 0 && (
              <div className="absolute -mt-2 ml-3 shrink-0 text-xs rounded-full text-center bg-red-500 text-white h-4 w-4 ">
                {notifications.length}{" "}
              </div>
            )}

            {showNotifications && (
              <div className="right-5 md:right-72 w-[300px] md:w-[400px] max-h-[400px] overflow-scroll absolute top-16 z-[1000] shrink-0 flex flex-col gap-4 px-5 py-3 rounded-md bg-white shadow-lg drop-shadow-lg">
                {notifications.length === 0 ? (
                  <div className="text-gray-800 text-sm text-center">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((item, index) => (
                    <div
                      key={index}
                      className="text-gray-800 text-sm border-b border-solid border-slate-300 pb-3 shrink-0 flex gap-3"
                    >
                      <div className="mr-auto">{item}</div>
                      <div className="shrink-0 ml-auto text-xs">
                        {"2 days ago"}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to={"/experts"}
              className={`${
                location === "/experts"
                  ? "font-extrabold"
                  : "font-medium hover:underline hover:scale-105"
              } relative no-underline text-black`}
            >
              Experts
            </Link>
            <Link
              to={"/services"}
              className={`${
                location === "/services"
                  ? "font-extrabold"
                  : "font-medium hover:underline hover:scale-105"
              } relative no-underline text-black`}
            >
              Services
            </Link>
            <Link
              to={"/blog"}
              className={`${
                location === "/blog"
                  ? "font-extrabold"
                  : "font-medium hover:underline hover:scale-105"
              } relative no-underline text-black`}
            >
              Blog
            </Link>
            <Link
              to={"/about"}
              className={`${
                location === "/about"
                  ? "font-extrabold"
                  : "font-medium hover:underline hover:scale-105"
              } relative no-underline text-black`}
            >
              About us
            </Link>
            <div className="">
              {localStorage.getItem("isExpert") ? (
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <div className="flex gap-2 justify-center items-center">
                    <span className="font-bold">{`Hii! ${localStorage.getItem(
                      "username"
                    )}`}</span>
                    <img
                      src={localStorage.getItem("profile")}
                      alt="profile"
                      className="w-9 h-11 rounded-full object-cover object-top "
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute right-10 bg-white text-black rounded-sm shadow-2xl border border-solid border-slate-300 z-20 flex flex-col gap-3 w-[200px] mt-3">
                      <Link
                        to={"/"}
                        className="no-underline text-black text-center py-2 pb-2 border-b border-solid border-slate-300"
                      >
                        Home
                      </Link>
                      {localStorage.getItem("isExpert") === "true" && (
                        <Link
                          className="no-underline text-black text-center py-2 pb-2 border-b border-solid border-slate-300"
                          to={"/queries"}
                        >
                          Customers Queries
                        </Link>
                      )}
                      <Link
                        to={
                          localStorage.getItem("isExpert") === "true"
                            ? "/expertdashboard"
                            : "/customerdashboard"
                        }
                        className={`${
                          location === "/expertdashboard" ||
                          location === "/customerdashboard"
                            ? "font-extrabold"
                            : "font-medium hover:underline hover:scale-105"
                        } relative no-underline text-black text-center py-2 pb-2 border-b border-solid border-slate-300`}
                      >
                        Dashboard
                      </Link>
                      {localStorage.getItem("isExpert") === "true" ? (
                        <></>
                      ) : (
                        <Link
                          to="/favourites"
                          className="no-underline text-black text-center justify-center py-2 flex items-center gap-2 pb-2 border-b border-solid border-slate-300"
                        >
                          Favourites <FaRegHeart />
                        </Link>
                      )}
                      {!jsonData.access_token || !jsonData.refresh_token ? (
                        <Link
                          to={"/login"}
                          className="relative w-full text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
                        >
                          Sign In
                        </Link>
                      ) : (
                        <Link
                          onClick={handleLogout}
                          className="relative w-full text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
                        >
                          Logout
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/login"} className="relative no-underline ">
                  <div className="text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium text-white">
                    {" "}
                    Sign In
                  </div>
                </Link>
              )}
            </div>
          </div>

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 flex justify-end z-30">
            <div className="w-60 shadow-md bg-[#f3f3f3] p-4 space-y-4 h-full">
              <MdClose
                className="text-3xl p-1 bg-[#2A2A2A] text-white rounded-sm"
                onClick={toggleMenu}
              />
              <div className="flex flex-col gap-4">
                {localStorage.getItem("isExpert") ? (
                  <div className=" cursor-pointer" onClick={toggleDropdown}>
                    <div className="flex items-center justify-between pb-2 border-b border-solid border-slate-300">
                      <div className="flex gap-2 justify-center items-center">
                        <span className="font-bold text-[#575757]">{`Hii! ${localStorage.getItem(
                          "username"
                        )}`}</span>
                        <img
                          src={localStorage.getItem("profile")}
                          alt="profile"
                          className="w-9 h-11 rounded-full object-cover object-top"
                        />
                      </div>
                      {!isDropdownOpen ? (
                        <RiArrowDropDownLine className="text-4xl" />
                      ) : (
                        <RiArrowDropUpLine className="text-4xl" />
                      )}
                    </div>
                    {isDropdownOpen && (
                      <div className="my-2 text-[#575757] flex flex-col gap-5 ml-3 items-start">
                        <Link
                          to={"/"}
                          className="no-underline text-[#575757] text-center font-semibold"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          Home
                        </Link>
                        {localStorage.getItem("isExpert") === "true" && (
                          <Link
                            className="no-underline text-[#575757] text-center font-semibold"
                            to={"/queries"}
                          >
                            Customers Queries
                          </Link>
                        )}
                        <Link
                          to={
                            localStorage.getItem("isExpert") === "true"
                              ? "/expertdashboard"
                              : "/customerdashboard"
                          }
                          className={`${
                            location === "/expertdashboard" ||
                            location === "/customerdashboard"
                              ? "font-extrabold"
                              : "font-medium hover:underline hover:scale-105"
                          } relative no-underline text-[#575757] text-center font-semibold`}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                          Dashboard
                        </Link>
                        {localStorage.getItem("isExpert") === "true" ? (
                          <></>
                        ) : (
                          <Link
                            to="/favourites"
                            className="no-underline text-[#575757] text-center justify-center flex items-center gap-2 font-semibold"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                          >
                            Favourites <FaRegHeart />
                          </Link>
                        )}
                        {!jsonData.access_token || !jsonData.refresh_token ? (
                          <Link
                            to={"/login"}
                            className="relative w-fit md:w-full text-center  bg-[#2A2A2A] px-5 rounded-sm font-medium no-underline text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                          >
                            Sign In
                          </Link>
                        ) : (
                          <Link
                            onClick={handleLogout}
                            className="w-fit relative md:w-full text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
                          >
                            Logout
                          </Link>
                        )}
                      </div>
                    )}
                    {localStorage.getItem("isExpert") &&
                      (location === "/expertdashboard" ||
                        location === "/expertdashboard/editprofile" ||
                        location === "/expertdashboard/leaderboard" ||
                        location === "/expertdashboard/myBookings" ||
                        location === "/expertdashboard/myservices" ||
                        location === "/expertdashboard/createservice" ||
                        location === "/expertdashboard/chats" ||
                        location === "/expertdashboard/getcertified") && (
                        <div className="my-4">
                          <ul className="p-0 flex flex-col gap-6">
                            <Link
                              to="expertdashboard/editprofile"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold  text-[#575757]">
                                <FaUser />
                                Update Profile
                              </li>
                            </Link>
                            <Link to="expertdashboard" className="no-underline">
                              <li
                                className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold  text-[#575757] "
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                              >
                                <MdSpaceDashboard />
                                Dashboard
                              </li>
                            </Link>
                            <Link
                              to="expertdashboard/leaderboard"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757] ">
                                <FaMedal />
                                Leaderboard
                              </li>
                            </Link>
                            <Link
                              to="expertdashboard/myBookings"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757] ">
                                <IoBookmarksSharp />
                                Bookings
                              </li>
                            </Link>

                            <li
                              className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757] "
                              onClick={() => (
                                getAllQualifiedSkills(),
                                setIsMenuOpen(!isMenuOpen)
                              )}
                            >
                              <div className="no-underline">
                                <RiCustomerService2Fill />
                                Create service
                              </div>
                            </li>
                            <Link
                              to="expertdashboard/myservices"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex items-center gap-3  pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757] ">
                                <FaChalkboardTeacher />
                                My services
                              </li>
                            </Link>
                            <li
                              className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757]
                            "
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <FaWallet />
                              Wallet
                            </li>
                            <Link
                              to="expertdashboard/chats"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757] ">
                                <BsFillChatSquareTextFill />
                                Chat
                              </li>
                            </Link>
                            <Link
                              to={"expertdashboard/getcertified"}
                              className="no-underline cursor-pointer flex gap-3 items-center pb-2 border-b border-solid border-slate-300 font-semibold text-[#575757]"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <BsFillPatchCheckFill />
                              Get Certified
                            </Link>
                          </ul>
                        </div>
                      )}
                    {localStorage.getItem("isCustomer") &&
                      (location === "/customerdashboard" ||
                        location === "/customerdashboard/chats" ||
                        location === "/customerdashboard/mybookings" ||
                        location === "/customerdashboard/myqueries" ||
                        location === "/customerdashboard/recentmeetings" ||
                        location ===
                          "/customerdashboard/transactionhistory") && (
                        <div className="mt-4">
                          <ul className="p-0 flex flex-col gap-6 ">
                            <Link
                              to="customerdashboard"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <FaUserAlt className="" />
                                Profile
                              </li>
                            </Link>
                            <Link
                              to="customerdashboard/myqueries"
                              className="no-underline"
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <FaUserAlt className="" />
                                My Queries
                              </li>
                            </Link>
                            <Link
                              to="customerdashboard/chats"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <BsFillChatSquareTextFill className="" />
                                Chat
                              </li>
                            </Link>
                            <Link
                              to="customerdashboard/mybookings"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <IoBookmarksSharp className="" />
                                My Bookings
                              </li>
                            </Link>
                            <Link
                              to="customerdashboard/recentmeetings"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <MdVideoChat className="" />
                                Recent Meetings
                              </li>
                            </Link>
                            <Link
                              to="customerdashboard/transactionhistory"
                              className="no-underline"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <li className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300">
                                <FaHistory className="" />
                                Transaction History
                              </li>
                            </Link>

                            <li
                              className="flex gap-3 items-center font-semibold text-[#575757] pb-2 border-b border-solid border-slate-300"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                              <FaWallet className="" />
                              Wallet
                            </li>
                          </ul>
                        </div>
                      )}
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    className="relative text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    Sign In
                  </Link>
                )}
                <Link
                  to={"/experts"}
                  className={`${
                    location === "/experts"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-[#575757] pb-2 border-b border-solid border-slate-300 font-semibold flex items-center gap-3`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <GrUserExpert />
                  Experts
                </Link>
                <Link
                  to={"/services"}
                  className={`${
                    location === "/services"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-[#575757] pb-2 border-b border-solid border-slate-300 font-semibold flex items-center gap-3`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <AiFillCustomerService />
                  Services
                </Link>
                <Link
                  to={"/blog"}
                  className={`${
                    location === "/blog"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-[#575757] pb-2 border-b border-solid border-slate-300 font-semibold flex items-center gap-3`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <PiBookBookmarkFill />
                  Blog
                </Link>
                <Link
                  to={"/about"}
                  className={`${
                    location === "/about"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-[#575757] pb-2 border-b border-solid border-slate-300 font-semibold flex items-center gap-3`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <LiaChessRookSolid />
                  About us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
