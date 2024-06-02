// src/components/FileUpload.js
import React, { useState } from "react";
import { handleUploadImage } from "./constant";

const FileUpload = () => {
  const handleFileChange = async (e) => {
    const url = await handleUploadImage(
      e.target.files[0],
      e.target.files[0].name
    );
    console.log(url);
  };

  //

  return (
    <div className="m-32">
      <form>
        <input type="file" onChange={handleFileChange} />
      </form>
      <img src="https://ultraxpert.s3.ap-south-1.amazonaws.com/3-Bhavesh-Bhanusali/06-02-2024/1234_20240602025951.png" />
    </div>
  );
};

export default FileUpload;
