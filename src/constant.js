import social from "../src/assets/images/socialmedia.png";
import webD from "../src/assets/images/webdesign.png";
import voice from "../src/assets/images/voiceover.png";
import book from "../src/assets/images/Bookcovers.png";
import logoD from "../src/assets/images/logodesign.png";
import dataEntry from "../src/assets/images/dataEntry.png";
import interior from "../src/assets/images/interiordesign.png";
import seo from "../src/assets/images/seo.png";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const topExpertsBar = [
  {
    name: "Bhavesh Bhanusali",
    designation: "Senior Web Developer",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bhavesh Bhanusali",
    designation: "Senior Web Developer",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Bhavesh Bhanusali",
    designation: "Senior Web Developer",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
];
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
];
export const profileObj = [
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title: "Naman Paliwal ",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title: "Naman Paliwal ",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
];
export const expertDashInfo = {
  name: "Bhavesh Bhanusali",
  username: "Bhavesh884",
  location: "India",
  profile:
    "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
  banner:
    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  designation: "Web Developer",
  meetings: "60 Meetings",
  title:
    " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
  followers: 500,
  topSkills: ["React", "Angular", "Node"],
  allskils: [
    "React",
    "Angular",
    "Node",
    "Express",
    "Mongoose",
    "MYSQL",
    "PHP",
    "JavaScript",
    "C++",
  ],
  ratings: 4.8,
  viewCount: 1567,
  followersCount: 730,
  blogcount: 28,
  myBookings: [
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Bhavesh Bhanusali",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
  ],
  chats: [
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Naman Paliwal",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Bhavesh Bhanusali",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Ashi Pandey",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Lavina Shahani",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Naman Paliwal",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Bhavesh Bhanusali",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Ashi Pandey",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Lavina Shahani",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
  ],
  recentContributions: [
    {
      serviceName: "API testing using postman",
      date: "22 May, 2024",
      customerName: "Bhavesh Bhanusali",
      serviceDuration: "x hours",
      servicePrice: "450",
    },
    {
      serviceName: "API testing using postman",
      date: "22 May, 2024",
      customerName: "Bhavesh Bhanusali",
      serviceDuration: "x hours",
      servicePrice: "450",
    },
    {
      serviceName: "API testing using postman",
      date: "22 May, 2024",
      customerName: "Bhavesh Bhanusali",
      serviceDuration: "x hours",
      servicePrice: "450",
    },
    {
      serviceName: "API testing using postman",
      date: "22 May, 2024",
      customerName: "Bhavesh Bhanusali",
      serviceDuration: "x hours",
      servicePrice: "450",
    },
    {
      serviceName: "API testing using postman",
      date: "22 May, 2024",
      customerName: "Bhavesh Bhanusali",
      serviceDuration: "x hours",
      servicePrice: "450",
    },
  ],
  recentMeetings: [
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      customerName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
  ],
  testimonials: [
    {
      date: "25 March, 2024",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      date: "25 March, 2024",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      date: "25 March, 2024",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      date: "25 March, 2024",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      date: "25 March, 2024",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ],
};
export const customerDashboardInfo = {
  name: "Bhavesh Bhanusali",
  username: "Bhavesh884",
  location: "India",
  profile:
    "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
  designation: "Web Developer",
  meetings: "60 Meetings",
  myBookings: [
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "5:00 PM",
      endTime: "6:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Bhavesh Bhanusali",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
    {
      bookingTime: "2:00 PM",
      bookingDate: "24 Mar, 2024",
      scheduledDate: "30 Mar, 2024",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
      customerProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      customerName: "Guy Hawkins",
    },
  ],
  chats: [
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Naman Paliwal",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Bhavesh Bhanusali",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Ashi Pandey",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Lavina Shahani",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Naman Paliwal",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Bhavesh Bhanusali",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Ashi Pandey",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Lavina Shahani",
      lastSeen: "1 Day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
  ],
  recentMeetings: [
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
    {
      meetingId: "11xxxxxxxx",
      expertName: "Bhavesh Bhanusali",
      servicePrice: "450",
      startTime: "2:00 PM",
      endTime: "2:00 PM",
      serviceTitle: "API integration using postman",
      serviceDate: "22 May, 2024",
    },
  ],
  transactionHistory: [
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
    {
      invoice: "Invoice 006",
      date: "30 Mar, 2024",
      time: "3:00 PM",
      amount: "1100",
      expertProfile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertName: "Guy Hawkins",
    },
  ],
};
export const leaderboardRanking = [
  {
    rank: 1,
    img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bhavesh Bhanusali",
    score: 1300,
  },
  {
    rank: 2,
    img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
    name: "Ashi Pandey",
    score: 1200,
  },
  {
    rank: 3,
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
    name: "Lavina Shahani",
    score: 1100,
  },
  {
    rank: 4,
    img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
    name: "Pratyaksh Kothari",
    score: 1000,
  },
  {
    rank: 5,
    img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Naman Paliwal",
    score: 900,
  },
  {
    rank: 6,
    img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bhavesh Bhanusali",
    score: 800,
  },
  {
    rank: 7,
    img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
    name: "Ashi Pandey",
    score: 700,
  },
  {
    rank: 8,
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
    name: "Lavina Shahani",
    score: 600,
  },
  {
    rank: 9,
    img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
    name: "Pratyaksh Kothari",
    score: 500,
  },
  {
    rank: 10,
    img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Naman Paliwal",
    score: 400,
  },
];
export const serviceObjects = [
  {
    category: "Video & Editing",
    serviceArray: [
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
    ],
  },
  {
    category: "Development & Tools",
    serviceArray: [
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
    ],
  },
  {
    category: "Graphic & Design",
    serviceArray: [
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
    ],
  },
  {
    category: "Logos & Mockups",
    serviceArray: [
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
      {
        banner:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
        title: "I will design a modern logo for your web application",
        price: "$10",
        rating: 4.9,
        reviews: 10,
        expertName: "Bhavesh Bhanusali",
        delivery: "1 day",
        category: "Logo Design",
        logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
      },
    ],
  },
];
export const allServiceObject = [
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
];

export const recentBlog = [
  {
    img: "https://images.unsplash.com/photo-1524006231331-78f794ebbbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661265902815-162b20274c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1657639034791-642d817dafbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxibG9ncyUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1524006231331-78f794ebbbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
  },
  {
    img: "https://images.unsplash.com/photo-1524006231331-78f794ebbbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1657639034791-642d817dafbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxibG9ncyUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1524006231331-78f794ebbbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
];
export const featuredBlogs = [
  {
    img: "https://images.unsplash.com/photo-1521649415036-659258dc424f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmt8ZW58MHwxfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "First featured blog",
    date: "May 15, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdvcmt8ZW58MHwxfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "Second featured blog",
    date: "May 15, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1512279093314-5926a353720c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvcmt8ZW58MHwxfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "Third featured blog",
    date: "May 15, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1665363243056-68fed2fef2a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsb2dzfGVufDB8MXwwfHx8MA%3D%3D",
    name: "Bhavesh Bhanusali",
    title: "Fourth featured blog",
    date: "May 15, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1678567671234-388cf4fa0224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfDF8MHx8fDA%3D",
    name: "Bhavesh Bhanusali",
    title: "Fifth featured blog",
    date: "May 15, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
];
export const hotTopics = [
  {
    topicName: "Sports",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    topicName: "Science",
    img: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    topicName: "Entertainment",
    img: "https://plus.unsplash.com/premium_photo-1682125528836-9f652947350f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGVudGVydGFpbm1lbnR8ZW58MHwxfDB8fHww",
  },
  {
    topicName: "Politics",
    img: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9saXRpY3N8ZW58MHwxfDB8fHww",
  },
  {
    topicName: "World",
    img: "https://images.unsplash.com/photo-1555005245-5c29a5faccb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29ybGR8ZW58MHwxfDB8fHww",
  },
  {
    topicName: "Startup",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJ0dXB8ZW58MHwxfDB8fHww",
  },
  {
    topicName: "Movies",
    img: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW92aWVzfGVufDB8MXwwfHx8MA%3D%3D",
  },
  {
    topicName: "Gadgets",
    img: "https://images.unsplash.com/photo-1554116154-e733de92fe4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhZGdldHN8ZW58MHwxfDB8fHww",
  },
  {
    topicName: "Technology",
    img: "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfDF8MHx8fDA%3D",
  },
];
export const allBlogs = [
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports", "Technology", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Science", "News", "Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Science", "News", "Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Science", "News", "Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "News", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies", "News", "Science"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies", "News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Sports"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["News"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
    date: "22 May, 2024",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Movies"],
    views: "2K",
    likes: "200",
  },
];
export const expertDetailsObj = {
  id: 1,
  personalDetails: {
    firstName: "Antony",
    lastName: "Phobes",
    gender: "Female",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
    designation: "UI/UX Designer",
    aboutMe:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cum ipsum tenetur facilis, nemo explicabo ea recusandae minus iste deleniti ipsam, autem repellendus aliquam, quidem nobis reiciendis iure quod hic!",
    location: "Maharastra",
    country: "India",
    meetingCount: "50",
    followerCount: "1k",
    rating: "4.9",
    ratingCount: "100",
  },
  ratingBreakdown: {
    availability: "2.3",
    skills: "3.5",
    coorporation: "4",
    deadline: "4.4",
    quality: "4.8",
    communication: "3",
  },
  skills: [
    "Web Development",
    "React Native",
    "Graphic Design",
    "Javascript",
    "React js",
    "Calculas",
    "Voice Over",
    "HTML",
    "CSS",
  ],
  carrierJourney: [
    {
      companyName: "Amazon Web Services",
      designation: "Associate Technical Account Manager",
      startDate: "March, 2022",
      endDate: "",
      present: true,
    },
    {
      companyName: "Deloitte India",
      designation: "DevOps Engineer",
      startDate: "January, 2021",
      endDate: "March, 2022",
      present: false,
    },
    {
      companyName: "Sainsbury's",
      designation: "Cloud Engineer",
      startDate: "October, 2017",
      endDate: "February, 2020",
      present: false,
    },
    {
      companyName: "Tata Consultancy Services",
      designation: "Cloud Engineer",
      startDate: "June, 2017",
      endDate: "January, 2021",
      present: false,
    },
  ],
  projects: [
    {
      banner:
        "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "Cloud Portal",
      tags: ["React js", "Node js", "Express js", "MongoDB", "React Native"],
      type: "Group",
      role: "Developer",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1541018939203-36eeab6d5721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D ",
      description:
        "Lorem ipsum 2, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "UltraXpert",
      tags: ["React js", "Node js", "Rapid API"],
      type: "Indie",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1619506147448-b56ba8ee11d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D",
      description:
        "Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.",
      title: "Clone",
      tags: ["React js", "Node js", "React Native"],
      type: "Group",
      role: "Designer",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1518185104790-b1d745526575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
      description:
        "Lorem ipsum 4, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.",
      title: "My Project 4",
      tags: ["React js", "Node js"],
      type: "Indie",
    },
  ],
  education: [
    {
      instituteName: "Lakshmi Narain College of Technology, Bhopal",
      degreeName: "Bechelor of Engineering - Information Technology",
      duration: "2021-2025",
    },
    {
      instituteName: "Indian Institue of Technology, Indore",
      degreeName: "Bechelor of Engineering - Information Technology",
      duration: "2019-2023",
    },
  ],
  achievements: [
    {
      name: "Winner of Smart India Hackethon",
      year: "2023",
    },
    {
      name: "Acheived 1st rank in Google CodeHash competition",
      year: "2022",
    },
  ],
  services: [
    {
      title: "Web & App development",
      id: 1,
      description:
        "Web & App development Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1200",
    },
    {
      title: "Website design using figma",
      id: 2,
      description:
        "Website design using figma Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1300",
    },
    {
      title: "Getting started with popular web API's",
      id: 3,
      description:
        "Getting started with popular web API's Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1400",
    },
    {
      title: "Building web pages using Chat GPT 3.5",
      id: 4,
      description:
        "Building web pages using Chat GPT 3.5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1500",
    },
    {
      title: "Learn basics of Reactjs like state, prope, hooks and many more",
      id: 5,
      description:
        "Learn basics of Reactjs like state, prope, hooks and many more Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1600",
    },
    {
      title: "Website design using figma",
      id: 6,
      description:
        "Website design using figma Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1700",
    },
    {
      title: "Getting started with popular web API's",
      id: 7,
      description:
        "Getting started with popular web API's Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1800",
    },
    {
      title: "Building web pages using Chat GPT 3.5",
      id: 8,
      description:
        "Building web pages using Chat GPT 3.5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "1900",
    },
    {
      title: "website design using figma",
      id: 9,
      description:
        "website design using figma Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "2000",
    },
    {
      title: "website design using figma and other tools",
      id: 10,
      description:
        "website design using figma and other tools Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit culpa ipsam quia quaerat doloribus distinctio nesciunt ea, animi consectetur, dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores?",
      banners: [
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      price: "2100",
    },
  ],
  ratings: [
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jhon Butter",
      commentDate: "2 weeks ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Lorem Ipsum",
      commentDate: "1 month ago",
      comment:
        "quaerat doloribus distinctio nesciunt ea, animi consectetur,dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Jack Swagger",
      commentDate: "1 day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Jhon Butter",
      commentDate: "15 days ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paige Cody",
      commentDate: "2 weeks ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672373833745-ac04484a96b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkzfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Allen Scott",
      commentDate: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos Lorem ipsum dolor sit amet adipisicing elit Eius doloribus.",
    },
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmZlc2lvbmFsJTIwb2ZmaWNlJTIwZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      name: "Barry Allen",
      commentDate: "1 year ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
  ],
  blogs: [
    {
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
      name: "Bhavesh Bhanusali",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
      date: "22 May, 2024",
      tags: ["Technology", "Development"],
      views: "2K",
      likes: "200",
    },
    {
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
      date: "22 May, 2024",
      tags: ["Technology", "Development"],
      views: "2K",
      likes: "200",
    },
    {
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed.",
      date: "22 May, 2024",
      tags: ["Technology", "Development"],
      views: "2K",
      likes: "200",
    },
    {
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed. ",
      date: "22 May, 2024",
      tags: ["Technology", "Development"],
      views: "2K",
      likes: "200",
    },
    {
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHwwfDB8fHww",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed.",
      date: "22 May, 2024",
      tags: ["Technology", "Development"],
      views: "2K",
      likes: "200",
    },
  ],
};

export const favExperts = [
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1551500226-b50b653e33e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
  {
    name: "Bhavesh Bhanusali",
    username: "Bhavesh884",
    location: "India",
    profile:
      "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=600",
    banner:
      "https://images.unsplash.com/photo-1621416953228-87ad15716483?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Web Developer",
    meetings: "60 Meetings",
    title:
      " I will work with you to ensure that you are preparing for it in a decent state of mental well being too",
    followers: 500,
    topSkills: ["React", "Angular", "Node"],
    ratings: 4.8,
  },
];

export const favServices = [
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
  {
    banner:
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/251441496/original/6db123e925e7791769834654de50d149f8b99c7b.jpeg",
    title: "I will design a modern logo for your web application",
    price: "$10",
    rating: 4.9,
    reviews: 10,
    expertName: "Bhavesh Bhanusali",
    delivery: "1 day",
    category: "Logo Design",
    logo: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
  },
];

export const favBlogs = [
  {
    img: "https://images.unsplash.com/photo-1524006231331-78f794ebbbac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661265902815-162b20274c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3MlMjBpbWFnZXN8ZW58MHwwfDB8fHww",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1657639034791-642d817dafbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxibG9ncyUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
  {
    img: "https://images.unsplash.com/photo-1657639034791-642d817dafbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM0fHxibG9ncyUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D",
    name: "Bhavesh Bhanusali",
    title: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    date: "24 May 2015",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
    tags: ["Technology", "Movies"],
    views: "2K",
    likes: "200",
  },
];

export const ProjectsCarousel = ({ projectsArray }) => {
  const [slider, setSlider] = useState(0);
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center ">
          {projectsArray?.length > 0 &&
            projectsArray?.map((item, idx) => (
              <div key={idx}>
                <div className="relative w-[95%] m-auto">
                  <div
                    className={
                      slider === idx
                        ? "absolute top-1 left-1 w-fit px-4 sm:px-8 py-1 sm:py-2 btnBlack text-white rounded-sm rounded-r-full border border-solid border-white "
                        : "hidden"
                    }
                  >
                    <div className="text-center text-xs sm:text-sm">
                      {item?.type} Project
                    </div>
                    <div className="text-center text-xs text-gray-300 ">
                      {item?.role}{" "}
                    </div>
                  </div>
                  <div
                    className={
                      slider === idx
                        ? "absolute bottom-0 w-full flex items-center justify-center h-[8vw] md:h-[5.5vw] bg-black/45 tracking-wider text-[2.5vw] md:text-[1.5vw] text-white font-bold"
                        : "hidden"
                    }
                  >
                    {item?.title}
                  </div>
                  <MdOutlineKeyboardArrowLeft
                    className={`absolute left-2 top-[24vw] md:top-[14vw] w-8 h-8 sm:w-[5vw] sm:h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] rounded-full ${
                      slider === 0
                        ? ` border-slate-400 border-solid text-slate-400`
                        : `border-white border-solid text-white`
                    } bg-black/50 `}
                    onClick={() =>
                      slider === 0 ? setSlider(0) : setSlider(slider - 1)
                    }
                  />
                  <MdOutlineKeyboardArrowRight
                    className={`absolute right-2 top-[24vw] md:top-[14vw] w-8 h-8 sm:w-[5vw] sm:h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] ${
                      slider === projectsArray?.length - 1
                        ? ` border-slate-400 border-solid text-slate-400`
                        : `border-white border-solid text-white`
                    } bg-black/50 rounded-full`}
                    onClick={() =>
                      slider === projectsArray?.length - 1
                        ? setSlider(projectsArray?.length - 1)
                        : setSlider(slider + 1)
                    }
                  />
                  <img
                    src={item?.image}
                    key={idx}
                    className={
                      slider === idx
                        ? "h-[50vw] md:h-[30vw] w-[100%] object-cover shrink-0 flex"
                        : "hidden"
                    }
                  />
                </div>

                <div
                  className={
                    slider === idx
                      ? "mt-3 flex items-center gap-1 flex-wrap pl-3 sm:pl-5"
                      : "hidden"
                  }
                >
                  {item?.tags?.map((item, index) => (
                    <div
                      key={index}
                      className="border border-solid border-slate-300 rounded-sm px-3 py-[6px] text-xs"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p
                  className={
                    slider === idx
                      ? "flex w-[95%] m-auto mt-4 text-sm md:text-base font-montserrat"
                      : "hidden"
                  }
                >
                  {item?.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export const BookingCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-sm flex items-center justify-between  border-t border-solid border-slate-300 my-5 py-3 overflow-x-scroll">
        <div className="flex items-center xs:gap-[4vw] text-sm">
          <div className="flex items-center gap-2 w-[200px] ">
            <img
            
              src={localStorage.getItem("isExpert")==="true"? item?.customer_profile_img:item?.expert_profile_img}
              className="h-9 w-9 rounded-full shrink-0 object-cover"
              alt=""
            />
            <div>{localStorage.getItem("isExpert")==="true"? item?.customer_first_name :item?.expert_first_name  } {localStorage.getItem("isExpert")==="true"? item?.customer_last_name :item?.expert_last_name}</div>
          </div>
          <div className="hidden sm:block w-[120px]">
            {item?.scheduledDate}{" "} 
          </div>
          <div className="w-[60px] flex items-center justify-center shrink-0">
            <FaRegTrashAlt className="shrink-0" />
          </div>
        </div>
        {open ? (
          <IoIosArrowUp
            className="shrink-0 text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        ) : (
          <IoIosArrowDown
            className="shrink-0 text-xl "
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
        )}
      </div>
      {open && (
        <div>
          <div className="text-sm line-clamp-2">
            Service Title: {localStorage.getItem("isExpert")==="true"? item?.service_name :item?.service_name }{" "}
          </div>
          <div className="text-sm mt-2">Booking Date: {item?.updated_on} </div>
          <div className="block sm:hidden mt-2 shrink-0  text-sm">
            Scheduled date: {localStorage.getItem("isExpert")==="true"? item?.scheduledDate :item?.scheduledDate  }{" "}
          </div>
          <div className="text-sm mt-2">Start Time: {localStorage.getItem("isExpert")==="true"?  item?.time_slot:item?.time_slot   } </div>
          <div className="text-sm mt-2">End Time: {item?.endTime} </div>
        </div>
      )}
    </>
  );
};

// export const BlogCardHorizontal = ({ index, items }) => {
//   return (
//     <div
//       className={`px-3 py-4 my-6 rounded-md sm:flex justify-between gap-5  ${
//         index % 2 === 0
//           ? `bg-[#ececec]`
//           : `border border-[#c7c7c7] border-solid `
//       }`}
//     >
//       <div className="flex flex-col sm:flex-row items-center gap-5">
//         <img
//           className=" w-full h-48 object-cover sm:h-36 sm:w-40 rounded-md shrink-0 self-start"
//           src={items?.img}
//           alt=""
//         />
//         <div className="text-[#575757]">
//           <div className="text-base font-semibold line-clamp-2 text-ellipsis">
//             {items?.title}
//           </div>
//           <div className="text-sm text-[#898888]">{items?.date}</div>
//           <div className="mt-3 text-xs flex items-center gap-2">
//             <FaTags />
//             <div className="flex items-center gap-2">
//               {items?.tags.map((item) => (
//                 <div className="text-[10px] border border-solid border-slate-300 px-2 py-1 rounded-xl cursor-pointer">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex gap-[3vw] sm:gap-0 sm:flex-col">
//             <div className="mt-3 text-xs flex items-center gap-2">
//               <IoEyeSharp /> {items?.views}
//             </div>
//             <div className="mt-3 flex items-center gap-4">
//               <div className=" text-xs flex items-center gap-1 sm:gap-2">
//                 <BiSolidLike /> {items?.likes} likes{" "}
//               </div>
//               <div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
//                 <FaPlus /> Add to Fav
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden border border-solid border-slate-300 h-fit sm:flex items-center justify-center rounded-full text-4xl font-thin self-center shrink-0 cursor-pointer">
//         <RiArrowRightSLine />
//       </div>
//     </div>
//   );
// };
