import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import ultraXpert from "../../assets/images/ultraXpert.svg";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
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
  const [showNav, setShowNav] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    setShowNav(false);
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
  return (
    <div
      className={`fixed z-50 shadow-sm top-0 left-0 bg-white w-[100vw] ${
        showNav ? "h-[60vh]" : null
      }  flex flex-col md:flex-row items-center justify-between px-[20px] box-border font-montserrat text-[24px] overflow-visible`}
    >
      <div className="self-start">
        <Link
          to={"/"}
          className={`${
            showNav ? "mt-6" : null
          } flex gap-5 mt-4 md:mt-0 decoration-transparent `}
        >
          <img
            src={logo}
            className="block sm:hidden w-[80px] h-[60px] "
            alt="logo"
          />
          <img src={ultraXpert} className="hidden sm:block" alt="" />
        </Link>
      </div>
      <div>
        <nav
          className={`flex ${
            showNav
              ? "flex flex-col mb-[20vw] gap-6 overflow-hidden"
              : "hidden flex-row gap-[3.5vw]"
          } items-center font-montserrat justify-center h-auto  mr-6 text-[16px]  md:flex`}
        >
          <Link to="/favourites">
            {localStorage.getItem("isExpert")==="true" ? (
              <></>
            ) : (
              <FaRegHeart />
            )}
          </Link>

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
              <div className=" w-[400px] max-h-[400px] overflow-scroll absolute top-16 z-[1000] shrink-0 flex flex-col gap-4 px-5 py-3 rounded-md bg-white shadow-lg drop-shadow-lg">
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

          <Link
            to={"/experts"}
            className={`${
              location === "/experts"
                ? "font-extrabold"
                : "font-medium hover:underline hover:scale-105"
            } relative no-underline text-black  `}
          >
            Experts
          </Link>
          <Link
            to={"/services"}
            className={`${
              location === "/services"
                ? "font-extrabold"
                : "font-medium hover:underline hover:scale-105"
            } relative  no-underline text-black`}
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
          {localStorage.getItem("isExpert") ? (
            <div
              className=" cursor-pointer"
              onMouseEnter={() => setIsProfileOpen(true)}
            >
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
              {isProfileOpen && (
                <div
                  onMouseLeave={() => setIsProfileOpen(false)}
                  className="absolute flex flex-col  gap-2 justify-center items-center 
              rounded-md mt-2 -ml-24  shrink-0 z-[999] bg-white border-2 border-slate-300 border-solid drop-shadow-lg w-1/6 h-auto px-2 py-2"
                >
                  <Link
                    to={"/"}
                    className="no-underline text-black border-slate-300 border-solid border-2 w-full text-center py-2"
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
                    } relative no-underline text-black border-slate-300 border-solid border-2 w-full text-center py-2`}
                  >
                    Dashboard
                  </Link>
                  {!jsonData.access_token || !jsonData.refresh_token ? (
                    <Link
                      to={"/login"}
                      className="relative w-full text-center  bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
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
              className="relative text-center  bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
            >
              Sign In
            </Link>
          )}
        </nav>
        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden absolute top-0 right-0 mr-6 mt-6 bg-white rounded-sm flex items-center justify-center"
        >
          {showNav ? (
            <FaTimes className="text-black text-2xl xs:text-3xl " />
          ) : (
            <FaBars className="text-black text-2xl xs:text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
