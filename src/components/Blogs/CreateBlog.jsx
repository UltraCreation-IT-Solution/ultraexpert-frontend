import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar,{ modules , formats } from "../../subsitutes/EditorToolbar";
import { BsUpload } from "react-icons/bs";
import { BsX } from "react-icons/bs";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  console.log(value)
  // const modules = {
  //   toolbar: [
  //     [
  //       { header: "1" },
  //       { header: "2" },
        
  //       { font: [] },
  //     ],
  //     [{ size: [] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image", "video"],
  //     ["clean"],
  //     [{ script: "sub" }, { script: "super" }],
  //     [{ direction: "rtl" }], // Right-to-left text direction
  //     [{ color: [] }, { background: [] }], // Text color and background color
  //     [{ align: [] }], // Text alignment
  //     [
  //       { "code-block": "code-block" },
  //       { code: "code" },
  //       { formula: "formula" },
  //     ],
  //   ],
  // };
  // const formats = [
  //   "header",
  //   "font",
  //   "size",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "video",
  //   "script",
  //   "direction",
  //   "color",
  //   "background",
  //   "align",
  //   "code-block",
  //   "code",
  //   "formula",
  // ];

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

  return (
    <div className="mt-[100px] mx-[7vw] ">
      <div className="md:flex items-start gap-10 ">
        <div className="w-full">
          <div>
            <div className="text-lg font-bold">Blog Title</div>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-sm focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <div className="text-lg font-bold">Category</div>
            <input
              type="text"
              placeholder="Enter category"
              name=""
              id=""
              className="w-full mt-1 border border-solid border-slate-300 p-2 text-sm rounded-sm focus:outline-none"
            />
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
                  <BsX className="text-white text-xl drop-shadow-sm bg-black border border-solid border-white rounded-full "/>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <BsUpload size={20} />
                <div className="text-sm text-[#1475cf] mt-2 text-center text-balance" >
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
      <div className="my-10 ">

      <QuillToolbar toolbarId={'t1'} />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules('t1')}
        formats={formats}
        placeholder="Write something..."
        className="min-h-[400px] "
      />
      </div>
    </div>
  );
};

export default CreateBlog;
