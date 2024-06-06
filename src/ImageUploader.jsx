import React, { useRef, useState, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageUploader = ({
  image,
  handleUploadImage,
  filename,
  onCropped,
  aspectRatio,
}) => {
  const [uploading, setUploading] = useState(false);
  const cropperRef = useRef(null);

  const getCroppedImage = async () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedCanvas = cropper.getCroppedCanvas();
      const croppedFile = await new Promise((resolve) =>
        croppedCanvas.toBlob((blob) => {
          const file = new File([blob], filename, { type: "image/jpeg" });
          resolve(file);
        }, "image/jpeg")
      );

      try {
        setUploading(true);
        const uploadedUrl = await handleUploadImage(croppedFile, filename);
        setUploading(false);
        onCropped(uploadedUrl); // Call the callback with the URL
      } catch (error) {
        console.error("Error uploading the cropped image:", error);
        setUploading(false);
      }
    }
  };

  useEffect(() => {
    if (image) {
      // Reset states when a new image is passed
      setUploading(false);
    }
  }, [image]);
  console.log("2");
  console.log(onCropped)
  return (
    <div className="space-y-4">
      {image && (
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <Cropper
            src={image}
            style={{ height: "auto", width: "100%" }}
            initialAspectRatio={aspectRatio}
            aspectRatio={aspectRatio}
            guides={false}
            ref={cropperRef}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={getCroppedImage}
              disabled={uploading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200 text-sm"
            >
              {uploading ? "Uploading..." : "Crop & Upload Image"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
