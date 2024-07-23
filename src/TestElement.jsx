// export const MyBigCalendar = ({ showSlots }) => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const localizer = momentLocalizer(moment);
//   const [notifyBefore, setNotifyBefore] = useState(false);
//   const [notifyAfter, setNotifyAfter] = useState(false);
//   const [notifyBeforeTime, setNotifyBeforeTime] = useState(0);
//   const [notifyAfterTime, setNotifyAfterTime] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [startInputDate, setStartInputDate] = useState("");
//   const [startInputTime, setStartInputTime] = useState("");
//   const [endInputDate, setEndInputDate] = useState("");
//   const [endInputTime, setEndInputTime] = useState("");
//   const [updateData, setUpdateData] = useState({});
//   const [serviceTitle, setServiceTitle] = useState("");
//   const [temp, setTemp] = useState(0);

//   useEffect(() => {
//     getServiceDetails();
//   }, [showSlots, temp]);

//   const getServiceDetails = async () => {
//     const cookie = document.cookie.split("; ");
//     const jsonData = {};
//     cookie.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try {
//       const res = await axios.get(
//         `/customers/services/?action=2&service_id=${params.id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${jsonData.access_token}`,
//           },
//         }
//       );
//       if (!res.data || res.data.status === 400 || res.data.status === 401) {
//         console.log("Something went wrong");
//         return;
//       }
//       const Data = res.data;
//       const serviceData = Data.data;
//       setUpdateData(serviceData);
//       setServiceTitle(Data.data.service_name);
//       setEvents(processServiceData(serviceData.availability));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const processServiceData = (availability) => {
//     const events = [];
//     for (const [date, slots] of Object.entries(availability)) {
//       slots.forEach((slot) => {
//         const startDate = moment(
//           `${date} ${slot.slot_start_time}`,
//           "ddd DD MMM h:mm A"
//         );
//         const endDate = moment(
//           `${date} ${slot.slot_end_time}`,
//           "ddd DD MMM h:mm A"
//         );
//         events.push({
//           id: slot.slot_id,
//           title: serviceTitle,
//           start: startDate.toDate(),
//           end: endDate.toDate(),
//           notifyBefore: slot.notify_before,
//           notifyBeforeTime: slot.notify_before_time,
//           notifyAfter: slot.notify_after,
//           notifyAfterTime: slot.notify_after_time,
//           slotBooked: slot.slot_booked,
//           slotDisabled: slot.slot_disabled,
//         });
//       });
//     }
//     return events;
//   };
//   console.log(events);
//   const [loading, setLoading] = useState(false);
//   const handlePostEvent = async (e) => {
//     e.preventDefault();
//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });

//     const formattedEvents = convertEventsToAPIFormat(events);
//     console.log(notifyAfter, notifyAfterTime, notifyBefore, notifyBeforeTime);
//     try {
//       const res = await axios.post(
//         "/experts/services/",
//         {
//           action: 6,
//           service_id: updateData?.id,
//           notify_before: notifyBefore,
//           notify_before_time: notifyBeforeTime.toString(),
//           notify_after: notifyAfter,
//           notify_after_time: notifyAfterTime.toString(),
//           time_slots: formattedEvents,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${jsonData.access_token}`,
//           },
//         }
//       );

//       const data = res.data;
//       if (!data || data.status === 400 || data.status === 401) {
//         console.log("Something went wrong");
//         return;
//       }
//       setServiceTitle("");
//       navigate("/expertdashboard/myservices");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const generateUniqueId = () => {
//     const timestamp = new Date().getTime();
//     return parseInt(`${timestamp}${Math.floor(Math.random() * 1000)}`);
//   };

//   const handleCreateEvent = () => {
//     const startDate = moment(startInputDate, "YYYY-MM-DD");
//     const endDate = moment(endInputDate, "YYYY-MM-DD");
//     const startTime = moment(startInputTime, "HH:mm");
//     const endTime = moment(endInputTime, "HH:mm");

//     if (
//       startDate.isValid() &&
//       endDate.isValid() &&
//       endTime.isValid() &&
//       endTime.isSameOrAfter(startTime) &&
//       serviceTitle.trim() !== ""
//     ) {
//       if (startTime.isSame(endTime)) {
//         alert("Start time and end time for an event should not be the same.");
//         return;
//       }
//       const newEvents = [];
//       let currentDate = startDate.clone();
//       while (currentDate.isSameOrBefore(endDate, "day")) {
//         const newEvent = {
//           id: generateUniqueId(),
//           title: serviceTitle.trim(),
//           start: currentDate
//             .clone()
//             .hour(startTime.hour())
//             .minute(startTime.minute())
//             .toDate(),
//           end: currentDate
//             .clone()
//             .hour(endTime.hour())
//             .minute(endTime.minute())
//             .toDate(),
//         };
//         newEvents.push(newEvent);
//         currentDate.add(1, "day");
//       }
//       setEvents([...events, ...newEvents]);
//       setStartInputDate("");
//       setStartInputTime("");
//       setEndInputDate("");
//       setEndInputTime("");
//     } else {
//       alert(
//         "Please enter valid start and end dates, time, and a non-empty title."
//       );
//     }
//   };

//   const convertEventToAPIFormat = (event) => {
//     const startDate = moment(event.start);
//     const endDate = moment(event.end);

//     return {
//       time_slot_id: event.id,
//       day: `${startDate.format("ddd DD MMM")}`,
//       start_time: startDate.format("h:mm A"),
//       end_time: endDate.format("h:mm A"),
//       timezone: "IST",
//       duration: endDate.diff(startDate, "seconds"),
//     };
//   };

//   const convertEventsToAPIFormat = (events) => {
//     return events.map((event) => convertEventToAPIFormat(event));
//   };

//   const [showModal, setShowModal] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [updatedStartInputTime, setUpdatedStartInputTime] = useState("");
//   const [updatedEndInputTime, setUpdatedEndInputTime] = useState("");
//   const [isBooked, setIsBooked] = useState(false);

//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//     setUpdatedStartInputTime(moment(event.start).format("HH:mm"));
//     setUpdatedEndInputTime(moment(event.end).format("HH:mm"));
//     setShowModal(true);
//     setIsBooked(event?.slotBooked);
//   };

//   const handleUpdateEvent = () => {
//     setEvents(
//       events.map((event) => {
//         if (event.id === selectedEvent.id) {
//           return {
//             ...event,
//             start: moment(event.start)
//               .hour(moment(updatedStartInputTime, "HH:mm").hour())
//               .minute(moment(updatedStartInputTime, "HH:mm").minute())
//               .toDate(),
//             end: moment(event.end)
//               .hour(moment(updatedEndInputTime, "HH:mm").hour())
//               .minute(moment(updatedEndInputTime, "HH:mm").minute())
//               .toDate(),
//           };
//         }
//         return event;
//       })
//     );
//     setShowModal(false);
//   };

//   const handleDeleteEvent = async () => {
//     const cookies = document.cookie.split("; ");
//     const jsonData = {};
//     cookies.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try {
//       const res = await axios.post(
//         "/experts/services/",
//         {
//           action: 7,
//           time_slot_id: selectedEvent.id,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${jsonData.access_token}`,
//           },
//         }
//       );
//       console.log(res);
//       setTemp(temp + 1);
//     } catch (error) {
//       console.log(error);
//     }
//     // setEvents(events.filter((event) => event.id !== selectedEvent.id));
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className={`calendar-container ${showModal ? "blur-sm" : ""}`}>
//         <div className="flex gap-10 flex-wrap w-full">
//           <div className="flex flex-col gap-1 ">
//             <label className="text-base text-gray-600">Start Date</label>
//             <input
//               type="date"
//               value={startInputDate}
//               onChange={(e) => setStartInputDate(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-base text-gray-600">End Date:</label>
//             <input
//               type="date"
//               value={endInputDate}
//               onChange={(e) => setEndInputDate(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-base text-gray-600">Start Time:</label>
//             <input
//               type="time"
//               value={startInputTime}
//               onChange={(e) => setStartInputTime(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
//             />
//           </div>
//           <div className="flex flex-col gap-1">
//             <label className="text-base text-gray-600">End Time:</label>
//             <input
//               type="time"
//               value={endInputTime}
//               onChange={(e) => setEndInputTime(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
//             />
//           </div>
//         </div>

//         <div className="mt-10 flex gap-10">
//           <div>
//             <div className="flex items-center gap-2">
//               <label className="text-base text-gray-600">Notify Before: </label>
//               <input
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 onClick={() => setNotifyBefore(!notifyBefore)}
//               />
//             </div>

//             {notifyBefore && (
//               <input
//                 placeholder="enter time in minutes"
//                 type="number"
//                 name="notifyBefore"
//                 id="notifyBefore"
//                 onChange={(e) => setNotifyBeforeTime(e.target.value)}
//                 className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-56 mt-5"
//               />
//             )}
//           </div>
//           <div>
//             <div className="flex items-center gap-2">
//               <label className="text-base text-gray-600">Notify After: </label>
//               <input
//                 type="checkbox"
//                 name="checkbox"
//                 id="checkbox"
//                 onClick={() => setNotifyAfter(!notifyAfter)}
//               />
//             </div>

//             {notifyAfter && (
//               <input
//                 placeholder="enter time in minutes"
//                 type="number"
//                 name="notifyAfter"
//                 id="notifyAfter"
//                 onChange={(e) => setNotifyAfterTime(e.target.value)}
//                 className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-56 mt-5"
//               />
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-3 mt-10 ">
//           <label className="text-base text-gray-600">Title:</label>
//           <input
//             type="text"
//             value={serviceTitle}
//             onChange={(e) => setServiceTitle(e.target.value)}
//             className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-64"
//           />
//         </div>
//         <div className="flex gap-3">
//           <button
//             onClick={handleCreateEvent}
//             className="my-10 text-sm md:text-base px-4 py-2 btnBlack rounded-sm text-white ml-2"
//           >
//             Create slots
//           </button>
//         </div>
//         {events.length === 0 ? (
//           <p className="text-grey-600 text-xl md:text-2xl text-center w-full">
//             Loading...
//           </p>
//         ) : (
//           <Calendar
//             className={`mt-4`}
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500 }}
//             onSelectEvent={handleEventClick}
//           />
//         )}
//         <button
//           onClick={(e) => handlePostEvent(e)}
//           className="mt-10 text-sm md:text-base px-4 py-2 btnBlack rounded-sm text-white"
//         >
//           Update service
//         </button>
//       </div>
//       {showModal && (
//         <div className="modal blur-none rounded-md py-4 px-3 xs:px-5 w-[320px] md:w-[450px] shadow-md">
//           <div className="flex justify-between items-center text-xl md:text-3xl font-bold text-gray-600">
//             <div>Update Event</div>
//             <RxCross2
//               className="border border-solid border-slate-400 rounded-sm"
//               onClick={() => setShowModal(false)}
//             />
//           </div>
//           <div className="my-5 text-gray-600 text-base sm:text-lg">
//             Title: {selectedEvent?.title}
//           </div>
//           {isBooked && (
//             <div className="text-sm text-red-500 mt-2">
//               Cannot update slot is already booked!
//             </div>
//           )}
//           <div className="flex flex-col gap-1 mt-3 sm:mt-5">
//             <label className="text-base text-gray-600">Start Time:</label>
//             <input
//               type="time"
//               value={updatedStartInputTime}
//               onChange={(e) => setUpdatedStartInputTime(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-full "
//             />
//           </div>
//           <div className="flex flex-col gap-1 mt-3 mb-5 sm:mb-8">
//             <label className="text-base text-gray-600">End Time:</label>
//             <input
//               type="time"
//               value={updatedEndInputTime}
//               onChange={(e) => setUpdatedEndInputTime(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-full"
//             />
//           </div>
//           <button
//             disabled={isBooked}
//             className={`ext-sm md:text-base px-4 py-2 bg-white border border-solid border-slate-400 rounded-sm text-black ${
//               isBooked ? "cursor-not-allowed " : "cursor-pointer"
//             }`}
//             onClick={handleUpdateEvent}
//           >
//             Update
//           </button>
//           <button
//             className="text-sm md:text-base px-4 py-2 btnBlack rounded-sm text-white ml-2"
//             onClick={handleDeleteEvent}
//           >
//             Delete
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
