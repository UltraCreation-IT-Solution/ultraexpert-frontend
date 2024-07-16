import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import ultraXpert from "./assets/images/ultraXpert.svg";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import axios from "./axios";

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

const TestNavbar = () => {
  const location = useLocation().pathname;
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

  return (
    <nav className="shadow-sm bg-white ">
      <div className="mx-5 flex justify-between items-center">
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
        <div className=" flex items-center gap-10 md:gap-5">
          <div className="flex flex-col items-center">
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
          <div className="hidden md:flex items-center gap-5">
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
                <div className=" cursor-pointer" onClick={toggleDropdown}>
                  <div className="flex gap-2 justify-center items-center">
                    <span className="font-bold">{`Hii! ${localStorage.getItem(
                      "username"
                    )}`}</span>
                    <img
                      src={localStorage.getItem("profile")}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover object-center"
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
                <Link
                  to={"/login"}
                  className="relative text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
                >
                  Sign In
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
            <div className="w-60 shadow-md bg-white p-4 space-y-4 h-full">
              <MdClose
                className="text-3xl bg-gray-300/40 rounded-sm"
                onClick={toggleMenu}
              />
              <div className="flex flex-col gap-4">
                {localStorage.getItem("isExpert") ? (
                  <div className=" cursor-pointer" onClick={toggleDropdown}>
                    <div className="flex items-center justify-between pb-2 border-b border-solid border-slate-300">
                      <div className="flex gap-2 justify-center items-center">
                        <span className="font-bold">{`Hii! ${localStorage.getItem(
                          "username"
                        )}`}</span>
                        <img
                          src={localStorage.getItem("profile")}
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover object-center"
                        />
                      </div>
                      {!isDropdownOpen ? (
                        <RiArrowDropDownLine className="text-4xl" />
                      ) : (
                        <RiArrowDropUpLine className="text-4xl" />
                      )}
                    </div>
                    {isDropdownOpen && (
                      <div className="my-2 text-black flex flex-col ml-3 items-start">
                        <Link
                          to={"/"}
                          className="no-underline text-black text-center py-2 "
                        >
                          Home
                        </Link>
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
                          } relative no-underline text-black  text-center py-2`}
                        >
                          Dashboard
                        </Link>
                        {localStorage.getItem("isExpert") === "true" ? (
                          <></>
                        ) : (
                          <Link
                            to="/favourites"
                            className="no-underline text-black text-center justify-center py-2 flex items-center gap-2"
                          >
                            Favourites <FaRegHeart />
                          </Link>
                        )}
                        {!jsonData.access_token || !jsonData.refresh_token ? (
                          <Link
                            to={"/login"}
                            className="relative w-fit md:w-full text-center  bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
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
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    className="relative text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
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
                  } relative no-underline text-black pb-2 border-b border-solid border-slate-300`}
                >
                  Experts
                </Link>
                <Link
                  to={"/services"}
                  className={`${
                    location === "/services"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative  no-underline text-black pb-2 border-b border-solid border-slate-300`}
                >
                  Services
                </Link>
                <Link
                  to={"/blog"}
                  className={`${
                    location === "/blog"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-black pb-2 border-b border-solid border-slate-300`}
                >
                  Blog
                </Link>
                <Link
                  to={"/about"}
                  className={`${
                    location === "/about"
                      ? "font-extrabold"
                      : "font-medium hover:underline hover:scale-105"
                  } relative no-underline text-black pb-2 border-b border-solid border-slate-300`}
                >
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

export default TestNavbar;
