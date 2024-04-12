import React, { useState } from "react";
import { imageDB } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FirebaseImageUpload = () => {
  const [profile, setProfile] = useState();
  const handleUpload = async () => {
    if (!profile) return;
    const imgRef = ref(imageDB, `UltraXpertImgFiles/${v4()}`);
    const response = await uploadBytes(imgRef, profile);
    if (response) {
      const url = await getDownloadURL(response.ref);
      console.log(url);
    } else alert("Something went wrong");
  };
  return (
    <div className="mt-52">
      <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FirebaseImageUpload;
