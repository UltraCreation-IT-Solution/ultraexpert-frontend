import React, { useEffect, useState } from "react";
import { BsUpload, BsX } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "../../axios";
import { FiUpload } from "react-icons/fi";

// slots
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { handleUploadImage } from "../../constant";
//slots

const CreateService = () => {
  const navigate = useNavigate();

  const [interest, setInterest] = useState([]);
  const [interestInput, setInterestInput] = useState("");

  const addInterest = () => {
    if (interestInput.trim() !== "") {
      setInterest([...interest, interestInput.trim()]);
      setInterestInput("");
    }
  };

  const removeInterest = (index) => {
    const updatedInterest = [...interest];
    updatedInterest.splice(index, 1);
    setInterest(updatedInterest);
  };
  const [serviceTitle, setServiceTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadProfileProgress, setUploadProfileProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);

  const [imageLoading, setImageLoading] = useState(false);

  const handleFileChange = async (e) => {
    setImageLoading(true);
    const url = await handleUploadImage(
      e.target.files[0],
      e.target.files[0].name
    );
    console.log(url);
    setImage(url);
    setImageUrl(url);
    setImageLoading(false);
  };
  const handleImageRemove = () => {
    setImage("");
  };

  const handleBack = () => {
    navigate("/expertdashboard");
  };

  //slots
  const [showSlots, setShowSlots] = useState(false);

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [filterCategoriesArray, setFilterCategoriesArray] = useState([]);

  const getServiceCategory = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/experts/services/?action=2", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = res.data.data;
      setCategoriesArray(data);
      setFilterCategoriesArray(data);
      console.log(data);
      console.log(categoriesArray);
    } catch (error) {
      console.log(error);
    }
  };
  const [serviceId, setServiceId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    id: "",
  });

  const [categoryInputValue, setCategoryInputValue] = useState("");

  const setNewCategory = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 4,
          category_name: selectedCategory.name,
          img_url: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = res.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (e) => {
    const searchVal = e.target.value.toLowerCase();
    setCategoryInputValue(searchVal);
    const searchVal1 =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSelectedCategory({ ...selectedCategory, name: searchVal1 });
    setFilterCategoriesArray((prevCat) =>
      prevCat.filter((item) => item?.name?.toLowerCase().includes(searchVal))
    );
  };

  const [val, setVal] = useState("");
  const [showSkill, setShowSkill] = useState([]);

  const getSkills = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/inspections/test/?action=2", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = res.data.data.qualified;
      setShowSkill(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const [skill, setSkill] = useState([]);

  const allTrueSKill = () => {
    const filteredSkills = Object.keys(showSkill).filter(
      (key) => showSkill[key] === true
    );
    // Object.keys(showSkill).forEach(function (key, index) {
    //   if (showSkill[key] === true) {
    //     setSkill({...skill, key});
    //   }
    // })

    setSkill(filteredSkills);
  };

  const handleSkillChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim() === "") {
      setSkill([]); // Open dropdown when input field becomes empty
    }
  };

  const handleSkillSelection = (val) => {
    const capitalizedSkill = val.charAt(0).toUpperCase() + val.slice(1);
    setVal(capitalizedSkill);
    setSkill([]); // Clear skill list to close the dropdown
  };

  const interests = [
    { id: 1, name: "Python" },
    { id: 2, name: "C++" },
    { id: 3, name: "Django" },
    { id: 4, name: "HTML" },
    { id: 5, name: "CSS" },
    { id: 6, name: "JS" },
    { id: 7, name: "React JS" },
  ];

  const [selectedSkill, setSelectedSkill] = useState([]);
  const [inputTagValue, setInputTagValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleTagChange = (event) => {
    const { value } = event.target;
    setInputTagValue(value);
    setSuggestions(
      interests.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    // Add suggestion to selected skills
    if (!selectedSkill.includes(suggestion.name)) {
      setSelectedSkill([...selectedSkill, suggestion.name]);
      console.log(selectedSkill);
    }
    // Clear input and suggestions
    setInputTagValue("");
    setSuggestions([]);
  };

  const handleTagRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const handleNewSkillAdd = (value) => {
    if (!selectedSkill.includes(value)) {
      setSelectedSkill([...selectedSkill, value]);
    }
    setInputTagValue("");
  };

  const [createService, setCreateService] = useState({
    img: "",
    desc: "",
    duration: "",
    price: "",
    currency: "INR",
  });

  const handleServiceCreate = async (e) => {
    e.preventDefault();
    setShowSlots(!showSlots);

    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 1,
          service_name: serviceTitle,
          service_img: image,
          category: selectedCategory.id,
          description: createService.desc,
          skill_name: val,
          price: createService.price,
          duration: createService.duration,
          currency: createService.currency,
          tags_list: selectedSkill,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (!res.data || res.data.status === 400 || res.data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      const data = res.data;
      console.log(data.msg);
      try {
        const res = await axios.get("/experts/services/?action=1", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        const data = res.data.data;
        console.log(res.data.data[0].id);
        setServiceId(res.data.data[0].id);
      } catch (error) {
        console.log(error);
      }
      setShowSlots(!showSlots);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showSlots ? (
        <div className="mt-[100px] flex flex-col bg-white h-auto">
          <div className="flex w-[60%] mx-auto">
            <div
              onClick={() => handleBack()}
              className="flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
            >
              <MdOutlineKeyboardBackspace size={25} />
              Add a service
            </div>
          </div>
          <div className="w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg">
            <div className="text-4xl text-[#3E5676] font-bold my-4">
              Create a serivce
            </div>
            <u className="border border-[#d8d8d8] border-solid w-[90%] mb-8"></u>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="w-[60%] flex flex-col mb-5"
            >
              <label htmlFor="title" className="text-lg mb-1">
                Service Title
              </label>
              <input
                placeholder="Service Title"
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
              />
              <label htmlFor="desc" className="text-lg mb-1">
                Service Description
              </label>
              <textarea
                placeholder="Service Description"
                name="desc"
                id="desc"
                value={createService.desc}
                onChange={(e) =>
                  setCreateService({ ...createService, desc: e.target.value })
                }
                className="border border-solid resize-none h-32 border-slate-300 rounded-md px-4 py-2 mb-4"
              />
              <label htmlFor="category" className="text-lg mb-1">
                Service Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
                placeholder="Enter Category"
                value={selectedCategory.name}
                onFocus={() => getServiceCategory()}
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
              />

              {categoriesArray.length > 0 && (
                <div
                  className={` px-1 text-sm rounded-sm mb-4 w-fit min-h-auto max-h-[150px] overflow-y-auto ${
                    filterCategoriesArray.length > 0
                      ? "border border-solid border-slate-300 "
                      : ""
                  }`}
                >
                  {filterCategoriesArray.map((item, index) => (
                    <div
                      key={index}
                      className="text-sm text-center text-gray-600 px-3 py-2 border-b border-solid border-slate-300 pb-2 cursor-pointer"
                      onClick={() => {
                        setSelectedCategory({
                          ...selectedCategory,
                          name: item.name,
                          id: item.id,
                        });
                        setFilterCategoriesArray([]);
                        setCategoryInputValue("");
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </div>
                  ))}
                  {filterCategoriesArray.length === 0 &&
                    categoryInputValue.trim().length > 0 && (
                      <div
                        className="btnBlack text-white rounded-sm px-4 py-2 w-fit cursor-pointer "
                        onClick={(e) => {
                          setNewCategory(e);
                          setSelectedCategory({
                            ...selectedCategory,
                            id: categoriesArray.length + 1,
                          });
                        }}
                      >
                        + Add Category
                      </div>
                    )}
                </div>
              )}
              <label htmlFor="skill" className="text-lg mb-1">
                Served Skill
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                className={`border border-solid border-slate-300 rounded-md px-4 py-2 mb-4`}
                placeholder="Enter Skill"
                value={val}
                onFocus={allTrueSKill}
                onChange={(e) => handleSkillChange(e)}
              />
              {skill?.length > 0 && (
                <div
                  className={`px-1 text-sm rounded-sm w-fit min-h-auto max-h-[150px] overflow-y-auto border border-solid border-slate-300 mb-4`}
                >
                  {skill?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="text-sm text-center text-gray-600 px-3 py-2 border-b border-solid border-slate-300 pb-2 cursor-pointer"
                        onClick={() => handleSkillSelection(item)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="flex justify-center mx-auto flex-col w-full mb-4">
                <label htmlFor="tags" className="text-lg mb-1 font-bold">
                  Tags
                </label>
                {selectedSkill.length > 0 ? (
                  <div className="border border-solid border-gray-300 px-2 rounded-md mb-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.length > 0 ? (
                        selectedSkill.map((skill, ind) => {
                          return (
                            <div
                              key={ind}
                              className="flex gap-2 px-4 py-1 text-sm rounded-full bg-inherit border border-solid border-black my-2"
                            >
                              {skill}
                              <div
                                className="cursor-pointer"
                                onClick={() => handleTagRemove(skill)}
                              >
                                x
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-gray-300 text-sm">
                          Select skills of your interest from below.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={inputTagValue}
                  onChange={handleTagChange}
                  className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
                  placeholder="Enter Tags for the service"
                />
                {suggestions.length > 0
                  ? inputTagValue.length > 0 && (
                      <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                        <div>
                          {suggestions.map((suggestion, ind) => (
                            <div
                              key={suggestion.id}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="cursor-pointer hover:bg-gray-100 px-4 py-1"
                            >
                              {suggestion.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  : inputTagValue.length > 0 && (
                      <button
                        onClick={() => handleNewSkillAdd(inputTagValue)}
                        className="px-4 py-2 text-sm rounded-sm focus:outline-none btnBlack text-white w-fit mt-2 mb-4"
                      >
                        + Add Interest
                      </button>
                    )}
              </div>
              <label htmlFor="imageSelector" className="text-lg mb-1">
                Service Images
              </label>
              <div
                onClick={() => document.querySelector("#imageSelector").click()}
                className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
              >
                <input
                  type="file"
                  id="imageSelector"
                  name="imageSelector"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {/* {uploadProfileProgress > 0 && uploadProfileProgress < 100 ? (
                  <p>Upload Progress: {uploadProfileProgress}%</p>
                ) : image ? (
                  <div className="relative w-full h-full flex justify-center items-center">
                    <img
                      src={image}
                      alt="Preview"
                      className="max-h-28 max-w-44 object-cover rounded"
                    />
                    <button
                      onClick={handleImageRemove}
                      className="absolute top-2 right-2 bg-slate-400 text-white p-1 rounded hover:bg-gray-600 flex justify-center items-center"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  
                )} */}
                {imageLoading ? (
                  <div className="flex w-full h-full items-center justify-center text-center">
                    <span>Loading...</span>
                  </div>
                ) : image ? (
                  <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-auto h-40 shrink-0 object-cover object-center m-2"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-600">
                    <FiUpload className="w-10 h-10" />
                    <span className="ml-2">Upload Image</span>
                  </div>
                )}
              </div>
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              <label htmlFor="price" className="text-lg mb-1">
                Service Price
              </label>
              <div className="flex">
                <div className="border border-solid border-slate-300 rounded-s-md p-2 mb-4">
                  <FaIndianRupeeSign />
                </div>
                <input
                  placeholder="Service Price"
                  type="number"
                  id="price"
                  name="price"
                  value={createService.price}
                  onChange={(e) => {
                    setCreateService({
                      ...createService,
                      price: e.target.value,
                    });
                  }}
                  className="border border-solid border-slate-300 rounded-e-md px-4 py-2 mb-4 w-full"
                />
              </div>
              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  onClick={(e) => handleServiceCreate(e)}
                  className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white btnBlack rounded-sm"
                >
                  Create time slots
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        showSlots && (
          <div className="mt-[100px] px-[10vw] m-auto">
            <div
              onClick={() => setShowSlots(!showSlots)}
              className="w-fit flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
            >
              <MdOutlineKeyboardBackspace size={25} />
              Back
            </div>
            <MyBigCalendar
              serviceId={serviceId}
              serviceTitle={serviceTitle}
              setServiceTitle={setServiceTitle}
            />
          </div>
        )
      )}
    </>
  );
};

export default CreateService;

export const MyBigCalendar = ({ serviceId, serviceTitle, setServiceTitle }) => {
  const navigate = useNavigate();
  const localizer = momentLocalizer(moment);
  const [notifyBefore, setNotifyBefore] = useState(false);
  const [notifyAfter, setNotifyAfter] = useState(false);
  const [notifyBeforeTime, setNotifyBeforeTime] = useState(0);
  const [notifyAfterTime, setNotifyAfterTime] = useState(0);
  const [events, setEvents] = useState([]);
  const [startInputDate, setStartInputDate] = useState("");
  const [startInputTime, setStartInputTime] = useState("");
  const [endInputDate, setEndInputDate] = useState("");
  const [endInputTime, setEndInputTime] = useState("");

  
  console.log(serviceId);
  const handlePostEvent = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 5,
          service_id: serviceId,
          notify_before: notifyBefore,
          notify_before_time: notifyBeforeTime,
          notify_after: notifyAfter,
          notify_after_time: notifyAfterTime,
          time_slots: convertEventsToAPIFormat(events), // Convert events to API format
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = res.data;
      console.log(data);
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      setServiceTitle("");
      navigate("/expertdashboard/myservices");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateEvent = () => {
    const startDate = moment(startInputDate, "YYYY-MM-DD");
    const endDate = moment(endInputDate, "YYYY-MM-DD");
    const startTime = moment(startInputTime, "HH:mm");
    const endTime = moment(endInputTime, "HH:mm");

    if (
      startDate.isValid() &&
      endDate.isValid() &&
      endTime.isValid() &&
      endTime.isSameOrAfter(startTime) &&
      serviceTitle.trim() !== ""
    ) {
      if (startTime.isSame(endTime)) {
        alert("Start time and end time for an event should not be the same.");
        return;
      }
      const newEvents = [];
      let currentDate = startDate.clone();
      while (currentDate.isSameOrBefore(endDate, "day")) {
        const newEvent = {
          id: events.length + 1,
          title: serviceTitle.trim(),
          start: currentDate
            .clone()
            .hour(startTime.hour())
            .minute(startTime.minute())
            .toDate(),
          end: currentDate
            .clone()
            .hour(endTime.hour())
            .minute(endTime.minute())
            .toDate(),
        };
        newEvents.push(newEvent);
        currentDate.add(1, "day");
      }
      setEvents([...events, ...newEvents]);
      setStartInputDate("");
      setStartInputTime("");
      setEndInputDate("");
      setEndInputTime("");
    } else {
      alert(
        "Please enter valid start and end dates, time, and a non-empty title."
      );
    }
  };

  const convertEventToAPIFormat = (event) => {
    const startDate = moment(event.start);
    const endDate = moment(event.end);

    return {
      day: `${startDate.format("ddd DD MMM")}`, // Include day of the week (e.g., "Mon 29 Jan")
      start_time: startDate.format("h:mm A"), // Format the start time as "h:mm A" (e.g., "9:00 AM")
      end_time: endDate.format("h:mm A"), // Format the end time as "h:mm A" (e.g., "1:00 PM")
      timezone: "IST", // Assuming the timezone is always IST
      duration: endDate.diff(startDate, "seconds"), // Calculate the duration in seconds
    };
  };

  const convertEventsToAPIFormat = (events) => {
    return events.map((event) => convertEventToAPIFormat(event));
  };
  const myEvents = convertEventsToAPIFormat(events);
  console.log(events);
  console.log(myEvents);

  return (
    <div className="calendar-container ">
      <div className="flex gap-10 flex-wrap">
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-600">Start Date</label>
          <input
            type="date"
            value={startInputDate}
            onChange={(e) => setStartInputDate(e.target.value)}
            className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-600">End Date:</label>
          <input
            type="date"
            value={endInputDate}
            onChange={(e) => setEndInputDate(e.target.value)}
            className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-600">Start Time:</label>
          <input
            type="time"
            value={startInputTime}
            onChange={(e) => setStartInputTime(e.target.value)}
            className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base text-gray-600">End Time:</label>
          <input
            type="time"
            value={endInputTime}
            onChange={(e) => setEndInputTime(e.target.value)}
            className="border border-solid border-slate-300 rounded-md px-2 py-1 text-xs outline-none w-56"
          />
        </div>
      </div>

      <div className="mt-10 flex gap-10">
        <div>
          <div className="flex items-center gap-2">
            <label className="text-base text-gray-600">Notify Before: </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onClick={() => setNotifyBefore(!notifyBefore)}
            />
          </div>

          {notifyBefore && (
            <input
              placeholder="enter time in minutes"
              type="number"
              name="notifyBefore"
              id="notifyBefore"
              onChange={(e) => setNotifyBeforeTime(e.target.value)}
              className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-56 mt-5"
            />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <label className="text-base text-gray-600">Notify After: </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onClick={() => setNotifyAfter(!notifyAfter)}
            />
          </div>

          {notifyAfter && (
            <input
              placeholder="enter time in minutes"
              type="number"
              name="notifyAfter"
              id="notifyAfter"
              onChange={(e) => setNotifyAfterTime(e.target.value)}
              className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-56 mt-5"
            />
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-10 ">
        <label className="text-base text-gray-600">Event Title:</label>
        <input
          type="text"
          value={serviceTitle}
          className="border border-solid border-slate-300 rounded-md px-2 py-1 text-sm outline-none w-64"
        />
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleCreateEvent}
          className="mt-10 text-base px-4 py-2 btnBlack rounded-sm text-white"
        >
          Create Event
        </button>
        <button
          onClick={(e) => handlePostEvent(e)}
          className="mt-10 text-base px-4 py-2 btnBlack rounded-sm text-white"
        >
          Post event
        </button>
      </div>
      <Calendar
        className={`mt-4`}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
