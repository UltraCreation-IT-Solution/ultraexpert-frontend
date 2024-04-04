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

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 4) {
      setErrorMessage('Maximum of 4 files allowed!');
      return;
    }

    // Clear previous error message
    setErrorMessage('');

    setSelectedFiles(Array.from(files)); // Convert FileList to array
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
          <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md">
            <label
              htmlFor="fileInput"
              className="text-gray-700 cursor-pointer hover:text-blue-500"
            >
              {selectedFiles.length === 0 ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0l11.172
                 4.586a2 2 0 0 1 0 2.828L8.71 22a2 2 0 0 1-2.828-2.828z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 8l6.743 6.743a2 2 0 0 1-2.828 2.828L10 18a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"
                    />
                  </svg>
                  <span className="ml-2">Select Images</span>
                </>
              ) : (
                <span>{selectedFiles.length} files selected (Max: 4)</span>
              )}
            </label>
            <input
              id="fileInput"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>
          <div className="flex justify-center mb-4">
            <button className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
