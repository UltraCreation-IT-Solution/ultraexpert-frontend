import React, { useState } from "react";
import { BsUpload, BsX } from "react-icons/bs";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();

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

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const handleBack = () => {
    navigate("/");
  };

  const [proType, setProType] = useState(false);

  const handleProjectTypeChange = (event) => {
    const selectedValue = event.target.value;
    setProType(selectedValue === "group");
  };

  return (
    <div className="mt-[100px] flex flex-col bg-white h-auto">
      <div className="flex w-[60%] mx-auto">
        <div
          onClick={() => handleBack()}
          className="flex gap-2 text-lg font-bold cursor-pointer hover:bg-[#e2e2e2] py-2 px-1 rounded-md duration-200"
        >
          <MdOutlineKeyboardBackspace size={25} />
          Add a project
        </div>
      </div>
      <div className="w-[60%] flex flex-col border border-solid border-slate-300 mx-auto items-center justify-center rounded-lg shadow-lg">
        <div className="text-4xl text-[#3E5676] font-bold my-4">
          Create a project
        </div>
        <u className="border border-[#d8d8d8] border-solid w-[90%] mb-8"></u>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="w-[60%] flex flex-col mb-5"
        >
          <label htmlFor="title" className="text-lg mb-1">
            Project Title
          </label>
          <input
            placeholder="Project Title"
            type="text"
            id="title"
            name="title"
            className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
          />
          <label htmlFor="desc" className="text-lg mb-1">
            Project Description
          </label>
          <textarea
            placeholder="Project Description"
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
          />
          <label htmlFor="projectType" className="text-lg mb-1">
            Project Type
          </label>
          <select
            name="projectType"
            id="projectType"
            className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
            onChange={handleProjectTypeChange}
          >
            <option value="single">Individual Project</option>
            <option value="group">Group Project</option>
          </select>
          {proType && (
            <>
              <label htmlFor="role" className="text-lg mb-1">
                Team Project Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="border border-solid border-slate-300 rounded-md px-4 py-2 mb-4"
                placeholder="Enter your role"
              />
            </>
          )}
          <label htmlFor="interests" className="text-lg mb-1">
            Project Tags
          </label>
          <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
            <div className="flex flex-wrap gap-3">
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
                  Select skills used in your project.
                </p>
              )}
            </div>
          </div>
          <div className="border border-solid border-slate-200 px-4 py-2 rounded-md mb-4 overflow-y-auto">
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
            Project Images
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
              <div className="flex flex-wrap items-center justify-center">
                {selectedFiles.map((preview, index) => (
                  <div key={index} className="relative mr-2 mb-2">
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                    <div
                      onClick={(e) => handleButtonClick(e, index)}
                      className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                    >
                      <BsX />
                    </div>
                  </div>
                ))}
                {selectedFiles.length < 4 ? (
                  <BsUpload size={20} className="cursor-pointer" />
                ) : null}
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
            <button
              type="submit"
              className="cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
