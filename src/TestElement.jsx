// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);
//   console.log(events)
//   const [startInputDate, setStartInputDate] = useState('');
//   const [startInputTime, setStartInputTime] = useState('');
//   const [endInputDate, setEndInputDate] = useState('');
//   const [endInputTime, setEndInputTime] = useState('');
//   const [titleInput, setTitleInput] = useState('');

//   const handleCreateEvent = () => {
//     const startDate = moment(startInputDate, 'YYYY-MM-DD');
//     const endDate = moment(endInputDate, 'YYYY-MM-DD');
//     const startTime = moment(startInputTime, 'HH:mm');
//     const endTime = moment(endInputTime, 'HH:mm');

//     if (
//       startDate.isValid() &&
//       endDate.isValid() &&
//       endTime.isValid() &&
//       endTime.isSameOrAfter(startTime) &&
//       titleInput.trim() !== ''
//     ) {
//       if (startTime.isSame(endTime)) {
//         alert('Start time and end time for an event should not be the same.');
//         return;
//       }
//       const newEvents = [];
//       let currentDate = startDate.clone();
//       while (currentDate.isSameOrBefore(endDate, 'day')) {
//         const newEvent = {
//           id: events.length + 1,
//           title: titleInput.trim(),
//           start: currentDate.clone().hour(startTime.hour()).minute(startTime.minute()).toDate(),
//           end: currentDate.clone().hour(endTime.hour()).minute(endTime.minute()).toDate(),
//         };
//         newEvents.push(newEvent);
//         currentDate.add(1, 'day');
//       }
//       setEvents([...events, ...newEvents]);
//       setStartInputDate('');
//       setStartInputTime('');
//       setEndInputDate('');
//       setEndInputTime('');
//       setTitleInput('');
//     } else {
//       alert('Please enter valid start and end dates, time, and a non-empty title.');
//     }
//   };

//   return (
//     <div className="calendar-container mt-[100px] ">
//       <div>
//         <label>Start Date:</label>
//         <input type="date" value={startInputDate} onChange={(e) => setStartInputDate(e.target.value)} />
//         <label>Start Time:</label>
//         <input type="time" value={startInputTime} onChange={(e) => setStartInputTime(e.target.value)} />
//       </div>
//       <div>
//         <label>End Date:</label>
//         <input type="date" value={endInputDate} onChange={(e) => setEndInputDate(e.target.value)} />
//         <label>End Time:</label>
//         <input type="time" value={endInputTime} onChange={(e) => setEndInputTime(e.target.value)} />
//       </div>
//       <div>
//         <label>Event Title:</label>
//         <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
//       </div>
//       <button onClick={handleCreateEvent}>Create Event</button>
//       <Calendar className='mt-[100px] '
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   );
// };

// export default MyCalendar;

import React from "react";
const MyCalendar = () => {
  document.body.style.overflowY = "hidden";
  return(
    <div className="mt-[100px] flex items-center gap-5 px-[6vw]">
      <div className="w-[70%] h-screen flex flex-col gap-5">
          <div className="h-[20%] rounded-lg shimmer">

          </div>
          <div className="h-[80%] rounded-lg shimmer"></div>
      </div>
      <div className="w-[30%] h-screen bg-slate-50 rounded-lg shimmer"></div>
    </div>
  )
}
export default MyCalendar;
