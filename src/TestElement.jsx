import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import Modal from "./Modal";
import { handleUploadImage } from "./constant";

const TestElement = () => {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleCroppedImage = (url) => {
    console.log("Cropped image URL:", url);
    setShowModal(false); // Close the modal after getting the URL
    setImage(null); // Reset the image state
  };

  const closeModal = () => {
    setShowModal(false);
    setImage(null); // Reset the image state when modal is closed
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
          aspectRatio={16 / 9} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
        />
      </Modal>
    </div>
  );
};

export default TestElement;
