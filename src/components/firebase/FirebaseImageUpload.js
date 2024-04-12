import React, { useState } from "react";
import { imageDB } from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FirebaseImageUpload = () => {
  const [profile, setProfile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [prourl, setProurl] = useState("");

  const handleUpload = async () => {
    if (!profile) return;

    const imgRef = ref(imageDB, `UltraXpertImgFiles/${v4()}`);
    const uploadTask = uploadBytesResumable(imgRef, profile);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get upload progress as a percentage
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading image: ", error);
        // Handle error if needed
      },
      () => {
        // Upload completed successfully
        console.log("Upload complete");
      }
    );

    try {
      await uploadTask;
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      console.log(url);
      setProurl(url);
    } catch (error) {
      console.error("Error uploading image: ", error);
      // Handle error if needed
      alert("Something went wrong");
    }
  };

  return (
    <div className="mt-52">
      <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <p>Upload Progress: {uploadProgress}%</p>
      )}
      {uploadProgress === 100 && <img src={prourl} />}
    </div>
  );
};

export default FirebaseImageUpload;
