// src/components/FileUpload.js
import React, { useState } from "react";
import axios from "./axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("/image_upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      setImageURL(res.data.image_url);
      setMessage("File uploaded successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to upload file.");
    }
  };

  return (
    <div className="m-32">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {imageURL && <img src={imageURL} alt="Uploaded" />}
    </div>
  );
};

export default FileUpload;
