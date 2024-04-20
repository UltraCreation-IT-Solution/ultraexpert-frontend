import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import ReactQuiz from "./TestElement2";

const ThoughtProcess = () => {
  const [test_id, setTest_id] = useState("");
  const [thoughtProcess, setThoughtProcess] = useState([]);
  const [repord_id, setRepord_id] = useState("");
  useEffect(() => {
    const fetchQuestions = async () => {
      const cookies = document.cookie.split("; ");
      const jsonData = {};

      cookies.forEach((item) => {
        const [key, value] = item.split("=");
        jsonData[key] = value;
      });
      try {
        const response = await axios.get(
          "/inspections/test/?action=1&skill_name=reacthvhgvghchg",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        setTest_id(response.data.data.test_id);
        setThoughtProcess(response.data.data.thought_process);
        setRepord_id(response.data.data.report_id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [isTimeOver, setIsTimeOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setIsTimeOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isTimeOver) {
      // Handle time over action, e.g., show popup
      // You can add custom logic here
      console.log("Time is over");
    }
  }, [isTimeOver]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const droppedIndex = parseInt(e.dataTransfer.getData("index"));
    const newThoughtProcess = [...thoughtProcess];
    const movedItem = newThoughtProcess.splice(droppedIndex, 1)[0];
    newThoughtProcess.splice(newIndex, 0, movedItem);
    setThoughtProcess(newThoughtProcess);
  };

  const handleSubmit = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    // console.log(`'${thoughtProcess}'`);
    const arrayString =
      '"[' + thoughtProcess.map((item) => "'" + item + "'").join(", ") + ']"';
    console.log(arrayString);
    try {
      const response = await axios.post(
        "/inspections/test/",
        {
          action: 1,
          answer: arrayString,
          report_id: repord_id,
          test_id: test_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    // Handle cancel action, e.g., navigate back to previous route
    // You can use react-router-dom or any routing library for this
    console.log("Cancelled the test");
  };

  // Format the time left to mm:ss
  const formattedTimeLeft = new Date(timeLeft * 1000)
    .toISOString()
    .substr(14, 5);
  return (
    <div className="w-full md:w-[68%] border border-solid border-slate-300 p-5 rounded-sm">
      <div className="flex items-center justify-between border-b border-solid border-slate-200 pb-3">
        <div className="text-xl font-bold ">Profile</div>
        <div
          onClick={() => saveProfile()}
          className="text-base bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white"
        >
          Save Profile
        </div>
      </div>
      <div className="flex items-center justify-around gap-4">
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
        <div className="flex flex-col self-start py-5 w-[45%]">
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
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                <img
                  src={image}
                  alt="Preview"
                  className="w-auto h-40 shrink-0 object-cover object-center m-2"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center mx-auto flex-col w-full my-8">
            <label htmlFor="interests" className="text-lg mb-1">
              Interests
            </label>
            <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
              <div className="flex flex-wrap gap-2">
                {selectedSkill.length > 0 ? (
                  selectedSkill.map((skill, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex gap-2 px-4 py-1 text-sm rounded-full bg-inherit border border-solid border-black"
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
                  })
                ) : (
                  <p className="text-gray-300 text-sm">
                    Select skills of your interest from below.
                  </p>
                )}
              </div>
            </div>
            <input
              type="text"
              id="interests"
              value={inputValue}
              onChange={handleChange}
              className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
              placeholder="Enter your interests"
            />
            {suggestions.length > 0 && (
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

export default TestElement;
