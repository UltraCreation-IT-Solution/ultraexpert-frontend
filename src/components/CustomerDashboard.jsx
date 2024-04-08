import React,{useState} from "react";
import { IoLocationOutline, IoBookmarksSharp } from "react-icons/io5";
import { MdLanguage, MdVideoChat } from "react-icons/md";
import { FaHistory, FaWallet, FaUserAlt, FaRegTrashAlt} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
    BsFillChatSquareTextFill,
  } from "react-icons/bs"; 
import { Link, Outlet } from "react-router-dom";
import { customerDashboardInfo } from "../constant";

export const CustomerProfile = () => {
  return(
    <div>Profile</div>
  )
};
export const CustomerChats = () => {
  const [chatDetail, setChatDetail] = useState(false);
  return(
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
          {customerDashboardInfo?.chats.map((item) => (
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
  )
}
export const CustomerBookings = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Active Bookings
      </div>
      <div className="flex items-center justify-between gap-3 text-sm text-gray-600 font-semibold my-5">
        <div>Booking Date</div>
        <div>Booking Time</div>
        <div className="w-[200px] ">Client Name</div>
        <div>Scheduled Date</div>
        <div>Start Time</div>
        <div>End Time</div>
        <div>Action</div>
      </div>
      <div className=" ">
        {customerDashboardInfo?.myBookings.map((item,index)=> 
        <div key={index} className="text-sm flex items-center justify-between border border-solid border-slate-300 my-5 px-2 py-3 rounded-md overflow-x-scroll shrink-0 min-w-[100%] ">
          <div>{item?.bookingDate} </div>
          <div>{item?.bookingTime} </div>
          <div className="flex items-center gap-2 w-[200px]  text-center">
            <img src={item?.customerProfile} className="h-9 w-9 rounded-full shrink-0 object-cover" alt="" />
            <div>{item?.customerName}</div>
          </div>
          <div>{item?.scheduledDate} </div>
          <div>{item?.startTime} </div>
          <div>{item?.endTime} </div>
          <FaRegTrashAlt />
        </div>
        )}
      </div>
    </div>
  );
}
export const CustomerRecentMeetngs = () => {
  return(
    <div>
      
    </div>
  )
}
const CustomerDashboard = () => {
  return (
    <div className="mt-[100px] px-[7vw]">
    
    <div className="flex gap-[1vw]">
      <div className="w-[32%] flex flex-col h-fit border border-[rgb(199,199,199)] border-solid rounded-lg ">
        <div className="flex flex-col items-center justify-center px-[2vw] pb-5 border-b border-solid border-slate-300 ">
          <img src={customerDashboardInfo?.profile} className="mt-16 object-cover shrink-0 rounded-full h-28 w-28 border-2 border-solid border-white" alt="" />
          <div className="text-xl font-bold mt-4">{customerDashboardInfo?.name}</div>
          <div className="text-lg text-gray-500 ">{customerDashboardInfo?.username}</div>
        </div>
        <div>
          <ul className="p-0  ">
            <Link className="no-underline">
              <li className="flex gap-[1.25vw] items-center  font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <FaUserAlt className="text-[1.55vw]" />
                Profile
              </li>
            </Link>
            <Link to="chats" className="no-underline">
              <li className="flex gap-[1.25vw] items-center  font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <BsFillChatSquareTextFill className="text-[1.55vw]" />
                Chat
              </li>
            </Link>
            <Link to="mybookings" className="no-underline">
              <li className="flex gap-[1.25vw] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <IoBookmarksSharp className="text-[1.55vw]" />
                My Bookings
              </li>
            </Link>
            <Link to="recentmeetings" className="no-underline">
              <li className="flex gap-[1.25vw] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <MdVideoChat className="text-[1.55vw]" />
                Recent Meetings
              </li>
            </Link>
            <Link className="no-underline">
              <li className="flex gap-[1.25vw] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <FaHistory className="text-[1.55vw]" />
                Transaction History
              </li>
            </Link>

            <li className="flex gap-[1.25vw] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <FaWallet className="text-[1.55vw]" />
              Wallet
            </li>

          </ul>
        </div>
      </div>
      <Outlet>
        <CustomerProfile/>
        <CustomerChats/>
        <CustomerBookings/>
        <CustomerRecentMeetngs />
      </Outlet>
    </div>
    </div>
  );
};

export default CustomerDashboard;
