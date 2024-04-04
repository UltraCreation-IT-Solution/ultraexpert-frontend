import React, { useState } from "react";
import { BsUpload,BsX } from "react-icons/bs";

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
          if(totalFiles > 4) {
            setErrorMessage("You can only upload up to 4 files.");
          }else{
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

  return (
    <div className="mt-[100px] bg-white h-screen">
      <div className="w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg">
        <div className="text-4xl text-[#3E5676] font-bold my-4">
          Create a serivce
        </div>
        <u className="border border-[#d8d8d8] border-solid w-[90%] mb-8"></u>
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
            <div className="flex flex-wrap gap-3">
              {selectedSkill.length > 0 ? (
                selectedSkill.map((skill) => {
                  return (
                    <div
                      key={skill}
                      className="px-4 py-1 text-sm text-nowrap rounded-full bg-inherit border border-solid border-black"
                    >
                      {skill}
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
            <div className="flex flex-wrap gap-3">
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
                  <div onClick={(e)=>handleButtonClick(e,index)} className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1">
                    <BsX/>
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
