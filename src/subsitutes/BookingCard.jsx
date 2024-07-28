import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const BookingCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [otpopen, setOtpopen] = useState(false);
  const [otp, setOtp] = useState("");
  const [meetingActive, setMeetingActive] = useState(false);
  const [meetingUrl, setMeetingUrl] = useState("");
  const navigate = useNavigate();
  const expid = item.expert_id || null;
  useEffect(() => {
    const handleMeetingEnd = () => {
      setMeetingActive(false);
      localStorage.getItem("isExpert") === "true"
        ? navigate("/expertdashboard")
        : navigate("/feedback", { state: { expid } });
    };

    if (meetingActive) {
      const domain = "meet.ultraxpert.in";
      const options = {
        roomName: item.room_id,
        width: "100%",
        height: "100%",
        parentNode: document.querySelector("#jitsi-container"),
        userInfo: {
          displayName:
            localStorage.getItem("username") === null
              ? localStorage.getItem("isExpert") === "true"
                ? "Expert"
                : "Customer"
              : localStorage.getItem("username"),
        },
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);

      api.addEventListener("videoConferenceLeft", handleMeetingEnd);

      return () => {
        api.removeEventListener("videoConferenceLeft", handleMeetingEnd);
        api.dispose();
      };
    }
  }, [meetingActive, item.room_id, navigate]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const authenticateCustomer = async (room) => {
    if (otp.length === 0) {
      alert("Please enter OTP");
      return;
    }
    try {
      console.log(item.order_id);
      const res = await axios.post(`/meetings/meetingOtp/`, {
        action: 1,
        customer_id: localStorage.getItem("customer_id"),
        otp: otp,
        order_id: item.order_id,
        room_id: room,
      });
      console.log(res);
      startMeeting(
        room,
        `${item.time_slot_day} ${convertTo24HourFormat(item.time_slot_end)}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const sendOTP = async (room) => {
    try {
      const res = await axios.get(
        `/meetings/meetingOtp/?action=1&customer_id=${localStorage.getItem(
          "customer_id"
        )}&order_id=${item.order_id}&room_id=${room}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
      // verify the user if they are a customer and let expert in directly
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
    setMeetingUrl(jitsiUrl);
    setMeetingActive(true);

    const endTimeDate = new Date(endTime);
    const now = new Date();
    const timeUntilEnd = endTimeDate - now;

    setTimeout(() => {
      setMeetingActive(false);
      navigate("/feedback");
    }, timeUntilEnd);
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
      <div className="text-sm flex items-center justify-between border-b border-solid border-slate-300  py-3 overflow-x-scroll">
        <div className="flex items-center xs:gap-[4vw] text-sm">
          <div className="flex items-center gap-2 w-[200px] ">
            <img
              src={
                localStorage.getItem("isExpert") === "true"
                  ? item?.customer_profile_img
                  : item?.expert_profile_img
              }
              className="h-9 w-9 rounded-full shrink-0 object-cover object-top"
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
            <div className="flex items-center gap-3 mt-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="text-sm mt-2 border border-solid border-black px-3 py-1 rounded"
              />
              <button
                className="text-sm mt-2 btnBlack text-white cursor-pointer px-3 py-1"
                onClick={() => authenticateCustomer(item.room_id)}
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      )}
      {meetingActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[5555555555555555555550]">
          <div
            id="jitsi-container"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
      )}
    </>
  );
};

export default BookingCard;
