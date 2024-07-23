import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "../../axios";
import { FiUpload, FiX } from "react-icons/fi";
import Modal from "../../Modal";
import ImageUploader from "../../ImageUploader";

// slots
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { handleUploadImage } from "../../constant";
// import DatePicker from "react-datepicker";
//slots

const UpdateService = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [interest, setInterest] = useState([]);
  const [myImage, setMyImage] = useState(0);
  const [interestInput, setInterestInput] = useState("");
  const [updateData, setUpdateData] = useState({});

  const [selectedTags, setselectedTags] = useState([]);
  const [serviceTitle, setServiceTitle] = useState("");

  const [selectedCategory, setSelectedCategory] = useState({});

  const getServiceDetails = async () => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=2&service_id=${params.id}`,
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
      const Data = res.data;
      setUpdateData(Data.data);
      setselectedTags(Data.data.tags);
      setServiceTitle(Data.data.service_name);
      setSelectedCategory(Data.data.category);
      setMyImage(Data.data.service_img);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServiceDetails();
  }, []);
  console.log(updateData);

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

  const [errorMessage, setErrorMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const onSelectFile = (event) => {
    setImageLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImage(reader.result);
        setShowModal(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleCroppedImage = (url) => {
    console.log("Cropped image URL:", url);
    setShowModal(false);
    setImageLoading(false);
    setMyImage(url); // Reset the image state
    // setUserData({ ...userData, profile_img: url });
    // setCreateService({ ...createService, img: url });
    setUpdateData({ ...updateData, service_img: url });
  };
  const closeModal = () => {
    setShowModal(false);
    setImageLoading(false);
    setMyImage(data.service_img); // Reset the image state when modal is closed
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
  // const [serviceId, setServiceId] = useState(data?.id);

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
  const [skill, setSkill] = useState([]);

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
    if (!selectedTags.includes(suggestion.name)) {
      setselectedTags([...selectedTags, suggestion.name]);
      console.log(selectedTags);
    }
    // Clear input and suggestions
    setInputTagValue("");
    setSuggestions([]);
  };

  const handleTagRemove = (skill) => {
    setselectedTags(selectedTags.filter((s) => s !== skill));
  };

  const handleNewSkillAdd = (value) => {
    if (!selectedTags.includes(value)) {
      setselectedTags([...selectedTags, value]);
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
          action: 2,
          service_id: updateData?.id,
          service_name: updateData?.service_name,
          service_img: myImage,
          category: updateData?.category?.id,
          description: updateData?.description,
          skill_name: updateData?.skill_name,
          price: updateData?.price,
          duration: updateData?.duration,
          currency: "INR",
          tags_list: selectedTags,
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
        // setServiceId(res.data.data[0].id);
      } catch (error) {
        console.log(error);
      }
      setShowSlots(!showSlots);
    } catch (error) {
      console.log(error);
    }
    setShowSlots(!showSlots);
  };
  console.log(selectedCategory);
  return (
    <>
      {!showSlots ? (
        <div className="mt-[100px] flex flex-col bg-white h-auto">
          <div className="flex w-[90%] lg:w-[60%] mx-auto">
            <div
              onClick={() => handleBack()}
              className="flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
            >
              <MdOutlineKeyboardBackspace size={25} />
              Add a service
            </div>
          </div>
          <div className="w-[90%] lg:w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg px-5 md:px-20">
            <div className="text-2xl md:text-3xl lg:text-4xl text-[#3E5676] font-bold my-4">
              Update your service
            </div>
            <u className="border border-[#d8d8d8] border-solid w-full mb-8"></u>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="w-full flex flex-col mb-5"
            >
              <label htmlFor="title" className="text-lg mb-1">
                Service Title
              </label>
              <input
                placeholder="Service Title"
                value={updateData?.service_name}
                onChange={(e) =>
                  setUpdateData({ ...updateData, service_name: e.target.value })
                }
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
                value={updateData?.description}
                onChange={(e) =>
                  setUpdateData({ ...updateData, description: e.target.value })
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
                disabled={true}
                className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
                placeholder="Enter Category"
                value={updateData?.category?.name}
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
                disabled={true}
                className={`border border-solid border-slate-300 rounded-md px-4 py-2 mb-4`}
                placeholder="Enter Skill"
                value={updateData?.skill_name}
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
                <label htmlFor="tags" className="text-lg mb-1">
                  Tags
                </label>
                {selectedTags.length > 0 && (
                  <div className="border border-solid border-gray-300 px-2 rounded-md mb-2">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags?.map((skill, ind) => {
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
                      })}
                    </div>
                  </div>
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
                        + Add Tag
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
                  onChange={onSelectFile}
                  className="hidden"
                />
                {imageLoading ? (
                  <div className="flex w-full h-full items-center justify-center text-center">
                    <span>Loading...</span>
                  </div>
                ) : myImage ? (
                  <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                    <img
                      src={myImage}
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
              <Modal show={showModal} onClose={closeModal}>
                <ImageUploader
                  image={myImage}
                  handleUploadImage={handleUploadImage}
                  filename="cropped_image.jpg"
                  onCropped={handleCroppedImage}
                  aspectRatio={1} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
                />
              </Modal>
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
                  value={updateData?.price}
                  onChange={(e) => {
                    setUpdateData({ ...updateData, price: e.target.value });
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
                  Edit time slots
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        showSlots && (
          <div className="mt-[100px] px-5 lg:px-[10vw] m-auto">
            <div
              onClick={() => setShowSlots(!showSlots)}
              className="w-fit flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
            >
              <MdOutlineKeyboardBackspace size={25} />
              Back
            </div>
            <MyBigCalendar showSlots={showSlots} />
          </div>
        )
      )}
    </>
  );
};

export default UpdateService;

const localizer = momentLocalizer(moment);

const MyBigCalendar = ({ showSlots }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [notifyBefore, setNotifyBefore] = useState(false);
  const [notifyAfter, setNotifyAfter] = useState(false);
  const [notifyBeforeTime, setNotifyBeforeTime] = useState(0);
  const [notifyAfterTime, setNotifyAfterTime] = useState(0);
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);
  const [startInputDateTime, setStartInputDateTime] = useState(null);
  const [endInputDateTime, setEndInputDateTime] = useState(null);
  const [updateData, setUpdateData] = useState({});
  const [serviceTitle, setServiceTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [updatedStartInputTime, setUpdatedStartInputTime] = useState(null);
  const [updatedEndInputTime, setUpdatedEndInputTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [temp, setTemp] = useState(1);

  const getServiceDetails = async () => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=2&service_id=${params.id}`,
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
      const Data = res.data;
      const serviceData = Data.data;
      setUpdateData(serviceData);
      setServiceTitle(serviceData.service_name);
      setEvents(processServiceData(serviceData.availability));
    } catch (error) {
      console.log(error);
    }
    // setTemp(temp + 1);
  };

  // const processServiceData = (availability) => {
  //   const events = [];
  //   if (!availability) return events;

  //   for (const [date, slots] of Object.entries(availability)) {
  //     slots.forEach((slot) => {
  //       console.log(
  //         `Original date: ${date}, start time: ${slot.slot_start_time}, end time: ${slot.slot_end_time}`
  //       );
  //       const startDate = moment(
  //         `${date} ${slot.slot_start_time}`,
  //         "ddd:DD:MM:YYYY h:mm A"
  //       );
  //       const endDate = moment(
  //         `${date} ${slot.slot_end_time}`,
  //         "ddd:DD:MM:YYYY h:mm A"
  //       );
  //       console.log(
  //         `Parsed start date: ${startDate.format()}, end date: ${endDate.format()}`
  //       );

  //       if (startDate.isValid() && endDate.isValid()) {
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
  //       } else {
  //         console.error(`Invalid date/time for slot: ${slot.slot_id}`);
  //       }
  //     });
  //   }
  //   return events;
  // };
  const processServiceData = (availability) => {
    setTemp(temp + 1);

    setLoading(true);
    const events = [];
    if (!availability) return events;

    for (const [date, slots] of Object.entries(availability)) {
      slots.forEach((slot) => {
        console.log(
          `Original date: ${date}, start time: ${slot.slot_start_time}, end time: ${slot.slot_end_time}`
        );

        let formattedDate = date;
        // Check if the date is in the correct format
        if (!moment(date, "ddd:DD:MM:YYYY", true).isValid()) {
          // Convert to the correct format if needed
          formattedDate = moment(date).format("ddd:DD:MM:YYYY");
        }

        const startDate = moment(
          `${formattedDate} ${slot.slot_start_time}`,
          "ddd:DD:MM:YYYY h:mm A"
        );
        const endDate = moment(
          `${formattedDate} ${slot.slot_end_time}`,
          "ddd:DD:MM:YYYY h:mm A"
        );

        console.log(
          `Parsed start date: ${startDate.format()}, end date: ${endDate.format()}`
        );

        if (startDate.isValid() && endDate.isValid()) {
          events.push({
            id: slot.slot_id,
            title: serviceTitle,
            start: startDate.toDate(),
            end: endDate.toDate(),
            notifyBefore: slot.notify_before,
            notifyBeforeTime: slot.notify_before_time,
            notifyAfter: slot.notify_after,
            notifyAfterTime: slot.notify_after_time,
            slotBooked: slot.slot_booked,
            slotDisabled: slot.slot_disabled,
          });
        } else {
          console.error(`Invalid date/time for slot: ${slot.slot_id}`);
        }
      });
    }
    return events;
  };

  const handlePostEvent = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    const formattedEvents = convertEventsToAPIFormat(events);
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 6,
          service_id: updateData?.id,
          notify_before: notifyBefore,
          notify_before_time: notifyBeforeTime.toString(),
          notify_after: notifyAfter,
          notify_after_time: notifyAfterTime.toString(),
          time_slots: formattedEvents,
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
      setServiceTitle("");
      navigate("/expertdashboard/myservices");
    } catch (error) {
      console.log(error);
    }
  };

  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    return parseInt(`${timestamp}${Math.floor(Math.random() * 1000)}`);
  };
  const handleSaveAndLogEvents = async (newEventsArray) => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const allEvents = [...newEventsArray];
      console.log("All Events:", allEvents);

      // Make API call to save events
      const res = await axios.post(
        "/experts/services/",
        {
          action: 5,
          service_id: updateData?.id,
          notify_before: notifyBefore,
          notify_before_time: notifyBeforeTime.toString(),
          notify_after: notifyAfter,
          notify_after_time: notifyAfterTime.toString(),
          time_slots: convertEventsToAPIFormat(allEvents), // Convert events to API format
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      console.log(res);
      navigate("/expertdashboard/myservices");
    } catch (error) {
      console.log("Error saving events:", error);
    }
  };
  const handleCreateEvent = () => {
    const startDateTime = moment(startInputDateTime);
    const endDateTime = moment(endInputDateTime);

    if (
      startDateTime.isValid() &&
      endDateTime.isValid() &&
      endDateTime.isSameOrAfter(startDateTime) &&
      serviceTitle.trim() !== ""
    ) {
      const newEventsArray = [];
      let currentDate = startDateTime.clone().startOf("day");
      const endDate = endDateTime.clone().startOf("day");

      while (currentDate.isSameOrBefore(endDate)) {
        const start = currentDate
          .clone()
          .hour(startDateTime.hour())
          .minute(startDateTime.minute())
          .toDate();
        const end = currentDate
          .clone()
          .hour(endDateTime.hour())
          .minute(endDateTime.minute())
          .toDate();
        const newEvent = {
          id: generateUniqueId(),
          title: serviceTitle.trim(),
          start: start,
          end: end,
        };
        newEventsArray.push(newEvent);
        currentDate.add(1, "day");
      }

      setNewEvents([...newEvents, ...newEventsArray]);
      setStartInputDateTime(null);
      setEndInputDateTime(null);
      setShowSlotModal(false);
      handleSaveAndLogEvents(newEventsArray);
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
      time_slot_id: event.id,
      day: `${startDate.format("ddd DD MMM YYYY")}`,
      start_time: startDate.format("h:mm A"),
      end_time: endDate.format("h:mm A"),
      timezone: "IST",
      duration: endDate.diff(startDate, "seconds"),
    };
  };

  const convertEventsToAPIFormat = (events) => {
    return events.map((event) => convertEventToAPIFormat(event));
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setUpdatedStartInputTime(moment(event.start).toDate());
    setUpdatedEndInputTime(moment(event.end).toDate());
    setShowModal(true);
    setIsBooked(event?.slotBooked);
  };

  const handleUpdateEvent = () => {
    setEvents(
      events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              start: moment(updatedStartInputTime).toDate(),
              end: moment(updatedEndInputTime).toDate(),
            }
          : event
      )
    );
    setSelectedEvent(null);
    setUpdatedStartInputTime(null);
    setUpdatedEndInputTime(null);
    setShowModal(false);
  };

  const handleDeleteEvent = async () => {
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
          action: 7,
          time_slot_id: selectedEvent.id,
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
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setSelectedEvent(null);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSlotModalClose = () => {
    setShowSlotModal(false);
  };

  useEffect(() => {
    if (showSlots) {
      getServiceDetails();
    }
  }, [showSlots, Loading]);
  useEffect(() => {
    console.log("updated");
  }, temp);
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-2xl font-bold mb-4">Set Availability</h3>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <form onSubmit={handlePostEvent}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block font-medium mb-1">Notify Before:</label>
              <input
                type="checkbox"
                checked={notifyBefore}
                onChange={(e) => setNotifyBefore(e.target.checked)}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Notify Before Time:
              </label>
              <input
                type="number"
                value={notifyBeforeTime}
                onChange={(e) => setNotifyBeforeTime(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Notify After:</label>
              <input
                type="checkbox"
                checked={notifyAfter}
                onChange={(e) => setNotifyAfter(e.target.checked)}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Notify After Time:
              </label>
              <input
                type="number"
                value={notifyAfterTime}
                onChange={(e) => setNotifyAfterTime(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Slots
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Calendar
          localizer={localizer}
          events={[...events, ...newEvents]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={handleEventClick}
        />
      </div>

      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Update Event
                    </h3>
                    <div className="mt-2">
                      <label className="block font-medium mb-1">
                        Start Time:
                      </label>
                      <input
                        type="datetime-local"
                        value={
                          updatedStartInputTime
                            ? moment(updatedStartInputTime).format(
                                "YYYY-MM-DDTHH:mm"
                              )
                            : ""
                        }
                        onChange={(e) =>
                          setUpdatedStartInputTime(
                            moment(e.target.value).toDate()
                          )
                        }
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block font-medium mb-1">
                        End Time:
                      </label>
                      <input
                        type="datetime-local"
                        value={
                          updatedEndInputTime
                            ? moment(updatedEndInputTime).format(
                                "YYYY-MM-DDTHH:mm"
                              )
                            : ""
                        }
                        onChange={(e) =>
                          setUpdatedEndInputTime(
                            moment(e.target.value).toDate()
                          )
                        }
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    </div>
                    {isBooked && (
                      <div className="mt-2 text-red-600">
                        This slot is already booked.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleUpdateEvent}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                {!isBooked && (
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={handleDeleteEvent}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showSlotModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Add New Time Slot
                    </h3>
                    <div className="mt-2">
                      <label className="block font-medium mb-1">
                        Start Date and Time:
                      </label>
                      <input
                        type="datetime-local"
                        value={
                          startInputDateTime
                            ? moment(startInputDateTime).format(
                                "YYYY-MM-DDTHH:mm"
                              )
                            : ""
                        }
                        onChange={(e) =>
                          setStartInputDateTime(moment(e.target.value).toDate())
                        }
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block font-medium mb-1">
                        End Date and Time:
                      </label>
                      <input
                        type="datetime-local"
                        value={
                          endInputDateTime
                            ? moment(endInputDateTime).format(
                                "YYYY-MM-DDTHH:mm"
                              )
                            : ""
                        }
                        onChange={(e) =>
                          setEndInputDateTime(moment(e.target.value).toDate())
                        }
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCreateEvent}
                >
                  Add Slot
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={handleSlotModalClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowSlotModal(true)}
        >
          Add Time Slot
        </button>
      </div>
    </div>
  );
};
