import social from "../src/assets/images/socialmedia.png";
import webD from "../src/assets/images/webdesign.png";
import voice from "../src/assets/images/voiceover.png";
import book from "../src/assets/images/Bookcovers.png";
import logoD from "../src/assets/images/logodesign.png";
import dataEntry from "../src/assets/images/dataEntry.png";
import interior from "../src/assets/images/interiordesign.png";
import seo from "../src/assets/images/seo.png";
import axios from "./axios";

export const handleUploadImage = async (file, filename) => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const formData = new FormData();
  formData.append("file", file);
  formData.append("filename", filename);

  try {
    const res = await axios.post("/file_upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${jsonData.access_token}`,
      },
    });
    return res.data.data.url;
  } catch (err) {
    return err;
  }
};
export const landingImgRow1 = [
  "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  webD,
  "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  voice,
  "https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  book,
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507332194683-0ce90ffa318a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  social,
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const landingImgRow2 = [
  logoD,
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  dataEntry,
  "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  interior,
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559854036-2409f22a918a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  seo,
  "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const categories = [
  "App",
  "Web Development",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "App",
  "Web Development",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
];
export const searchCategories = [
  "App",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Web Development",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "DSA",
  "c++",
  "Java",
  "Python",
  "Cookie",
  "Mongoose",
  "Development",
  "Product Photography",
  "Video Editing",
  "Creative Design",
  "Figma",
  "Canva",
  "Designing",
];
