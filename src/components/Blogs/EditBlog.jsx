import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "../../subsitutes/EditorToolbar";
import axios from "../../axios";
import DOMPurify from "dompurify";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleUploadImage } from "../../constant";
import { FiUpload } from "react-icons/fi";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";

const EditBlog = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const params = useParams();
  console.log(params.id);

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [filterCategoriesArray, setFilterCategoriesArray] = useState([]);

  //   console.log(value2);
  const [myImage, setMyImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const onSelectFile = (event) => {
    setImageLoading(true);
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
    setShowModal(false);
    setImageLoading(false);
    setMyImage(url); // Reset the image state
    // setUserData({ ...userData, profile_img: url });
    setAllBlogData({ ...allBlogData, images_list: url });
  };
  const closeModal = () => {
    setShowModal(false);
    setImageLoading(false);
    setMyImage(allBlogData.images_list); // Reset the image state when modal is closed
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

  const [value2, setValue2] = useState({
    name: "",
    number: "",
  });

  const [allBlogData, setAllBlogData] = useState({});

  const getBlogData = async () => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(`/blogs/?action=3&blog_id=${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      console.log(res.data);
      console.log(res.data.data);
      const json = res.data.data;
      setAllBlogData(json);
      setValue2({
        ...value2,
        number: json.blog_category.category_id,
        name: json.blog_category.category,
      });
      setMyImage(json.images_list);
      setSelectedSkill(json.tags_list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
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
    setFilterCategoriesArray(
      categoriesArray.filter((item) => {
        return item?.name?.toLowerCase().includes(searchVal);
      })
    );
  };

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

  //   const [content, setContent] = useState(allBlogData.content);

  const blogCreated = async (e) => {
    e.preventDefault();
    const cookie = document.cookie.split("; ");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setLoading(true);
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 3,
          id: allBlogData.id,
          blog_title: allBlogData.title,
          content_json: allBlogData.content,
          category_id: value2.number,
          service_link_list: [],
          image_url_list: allBlogData.images_list,
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
      setLoading(false);
      alert("Blog Updated Successfully");
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    navigate("/blog");
  };

  const [loading, setLoading] = useState(false);

  console.log(allBlogData);

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
              value={allBlogData.title}
              onChange={(e) =>
                setAllBlogData({ ...allBlogData, title: e.target.value })
              }
              className="w-full mt-1 border border-solid border-gray-200 p-2 text-sm rounded-sm focus:outline-none"
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
              className="w-full mt-1 border border-solid border-gray-200 p-2 text-sm rounded-sm focus:outline-none"
            />
            {categoriesArray.length > 0 && (
              <div
                className={`  px-1 text-sm rounded-sm mt-2 w-fit min-h-auto max-h-[150px] overflow-y-auto ${
                  filterCategoriesArray.length > 0
                    ? "border border-solid border-slate-300"
                    : ""
                }`}
              >
                {filterCategoriesArray?.map((item, index) => (
                  <div
                    key={index}
                    className="text-sm text-center text-gray-600 px-3 py-2 border-b border-solid border-slate-300 pb-2 cursor-pointer"
                    onClick={() => {
                      setValue2({
                        ...value2,
                        name: item?.name,
                        number: item?.number,
                      });

                      setFilterCategoriesArray([]);
                      setCategoryInputValue("");
                    }}
                  >
                    {item?.name}
                  </div>
                ))}
              </div>
            )}
            {filterCategoriesArray.length === 0 &&
              categoryInputValue.trim() !== "" && (
                <div
                  className="btnBlack text-white rounded-sm px-4 py-2 w-fit cursor-pointer mt-2"
                  onClick={(e) => {
                    setNewCategory(e);
                    setValue2({
                      ...value2,
                      number: categoriesArray.length + 1,
                    });
                    alert("Category Added");
                  }}
                >
                  + Add Category
                </div>
              )}
          </div>
          <div className="flex justify-center mx-auto flex-col w-full mt-5">
            <label htmlFor="tags" className="text-lg mb-1 font-bold">
              Tags
            </label>
            {selectedSkill.length > 0 && (
              <div className="border border-solid border-gray-200 px-2 rounded-sm mb-4">
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.map((skill, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex gap-2 px-4 py-1 text-sm rounded-lg bg-inherit border border-solid border-gray-300 my-2"
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
                  })}
                </div>
              </div>
            )}

            <input
              type="text"
              id="tags"
              value={inputValue}
              onChange={handleChange}
              className="border border-solid border-gray-200 p-2 text-sm rounded-sm focus:outline-none"
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
                    className="px-4 py-2 text-sm rounded-sm focus:outline-none btnBlack text-white w-fit mt-2"
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
          value={allBlogData.content}
          onChange={(content) => setAllBlogData({ ...allBlogData, content })}
          readOnly={preview}
          modules={modules("t1")}
          formats={formats}
          placeholder="Write something..."
          className=" border border-solid border-slate-400 "
        />
      </div>
      <div
        className="text-base w-fit px-4 py-2 rounded-sm btnBlack text-white cursor-pointer"
        onClick={() => {
          setPreview(true);
          console.log(allBlogData.content);
          const originalContent = JSON.parse(
            JSON.stringify(allBlogData.content)
          );
          const sanitizedContent = DOMPurify.sanitize(originalContent);
          setAllBlogData({ ...allBlogData, content: sanitizedContent });
          console.log(allBlogData.content);
        }}
      >
        Preview
      </div>
      {preview && (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(allBlogData.content),
            }}
            className="border border-solid border-slate-300 p-2 rounded-sm mt-16 dangerHtml"
          />
          <div className="flex items-center gap-5 ">
            <div
              className="text-base bg-white rounded-sm px-4 py-2 text-black w-fit cursor-pointer border border-solid border-black"
              onClick={() => setPreview(false)}
            >
              Edit
            </div>
            <div
              onClick={blogCreated}
              className={
                loading
                  ? `text-base bg-gray-600 rounded-sm px-4 py-2 text-white w-fit cursor-pointer`
                  : `text-base btnBlack rounded-sm px-4 py-2 text-white w-fit cursor-pointer`
              }
            >
              Submit
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditBlog;
