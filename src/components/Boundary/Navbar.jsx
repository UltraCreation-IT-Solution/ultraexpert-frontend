// import React, { useEffect, useState } from "react";
// import logo from "../../assets/images/logo.svg";
// import ultraXpert from "../../assets/images/ultraXpert.svg";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import axios from "../../axios";

// const cookies = document.cookie.split("; ");
// const jsonData = {};

// cookies.forEach((item) => {
//   const [key, value] = item.split("=");
//   jsonData[key] = value;
// });
// const handleLogout = () => {
//   localStorage.clear();
//   window.location.href = "/";
//   document.cookie =
//     "access_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
//   document.cookie =
//     "refresh_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
// };

// const Navbar = () => {
//   const location = useLocation().pathname;
//   const [showNav, setShowNav] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   useEffect(() => {
//     setShowNav(false);
//   }, [location]);

//   const notifications = [
//     "Welcome to UltraXpert!",
//     "Read the updated terms and conditions",
//     "update your profile to earn more rewards and points",
//     "your meeeting was scheduled! click here to check details",
//     "you may have new notifications",
//     "subscribe to our newslatter to get daily updates",
//     "you have successfully created an account!",
//   ];
//   return (
//     <div
//       className={`fixed z-50 shadow-sm top-0 left-0 bg-white w-[100vw] ${
//         showNav ? "h-[60vh]" : null
//       }  flex flex-col md:flex-row items-center justify-between px-[20px] box-border font-montserrat text-[24px] overflow-visible`}
//     >
//       <div className="self-start">
//         <Link
//           to={"/"}
//           className={`${
//             showNav ? "mt-6" : null
//           } flex gap-5 mt-4 md:mt-0 decoration-transparent `}
//         >
//           <img
//             src={logo}
//             className="block sm:hidden w-[80px] h-[60px] "
//             alt="logo"
//           />
//           <img src={ultraXpert} className="hidden sm:block" alt="" />
//         </Link>
//       </div>
//       <div>
//         <nav
//           className={`flex ${
//             showNav
//               ? "flex flex-col mb-[20vw] gap-6 overflow-hidden"
//               : "hidden flex-row gap-[3.5vw]"
//           } items-center font-montserrat justify-center h-auto  mr-6 text-[16px]  md:flex`}
//         >
//           <Link to="/favourites">
//             {localStorage.getItem("isExpert") === "true" ? (
//               <></>
//             ) : (
//               <FaRegHeart />
//             )}
//           </Link>

//           <div className="flex flex-col items-center">
//             <IoIosNotificationsOutline
//               className="text-xl"
//               onClick={() => setShowNotifications(!showNotifications)}
//             />
//             {notifications.length > 0 && (
//               <div className="absolute -mt-2 ml-3 shrink-0 text-xs rounded-full text-center bg-red-500 text-white h-4 w-4 ">
//                 {notifications.length}{" "}
//               </div>
//             )}

//             {showNotifications && (
//               <div className=" w-[400px] max-h-[400px] overflow-scroll absolute top-16 z-[1000] shrink-0 flex flex-col gap-4 px-5 py-3 rounded-md bg-white shadow-lg drop-shadow-lg">
//                 {notifications.length === 0 ? (
//                   <div className="text-gray-800 text-sm text-center">
//                     No new notifications
//                   </div>
//                 ) : (
//                   notifications.map((item, index) => (
//                     <div
//                       key={index}
//                       className="text-gray-800 text-sm border-b border-solid border-slate-300 pb-3 shrink-0 flex gap-3"
//                     >
//                       <div className="mr-auto">{item}</div>
//                       <div className="shrink-0 ml-auto text-xs">
//                         {"2 days ago"}
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>

//           <Link
//             to={"/experts"}
//             className={`${
//               location === "/experts"
//                 ? "font-extrabold"
//                 : "font-medium hover:underline hover:scale-105"
//             } relative no-underline text-black  `}
//           >
//             Experts
//           </Link>
//           <Link
//             to={"/services"}
//             className={`${
//               location === "/services"
//                 ? "font-extrabold"
//                 : "font-medium hover:underline hover:scale-105"
//             } relative  no-underline text-black`}
//           >
//             Services
//           </Link>
//           <Link
//             to={"/blog"}
//             className={`${
//               location === "/blog"
//                 ? "font-extrabold"
//                 : "font-medium hover:underline hover:scale-105"
//             } relative no-underline text-black`}
//           >
//             Blog
//           </Link>

//           <Link
//             to={"/about"}
//             className={`${
//               location === "/about"
//                 ? "font-extrabold"
//                 : "font-medium hover:underline hover:scale-105"
//             } relative no-underline text-black`}
//           >
//             About us
//           </Link>
//           {localStorage.getItem("isExpert") ? (
//             <div
//               className=" cursor-pointer"
//               onMouseEnter={() => setIsProfileOpen(true)}
//             >
//               <div className="flex gap-2 justify-center items-center">
//                 <span className="font-bold">{`Hii! ${localStorage.getItem(
//                   "username"
//                 )}`}</span>
//                 <img
//                   src={localStorage.getItem("profile")}
//                   alt="profile"
//                   className="w-10 h-10 rounded-full object-cover object-center"
//                 />
//               </div>
//               {isProfileOpen && (
//                 <div
//                   onMouseLeave={() => setIsProfileOpen(false)}
//                   className="absolute flex flex-col gap-2 justify-center items-center
//               rounded-md mt-2 -ml-24  shrink-0 z-[999] bg-white border-2 border-slate-300 border-solid drop-shadow-lg w-[250px] h-auto px-2 py-2"
//                 >
//                   <Link
//                     to={"/"}
//                     className="no-underline text-black border-slate-300 border-solid border-2 w-full text-center py-2"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to={
//                       localStorage.getItem("isExpert") === "true"
//                         ? "/expertdashboard"
//                         : "/customerdashboard"
//                     }
//                     className={`${
//                       location === "/expertdashboard" ||
//                       location === "/customerdashboard"
//                         ? "font-extrabold"
//                         : "font-medium hover:underline hover:scale-105"
//                     } relative no-underline text-black border-slate-300 border-solid border-2 w-full text-center py-2`}
//                   >
//                     Dashboard
//                   </Link>
//                   {!jsonData.access_token || !jsonData.refresh_token ? (
//                     <Link
//                       to={"/login"}
//                       className="relative w-full text-center  bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
//                     >
//                       Sign In
//                     </Link>
//                   ) : (
//                     <Link
//                       onClick={handleLogout}
//                       className="relative w-full text-center bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
//                     >
//                       Logout
//                     </Link>
//                   )}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to={"/login"}
//               className="relative text-center  bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
//             >
//               Sign In
//             </Link>
//           )}
//         </nav>
//         <button
//           onClick={() => setShowNav(!showNav)}
//           className="md:hidden absolute top-0 right-0 mr-6 mt-6 bg-white rounded-sm flex items-center justify-center"
//         >
//           {showNav ? (
//             <FaTimes className="text-black text-2xl xs:text-3xl " />
//           ) : (
//             <FaBars className="text-black text-2xl xs:text-3xl" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import ultraXpert from "../../assets/images/ultraXpert.svg";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaRegHeart, FaUser, FaMedal, FaChalkboardTeacher, FaWallet } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine, RiCustomerService2Fill } from "react-icons/ri";
import { MdClose, MdSpaceDashboard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoBookmarksSharp } from "react-icons/io5";
import {BsFillChatSquareTextFill, BsFillPatchCheckFill} from "react-icons/bs"
// import axios from "./axios";

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
    <nav className="fixed w-full z-[10000000000] shadow-sm bg-white">
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

              {localStorage.getItem("isExpert") &&
                (location === "/expertdashboard" || location==="/expertdashboard/editprofile" || location === "/expertdashboard/leaderboard" || location === "/expertdashboard/myBookings" || location === "/expertdashboard/myservices" || location === "/expertdashboard/chats" || location === "/expertdashboard/getcertified"
                ) && (
                  <div>
                    <ul className="p-0 mt-0 mb-0">
                      <Link to="expertdashboard/editprofile" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <FaUser className="text-[1.65vw]" />
                          Update Profile
                        </li>
                      </Link>
                      <Link to="expertdashboard" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <MdSpaceDashboard className="text-[1.65vw]" />
                          Dashboard
                        </li>
                      </Link>
                      <Link to="expertdashboard/leaderboard" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <FaMedal className="text-[1.65vw]" />
                          Leaderboard
                        </li>
                      </Link>
                      <Link to="expertdashboard/myBookings" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <IoBookmarksSharp className="text-[1.65vw]" />
                          Bookings
                        </li>
                      </Link>

                      <li
                        className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]"
                        onClick={() => getAllQualifiedSkills()}
                      >
                        <div className="no-underline">
                          <RiCustomerService2Fill className="text-[1.65vw]" />
                          Create service
                        </div>
                      </li>
                      <Link to="expertdashboard/myservices" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <FaChalkboardTeacher className="text-[1.65vw]" />
                          My services
                        </li>
                      </Link>
                      <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                        <FaWallet className="text-[1.55vw]" />
                        Wallet
                      </li>
                      <Link to="expertdashboard/chats" className="no-underline">
                        <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                          <BsFillChatSquareTextFill className="text-[1.55vw]" />
                          Chat
                        </li>
                      </Link>
                      <Link
                        to={"expertdashboard/getcertified"}
                        className="cursor-pointer flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]"
                      >
                        <BsFillPatchCheckFill className="text-[1.55vw]" />
                        Get Certified
                      </Link>
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
