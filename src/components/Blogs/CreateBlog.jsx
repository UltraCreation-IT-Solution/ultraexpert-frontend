import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "../../subsitutes/EditorToolbar";
import { BsUpload } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import axios from "../../axios";
import DOMPurify from "dompurify";
import { imageDB } from "../firebase/config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState({
    name: "",
    number: "",
  });
  const [preview, setPreview] = useState(false);

  const [blogData, setBlogData] = useState({
    title: "",
    category_id: "",
    service_ll: [],
    image: [],
  });

  // code for uploading image for blog starts
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBannerProgress, setUploadBannerProgress] = useState(0);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
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
          setUploadBannerProgress(progress);
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
        setBlogData({ ...blogData, image: [url] });
        setSelectedFile(url);
        console.log(blogData);
      } catch (error) {
        console.error("Error uploading image: ", error);
        // Handle error if needed
        alert("Something went wrong");
      }

      reader.onload = () => {
        setSelectedFile(reader.result);
        reader.readAsDataURL(file);
      };
    } else {
      // Handle the case where the user cancels the file selection
      setSelectedFile(null);
    }
  };
  const removeImage = () => {
    setSelectedFile(null);
    setUploadBannerProgress(0);
    setBlogData({ ...blogData, image: [] });
  };
  // code for uploading image for blog ends

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [filterCategoriesArray, setFilterCategoriesArray] = useState([]);
  const getCategories = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const response = await axios.get("/blogs/?action=4", {
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
        console.log("Something went wrong");
        return;
      }
      const allData = response.data.data;
      setCategoriesArray(allData);
      setFilterCategoriesArray(allData);
      console.log(categoriesArray);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategoryChange = (e) => {
    const searchVal = e.target.value.toLowerCase();
    setCategoryInputValue(searchVal);
    setValue2({ ...value2, name: e.target.value });
    setFilterCategoriesArray((prevCat) =>
      prevCat.filter((item) => item?.name?.toLowerCase().includes(searchVal))
    );
  };

  const setNewCategory = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(value2?.name);
    console.log(value2.number);
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 1,
          category_name: value2.name,
          img_url: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = res.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const blogCreated = async (e) => {
    e.preventDefault();
    const cookie = document.cookie.split("; ");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(value2?.number);
    console.log(blogData);
    console.log(value);
    console.log(blogData.title);
    console.log(blogData.service_ll);
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 2,
          blog_title: blogData.title,
          content_json: value,
          category_id: value2.number,
          service_link_list: blogData.service_ll,
          image_url_list: blogData.image,
          tags_list: selectedSkill,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = res.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
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
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSuggestions(
      interest.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    // Add suggestion to selected skills
    if (!selectedSkill.includes(suggestion.name)) {
      setSelectedSkill([...selectedSkill, suggestion.name]);
      console.log(selectedSkill);
    }
    // Clear input and suggestions
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const handleNewSkillAdd = (value) => {
    if (!selectedSkill.includes(value)) {
      setSelectedSkill([...selectedSkill, value]);
    }
    setInputValue("");
  };
  const navigate = useNavigate();

  const [categoryInputValue, setCategoryInputValue] = useState("");

  return (
    <div className="mt-[100px] mx-[7vw] ">
      <div className="md:flex items-start gap-10 ">
        <div className="w-full">
          <div>
            <div className="text-lg font-bold">Blog Title</div>
            <input
              type="text"
              placeholder="Enter title"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
              className="w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-sm focus:outline-none"
            />
          </div>
          <div className="mt-5 relative overflow-visible">
            <div className="text-lg font-bold">Category</div>
            <input
              type="text"
              placeholder="Enter category"
              name=""
              id=""
              value={value2?.name}
              onChange={(e) => handleCategoryChange(e)}
              onFocus={() => getCategories()}
              className="w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-sm focus:outline-none"
            />
            {categoriesArray.length > 0 && (
              <div
                className={` px-1 text-sm rounded-sm mt-2 w-fit min-h-auto max-h-[150px] overflow-y-auto ${
                  filterCategoriesArray.length > 0
                    ? "border border-solid border-slate-300"
                    : ""
                }`}
              >
                {filterCategoriesArray.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm text-center text-gray-600 px-3 py-2 border-b border-solid border-slate-300 pb-2 cursor-pointer"
                    onClick={() => {
                      setValue2({
                        ...value2,
                        name: item.name,
                        number: item.number,
                      });
                      setFilterCategoriesArray([]);
                      setCategoryInputValue("");
                    }}
                  >
                    {item.name}
                  </div>
                ))}

                {/* {filterCategoriesArray.length === 0 &&
                categoryInputValue.length === 0
                  ? null
                  : filterCategoriesArray.length === 0 &&
                    categoryInputValue.length > 0 && (
                      <div
                        className="bg-green-500 text-white rounded-md px-4 py-2 w-fit cursor-pointer mt-2"
                        onClick={(e) => {
                          setNewCategory(e);
                          setValue2({
                            ...value2,
                            number: categoriesArray.length + 1,
                          });
                        }}
                      >
                        Add Category
                      </div>
                    )} */}
                {filterCategoriesArray.length === 0 &&
                  categoryInputValue.trim().length > 0 && (
                    <div
                      className="bg-green-500 text-white rounded-md px-4 py-2 w-fit cursor-pointer mt-2"
                      onClick={(e) => {
                        setNewCategory(e);
                        setValue2({
                          ...value2,
                          number: categoriesArray.length + 1,
                        });
                      }}
                    >
                      Add Category
                    </div>
                  )}
              </div>
            )}
          </div>
          <div className="flex justify-center mx-auto flex-col w-full mt-5">
            <label htmlFor="tags" className="text-lg mb-1 font-bold">
              Tags
            </label>
            {selectedSkill.length > 0 ? (
              <div className="border border-solid border-gray-300 px-2 rounded-md mb-4">
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.length > 0 ? (
                    selectedSkill.map((skill, ind) => {
                      return (
                        <div
                          key={ind}
                          className="flex gap-2 px-4 py-1 text-sm rounded-full bg-inherit border border-solid border-black my-2"
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
            ) : (
              <></>
            )}
            <input
              type="text"
              id="tags"
              value={inputValue}
              onChange={handleChange}
              className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
              placeholder="Enter your interests"
            />
            {suggestions.length > 0
              ? inputValue.length > 0 && (
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
                )
              : inputValue.length > 0 && (
                  <button
                    onClick={() => handleNewSkillAdd(inputValue)}
                    className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none bg-green-500 text-white w-[30%] mt-2"
                  >
                    Add Interest
                  </button>
                )}
          </div>
        </div>

        <div className="w-full my-5 md:my-0 md:w-[300px] lg:w-[400px] shrink-0">
          <div
            onClick={() => document.querySelector("#imageSelector").click()}
            className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
          >
            <input
              type="file"
              id="imageSelector"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {selectedFile ? (
              <div className="relative">
                <img
                  src={selectedFile}
                  alt="Selected preview"
                  className="w-28 h-28 object-cover shrink-0 brightness-95 "
                />
                <div
                  onClick={removeImage}
                  className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                >
                  <BsX className="text-white text-xl drop-shadow-sm bg-black border border-solid border-white rounded-full " />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {uploadBannerProgress > 0 && uploadBannerProgress < 100 ? (
                  <div>current progress: {uploadBannerProgress}%</div>
                ) : (
                  <>
                    <BsUpload size={20} />
                    <div className="text-sm text-[#1475cf] mt-2 text-center text-balance">
                      Click here to attach or upload an image
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="text-gray-500 text-sm mt-1 text-center">
            Upload your blog image here
          </div>
        </div>
      </div>
      <div className="my-10 overflow-visible">
        <QuillToolbar toolbarId={"t1"} />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          readOnly={preview}
          modules={modules("t1")}
          formats={formats}
          placeholder="Write something..."
          className=" border border-solid border-slate-400 "
        />
      </div>
      <a
        href="#preview"
        style={{
          scrollBehavior: "smooth",
          color: "white",
          textDecoration: "none",
        }}
      >
        <div
          className="text-sm w-fit px-5 py-2 rounded-sm btnBlack text-white cursor-pointer "
          onClick={() => {
            if (value.length !== 0) {
              setPreview(true);
              console.log(value);
              setValue(DOMPurify.sanitize(value));
            }
            if (value.length === 0) {
              alert("Please write something first");
            }
          }}
        >
          Preview
        </div>
      </a>
      {preview && value.length !== 0 && (
        <>
          <div
            id="preview"
            className="border border-solid border-slate-300 p-2 rounded-sm mt-16 dangerHtml"
          >
            {blogData.title !== "" && (
              <div className="text-3xl overflow-hidden xs:text-4xl lg:text-5xl font-bold md:px-[7vw] my-5 md:my-4 tracking-wide text-center pb-5">
                {blogData.title}{" "}
              </div>
            )}
            <p dangerouslySetInnerHTML={{ __html: value }} className="" />
          </div>
          <div className="flex items-center gap-5 mt-5">
            <div
              className="text-sm border border-solid border-black rounded-sm px-6 py-2 text-black w-fit cursor-pointer"
              onClick={() => setPreview(false)}
            >
              Edit
            </div>
            <div
              onClick={blogCreated}
              className="text-sm w-fit px-5 py-2 rounded-sm btnBlack text-white cursor-pointer"
            >
              Submit
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBlog;
