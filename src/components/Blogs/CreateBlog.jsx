import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: "3" },
        { header: "4" },
        { header: "5" },
        { header: "6" },
        { font: [] },
      ],
      [{ size: ["1", "2", "3", 4, 5, 6, 7, 8, 9, 10] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      [{ script: "sub" }, { script: "super" }],
      [{ direction: "rtl" }], // Right-to-left text direction
      [{ color: [] }, { background: [] }], // Text color and background color
      [{ align: [] }], // Text alignment
      [
        { "code-block": "code-block" },
        { code: "code" },
        { formula: "formula" },
      ],
    ],
  };
  console.log(modules);
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "script",
    "direction",
    "color",
    "background",
    "align",
    "code-block",
    "code",
    "formula",
  ];
  const handleImageInserted = (imageElement) => {
    // Adjust image size here if needed
    imageElement.setAttribute("width", "200"); // Set width to 200 pixels
    imageElement.setAttribute("height", "auto"); // Maintain aspect ratio
  };

  return (
    <div className="mt-[100px] mx-[7vw] ">
      <div className="flex items-start gap-10 ">
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
            <input type="checkbox" className="h-[18px] w-[18px]"/>
            <div>Allow Comments</div>

          </div>
        </div>
        <div className="w-[400px] shrink-0 ">
          <input type="file" alt=""  className="h-[300px] w-full border border-solid border-slate-300"/>
          <div className="text-gray-500 text-sm mt-1 text-center">Upload your blog image here</div>
        </div>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        onInsertImage={handleImageInserted}
        placeholder="Write something..."
        className="my-10"
      />
    </div>
  );
};

export default CreateBlog;
