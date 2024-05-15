import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
export const ShowSchedule = ({ id }) => {
  const [servDesc, setServDesc] = useState({});
  const getServiceDesc = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    if (id != null) {
      try {
        const res = await axios.get(
          `/customers/services/?action=2&service_id=${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        const json = res.data;
        setServDesc(json.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getServiceDesc();
  }, [id]);
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate(`/experts/expertprofile/booking/${id}`, { state: {servDesc,slotData }});
  };

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(" "); // Split the string by spaces
    const dayOfWeek = dateParts[0]; // First part is the day of the week
    const date = parseInt(dateParts[1]); // Second part is the date
    const month = dateParts[2]; // Third part is the month name
    return {
      dayOfWeek,
      date,
      month,
    };
  };
  
  const [selectedDay, setSelectedDay] = useState(null); // State to keep track of selected day
  const [selectedDayIndex, setSelectedDayIndex] = useState(null); // State to keep track of selected day's index
  const [selectedDaySlots, setSelectedDaySlots] = useState([]); // State to store selected day's slots
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);
  console.log(servDesc);
  const handleDateClick = (dateString, index) => {
    setSelectedDay(dateString); // Set the selected day
    setSelectedDayIndex(index); // Set the selected day's index
    setSelectedDaySlots(servDesc.availability[dateString]); // Set the selected day's slots
    setSelectedSlotIndex(null)
    setSlotData(prevState => ({
        ...prevState, 
        slotStartTime: "",
        slotEndTime: "",
        slotDuration: "",
        slotId: ""
      }));
    setSlotData(prevState => ({
        ...prevState, 
        date: dateString 
      }));
  };
  const handleSlotClick = (slotStartTime,slotEndTime,slotDuration,slotId,index) => {
    setSelectedSlotIndex(index)
    setSlotData(prevState => ({
        ...prevState, 
        slotStartTime: slotStartTime,
        slotEndTime: slotEndTime,
        slotDuration: slotDuration,
        slotId:slotId
      }));
  }
  const [slotData, setSlotData] = useState({
    date: "",
    slotStartTime: "",
    slotEndTime: "",
    slotDuration: "",
    slotId:""
  })
  console.log(slotData)
  return (
    <div className="w-full px-2 py-6 border border-solid border-slate-300 rounded-lg">
      <div className="pb-3 font-semibold text-base">
        Book a 1:1 meeting with {servDesc?.expert_data?.first_name}{" "}
      </div>
      <div className="pt-3 border-t border-solid border-slate-200 mt-3 sm:text-xl md:text-2xl text-3xl font-semibold ">
      ₹ {servDesc?.price}
      </div>
      <div className="my-3 py-4 text-base border-y border-solid border-slate-200">
        <div>Available Dates</div>
        <div className="flex gap-3 overflow-x-auto pt-3">
          {servDesc &&
            servDesc.availability &&
            Object.keys(servDesc?.availability).map((dateString, index) => {
              const { dayOfWeek, date, month } = parseDateString(dateString);
              return (
                <>
                  <div
                    key={index}
                    onClick={() => handleDateClick(dateString,index)}
                    className={`h-24 w-[4rem] sm:w-[5rem] text-center shrink-0 shadow-sm rounded-md cursor-pointer ${selectedDayIndex === index ?"border border-solid border-red-400 ":"border border-solid border-slate-300 hover:border-blue-400"}`}
                  >
                    <div className="text-xs mt-3 text-gray-500">
                      {" "}
                      {dayOfWeek}{" "}
                    </div>
                    <div className="mt-2 text-sm sm:text-base font-semibold">
                      {" "}
                      {date} {month}{" "}
                    </div>
                    <div className="mt-2 text-xs text-green-600 font-semibold">
                      {" "}
                      {servDesc.availability[dateString].length} slots{" "}
                    </div>
                  </div>
                </>
              );
            }
            )}
        </div>
      </div>
      <div>
        <div>Available Slots for {selectedDay}</div>
        <div className="flex gap-3 overflow-x-auto pt-3">
          {selectedDaySlots.length===0 ? <div>Select a date to see available slots</div> :selectedDaySlots.map((slot, index) => (
            <>
            
            <button
              disabled={slot.booked}
              key={index}
              className={`relative text-xs max-w-28 text-center py-3 px-6 bg-white shrink-0 shadow-sm rounded-md  ${selectedSlotIndex === index ?"border border-solid border-red-400 ":"border border-solid border-slate-300 hover:border-blue-400"} ${slot.booked ? "cursor-not-allowed":"cursor-pointer" } } `}
              onClick={() => handleSlotClick(slot.slot_start_time,slot.slot_end_time, slot.slot_duration, slot.slot_id, index)}
            >
              {slot.booked && <div className="text-xs text-green-500 absolute top-0 left-0">Booked</div>}
              {slot.slot_start_time}
            </button>
            </>
          ))}
        </div>
      </div>

      <div className="no-underline">
        <button
          disabled={(slotData.date==="" || slotData.slotStartTime==="" || slotData.slotEndTime==="" || slotData.slotDuration==="" || slotData.slotId==="")?true:false}
          className={`mt-6 bg-[#007AFF] text-white text-lg font-semibold text-center p-3 rounded-lg  no-underline w-full ${(slotData.date===""|| slotData.slotStartTime==="" || slotData.slotEndTime==="" || slotData.slotDuration==="" || slotData.slotId==="") ? "cursor-not-allowed opacity-75" : "cursor-pointer"} `}
          onClick={() => goToBooking()}
        >
          Book a slot
        </button>
      </div>
    </div>
  );
};
export default ShowSchedule;
