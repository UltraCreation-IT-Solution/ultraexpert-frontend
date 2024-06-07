import React, { useState, useEffect } from "react";
import axios from "./axios";
import { GoPlus } from "react-icons/go";

const TestElement = () => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setShowModal(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDeleteEducation = (index, e) => {
    e.preventDefault();
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const educationJson = { education_json: education };
    try {
      const response = await axios.post(
        "/experts/update/",
        {
          action: 2,
          education_json: educationJson,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      setLoading(false);
      console.log(education);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full sm:max-w-lg space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Upload and Crop Image
        </h1>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
        />
      </div>
      <Modal show={showModal} onClose={closeModal}>
        <ImageUploader
          image={image}
          handleUploadImage={handleUploadImage}
          filename="cropped_image.jpg"
          onCropped={handleCroppedImage}
          aspectRatio={9 / 16} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
        />
      </Modal>
    </div>
  );
};
export default TestElement;
