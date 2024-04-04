import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit1 = () => {
    alert("Profile Updated Successfully!");
  };
  const handleSubmit2 = () => {
    alert("Profile Updated Successfully!");
  };

  const handleSubmit3 = () => {
    alert("Profile Updated Successfully!");
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
            General Details
          </button>
          <button
            onClick={() => setCurrStep(1)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 1
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Personal Details
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
          <form className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <label htmlFor="name" className="text-lg mb-1">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                placeholder="Enter your name"
              />
              <label htmlFor="profession" className="text-lg mb-1">
                Mobile Number
              </label>
              <input
                required
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                placeholder="Enter your mobile number"
              />
              <label htmlFor="email" className="text-lg mb-1">
                Email
              </label>
              <input
                required
                type="text"
                id="email"
                name="email"
                className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                onClick={handleSubmit1}
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 1 && (
          <form className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <div className="flex justify-around gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="gender" className="text-lg mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="status" className="text-lg mb-1">
                    Marital Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    className="border border-solid border-gray-300 px-2 py-2 rounded-s-md w-full mb-4"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </div>
              <label htmlFor="profession" className="text-lg mb-1">
                Profession
              </label>
              <input
                required
                type="text"
                id="profession"
                name="profession"
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
                className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                placeholder="I want to learn css, html, python with django"
              />
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                onClick={handleSubmit2}
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 2 && (
          <form className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <label htmlFor="interests" className="text-lg mb-1">
                Interests
              </label>
              <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                <div className="flex gap-2">
                  {selectedSkill.length > 0 ? (
                    selectedSkill.map((skill) => {
                      return (
                        <button
                          key={skill}
                          className="px-4 py-1 rounded-full bg-inherit border border-solid border-black"
                        >
                          {skill}
                        </button>
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
                      <button
                        key={ind}
                        onClick={(e) => {
                          e.preventDefault();
                          handleChange(skill.name);
                        }}
                        className="cursor-pointer px-4 py-1 text-nowrap rounded-full bg-inherit border border-solid border-[#c7c7c7] text-[#8D8D8D] bg-[#E8E8E8] flex justify-center items-center overflow-visible"
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                onClick={handleSubmit3}
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
