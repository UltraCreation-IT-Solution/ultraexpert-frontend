import React, { useState, useEffect } from "react";
import axios from "./axios";
import BookingCard from "./subsitutes/BookingCard";
import TextShimmer from "./subsitutes/Shimmers/TextShimmer";

const TestElement = () => {
  const [scheduled, setscheduled] = useState(true);
  const [done, setdone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const HandleScheduled = () => {
    setLoading(true);
    setscheduled(true);
    setdone(false);
    setNotDone(false);
    getScheduledBookings();
    setLoading(false);
  };
  const HandleDone = () => {
    setLoading(true);
    setscheduled(false);
    setdone(true);
    setNotDone(false);
    getDoneBookings();
    setLoading(false);
  };
  const HandleNotDone = () => {
    setLoading(true);
    setscheduled(false);
    setdone(false);
    setNotDone(true);
    getNotDoneBookings();
    setLoading(false);
  };

  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    if (scheduled) getScheduledBookings();
  }, []);

  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  const getScheduledBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/experts/services/?action=4&expert_id=${localStorage?.expert_id}&status=scheduled`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        console.log(res.data.message);
        setLoading(false);
        return;
      }
      const currentTime = new Date();
      const filteredBookings = res.data.data.filter((booking) => {
        // Construct the date and time string from the booking data
        const dateTimeString = `${booking.time_slot_day} ${booking.time_slot_start}`;
        // Parse the date and time string to a Date object
        const bookingDate = new Date(dateTimeString);

        // Compare with current date and time
        return bookingDate > currentTime;
      });
      setMyBookings(filteredBookings);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getDoneBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/experts/services/?action=4&expert_id=${localStorage?.expert_id}&status=done`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        console.log(res.data.message);
        setLoading(false);
        return;
      }
      setMyBookings(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getNotDoneBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/experts/services/?action=4&expert_id=${localStorage?.expert_id}&status=scheduled`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        console.log(res.data.message);
        setLoading(false);
        return;
      }
      const currentTime = new Date();
      const filteredBookings = res.data.data.filter((booking) => {
        // Construct the date and time string from the booking data
        const dateTimeString = `${booking.time_slot_day} ${booking.time_slot_start}`;
        // Parse the date and time string to a Date object
        const bookingDate = new Date(dateTimeString);

        // Compare with current date and time
        return bookingDate < currentTime;
      });
      setMyBookings(filteredBookings);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(myBookings);

  return (
    <>
      <div className="flex gap-3  mt-20 border-b border-solid border-[#c7c7c7] pb-3 text-sm md:text-base overflow-x-scroll px-2">
        <div
          className={
            loading
              ? `text-gray-300`
              : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                  scheduled && `bg-[#ececec] rounded-sm`
                }`
          }
          onClick={() => HandleScheduled()}
        >
          Scheduled
        </div>
        <div
          className={
            loading
              ? `text-gray-300`
              : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                  done && `bg-[#ececec] rounded-sm`
                }`
          }
          onClick={() => HandleDone()}
        >
          Done
        </div>
        <div
          className={
            loading
              ? `text-gray-300`
              : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                  notDone && `bg-[#ececec] rounded-sm`
                }`
          }
          onClick={() => HandleNotDone()}
        >
          Sceduled & Not Done
        </div>
      </div>
      {loading ? (
        <div className="w-full flex flex-col items-center gap-10 mt-5">
          {Array.from({ length: 4 }).map((item, index) => (
            <TextShimmer key={index} />
          ))}
        </div>
      ) : myBookings.length === 0 ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600">
          No Active Bookings
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between text-sm bg-[#ECECEC] text-black font-bold overflow-x-scroll rounded-md px-4">
            <div className="flex items-center xs:gap-[4vw] shrink-0 my-5">
              <div className="w-[200px]">Client Name</div>
              <div className="hidden sm:block w-[120px] ">Scheduled Date</div>
              <div className="shrink-0 w-[60px]">Action</div>
            </div>
            <div className="shrink-0 text-right w-[60px] "></div>
          </div>
          {myBookings?.map((item, index) => (
            <BookingCard item={item} key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default TestElement;
