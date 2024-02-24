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
import { useState } from "react";

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
  badgecount: 0,
};
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
export const blogObj = [
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
];
export const recentBlog = [
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.UfFEtByJjLDvm8g4Y2HcEQHaGC?rs=1&pid=ImgDetMain",
    name: "Bhavesh Bhanusali",
    date: "24 May 2015",
    head: "DESIGNER’S GUIDE, BATTLE IMPOSTER SYNDROME.",
    detail:
      "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos.",
  },
];

export const ProjectsCarousel = () => {
  const [slider, setSlider] = useState(0);

  return (
    <div className="flex justify-center items-center mt-5">
      {expertDetailsObj?.projects.map((temp, idx) => (
        <div className="">
          <div className="relative w-[95%] m-auto">
            <div
              className={
                slider === idx
                  ? "absolute bottom-0 w-full flex items-center justify-center h-[8vw] md:h-[5.5vw] bg-black/45 tracking-wider  text-[2.5vw] md:text-[1.5vw] text-white font-bold"
                  : "hidden"
              }
            >
              {temp?.title}
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
                slider === expertDetailsObj?.projects.length - 1
                  ? ` border-slate-400 border-solid text-slate-400`
                  : `border-white border-solid text-white`
              } bg-black/50 rounded-full`}
              onClick={() =>
                slider === expertDetailsObj?.projects.length - 1
                  ? setSlider(expertDetailsObj?.projects.length - 1)
                  : setSlider(slider + 1)
              }
            />
            <img
              src={temp?.banner}
              key={idx}
              className={
                slider === idx
                  ? "h-[50vw] md:h-[30vw] w-[100%] object-cover shrink-0 flex"
                  : "hidden"
              }
            />
          </div>
          <p
            className={
              slider === idx
                ? "flex w-[95%] m-auto mt-4 text-sm md:text-base font-montserrat"
                : "hidden"
            }
          >
            {temp?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export const expertDetailsObj = {
  id: 1,
  personalDetails: {
    name: "Antony Phobes",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
    designation: "UI/UX Designer",
    location: "Maharastra",
    country: "India",
    title: "Web Designer and Figma Expert",
    rating: "4.9",
    aboutMe:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit cum ipsum tenetur facilis, nemo explicabo ea recusandae minus iste deleniti ipsam, autem repellendus aliquam, quidem nobis reiciendis iure quod hic!",
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
  projects: [
    {
      banner:
        "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "Cloud Portal",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1541018939203-36eeab6d5721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D ",
      description:
        "Lorem ipsum 2, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "UltraXpert",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1619506147448-b56ba8ee11d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D",
      description:
        "Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.",
      title: "Clone",
    },
    {
      banner:
        "https://images.unsplash.com/photo-1518185104790-b1d745526575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
      description:
        "Lorem ipsum 4, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur. Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur.",
      title: "My Project 4",
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
  workExperience: [
    {
      companyName: "Ultracreation It Solution",
      position: "Software Developer",
      duration: "2023-2024",
    },
    {
      companyName: "JP Morgan",
      position: "Graduate Analyst",
      duration: "6 months",
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
  blogs: [],
  ratings: [
    {
      img: "https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jhon Butter",
      rating: "4.9",
      commentDate: "2 weeks ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1611095973763-414019e72400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHwwfDB8fHww",
      name: "Lorem Ipsum",
      rating: "4.0",
      commentDate: "1 month ago",
      comment:
        "quaerat doloribus distinctio nesciunt ea, animi consectetur,dolorum temporibus quibusdam quo voluptas facilis debitis nisi autem cumque laudantium omnis dolore. Voluptates minima distinctio labore maiores ipsum! Dolores",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Jack Swagger",
      rating: "4.1",
      commentDate: "1 day ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Jhon Butter",
      rating: "2.9",
      commentDate: "15 days ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://images.unsplash.com/photo-1542330952-bffc55e812b2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paige Cody",
      rating: "4.9",
      commentDate: "2 weeks ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672373833745-ac04484a96b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkzfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D",
      name: "Allen Scott",
      rating: "3.7",
      commentDate: "4 months ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos Lorem ipsum dolor sit amet adipisicing elit Eius doloribus.",
    },
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmZlc2lvbmFsJTIwb2ZmaWNlJTIwZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
      name: "Barry Allen",
      rating: "1.8",
      commentDate: "1 year ago",
      comment:
        "Lorem ipsum dolor sit amet adipisicing elit Eius doloribus, similique maxime cumque optio quisquam dolore corrupti nobis eos",
    },
  ],
};
