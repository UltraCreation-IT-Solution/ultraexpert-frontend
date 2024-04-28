// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "./axios";
// import ReactQuiz from "./TestElement2";

// const ThoughtProcess = () => {
//   const [test_id, setTest_id] = useState("");
//   const [thoughtProcess, setThoughtProcess] = useState([]);
//   const [repord_id, setRepord_id] = useState("");
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const cookies = document.cookie.split("; ");
//       const jsonData = {};

//       cookies.forEach((item) => {
//         const [key, value] = item.split("=");
//         jsonData[key] = value;
//       });
//       try {
//         const response = await axios.get(
//           "/inspections/test/?action=1&skill_name=reacthvhgvghchg",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${jsonData.access_token}`,
//             },
//           }
//         );
//         setTest_id(response.data.data.test_id);
//         setThoughtProcess(response.data.data.thought_process);
//         setRepord_id(response.data.data.report_id);
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchQuestions();
//   }, []);

//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
//   const [isTimeOver, setIsTimeOver] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime === 0) {
//           clearInterval(timer);
//           setIsTimeOver(true);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (isTimeOver) {
//       // Handle time over action, e.g., show popup
//       // You can add custom logic here
//       console.log("Time is over");
//     }
//   }, [isTimeOver]);

//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData("index", index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, newIndex) => {
//     const droppedIndex = parseInt(e.dataTransfer.getData("index"));
//     const newThoughtProcess = [...thoughtProcess];
//     const movedItem = newThoughtProcess.splice(droppedIndex, 1)[0];
//     newThoughtProcess.splice(newIndex, 0, movedItem);
//     setThoughtProcess(newThoughtProcess);
//   };

//   const handleSubmit = async () => {
//     const cookies = document.cookie.split("; ");
//     const jsonData = {};

//     cookies.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     // console.log(`'${thoughtProcess}'`);
//     const arrayString =
//       '"[' + thoughtProcess.map((item) => "'" + item + "'").join(", ") + ']"';
//     console.log(arrayString);
//     try {
//       const response = await axios.post(
//         "/inspections/test/",
//         {
//           action: 1,
//           answer: arrayString,
//           report_id: repord_id,
//           test_id: test_id,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${jsonData.access_token}`,
//           },
//         }
//       );
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCancel = () => {
//     // Handle cancel action, e.g., navigate back to previous route
//     // You can use react-router-dom or any routing library for this
//     console.log("Cancelled the test");
//   };

//   // Format the time left to mm:ss
//   const formattedTimeLeft = new Date(timeLeft * 1000)
//     .toISOString()
//     .substr(14, 5);
//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center">
//       <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8 border border-blue-500">
//         <h2 className="text-2xl font-semibold mb-4">
//           Thought Process Reordering Quiz
//         </h2>
//         <div className="flex items-center justify-center bg-blue-300 text-white px-6 py-3 rounded-full shadow-md mb-4">
//           <svg
//             className="w-6 h-6 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             ></path>
//           </svg>
//           <span className="text-xl">{formattedTimeLeft}</span>
//         </div>
//         <p className="mb-4">
//           Drag and drop the components to reorder them in the correct order:
//         </p>
//         <ul className="flex flex-wrap gap-2 py-4">
//           {thoughtProcess.map((step, index) => (
//             <li
//               key={index}
//               className="bg-white text-gray-800 border border-blue-500 px-4 py-2 rounded-md cursor-move shadow-md flex-grow"
//               draggable
//               onDragStart={(e) => handleDragStart(e, index)}
//               onDragOver={(e) => handleDragOver(e, index)}
//               onDrop={(e) => handleDrop(e, index)}
//             >
//               {step}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {isTimeOver && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
//           <div className="bg-white rounded-lg p-8 shadow-lg">
//             <p className="text-2xl font-semibold text-gray-800 mb-4">
//               Time's Up!
//             </p>
//             <p className="text-gray-600">
//               Your time is over. Please submit your answers.
//             </p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="bg-white py-4 w-full border-t border-blue-500">
//         <div className="container mx-auto flex justify-between">
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
//             onClick={handleCancel}
//           >
//             Cancel
//           </button>
//           <button
//             className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-transparent"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="fixed top-4 right-4 bg-white p-4 rounded-md shadow-md border border-blue-500 text-blue-500">
//         {formattedTimeLeft}
//       </div>
//     </div>
//   );
// };
// function TestElement() {
//   return (
//     // <ThoughtProcess />
//     <ReactQuiz />
//   );
// }

// export default TestElement;


































// import React, { useEffect, useState } from "react";
// import { BsUpload, BsX } from "react-icons/bs";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { FiX } from "react-icons/fi";
// import axios from "../../axios";

// // slots
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
// //slots

// //slots api connection
// const createSlots = async (e) => {
//   e.preventDefault();
//   const cookies = document.cookie.split("; ");
//   const jsonData = {};
//   cookies.forEach((item) => {
//     const [key, value] = item.split("=");
//     jsonData[key] = value;
//   });

// try {
//   const res = await axios.post(
//     "/experts/services/",
//     {
//       action: 5,
//       service_id: 1,
//       notify_before: true,
//       notify_before_time: "10 min",
//       notify_after: true,
//       notify_after_time: "30 min",
//       day: "10 jan",
//       start_time: "11:00 Am",
//       end_time: "12:00 PM",
//       timezone: "IST",
//       duration: 3600,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${jsonData.access_token}`,
//       },
//     }
//   );
//   const data = res.data;
//   if (!data || data.status === 400 || data.status === 401) {
//     console.log("Something went wrong");
//     return;
//   }
// } catch (error) {
//   console.log(error);
// }
// }
// //slots api connection

// const CreateService = () => {
//   const navigate = useNavigate();

//   const [interest, setInterest] = useState([]);
//   const [interestInput, setInterestInput] = useState("");

//   const addInterest = () => {
//     if (interestInput.trim() !== "") {
//       setInterest([...interest, interestInput.trim()]);
//       setInterestInput("");
//     }
//   };

//   const removeInterest = (index) => {
//     const updatedInterest = [...interest];
//     updatedInterest.splice(index, 1);
//     setInterest(updatedInterest);
//   };
//   const [serviceTitle, setServiceTitle] = useState("");
//   console.log(serviceTitle);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const newPreviews = [];
//     const combinedFiles = [...selectedFiles];

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         newPreviews.push(e.target.result);
//         if (newPreviews.length === files.length) {
//           const totalFiles = combinedFiles.length + newPreviews.length;
//           if (totalFiles > 4) {
//             setErrorMessage("You can only upload up to 4 files.");
//           } else {
//             setErrorMessage("");
//             setSelectedFiles([...combinedFiles, ...newPreviews]);
//           }
//         }
//       };

//       reader.readAsDataURL(file);
//     }
//   };

//   const removeImage = (index) => {
//     const newSelectedFiles = [...selectedFiles];
//     newSelectedFiles.splice(index, 1);
//     setSelectedFiles(newSelectedFiles);
//   };

//   const handleButtonClick = (event, index) => {
//     event.stopPropagation(); // Prevent propagation to parent elements
//     event.preventDefault(); // Prevent the default behavior of the button click
//     removeImage(index);
//   };

//   const handleBack = () => {
//     navigate("/expertdashboard");
//   };

//   //slots
//   const [showSlots, setShowSlots] = useState(false);

//   const [events, setEvents] = useState([]);
//   console.log(events);
//   const [startInputDate, setStartInputDate] = useState("");
//   const [startInputTime, setStartInputTime] = useState("");
//   const [endInputDate, setEndInputDate] = useState("");
//   const [endInputTime, setEndInputTime] = useState("");
//   // const [titleInput, setTitleInput] = useState('');

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
//           id: events.length + 1,
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
//       // setTitleInput('');
//       setServiceTitle("");
//     } else {
//       alert(
//         "Please enter valid start and end dates, time, and a non-empty title."
//       );
//     }
//   };

//   const [categoriesArray, setCategoriesArray] = useState([]);
//   const [filterCategoriesArray, setFilterCategoriesArray] = useState([]);

//   const getServiceCategory = async () => {
//     const cookie = document.cookie.split(";");
//     const jsonData = {};

//     cookie.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try {
//       const res = await axios.get("/experts/services/?action=2", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${jsonData.access_token}`,
//         },
//       });
//       const data = res.data.data;
//       setCategoriesArray(data);
//       setFilterCategoriesArray(data);
//       console.log(data);
//       console.log(categoriesArray);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const [selectedCategory, setSelectedCategory] = useState({
//     name: "",
//     id: "",
//   });

//   const [categoryInputValue, setCategoryInputValue] = useState("");

//   const setNewCategory = async (e) => {
//     e.preventDefault();
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
//           action: 4,
//           category_name: selectedCategory.name,
//           img_url: "",
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
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const searchVal = e.target.value.toLowerCase();
//     setCategoryInputValue(searchVal);
//     const searchVal1 =
//       e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
//     setSelectedCategory({ ...selectedCategory, name: searchVal1 });
//     setFilterCategoriesArray((prevCat) =>
//       prevCat.filter((item) => item?.name?.toLowerCase().includes(searchVal))
//     );
//   };

//   const [val, setVal] = useState("");
//   const [showSkill, setShowSkill] = useState([]);

//   const getSkills = async () => {
//     const cookie = document.cookie.split(";");
//     const jsonData = {};

//     cookie.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try {
//       const res = await axios.get("/inspections/test/?action=2", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${jsonData.access_token}`,
//         },
//       });
//       const data = res.data.data.qualified;
//       console.log(data);
//       setShowSkill(data);
//       // console.log(showSkill);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSkills();
//   }, []);
//   //slots
//   console.log(showSkill);

//   const [skill, setSkill] = useState([]);

//   const allTrueSKill = () => {
//     const filteredSkills = Object.keys(showSkill).filter(
//       (key) => showSkill[key] === true
//     );
//     // Object.keys(showSkill).forEach(function (key, index) {
//     //   if (showSkill[key] === true) {
//     //     setSkill({...skill, key});
//     //   }
//     // })

//     setSkill(filteredSkills);
//   };
//   console.log(skill);

//   const handleSkillChange = (e) => {
//     const inputValue = e.target.value;
//     if (inputValue.trim() === "") {
//       setSkill([]); // Open dropdown when input field becomes empty
//     }
//   };

//   const handleSkillSelection = (val) => {
//     const capitalizedSkill = val.charAt(0).toUpperCase() + val.slice(1);
//     setVal(capitalizedSkill);
//     setSkill([]); // Clear skill list to close the dropdown
//   };

//   const interests = [
//     { id: 1, name: "Python" },
//     { id: 2, name: "C++" },
//     { id: 3, name: "Django" },
//     { id: 4, name: "HTML" },
//     { id: 5, name: "CSS" },
//     { id: 6, name: "JS" },
//     { id: 7, name: "React JS" },
//   ];

//   const [selectedSkill, setSelectedSkill] = useState([]);
//   const [inputTagValue, setInputTagValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const handleTagChange = (event) => {
//     const { value } = event.target;
//     setInputTagValue(value);
//     setSuggestions(
//       interests.filter((suggestion) =>
//         suggestion.name.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//   };

//   const handleSuggestionClick = (suggestion) => {
//     // Add suggestion to selected skills
//     if (!selectedSkill.includes(suggestion.name)) {
//       setSelectedSkill([...selectedSkill, suggestion.name]);
//       console.log(selectedSkill);
//     }
//     // Clear input and suggestions
//     setInputTagValue("");
//     setSuggestions([]);
//   };

//   const handleTagRemove = (skill) => {
//     setSelectedSkill(selectedSkill.filter((s) => s !== skill));
//   };

//   const handleNewSkillAdd = (value) => {
//     if (!selectedSkill.includes(value)) {
//       setSelectedSkill([...selectedSkill, value]);
//     }
//     setInputTagValue("");
//   };

//   const [createService,setCreateService] = useState({
//     img:"",
//     desc:"",
//     duration:6,
//     price:"",
//     currency:"INR",
//   })

//   const handleServiceCreate = async(e) =>{
//     e.preventDefault();

//     const cookie = document.cookie.split(";");
//     const jsonData = {};
    
//     cookie.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try{
//       const res = await axios.post("/experts/services/",{
//         action:1,
//         service_name:serviceTitle,
//         service_img:createService.img,
//         category:selectedCategory.id,
//         description:createService.desc,
//         skill_name:val,
//         price:createService.price,
//         duration:createService.duration,
//         currency:createService.currency,
//         tags_list:selectedSkill
//       },{
//         headers:{
//           "Content-Type":"application/json",
//           Authorization:`Bearer ${jsonData.access_token}`
//         }
//       });
//       const data = res.data;
//       console.log(data.msg);
//       setShowSlots(!showSlots);
//     }catch(error){
//       console.log(error);
//     }
//   }

//   return (
//     <>
    
//     <div className="mt-[100px] flex flex-col bg-white h-auto">
//       <div className="flex w-[60%] mx-auto">
//         <div
//           onClick={() => handleBack()}
//           className="flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
//         >
//           <MdOutlineKeyboardBackspace size={25} />
//           Add a service
//         </div>
//       </div>
//       <div className="w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg">
//         <div className="text-4xl text-[#3E5676] font-bold my-4">
//           Create a serivce
//         </div>
//         <u className="border border-[#d8d8d8] border-solid w-[90%] mb-8"></u>
//         <form
//           onSubmit={(event) => event.preventDefault()}
//           className="w-[60%] flex flex-col mb-5"
//         >
//           <label htmlFor="title" className="text-lg mb-1">
//             Service Title
//           </label>
//           <input
//             placeholder="Service Title"
//             value={serviceTitle}
//             onChange={(e) => setServiceTitle(e.target.value)}
//             type="text"
//             id="title"
//             name="title"
//             className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
//           />
//           <label htmlFor="desc" className="text-lg mb-1">
//             Service Description
//           </label>
//           <textarea
//             placeholder="Service Description"
//             name="desc"
//             id="desc"
//             className="border border-solid resize-none h-32 border-slate-300 rounded-md px-4 py-2 mb-4"
//           />
//           <label htmlFor="interests" className="text-lg mb-1">
//             Service Tags
//           </label>

//           <div className="flex flex-wrap border border-slate-300 rounded p-2 gap-3 ">
//             {interest.map((skill, ind) => (
//               <div
//                 key={ind}
//                 className="flex gap-1 items-center bg-slate-300 text-gray-600 pl-4 pr-2 py-1 rounded-full text-sm mr-2 mb-2"
//               >
//                 {skill}
//                 <FiX
//                   onClick={() => removeInterest(ind)}
//                   className="ml-1 cursor-pointer text-center text-lg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center mb-4 gap-2">
//             <input
//               type="text"
//               placeholder="Add Tags"
//               value={interestInput}
//               onChange={(e) => setInterestInput(e.target.value)}
//               className="border border-solid border-slate-300 rounded-md px-4 py-2 w-full"
//             />
//             <button
//               onClick={() => addInterest()}
//               className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer"
//             >
//               Add
//             </button>
//           </div>

//           <label htmlFor="imageSelector" className="text-lg mb-1">
//             Service Images
//           </label>
//           <div
//             onClick={() => document.querySelector("#imageSelector").click()}
//             className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
//           >
//             <input
//               type="file"
//               id="imageSelector"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="hidden"
//             />
//             {selectedFiles.length > 0 ? (
//               <div className="flex flex-wrap">
//                 {selectedFiles.map((preview, index) => (
//                   <div key={index} className="relative mr-2 mb-2">
//                     <img
//                       src={preview}
//                       alt={`Preview ${index}`}
//                       className="w-24 h-24 object-cover"
//                     />
//                     <div
//                       onClick={(e) => handleButtonClick(e, index)}
//                       className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
//                     >
//                       <BsX />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center">
//                 <BsUpload size={20} />
//                 <div className="text-sm text-[#1475cf] mt-2">
//                   Drop here to attach or upload
//                 </div>
//                 <div className="text-xs mt-10">Max Uploads: 4 files</div>
//               </div>
//             )}
//           </div>
//           <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
//           <label htmlFor="price" className="text-lg mb-1">
//             Service Price
//           </label>
//           <div className="flex">
//             <div className="border border-solid border-slate-300 rounded-s-md p-2 mb-4">
//               <FaIndianRupeeSign />
//             </div>
//             <input
//               placeholder="Service Price"
//               type="number"
//               id="price"
//               name="price"
//               className="border border-solid border-slate-300 rounded-e-md px-4 py-2 mb-4 w-full"
//             />
//           </div>
//           <div className="flex justify-center mb-4">
//             <button
//               type="submit"
//               onClick={()=> setShowSlots(!showSlots)}
//               className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
//             >
//               Create time slots
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>

//     {/* slots */}
//     {
//     showSlots && 
//     <div className="calendar-container mt-[100px] w-[90%] m-auto   ">
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
//         <input type="text" value={serviceTitle}  />
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
//     }
//     {/* slolts */}
//     </>
//   );
// };

// export default CreateService;

