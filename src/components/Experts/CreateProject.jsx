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

const CreateProject = ({ setAddProjectOpen }) => {
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
      setAddProjectOpen(false);
    } catch (error) {
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
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleImageUpload = async (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      const file = e.target.files[0];
      if (file) {
        const imgRef = ref(imageDB, `UltraXpertImgFiles/${v4()}`);
        const uploadTask = uploadBytesResumable(imgRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get upload progress as a percentage
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploadProfileProgress(progress);
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
          setImageUrl(url);
          setImage(url);
        } catch (error) {
          console.error("Error uploading image: ", error);
          // Handle error if needed
          alert("Something went wrong");
        }
      }
    }
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

  return (
    <div className="max-w-3xl mx-auto mt-2 px-4 border border-gray-500 rounded-lg shadow-lg">
      <div className="flex justify-between items-center bg-[#ebebeb] border border-slate-300 border-solid px-6 py-3 rounded-t-lg">
        <h2 className="text-xl font-semibold">Add Project</h2>
        <div className="flex flex-wrap justify-between">
          <button
            onClick={handleCancel}
            className="bg-red-600 text-white px-4 py-2 rounded mr-4  hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={projects.length === 0}
            className={`bg-blue-500 text-white px-6 py-2 rounded ${
              projects.length === 0 && "opacity-50 cursor-not-allowed"
            }`}
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
              {uploadProfileProgress > 0 && uploadProfileProgress < 100 ? (
                <p>Upload Progress: {uploadProfileProgress}%</p>
              ) : image ? (
                <div className="relative w-full h-full flex justify-center items-center">
                  <img
                    src={image}
                    alt="Preview"
                    className="max-h-28 max-w-44 object-cover rounded"
                  />
                  <button
                    onClick={handleImageRemove}
                    className="absolute top-2 right-2 bg-slate-400 text-white p-1 rounded hover:bg-gray-600 flex justify-center items-center"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
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
              className="flex gap-1 items-center bg-slate-300 text-gray-600 pl-4 pr-2 py-1 rounded-full text-sm mr-2 mb-2"
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
            className="border border-slate-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTag}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <button
          onClick={handleAddProject}
          disabled={isFormEmpty}
          className={`bg-blue-500 text-white mt-4 px-6 py-3 rounded block mx-auto ${
            isFormEmpty && "opacity-50 cursor-not-allowed"
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
                          className="flex gap-1 items-center bg-slate-300 text-gray-600 pl-4 pr-2 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex mt-2">
                      <button
                        onClick={() => handleEditProject(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                      >
                        <FiEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProject(index)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Delete
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

export default CreateProject;
