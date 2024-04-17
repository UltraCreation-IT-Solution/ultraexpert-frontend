import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "../../subsitutes/EditorToolbar";
import { BsUpload } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import axios from "../../axios";
import DOMPurify from 'dompurify';

const CreateBlog = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState({
    name: "",
    number: "",
  });
  const [preview, setPreview] = useState(false);

  const [blogData,setBlogData] = useState({
    title: "",
    category_id: "",
    service_ll : [],
    image: [],
  })

  // code for uploading image for blog starts
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      // Handle the case where the user cancels the file selection
      setSelectedFile(null);
    }
  };
  const removeImage = () => {
    setSelectedFile(null);
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
    setValue2({ ...value2, name: e.target.value });
    setFilterCategoriesArray(
      categoriesArray.filter((item) => {
        return item?.name?.toLowerCase().includes(searchVal);
      })
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
    console.log(value2.number)
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 1,
          category_name: value2.name,
          img_url: "abc.jpg",
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

  console.log(value2);

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
    try{
      const res = await axios.post("/blogs/",{
        action:2,
        blog_title: blogData.title,
        content_json: value,
        category_id: value2.number,
        service_link_list: blogData.service_ll,
        image_url_list: ""
      },{
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        }
      });
      const data = res.data;
      if(!data || data.status === 400 || data.status === 401){
        console.log("Something went wrong");
        return;
      }
      console.log(data);
    }catch(error){
      console.log(error);
    }
  };

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
              onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
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
              value={value2.name}
              onChange={(e) => handleCategoryChange(e)}
              onFocus={() => getCategories()}
              className="w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-sm focus:outline-none"
            />
            {filterCategoriesArray.length > 0 && (
              <div className=" border border-solid border-slate-300 px-1 text-sm rounded-sm mt-2 w-fit min-h-auto max-h-[150px] overflow-y-auto ">
                {filterCategoriesArray.length > 0 &&
                  filterCategoriesArray?.map((item, index) => (
                    <div
                      key={index}
                      className="text-sm text-center text-gray-600 px-3 py-2 border-b border-solid border-slate-300 pb-2 cursor-pointer"
                      onClick={() =>{
                        setValue2({
                          ...value2,
                          name: item?.name,
                          number: item?.number,
                        })
                        setFilterCategoriesArray([]);
                      }
                      }
                    >
                      {item?.name}
                    </div>
                  ))}
              </div>
            )}
            {filterCategoriesArray.length === 0 && value2?.name !== "" && (
              <div
                className="bg-green-500 text-white rounded-md px-4 py-2 w-fit cursor-pointer mt-2"
                onClick={(e) => {setNewCategory(e);
                setValue2({...value2,number:categoriesArray.length+1})
                }}
              >
                Add Category
              </div>
            )}
          </div>
          <div className="flex items-center mt-5 gap-2">
            <input type="checkbox" className="h-[18px] w-[18px]" />
            <div>Allow Comments</div>
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
                <BsUpload size={20} />
                <div className="text-sm text-[#1475cf] mt-2 text-center text-balance">
                  Click here to attach or upload an image
                </div>
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
      <div
        className="text-base w-fit px-4 py-1 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
        onClick={() => {setPreview(true);
          console.log(value)
           setValue( DOMPurify.sanitize(value))
           console.log(value);
        }}
      >
        Preview
      </div>
      {preview && (
        <>
          <p
            dangerouslySetInnerHTML={{ __html: value }}
            className="border border-solid border-slate-300 p-2 rounded-sm mt-16 dangerHtml"
          />
          <div className="flex items-center gap-5 ">
            <div
              className="text-base bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-1 text-white w-fit cursor-pointer"
              onClick={() => setPreview(false)}
            >
              Edit
            </div>
            <div
              onClick={blogCreated}
              className="text-base bg-green-500 hover:bg-green-600 rounded-md px-4 py-1 text-white w-fit cursor-pointer"
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
