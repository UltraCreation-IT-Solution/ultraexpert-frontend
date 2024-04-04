import React, { useState } from "react";

const CreateService = () => {

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


  return (
    <div className="mt-[100px] bg-white h-screen">
      <div className="w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg">
        <div className="text-4xl text-[#3E5676] font-bold my-8">
          Create a serivce
        </div>
        <form className="w-[60%] flex flex-col mb-5">
          <label htmlFor="title" className="text-lg mb-1">
            Service Title
          </label>
          <input
            placeholder="Service Title"
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
            cols="30"
            rows="5"
            className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
          />
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
          <label htmlFor="uploadImages" className="text-lg mb-1">Upload Images (optional)</label>
          <input type="file" multiple className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-8"/>
          <div className="flex justify-center mb-4">
            <button className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
