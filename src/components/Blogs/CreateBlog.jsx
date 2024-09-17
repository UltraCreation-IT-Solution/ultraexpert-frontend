import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "../../subsitutes/EditorToolbar";
import axios from "../../axios";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { handleUploadImage } from "../../constant";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";
import { FiUpload } from "react-icons/fi";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState({
    name: "",
    number: "",
  });
  const [myImage, setMyImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(false);

  const [blogData, setBlogData] = useState({
    title: "",
    category_id: "",
    service_ll: [],
    image: [],
  });

  const [loading, setLoading] = useState(false);

  // code for uploading image for blog starts
  const [imageLoading, setImageLoading] = useState(false);

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImage(reader.result);
        setShowModal(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleCroppedImage = (url) => {
    console.log("Cropped image URL:", url);
    setShowModal(false); // Close the modal after getting the URL
    setMyImage(url); // Reset the image state
    // setProjects({ ...projects, image: url });
    setBlogData({ ...blogData, image: url });
  };

  const closeModal = () => {
    setShowModal(false);
    setMyImage(null); // Reset the image state when modal is closed
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
    setLoading(true);
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
      setLoading(false);
      alert("Blog created successfully!");
      navigate("/blog");
    } catch (error) {
      setLoading(false);
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
                      className="btnBlack text-white rounded-sm px-4 py-2 w-fit cursor-pointer mt-2"
                      onClick={(e) => {
                        setNewCategory(e);
                        setValue2({
                          ...value2,
                          number: categoriesArray.length + 1,
                        });
                      }}
                    >
                      + Add Category
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
                    className="py-2 px-4 text-sm rounded-sm focus:outline-none btnBlack text-white w-fit mt-2"
                  >
                    + Add Interest
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
              onChange={onSelectFile}
              className="hidden"
            />
            {imageLoading ? (
              <div className="flex w-full h-full items-center justify-center text-center">
                <span>Loading...</span>
              </div>
            ) : myImage ? (
              <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                <img
                  src={myImage}
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
          <Modal show={showModal} onClose={closeModal}>
            <ImageUploader
              image={myImage}
              handleUploadImage={handleUploadImage}
              filename="cropped_image.jpg"
              onCropped={handleCroppedImage}
              aspectRatio={16 / 9} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
            />
          </Modal>
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
