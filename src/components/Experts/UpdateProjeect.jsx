import React, { useEffect, useState } from "react";
import { FiUpload, FiX, FiEdit } from "react-icons/fi";
import { imageDB } from "../firebase/config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import axios from "../../axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { handleUploadImage } from "../../constant";

const UpdateProject = ({ setAddProjectOpen, getBackWidth }) => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [tags, setTags] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [uploadProfileProgress, setUploadProfileProgress] = useState(0);

  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const fetchProjects = async () => {
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      console.log(response.data.data.projects);
      setProjects(response.data.data.projects);
    } catch (error) {
      console.log(error);
      setProjects([]);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/experts/update/",
        {
          action: 8,
          projects_json: projects,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response);
      setLoading(false);
      setAddProjectOpen(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // console.log(projects);
  };
  const handleAddProject = () => {
    if (!title || !description || !image || !type) {
      alert("Please fill in all fields");
      return;
    }

    const newProject = { title, description, image, type, role, tags };
    if (editingIndex !== null) {
      // Replace the project at the editing index
      const updatedProjects = [...projects];
      updatedProjects[editingIndex] = newProject;
      setProjects(updatedProjects);
      setEditingIndex(null);
    } else {
      // Add the new project
      setProjects([...projects, newProject]);
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setImage("");
    setType("");
    setRole("");
    setTags([]);
  };

  const handleEditProject = (index) => {
    // Set the project fields to the form fields for editing
    const projectToEdit = projects[index];
    setTitle(projectToEdit.title);
    setDescription(projectToEdit.description);
    setImage(projectToEdit.image);
    setType(projectToEdit.type);
    setRole(projectToEdit.role);
    setTags(projectToEdit.tags);
    setEditingIndex(index);

    // Scroll to the top of the page
    window.scrollTo({ top: `${getBackWidth}`, behavior: "smooth" });
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const [imageLoading, setImageLoading] = useState(false);

  const handleImageUpload = async (e) => {
    setImageLoading(true);
    const url = await handleUploadImage(
      e.target.files[0],
      e.target.files[0].name
    );
    console.log(url);
    setImage(url);
    setImageLoading(false);
  };
  const handleImageRemove = () => {
    setImage("");
  };

  const handleCancel = () => {
    // Add your code here to navigate back to the previous page
    // For simplicity, let's just log a message
    console.log("Cancelled");
    setEditingIndex(null); // Reset editing index
    setAddProjectOpen(false);
  };

  const isFormEmpty =
    !title || !description || !image || !type || (type === "group" && !role);

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-2 px-4 border border-gray-500 rounded-lg shadow-lg">
      <div className="flex justify-between items-center bg-[#ebebeb] border border-slate-300 border-solid px-6 py-3 rounded-t-lg">
        <h2 className="text-xl font-semibold">Add Project</h2>
        <div className="flex flex-wrap justify-between">
          <button
            onClick={handleCancel}
            className="bg-inherit text-black px-4 py-2 rounded-sm mr-4 border border-solid border-black cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className={
              loading
                ? `bg-gray-600 text-white px-6 py-2 rounded-sm`
                : `btnBlack text-white px-6 py-2 rounded-sm`
            }
          >
            Submit Projects
          </button>
        </div>
      </div>
      <div className={`p-6 ${projects.length > 0 && "shadow-lg"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-slate-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-slate-300 rounded px-4 py-2 h-32 resize-none mb-4 focus:outline-none focus:border-blue-500"
            />
            {type === "group" && (
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-slate-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
              />
            )}
          </div>
          <div className="flex flex-col ">
            <div className="relative h-32 border border-slate-300 border-solid rounded overflow-hidden mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {imageLoading ? (
                <div className="flex w-full h-full items-center justify-center text-center">
                  <span>Loading...</span>
                </div>
              ) : image ? (
                <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                  <img
                    src={image}
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
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Type</option>
              <option value="group">Group Project</option>
              <option value="indie">Indie Project</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap border border-slate-300 rounded px-2 py-2 ">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex gap-1 items-center bg-white text-black pl-4 pr-2 py-1 rounded-lg text-sm mr-2 mb-2 border border-solid border-gray-300"
            >
              {tag}
              <FiX
                onClick={() => removeTag(index)}
                className="ml-1 cursor-pointer text-center text-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add Tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="border border-slate-300 rounded px-4 py-2 mr-2 focus:outline-none"
          />
          <button
            onClick={addTag}
            className="btnBlack text-white px-4 py-2 rounded-sm"
          >
            + Add
          </button>
        </div>
        <button
          onClick={handleAddProject}
          disabled={isFormEmpty}
          className={`btnBlack text-white mt-4 px-6 py-3 rounded-sm block mx-auto ${
            isFormEmpty ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {editingIndex !== null ? "Update Project" : "Add Project"}
        </button>
      </div>
      <div className="mt-8">
        {projects.length > 0 && (
          <div className="text-xl font-semibold">Your Projects</div>
        )}
        <div className="">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <div
                key={index}
                className="mb-8 p-6 bg-white rounded shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-10">
                  {project.image && (
                    <img
                      src={project.image}
                      alt="Project"
                      className="mb-4 h-44 w-60 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium">
                      <span className="font-extrabold">Type: </span>
                      {project.type === "group"
                        ? "Group Project"
                        : "Indie Project"}
                    </p>
                    {project.type === "group" && (
                      <p className="text-sm font-medium">
                        <span className="font-extrabold">Role: </span>
                        {project.role}
                      </p>
                    )}
                    <div className="flex flex-wrap mt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex gap-1 items-center bg-inherit text-black pl-4 pr-2 py-1 rounded-md text-sm mr-2 mb-2 border border-solid border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex mt-2">
                      <button
                        onClick={() => handleEditProject(index)}
                        className="bg-white text-black px-4 py-2 rounded-sm mr-2 border border-black border-solid"
                      >
                        <FiEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProject(index)}
                        className="btnBlack text-white px-4 py-2 rounded-sm"
                      >
                        <RiDeleteBin6Line /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;
