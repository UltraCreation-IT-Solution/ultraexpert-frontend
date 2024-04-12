import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { BsUpload, BsX } from "react-icons/bs";

const EditProfileCustomer = () => {
  const navigate = useNavigate();

  const [currStep, setCurrStep] = useState(0);

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

  const handleChange = (skill) => {
    if (!selectedSkill.includes(skill)) {
      setSelectedSkill([...selectedSkill, skill]);
    }
  };

  const [generalInfo, setGeneralInfo] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    dob: "",
    marital_status: "Single",
    profile_img: "",
    gender: "Male",
  });

  const handleSubmit1 = async (e) => {
    e.preventDefault();
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
          first_name: generalInfo.first_name,
          last_name: generalInfo.last_name,
          mobile_number: generalInfo.mobile_number,
          dob: generalInfo.dob,
          marital_status: generalInfo.marital_status,
          profile_img: selectedProfile,
          gender: generalInfo.gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(data, generalInfo);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const [personalInfo, setPersonalInfo] = useState({
    profession: "",
    about_me: "",
  });

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    try {
      // const response =await fetch("http://localhost:8000/customers/",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     action:1,
      //     marital_status:personalInfo.marital_status,
      //     profession:personalInfo.profession,
      //     about_me:personalInfo.about_me
      //   }),
      //   credentials:"include"
      // })
      // const json = await response.json();
      // console.log(json);
      const response = await axios.post(
        "/customers/",
        {
          action: 3,
          profession: personalInfo.profession,
          about_me: personalInfo.about_me,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data, personalInfo);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      // const response = await fetch("http://localhost:8000/customers/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 2,
      //     interest_list: selectedSkill,
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);
      const response = await axios.post(
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
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const handleProfileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedBanner(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfile = () => {
    setSelectedProfile(null);
  };
  const handleRemoveBanner = () => {
    setSelectedBanner(null);
  };

  return (
    <div className="h-screen bg-white mt-[200px]">
      <div className="w-[50%] flex border border-solid border-slate-300 mx-auto rounded-lg shadow-lg overflow-y-scroll">
        <div className="w-1/4 flex flex-col bg-white justify-start border-r border-solid border-slate-300">
          <button
            onClick={() => setCurrStep(0)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 0
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Personal Details
          </button>
          <button
            onClick={() => setCurrStep(1)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 1
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            General Details
          </button>
          <button
            onClick={() => setCurrStep(2)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 2
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Interests
          </button>
        </div>
        {currStep === 0 && (
          <form onSubmit={handleSubmit1} className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <label htmlFor="firstName" className="text-lg mb-1">
                First Name
              </label>
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                value={generalInfo.first_name}
                onChange={(e) =>
                  setGeneralInfo({ ...generalInfo, first_name: e.target.value })
                }
                className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                placeholder="Enter your first name"
              />
              <label htmlFor="lastName" className="text-lg mb-1">
                Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                value={generalInfo.last_name}
                onChange={(e) =>
                  setGeneralInfo({ ...generalInfo, last_name: e.target.value })
                }
                className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                placeholder="Enter your last name"
              />
              <div className="flex gap-4 justify-around">
                <div className="flex flex-col w-full">
                  <label htmlFor="mobileNumber" className="text-lg mb-1">
                    Mobile Number
                  </label>
                  <input
                    required
                    type="number"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={generalInfo.mobile_number}
                    onChange={(e) =>
                      setGeneralInfo({
                        ...generalInfo,
                        mobile_number: e.target.value,
                      })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="gender" className="text-lg mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={generalInfo.gender}
                    onChange={(e) =>
                      setGeneralInfo({
                        ...generalInfo,
                        gender: e.target.value,
                      })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-around gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="dob" className="text-lg mb-1">
                    Date of Birth
                  </label>
                  <input
                    name="dob"
                    id="dob"
                    value={generalInfo.dob}
                    type="text"
                    pattern="\d{4}-\d{2}-\d{2}"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => {
                      setPersonalInfo({
                        ...generalInfo,
                        dob: e.target.value,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="status" className="text-lg mb-1">
                    Marital Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    value={generalInfo.marital_status}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...generalInfo,
                        marital_status: e.target.value,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  >
                    <option value="basic">Single</option>
                    <option value="inter">Married</option>
                  </select>
                </div>
              </div>
              <label htmlFor="profile" className="text-lg mb-1">
                Profile Photo
              </label>
              <div
                onClick={() =>
                  document.querySelector("#profileSelector").click()
                }
                className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
              >
                {selectedProfile ? (
                  <div className="relative">
                    <img
                      src={selectedProfile}
                      alt="Selected Profile"
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                    <div
                      onClick={handleRemoveProfile}
                      className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                    >
                      <BsX />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <BsUpload size={20} />
                    <div className="text-sm text-[#1475cf] mt-2">
                      Click here to upload a profile photo
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  id="profileSelector"
                  accept="image/*"
                  onChange={handleProfileChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 1 && (
          <form onSubmit={handleSubmit2} className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <label htmlFor="profession" className="text-lg mb-1">
                Profession
              </label>
              <input
                required
                type="text"
                id="profession"
                name="profession"
                value={personalInfo.profession}
                onChange={(e) =>
                  setPersonalInfo({
                    ...personalInfo,
                    profession: e.target.value,
                  })
                }
                className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                placeholder="Profession"
              />

              <label htmlFor="about" className="text-lg mb-1">
                About Me
              </label>
              <textarea
                required
                type="text"
                id="about"
                name="about"
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, about: e.target.value })
                }
                className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                placeholder="I want to learn css, html, python with django"
              />
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 2 && (
          <form onSubmit={handleSubmit3} className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <label htmlFor="interests" className="text-lg mb-1">
                Interests
              </label>
              <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                <div className="flex gap-2">
                  {selectedSkill.length > 0 ? (
                    selectedSkill.map((skill) => {
                      return (
                        <div
                          key={skill}
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
              <div className="border border-solid border-slate-200 px-4 py-2 rounded-md mb-4">
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
              </div>
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfileCustomer;
