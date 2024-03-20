import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import ultraXpert from "../../assets/images/ultraXpert.svg";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation().pathname;
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    setShowNav(false);
  }, [location]);
  return (
    <div
      className={`fixed z-50 shadow-sm top-0 left-0 bg-white w-[100vw] ${
        showNav ? "h-[60vh]" : null
      } overflow-hidden flex flex-col md:flex-row items-center justify-between px-[20px] box-border font-montserrat text-[24px]`}
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
            to={"/expertdashboard"}
            className={`${
              location === "/expertdashboard"
                ? "font-extrabold"
                : "font-medium hover:underline hover:scale-105"
            } relative no-underline text-black`}
          >
            Dashboard
          </Link>
          <div className="relative font-medium">Contact Us</div>
          <Link
            to={"/login"}
            className="relative bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
          >
            Sign In
          </Link>
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
