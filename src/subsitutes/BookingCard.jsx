import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "../axios";

const BookingCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [otpopen, setOtpopen] = useState(false);
  const [otp, setOtp] = useState("");

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const aunthentCustomer = async (room) => {
    const res = await axios.post(`/meetings/meetingOtp/`, {
      action: 2,
      otp: otp,
    });
    console.log(res);
  };
  const sendOTP = async (room) => {
    const res = await axios.get(
      `/meetings/meetingOtp/?action=1&customer_id=${localStorage.customer_id}&order_id=${room}`
    );
    console.log(res);
  };
  const handleJoin = (room) => {
    const now = new Date();
    const meetingStartTime = new Date(
      `${item.time_slot_day} ${convertTo24HourFormat(item.time_slot_start)}`
    );
    console.log(now, "==>", meetingStartTime);

    if (now < meetingStartTime) {
      alert(
        `The meeting is scheduled for ${meetingStartTime.toLocaleString()}. Please wait until the meeting starts.`
      );
    } else {
      // verify the user if he is customer and let expert in directly
      if (localStorage.getItem("isExpert") === "true") {
        startMeeting(
          room,
          `${item.time_slot_day} ${convertTo24HourFormat(item.time_slot_end)}`
        );
      } else {
        setOtpopen(true);
        sendOTP(room);
      }
    }
  };

  const startMeeting = (room, endTime) => {
    const jitsiUrl = `https://meet.ultraxpert.in/${room}`;
    const win = window.open(jitsiUrl, "_blank");

    if (win) {
      const redirectOnClose = () => {
        window.location.href = "https://ultraxpert.in";
      };
      win.addEventListener("beforeunload", redirectOnClose);

      const endTimeDate = new Date(endTime);
      const now = new Date();
      const timeUntilEnd = endTimeDate - now;

      setTimeout(() => {
        win.close();
        redirectOnClose();
      }, timeUntilEnd);
    }
  };

  const convertTo24HourFormat = (time) => {
    const [hour, minute, period] = time
      .match(/(\d+):(\d+)\s?(AM|PM)/i)
      .slice(1);
    let hour24 = parseInt(hour, 10);
    if (period.toUpperCase() === "PM" && hour24 !== 12) {
      hour24 += 12;
    } else if (period.toUpperCase() === "AM" && hour24 === 12) {
      hour24 = 0;
    }
    return `${hour24.toString().padStart(2, "0")}:${minute}:00`;
  };

  return (
    <>
      <div className="text-sm flex items-center justify-between border-t border-solid border-slate-300 my-5 py-3 overflow-x-scroll">
        <div className="flex items-center xs:gap-[4vw] text-sm">
          <div className="flex items-center gap-2 w-[200px] ">
            <img
              src={
                localStorage.getItem("isExpert") === "true"
                  ? item?.customer_profile_img
                  : item?.expert_profile_img
              }
              className="h-9 w-9 rounded-full shrink-0 object-cover"
              alt=""
            />
            <div>
              {localStorage.getItem("isExpert") === "true"
                ? item?.customer_first_name
                : item?.expert_first_name}{" "}
              {localStorage.getItem("isExpert") === "true"
                ? item?.customer_last_name
                : item?.expert_last_name}
            </div>
          </div>
          <div className="hidden sm:block w-[120px]">
            {item?.time_slot_day}{" "}
          </div>
          <div className="w-[60px] flex items-center justify-center shrink-0">
            <FaRegTrashAlt className="shrink-0" />
          </div>
        </div>
        {open ? (
          <IoIosArrowUp
            className="shrink-0 text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        ) : (
          <IoIosArrowDown
            className="shrink-0 text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        )}
      </div>
      {open && (
        <div>
          <div className="text-sm line-clamp-2">
            Service Title: {item?.service_name}
          </div>
          <div className="text-sm mt-2">
            Booking Date: {formatDate(item?.updated_on)}
          </div>
          <div className="text-sm mt-2">
            Start Time: {item?.time_slot_start}
          </div>
          <div className="text-sm mt-2">End Time: {item?.time_slot_end}</div>
          <div className="flex items-center gap-3">
            <button className="text-sm mt-2 btnBlack text-white cursor-pointer px-3 py-1">
              Disable service
            </button>
            <button
              className="text-sm mt-2 text-black bg-white border border-solid border-black cursor-pointer px-3 py-1"
              onClick={() => handleJoin(item.room_id)}
            >
              Join meeting
            </button>
          </div>
          {otpopen === true && (
            <div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <button
                className="text-sm mt-2 btnBlack text-white cursor-pointer px-3 py-1"
                onClick={aunthentCustomer}
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookingCard;
