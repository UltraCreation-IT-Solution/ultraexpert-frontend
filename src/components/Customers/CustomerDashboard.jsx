import React, { useEffect, useState } from "react";
import { IoBookmarksSharp } from "react-icons/io5";
import { MdVideoChat } from "react-icons/md";
import { FaHistory, FaWallet, FaUserAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import BookingCard from "../../subsitutes/BookingCard";
import ShowBlogs from "../../subsitutes/ShowBlogs";
import axios from "../../axios";
import TextShimmer from "../../subsitutes/Shimmers/TextShimmer";
import { handleUploadImage } from "../../constant";
import { FiUpload } from "react-icons/fi";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
export const CustomerProfile = () => {
  const [userData, setUserData] = useState({});
  const [myImage, setMyImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/customers/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      setLoading(false);
      setUserData(response.data.data);
      console.log("ander wala", response.data.data);
      setMyImage(response.data.data.profile_img);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
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
    setUserData({ ...userData, profile_img: url });
  };
  const closeModal = () => {
    setShowModal(false);
    setImageLoading(false);
    setMyImage(userData.profile_img); // Reset the image state when modal is closed
  };
  const interest = [
    { id: 1, name: "Python" },
    { id: 2, name: "C++" },
    { id: 3, name: "Django" },
    { id: 4, name: "HTML" },
    { id: 5, name: "CSS" },
    { id: 6, name: "JS" },
    { id: 7, name: "React JS" },
  ];

  const [selectedSkill, setSelectedSkill] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSuggestions(
      interest.filter((suggestion) =>
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
    setInputValue("");
    setSuggestions([]);
  };
  const saveProfile = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    setLoading(true);
    try {
      const response = await axios.post(
        "/user_details/",
        {
          action: 1,
          first_name: userData.first_name,
          last_name: userData.last_name,
          mobile_number: userData.mobile_number,
          marital_status: userData.marital_status,
          gender: userData.gender,
          profile_img: userData.profile_img,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      console.log(response.data);
      setLoading(false);
      setLoading(true);
      localStorage.setItem("profile", userData.profile_img);
      try {
        const res = await axios.post(
          "/customers/",
          {
            action: 3,
            about_me: userData.about_me,
            profession: userData.profession,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        if (
          !response.data ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          console.log(response.data.message);
          return;
        }
        console.log(res.data);
        setLoading(false);
        setLoading(true);
        try {
          const res2 = await axios.post(
            "/customers/",
            {
              action: 4,
              interest_list: selectedSkill,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jsonData.access_token}`,
              },
            }
          );
          if (
            !response.data ||
            response.data.status === 400 ||
            response.data.status === 401
          ) {
            console.log(response.data.message);
            return;
          }
          console.log(res2.data);
          setLoading(false);
          alert("Profile updated successfully!");
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getSkillInfo = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    setLoading(true);
    try {
      const response = await axios.get("/customers/?action=2", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data.data.interest_list);
      setLoading(false);
      setSelectedSkill(data.data.interest_list);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getSkillInfo();
  }, []);

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const handleNewSkillAdd = (value) => {
    if (!selectedSkill.includes(value)) {
      setSelectedSkill([...selectedSkill, value]);
    }
    setInputValue("");
  };

  return (
    <div className="w-full md:w-[68%] border border-solid border-slate-300 p-5 rounded-sm">
      <div className="flex items-center justify-between border-b border-solid border-slate-200 pb-3">
        <div className="text-xl font-bold ">Profile</div>
        <div
          onClick={() => saveProfile()}
          className={
            loading
              ? `bg-gray-300 px-4 py-2 rounded-md text-gray-500 cursor-not-allowed text-base`
              : `text-base btnBlack px-4 py-2 rounded-sm cursor-pointer text-white`
          }
        >
          Save Profile
        </div>
      </div>
      <div className="sm:flex items-center justify-around gap-4">
        <div className="mt-5 md:w-[80%] lg:w-[45%]">
          <div className="mt-5">
            <div className="text-base">First Name</div>
            <input
              type="text"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mt-5">
            <div className="text-base">Last Name</div>
            <input
              type="text"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mt-5">
            <div className="text-base ">Mobile number</div>
            <input
              type="number"
              value={userData.mobile_number}
              onChange={(e) =>
                setUserData({ ...userData, mobile_number: e.target.value })
              }
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className=" mt-5 w-full">
            <div>
              <div className="text-base ">Gender</div>
              <select
                name="Gender"
                id="Gender"
                value={userData.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none shrink-0 w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-base ">Marital Status</div>
            <select
              name="Marital"
              id="Marital"
              value={userData.marital_status}
              onChange={(e) =>
                setUserData({ ...userData, marital_status: e.target.value })
              }
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none shrink-0 w-full"
            >
              <option value="">Married</option>
              <option value="">Unmarried</option>
            </select>
          </div>
          <div className="mt-5">
            <div className="text-base ">About Me</div>
            <textarea
              rows="6"
              placeholder="Write about your self"
              value={userData.about_me}
              onChange={(e) =>
                setUserData({ ...userData, about_me: e.target.value })
              }
              className="min-w-full max-w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="mt-5">
            <div className="text-base ">Profession</div>
            <input
              type="text"
              value={userData.profession}
              onChange={(e) =>
                setUserData({ ...userData, profession: e.target.value })
              }
              className="mt-1 border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none w-full"
              placeholder="Enter your profession"
            />
          </div>
        </div>
        <div className="flex flex-col self-start py-5 md:w-[45%]">
          <label htmlFor="profile" className="text-base mb-1">
            Profile Photo
          </label>
          <div
            onClick={() => document.querySelector("#profileSelector").click()}
            className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
          >
            <input
              type="file"
              accept="image/*"
              id="profileSelector"
              name="profileSelector"
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
          <div className="flex justify-center mx-auto flex-col w-full my-8">
            <label htmlFor="interests" className="text-lg mb-1">
              Interests
            </label>
            {selectedSkill.length > 0 && (
              <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.map((skill, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex gap-2 px-4 py-1 text-sm rounded-lg bg-inherit border border-solid border-gray-300"
                      >
                        {skill}
                        <div
                          className="cursor-pointer"
                          onClick={() => handleRemove(skill)}
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
              id="interests"
              value={inputValue}
              onChange={handleChange}
              className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
              placeholder="Enter your interests"
            />
            {suggestions.length > 0
              ? inputValue.length > 0 && (
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
              : inputValue.length > 0 && (
                  <button
                    onClick={() => handleNewSkillAdd(inputValue)}
                    className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none bg-green-500 text-white w-[30%] mt-2"
                  >
                    Add Interest
                  </button>
                )}

            {/* <div className="border border-solid border-slate-200 px-4 py-2 rounded-md mb-4">
              <div className="flex flex-wrap justifty-around gap-3">
                {interest.map((skill, ind) => {
                  return (
                    <div
                      key={ind}
                      onClick={() => {
                        handleChange(skill.name);
                      }}
                      className="cursor-pointer px-4 py-1 text-sm text-nowrap rounded-full bg-inherit border border-solid border-[#c7c7c7] text-[#8D8D8D] bg-[#E8E8E8] flex justify-center items-center overflow-visible"
                    >
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export const CustomerChats = () => {
  const [chatDetail, setChatDetail] = useState(false);
  return (
    <div className="w-full md:w-[68%] ">
      <div className="flex items-center justify-between text-xl font-bold border-b border-solid border-slate-200 pb-3">
        <div className="">Chats</div>
        <div className="flex justify-center gap-3">
          <IoMdSettings />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="mt-6 flex gap-5">
        <div className="w-full">
          {/* {customerDashboardInfo?.chats.map((item) => (
            <div
              className="cursor-default px-2 py-3 flex items-center gap-4 border border-solid border-slate-200"
              onClick={() =>
                chatDetail ? setChatDetail(false) : setChatDetail(true)
              }
            >
              <img
                src={item?.img}
                className="h-12 w-12 rounded-full object-cover shrink-0"
                alt="img"
              />
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold">{item?.name}</div>
                <div className="text-xs line-clamp-1 xs:w-[200px]">
                  {item?.comment}
                </div>
              </div>
              <div className="ml-auto text-xs shrink-0">{item?.lastSeen}</div>
            </div>
          ))} */}
        </div>
        {chatDetail && (
          <div className="w-[100%] bg-red-600">
            <div>naman</div>
          </div>
        )}
      </div>
    </div>
  );
};
export const CustomerBookings = () => {
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
    setMyBookings([]);
    setLoading(true);
    try {
      const res = await axios.get(
        `/customers/connect/?action=6&customer_id=${localStorage.customer_id}&status=scheduled`,
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
    setMyBookings([]);
    try {
      const res = await axios.get(
        `/customers/connect/?action=6&customer_id=${localStorage.customer_id}&status=done`,
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
    setMyBookings([]);
    setLoading(true);
    try {
      const res = await axios.get(
        `/customers/connect/?action=6&customer_id=${localStorage.customer_id}&status=scheduled`,
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
    <div className="flex flex-col gap-5 w-full md:w-[68%]">
      <div className="flex gap-3 border-b border-solid border-[#c7c7c7] pb-3 text-sm md:text-base overflow-x-scroll px-2">
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
              <div className="w-[200px]">Expert Name</div>
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
    </div>
  );
};
export const CustomerRecentMeetngs = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Recent Meetings
      </div>
      {customerDashboardInfo?.recentMeetings?.map((item, index) => (
        <div
          key={index}
          className={`px-5 py-4 my-5 rounded-md ${
            index % 2 === 0
              ? `bg-[#ececec]`
              : `border border-[#c7c7c7] border-solid`
          }`}
        >
          <div className="text-base font-semibold line-clamp-2">
            {item?.serviceTitle}
          </div>
          <div className="sm:flex justify-between gap-5 mt-4">
            <div className="text-sm">
              <div>Customer Name: {item?.customerName}</div>
              <div className="my-2">Service Price: {item?.servicePrice}</div>
              <div className="my-2">Meeting Id: {item?.meetingId}</div>
            </div>
            <div className="text-sm mt-2 sm:mt-0">
              <div>Date of Meeting: {item?.serviceDate}</div>
              <div className="my-2">Start Time: {item?.startTime}</div>
              <div>End Time: {item?.startTime}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CustomerTransactionHistoryCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-sm flex items-center justify-between border-t border-solid border-slate-300 my-5 py-3 overflow-x-scroll  ">
        <div className="flex items-center xs:gap-[4vw] text-xs sm:text-sm">
          <div className="flex items-center gap-2 w-[180px] sm:w-[200px] ">
            <img
              src={item?.expertProfile}
              className="h-7 w-7 sm:h-9 sm:w-9 rounded-full shrink-0 object-cover"
              alt=""
            />
            <div>{item?.expertName}</div>
          </div>
          <div className="text-xs xs:text-sm w-[70px] sm:w-[90px] ">
            ₹ {item?.amount}
          </div>
          <div className="hidden md:block w-[120px] ">{item?.invoice}</div>
        </div>
        {open ? (
          <IoIosArrowUp
            className="shrink-0 text-base sm:text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        ) : (
          <IoIosArrowDown
            className="shrink-0 text-base sm:text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        )}
      </div>
      {open && (
        <div>
          <div className="text-xs sm:text-sm line-clamp-2">
            {" "}
            Date: {item?.date}{" "}
          </div>
          <div className="text-xs sm:text-sm mt-2">Time: {item?.time} </div>
          <div className="block md:hidden text-xs sm:text-sm mt-2">
            Invoice: {item?.invoice}{" "}
          </div>
          <div className="w-fit text-xs sm:text-sm mt-2 cursor-pointer text-red-500 hover:underline ">
            Download Invoice{" "}
          </div>
        </div>
      )}
    </>
  );
};

export const CustomerTransactionHistory = () => {
  return (
    <div className="w-full md:w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Transaction History
      </div>
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 font-bold my-5">
        <div className="flex items-center xs:gap-[4vw] shrink-0">
          <div className="w-[180px] sm:w-[200px]">Expert Name</div>
          <div className="w-[70px] sm:w-[90px] text-xs xs:text-sm">Amount</div>
          <div className="hidden md:block w-[120px]">Invoice</div>
        </div>
      </div>
      <div className=" ">
        {customerDashboardInfo?.transactionHistory.map((item, index) => (
          <CustomerTransactionHistoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
const CustomerDashboard = () => {
  const [menu, setMenu] = useState(false);
  const [userData, setUserData] = useState({});
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getUserData = async () => {
    try {
      const response = await axios.get("/customers/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }

      setUserData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeAuth = async () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
    const refresh_token = getCookie("refresh_token");
    if (!refresh_token) {
      //clear local storage and go back to login
      localStorage.clear();
      navigate("/login");
    } else {
      try {
        const res = await axios.post(
          "/refresh/",
          {
            refresh: `${refresh_token}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        const expirationDateforAccess = new Date();
        const expirationDateforRefresh = new Date();
        expirationDateforAccess.setDate(expirationDateforAccess.getDate() + 7);
        expirationDateforRefresh.setDate(
          expirationDateforRefresh.getDate() + 8
        );
        document.cookie = `access_token=${
          res.data.access
        };expires=${expirationDateforAccess.toUTCString()};  SameSite=Lax;`;
        document.cookie = `refresh_token=${
          res.data.refresh
        };expires=${expirationDateforRefresh.toUTCString()};  SameSite=Lax;`;
        // localStorage.setItem("userId", `${res.data.id}`);
        localStorage.setItem("username", `${res.data.user.first_name}`);
        localStorage.setItem("profile", `${res.data.user.profile_img}`);
        localStorage.setItem("isExpert", `${res.data.user.is_expert}`);
        localStorage.setItem("isAuthor", `${res.data.user.is_author}`);
        localStorage.setItem("isCustomer", `${res.data.user.is_customer}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(expertData.refer_code)
      .then(() => {
        alert("Referral code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  useEffect(() => {
    const isAuthChecked = sessionStorage.getItem("isAuthChecked");
    if (!isAuthChecked) {
      // If not, call the function and set the flag in sessionStorage
      changeAuth();
      sessionStorage.setItem("isAuthChecked", "true");
    }
    getUserData();
  }, []);
  return (
    <div className="mt-[100px] px-[7vw] md:flex gap-[1vw]">
      <div className="hidden md:block w-[32%]">
        <div className=" flex flex-col h-fit border bg-[#e7e7e7] border-[#bebebe] border-solid rounded-lg ">
          <div className="flex flex-col items-center justify-center px-[2vw] pb-5 border-b border-solid border-[#bebebe] ">
            <img
              src={userData?.profile_img}
              className="mt-12 object-cover object-top shrink-0 rounded-lg h-20 w-20 lg:h-28 lg:w-28 border-2 border-solid border-white"
              alt=""
            />
            <div className="text-base lg:text-xl font-bold mt-4">
              {userData?.first_name} {userData?.last_name}
            </div>
            <div className="text-sm text-balance line-clamp-3">
              {userData?.about_me}
            </div>
            <div className="flex mt-[1.25vw] gap-2 items-center">
              <div className="font-bold text-sm">Referal code: </div>
              <span className="text-sm">{userData?.refer_code}</span>
              <MdOutlineContentCopy
                className="cursor-pointer"
                onClick={handleCopyToClipboard}
              />
              <IoMdShareAlt />
            </div>
          </div>
          <div>
            <ul className="p-0  ">
              <Link className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center  font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaUserAlt className="text-[1.55vw]" />
                  Profile
                </li>
              </Link>
              <Link to="myqueries" className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center  font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaUserAlt className="text-[1.55vw]" />
                  My Queries
                </li>
              </Link>
              <Link to="chats" className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center  font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <BsFillChatSquareTextFill className="text-[1.55vw]" />
                  Chat
                </li>
              </Link>
              <Link to="mybookings" className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <IoBookmarksSharp className="text-[1.55vw]" />
                  My Bookings
                </li>
              </Link>
              <Link to="recentmeetings" className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <MdVideoChat className="text-[1.55vw]" />
                  Recent Meetings
                </li>
              </Link>
              <Link to="transactionhistory" className="no-underline">
                <li className="flex gap-[1.25vw] border-b-[0.5px] border-solid border-[#bebebe] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                  <FaHistory className="text-[1.55vw]" />
                  Transaction History
                </li>
              </Link>

              <li className="flex gap-[1.25vw] items-center font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
                <FaWallet className="text-[1.55vw]" />
                Wallet
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet>
        <CustomerProfile />
        <CustomerChats />
        <ShowBlogs />
        <CustomerBookings />
        <CustomerRecentMeetngs />
        <CustomerTransactionHistory />
      </Outlet>
    </div>
  );
};

export default CustomerDashboard;
