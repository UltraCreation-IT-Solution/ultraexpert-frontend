import React, { useEffect, useState } from "react";
import { BsUpload, BsX } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import axios from "../../axios";

// slots
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
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
  console.log(serviceTitle);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];
    const combinedFiles = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newPreviews.push(e.target.result);
        if (newPreviews.length === files.length) {
          const totalFiles = combinedFiles.length + newPreviews.length;
          if (totalFiles > 4) {
            setErrorMessage("You can only upload up to 4 files.");
          } else {
            setErrorMessage("");
            setSelectedFiles([...combinedFiles, ...newPreviews]);
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const handleButtonClick = (event, index) => {
    event.stopPropagation(); // Prevent propagation to parent elements
    event.preventDefault(); // Prevent the default behavior of the button click
    removeImage(index);
  };

  const handleBack = () => {
    navigate("/expertdashboard");
  };

  //slots
  const [showSlots, setShowSlots] = useState(false);

  const [events, setEvents] = useState([]);
  console.log(events);
  const [startInputDate, setStartInputDate] = useState("");
  const [startInputTime, setStartInputTime] = useState("");
  const [endInputDate, setEndInputDate] = useState("");
  const [endInputTime, setEndInputTime] = useState("");
  // const [titleInput, setTitleInput] = useState('');

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
      // setTitleInput('');
      setServiceTitle("");
    } else {
      alert(
        "Please enter valid start and end dates, time, and a non-empty title."
      );
    }
  };

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

  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    id: "",
  });

  const[categoryInputValue, setCategoryInputValue] = useState("");

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
    const searchVal1 = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setSelectedCategory({ ...selectedCategory, name: searchVal1 });
    setFilterCategoriesArray((prevCat) =>
      prevCat.filter((item) => item?.name?.toLowerCase().includes(searchVal))
    );
  };

  const [val, setVal] = useState("");
  const [skillArray, setSkillArray] = useState([]);
  const [showSkill, setShowSkill] = useState([]);
  const [skillInput, setSkillInput] = useState("");

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
      console.log(data);

      setSkillArray(data);
      // console.log(skillArray);
      setShowSkill(data);
      // console.log(showSkill);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);
  //slots
  console.log(showSkill);

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
  console.log(skill);

  const handleSkillChange = (e) => {
    const inputValue = event.target.value;
  if (inputValue.trim() === "") {
    setSkill([]); // Open dropdown when input field becomes empty
  }
  };

  const handleSkillSelection = (val) => {
    const capitalizedSkill = val.charAt(0).toUpperCase() + val.slice(1);
    setVal(capitalizedSkill);
    setSkill([]); // Clear skill list to close the dropdown
  };
  return (
    <>
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
                    {(item.name).charAt(0).toUpperCase() + (item.name).slice(1)}
                  </div>
                ))}
                {filterCategoriesArray.length === 0 &&
                  categoryInputValue.trim() !== "" && (
                    <div
                      className="bg-blue-500 text-white rounded-md px-4 py-2 w-fit cursor-pointer "
                      onClick={(e) => {
                        setNewCategory(e);
                        setSelectedCategory({
                          ...selectedCategory,
                          id: categoriesArray.length + 1,
                        });
                      }}
                    >
                      Add Category
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
              onChange={(e)=>handleSkillChange(e)}
            />
            {skill?.length > 0 && (
              <div className={`px-1 text-sm rounded-sm w-fit min-h-auto max-h-[150px] overflow-y-auto border border-solid border-slate-300 mb-4`}>
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
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              {selectedFiles.length > 0 ? (
                <div className="flex flex-wrap">
                  {selectedFiles.map((preview, index) => (
                    <div key={index} className="relative mr-2 mb-2">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-24 h-24 object-cover"
                      />
                      <div
                        onClick={(e) => handleButtonClick(e, index)}
                        className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                      >
                        <BsX />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <BsUpload size={20} />
                  <div className="text-sm text-[#1475cf] mt-2">
                    Drop here to attach or upload
                  </div>
                  <div className="text-xs mt-10">Max Uploads: 4 files</div>
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
                className="border border-solid border-slate-300 rounded-e-md px-4 py-2 mb-4 w-full"
              />
            </div>
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                onClick={() => setShowSlots(!showSlots)}
                className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
              >
                Create time slots
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* slots */}
      {showSlots && (
        <div className="calendar-container mt-[100px] w-[90%] m-auto   ">
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startInputDate}
              onChange={(e) => setStartInputDate(e.target.value)}
            />
            <label>Start Time:</label>
            <input
              type="time"
              value={startInputTime}
              onChange={(e) => setStartInputTime(e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endInputDate}
              onChange={(e) => setEndInputDate(e.target.value)}
            />
            <label>End Time:</label>
            <input
              type="time"
              value={endInputTime}
              onChange={(e) => setEndInputTime(e.target.value)}
            />
          </div>
          <div>
            <label>Event Title:</label>
            <input type="text" value={serviceTitle} />
          </div>
          <button onClick={handleCreateEvent}>Create Event</button>
          <Calendar
            className="mt-[100px] "
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      )}
      {/* slolts */}
    </>
  );
};

export default CreateService;
