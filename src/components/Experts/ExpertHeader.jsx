import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="fixed bg-white shadow-xl h-[100vh]">
      <div className="flex items-center px-5">
      <Link to="/"><img
          src={logo}
          className="w-[100px] h-[70px] mt-2"
          alt="logo hai bhai
          "
        /></Link>
        <h2 className="ml-[-10px] font-extrabold text-[30px]">
          ultraXpert
        </h2>
      </div>
      <ul className="mx-5">
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Apply as expert
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Experts
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Services
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          My Meets
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Home
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Transactions
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Messages
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Contact
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          About
        </li>
        <li className="text-[20px] my-3 py-3 px-3 rounded-md hover:bg-slate-100">
          Support
        </li>
      </ul>
    </div>
  );
};

const ExpertHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {!showSidebar ? null : <Sidebar />}
      <div className="bg-lightslategray px-2 py-3">
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 items-center px-2">
            <IoMenuOutline
              size={30}
              onClick={() =>
                showSidebar ? setShowSidebar(false) : setShowSidebar(true)
              }
            />
            <div className="text-5xl font-bold">UltraExpert</div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-5xl">Log out</div>
            <FaRegUser size={30} />
          </div>
        </div>

        <div className="text-center mt-2">
          <input
            type="text"
            placeholder="search"
            className="w-[95%] p-2 rounded-lg border-none outline-none "
          />
        </div>
      </div>
    </>
  );
};

export default ExpertHeader;
