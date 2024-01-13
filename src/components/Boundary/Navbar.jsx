import React from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative bg-white w-[100vw] h-[80px] overflow-hidden flex flex-row items-center justify-between px-[20px] box-border font-montserrat text-[24px]">
      <div className="flex ml-[-20px]">
        <img
          src={logo}
          className="w-[80px] h-[60px] "
          alt="logo
          "
        />
        <h2 className="ml-[-10px] my-4 relative text-inherit font-extrabold font-montserrat">
          UltraXpert
        </h2>
      </div>
      <div className="flex flex-row items-center font-montserrat justify-center gap-[3.5vw] mr-6 text-[16px]">
        <div className="relative font-medium">Services</div>
        <div className="relative font-medium">Experts</div>
        <div className="relative font-medium">Blog</div>
        <div className="relative font-medium">Contact Us</div>
        <Link
          to={"/login"}
          className="relative bg-[#2A2A2A] px-5 rounded-sm py-2 font-medium no-underline text-white"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
