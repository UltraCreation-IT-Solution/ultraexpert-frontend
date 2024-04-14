import React, { useState } from "react";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdVideoChat } from "react-icons/md";
import { FaHistory, FaWallet, FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { BookingCard, customerDashboardInfo } from "../../constant";

export const CustomerProfile = () => {
  return (
    <div className="w-full md:w-[68%] ">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Profile
      </div>
      <div className="mt-5 md:w-[80%] lg:w-[60%]">
        <div>
          <div className="text-sm ">Name</div>
          <input
            type="text"
            className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
            placeholder="Enter your name"
          />
        </div>
        <div className="mt-5">
          <div className="text-sm ">Mobile number</div>
          <input
            type="number"
            className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="mt-5">
          <div className="text-sm ">Email</div>
          <input
            type="email"
            className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className=" mt-5 w-full">
          <div>
            <div className="text-sm ">Gender</div>
            <select
              name="Gender"
              id="Gender"
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none shrink-0 w-full"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mt-5">
            <div className="text-sm ">Age</div>
            <input
              type="number"
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
              placeholder="Enter your age"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="text-sm ">Marital Status</div>
          <select
            name="Marital"
            className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none shrink-0 w-full"
          >
            <option value="">Married</option>
            <option value="">Unmarried</option>
          </select>
        </div>
        <div className="mt-5">
          <div className="text-sm ">Bio</div>
          <textarea
            rows="6"
            placeholder="Enter your bio"
            className="min-w-full max-w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none "
          ></textarea>
        </div>
        <div className="mt-5">
          <div className="text-sm ">Profession</div>
          <input
            type="text"
            className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
            placeholder="Enter your profession"
          />
        </div>
      </div>
    </div>
  );
};
export const CustomerChats = () => {
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
  );
};
export const CustomerBookings = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Active Bookings
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600 font-bold my-5 overflow-x-scroll">
        <div className="flex items-center xs:gap-[4vw] shrink-0">
          <div className="w-[200px]">Expert Name</div>
          <div className="hidden sm:block w-[120px] ">Scheduled Date</div>
          <div className="shrink-0 w-[60px]">Action</div>
        </div>
        <div className="shrink-0 text-right w-[60px] "></div>
      </div>

      {customerDashboardInfo?.myBookings.map((item, index) => (
        <BookingCard item={item} key={index} />
      ))}
    </div>
  );
};
export const CustomerRecentMeetngs = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Recent Meetings
      </div>
      {customerDashboardInfo?.recentMeetings?.map((item, index) => (
        <div
          key={index}
          className={`px-5 py-4 my-5 rounded-md ${
            index % 2 === 0
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
              <div className="my-2">Service Price: {item?.servicePrice}</div>
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
  );
};

export const CustomerTransactionHistoryCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="text-sm flex items-center justify-between border-t border-solid border-slate-300 my-5 py-3 overflow-x-scroll  ">
      <div className="flex items-center xs:gap-[4vw] text-xs sm:text-sm">
        <div className="flex items-center gap-2 w-[180px] sm:w-[200px] ">
          <img
            src={item?.expertProfile}
            className="h-7 w-7 sm:h-9 sm:w-9 rounded-full shrink-0 object-cover"
            alt=""
          />
          <div>{item?.expertName}</div>
        </div>
        <div className="text-xs xs:text-sm w-[70px] sm:w-[90px] ">₹ {item?.amount}</div>
        <div className="hidden md:block w-[120px] ">{item?.invoice}</div>
      </div>
      {open ? <IoIosArrowUp className="shrink-0 text-base sm:text-xl " onClick={() => (open ? setOpen(false) : setOpen(true))}/> : <IoIosArrowDown className="shrink-0 text-base sm:text-xl " onClick={() => (open ? setOpen(false) : setOpen(true))}/>}
    </div>
    {open && <div  >
      <div className="text-xs sm:text-sm line-clamp-2"> Date: {item?.date} </div>
      <div className="text-xs sm:text-sm mt-2">Time: {item?.time} </div>
      <div className="block md:hidden text-xs sm:text-sm mt-2">Invoice: {item?.invoice} </div>
      <div className="w-fit text-xs sm:text-sm mt-2 cursor-pointer text-red-500 hover:underline ">Download Invoice </div>
    </div>
    }
    </>
  );
};

export const CustomerTransactionHistory = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Transaction History
      </div>
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 font-bold my-5">
        <div className="flex items-center xs:gap-[4vw] shrink-0">
          <div className="w-[180px] sm:w-[200px]">Expert Name</div>
          <div className="w-[70px] sm:w-[90px] text-xs xs:text-sm">Amount</div>
          <div className="hidden md:block w-[120px]">Invoice</div>
        </div>
      </div>
      <div className=" ">
        {customerDashboardInfo?.transactionHistory.map((item, index) => (
          <CustomerTransactionHistoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
const CustomerDashboard = () => {
  return (
    <div className="mt-[100px] px-[7vw] md:flex gap-[1vw]">
      <div className="hidden md:block w-[32%] ">
        <div className=" flex flex-col h-fit border border-[rgb(199,199,199)] border-solid rounded-lg ">
          <div className="flex flex-col items-center justify-center px-[2vw] pb-5 border-b border-solid border-slate-300 ">
            <img
              src={customerDashboardInfo?.profile}
              className="mt-16 object-cover shrink-0 rounded-full h-20 w-20 lg:h-28 lg:w-28 border-2 border-solid border-white"
              alt=""
            />
            <div className="text-base lg:text-xl font-bold mt-4">
              {customerDashboardInfo?.name}
            </div>
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
              <Link to="transactionhistory" className="no-underline">
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
      </div>
      <Outlet>
        <CustomerProfile />
        <CustomerChats />
        <CustomerBookings />
        <CustomerRecentMeetngs />
        <CustomerTransactionHistory />
      </Outlet>
    </div>
  );
};

export default CustomerDashboard;
