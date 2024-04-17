import React, { useEffect, useState } from "react";
import { FiUpload, FiX, FiEdit } from "react-icons/fi";
import { imageDB } from "./components/firebase/config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import axios from "./axios";

const TestElement = () => {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  // const [currData, setCurrData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   mobile_number: "",
  //   profile_img: "",
  //   gender: "",
  //   marital_status: "",
  // });
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  useEffect(() => {
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
        console.log("ander wala", response.data.data);
        setImage(response.data.data.profile_img);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      const imgRef = ref(imageDB, `UltraXpertImgFiles/${v4()}`);
      const uploadTask = uploadBytesResumable(imgRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get upload progress as a percentage
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error("Error uploading image: ", error);
          // Handle error if needed
        },
        () => {
          // Upload completed successfully
          console.log("Upload complete");
        }
      );
      try {
        await uploadTask;
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log(url);
        setImage(url);
        setUserData({
          ...userData,
          profile_img: url,
        });
      } catch (error) {
        console.error("Error uploading image: ", error);
        // Handle error if needed
        alert("Something went wrong");
      }

      reader.readAsDataURL(file);
    }
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
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSuggestions(interest.filter((suggestion) => suggestion.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleSuggestionClick = (suggestion) => {
    // Add suggestion to selected skills
    if(!selectedSkill.includes(suggestion.name)){
      setSelectedSkill([...selectedSkill, suggestion.name]);
      console.log(selectedSkill)
    }
    // Clear input and suggestions
    setInputValue('');
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
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
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
      const selectedInterest = data.data.interest_list;
      setSelectedSkill(selectedInterest);
      console.log(selectedSkill)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSkillInfo();
  }, []);

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

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
                  selectedSkill.map((skill,ind) => {
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
            <input type="text" id="interests" value={inputValue} onChange={handleChange} className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none" placeholder="Enter your interests"/>
            {
              suggestions.length > 0 && (
                <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                  <div>
                    {suggestions.map((suggestion,ind) => (
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
            }
            
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
