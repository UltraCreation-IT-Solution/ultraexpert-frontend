import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { handleUploadImage } from "../../constant";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";
import { FiUpload } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const CHECKOUT_STEPS = [
  { name: "Personal Details" },
  { name: "General Details" },
  { name: "Education" },
  { name: "Skill Set" },
  { name: "Achievements" },
  { name: "Experience" },
  { name: "Account Details" },
];

const SignUpAsExpert = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);
  const [showModalCertificate, setShowModalCertificate] = useState(false);
  const [myImageBackground, setMyImageBackground] = useState(null);
  const [myImageProfile, setMyImageProfile] = useState(null);
  const [myImageCertificate, setMyImageCertificate] = useState(null);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const [certificateLoading, setCertificateLoading] = useState(false);

  const navigate = useNavigate();

  const stepRef = useRef([]);

  const onSelectFileProfile = (event) => {
    setProfileLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImageProfile(reader.result);
        setShowModalProfile(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const onSelectFileBackground = (event) => {
    setBannerLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImageBackground(reader.result);
        setShowModalBackground(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const onSelectFileCertificate = (event) => {
    setCertificateLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImageCertificate(reader.result);
        setShowModalCertificate(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleCroppedImageProfile = (url) => {
    console.log("Cropped image URL:", url);
    setShowModalProfile(false); // Close the modal after getting the URL
    setProfileLoading(false);
    setMyImageProfile(url); // Reset the image state
    setPersonalInfo({
      ...personalInfo,
      profile_img: url,
    });
  };
  const handleCroppedImageBackground = (url) => {
    console.log("Cropped image URL:", url);
    setShowModalBackground(false); // Close the modal after getting the URL
    setBannerLoading(false);
    setMyImageBackground(url); // Reset the image state
    setPersonalInfo({
      ...personalInfo,
      banner_img: url,
    });
  };
  const handleCroppedImageCertificate = (url) => {
    console.log("Cropped image URL:", url);
    setShowModalCertificate(false); // Close the modal after getting the URL
    setCertificateLoading(false);
    setMyImageCertificate(url); // Reset the image state
    setAchievementForm({
      ...achievementForm,
      certificate: url,
    });
  };
  const closeModalProfile = () => {
    setShowModalProfile(false);
    setProfileLoading(false);
    setMyImageProfile(null); // Reset the image state when modal is closed
  };
  const closeModalBackground = () => {
    setShowModalBackground(false);
    setBannerLoading(false);
    setMyImageBackground(null); // Reset the image state when modal is closed
  };
  const closeModalCertificate = () => {
    setShowModalCertificate(false);
    setCertificateLoading(false);
    setMyImageCertificate(null); // Reset the image state when modal is closed
  };
  const [personalInfo, setPersonalInfo] = useState({
    gender: "Male",
    dob: "",
    anniversary_date: "",
    marital_status: "Single",
    profile_img: "",
    banner_img: "",
  });

  const handleMaritalStatusChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      marital_status: e.target.value,
    });
  };

  const handlePersonalInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const trimmedPersonalInfo = {
      ...personalInfo,
      gender: personalInfo.gender,
      dob: personalInfo.dob,
      anniversary_date: personalInfo.anniversary_date,
      marital_status: personalInfo.marital_status,
      profile_img: personalInfo.profile_img,
      banner_img: personalInfo.banner_img,
    };
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    try {
      console.log(personalInfo);
      const response = await axios.post(
        "/user_details/",
        {
          action: 1,
          ...trimmedPersonalInfo,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      console.log(data, personalInfo);
      localStorage.setItem("isExpert", `true`);
      localStorage.setItem("isCustomer", `false`);
      localStorage.setItem("profile", `${personalInfo.profile_img}`);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const [generalInfo, setGeneralInfo] = useState({
    profession: "",
    about_me: "",
    level: "Beginner",
    experience_years: "",
  });

  const handleGeneralInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 1,
          profession: generalInfo.profession,
          about_me: generalInfo.about_me,
          level: generalInfo.level,
          experience_years: generalInfo.experience_years,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      const data = response.data;
      localStorage.setItem("expert_id", `${response.data.expert_id}`);
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      console.log(data, generalInfo);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const [education, setEducation] = useState([]);
  const [educationForm, setEducationForm] = useState({
    type: "",
    certificate: "",
    institute_name: "",
    city: "",
    state_name: "",
    country: "",
    start_date: "",
    end_date: "",
    division: "",
  });

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setEducationForm({
      ...educationForm,
      [name]: value,
    });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (
      educationForm.type &&
      educationForm.certificate &&
      educationForm.institute_name &&
      educationForm.city &&
      educationForm.state_name &&
      educationForm.country &&
      educationForm.start_date &&
      educationForm.end_date &&
      educationForm.division
    ) {
      setEducation([...education, educationForm]);
      setEducationForm({
        type: "",
        certificate: "",
        institute_name: "",
        city: "",
        state_name: "",
        country: "",
        start_date: "",
        end_date: "",
        division: "",
      });
    }
  };

  const handleDeleteEducation = (index, e) => {
    e.preventDefault();
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const handleEducationForm = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    // const educationJson = { education_json: education };
    // console.log(educationJson);

    setIsLoading(true);
    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 2,
          education_json: education,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      console.log(data, education);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const [skills, setSkills] = useState([]);
  const [technology, setTechnology] = useState("");
  const [rating, setRating] = useState("");

  const addSkillForm = (e) => {
    e.preventDefault();
    if (technology && rating) {
      setSkills([...skills, { technology_name: technology, ratings: rating }]);
      setTechnology("");
      setRating("");
    }
  };

  const handleDeleteSkill = (index, e) => {
    e.preventDefault();
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSkillForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    // const skillJson = { skill_json: skills };
    // console.log(skillJson);
    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 3,
          skill_json: skills,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }
      console.log(data, skills);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const [achievements, setAchievements] = useState([]);

  const [achievementForm, setAchievementForm] = useState({
    name: "",
    year: "",
    certificate: "",
  });

  const handleChange2 = (e) => {
    const { name, value, type, files } = e.target;
    setAchievementForm({
      ...achievementForm,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (
      achievementForm.name &&
      achievementForm.year &&
      achievementForm.certificate
    ) {
      setAchievements([...achievements, achievementForm]);
      setAchievementForm({
        name: "",
        year: "",
        certificate: "",
      });
      setMyImageCertificate(null);
    }
  };

  const handleDeleteAchievement = (index, e) => {
    e.preventDefault();
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
  };

  const handleAchForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    // const achievementJson = { achievements_json: achievements };
    // console.log(achievementJson);
    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 6,
          achievements_json: achievements,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      console.log(data, achievements);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const [experience, setExperience] = useState([]);
  const [experienceForm, setExperienceForm] = useState({
    company_name: "",
    start_date: "",
    isPresent: false,
    end_date: "",
    designation: "",
  });

  const handleChange3 = (e) => {
    const { name, value, type, checked } = e.target;
    setExperienceForm({
      ...experienceForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (
      experienceForm.company_name &&
      experienceForm.start_date &&
      experienceForm.designation &&
      (experienceForm.isPresent || experienceForm.end_date)
    ) {
      setExperience([...experience, experienceForm]);
      setExperienceForm({
        company_name: "",
        start_date: "",
        isPresent: false,
        end_date: "",
        designation: "",
      });
    }
  };

  const handleDeleteExperience = (index, e) => {
    e.preventDefault();
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  };

  const handleExperienceForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    // const experienceJson = { experience_json: experience };
    // console.log(experienceJson);
    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 4,
          experience_json: experience,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      console.log(data, experienceForm);
      setIsComplete(true);
      setCurrStep((prevStep) => prevStep + 1);
      setIsComplete(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const [accInfo, setAccInfo] = useState({
    account_holder: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const response = await axios.post(
        "/experts/",
        {
          action: 5,
          account_holder: accInfo.account_holder,
          bank_name: accInfo.bank_name,
          account_number: accInfo.account_number,
          ifsc_code: accInfo.ifsc_code,
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
        console.log("Something went wrong");
        setIsLoading(false);
        return;
      }

      console.log(data, accInfo);
      try {
        const response = await axios.post(
          "/experts/",
          {
            action: 7,
            projects_json: [],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        if (
          !response.data ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          console.log("Something went wrong");
          setIsLoading(false);
          return;
        }
        console.log(response);
        setIsLoading(false);
        setAddProjectOpen(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      setIsComplete(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
    });
  }, [stepRef.current]);

  const calculateProgressBarWidth = () => {
    return (currStep / (CHECKOUT_STEPS.length - 1)) * 100;
  };

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [bannerLoading, setBannerLoading] = useState(false);

  if (!CHECKOUT_STEPS.length) return <></>;

  return (
    <div className="h-auto mt-[100px] bg-white">
      <div
        className={
          currStep === 2
            ? `md:w-[85%] mx-auto border border-solid border-gray-300`
            : `w-[95%] md:w-[60%] border border-solid border-gray-300 mx-auto`
        }
      >
        <>
          <div className="mx-5 relative overflow-x-scroll flex justify-between items-center gap-5 my-5 lg:mx-20">
            {CHECKOUT_STEPS.map((step, index) => (
              <div
                key={step.name}
                ref={(el) => (stepRef.current[index] = el)}
                className="flex flex-col shrink-0 items-center relative"
              >
                <div
                  className={`w-5 h-5 md:w-7 md:h-7 rounded-full bg-white flex items-center text-xs md:text-sm justify-center mb-1 z-10 border border-solid ${
                    currStep >= index || isComplete
                      ? "text-[#3E5676] border-[#3E5676]"
                      : "text-gray-400 border-gray-400"
                  } `}
                >
                  {currStep > index || isComplete ? "✔" : index + 1}
                </div>
                <div
                  className={`text-xs  shrink ${
                    currStep >= index ? "text-[#3E5676]" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </div>
              </div>
            ))}
          </div>
          <div className="h-[1px] w-full bg-gray-400 my-2"></div>
          {currStep === 0 && (
            <form onSubmit={handlePersonalInfo} className="flex flex-col">
              <div className="flex flex-col text-center mt-5 mb-8">
                <div className="text-3xl md:text-4xl font-bold text-[#3E5676]">
                  Sign Up as Expert
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  Provide accurate information to ensure proper record-keeping.
                </div>
              </div>
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
                <label htmlFor="gender" className="text-base md:text-lg mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={personalInfo.gender}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      gender: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="dob" className="text-base md:text-lg mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={personalInfo.dob}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Reset today's time to midnight

                    if (selectedDate > today) {
                      alert(
                        "Please enter a date that is not greater than today."
                      );
                      setPersonalInfo({ ...personalInfo, dob: "" }); // Reset the date input
                    } else {
                      const year = selectedDate.getFullYear();
                      const month = String(
                        selectedDate.getMonth() + 1
                      ).padStart(2, "0");
                      const day = String(selectedDate.getDate()).padStart(
                        2,
                        "0"
                      );
                      const formattedDate = `${year}-${month}-${day}`;
                      setPersonalInfo({
                        ...personalInfo,
                        dob: formattedDate,
                      });
                    }
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                />
                <label htmlFor="status" className="text-base md:text-lg">
                  Marital Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={personalInfo.status}
                  onChange={handleMaritalStatusChange}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
                {personalInfo.marital_status === "married" && (
                  <>
                    <label
                      htmlFor="anniversary_date"
                      className="text-base md:text-lg mb-1"
                    >
                      Anniversary Date
                    </label>
                    <input
                      type="date"
                      id="anniversary_date"
                      name="anniversary_date"
                      value={personalInfo.anniversary_date}
                      onChange={(e) => {
                        const selectedDate = new Date(e.target.value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0); // Reset today's time to midnight

                        if (selectedDate > today) {
                          alert(
                            "Please enter a date that is not greater than today."
                          );
                          setPersonalInfo({
                            ...personalInfo,
                            anniversary_date: "",
                          }); // Reset the date input
                        } else {
                          const year = selectedDate.getFullYear();
                          const month = String(
                            selectedDate.getMonth() + 1
                          ).padStart(2, "0");
                          const day = String(selectedDate.getDate()).padStart(
                            2,
                            "0"
                          );
                          const formattedDate = `${year}-${month}-${day}`;
                          setPersonalInfo({
                            ...personalInfo,
                            anniversary_date: formattedDate,
                          });
                        }
                      }}
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                    />
                  </>
                )}
                <div className="flex justify-around gap-5">
                  <div className="flex flex-col w-full">
                    <label htmlFor="profile" className="text-lg mb-1">
                      Profile Photo
                    </label>
                    <div
                      onClick={() =>
                        document.querySelector("#profileSelector").click()
                      }
                      className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
                    >
                      <input
                        type="file"
                        id="profileSelector"
                        accept="image/*"
                        onChange={onSelectFileProfile}
                        className="hidden"
                      />
                      {profileLoading ? (
                        <div className="flex w-full h-full items-center justify-center text-center">
                          <span>Loading...</span>
                        </div>
                      ) : myImageProfile ? (
                        <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                          <img
                            src={myImageProfile}
                            alt="Preview"
                            className="w-auto h-40 shrink-0 object-cover object-center m-2"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-600">
                          <FiUpload className="w-10 h-10" />
                          <span className="ml-2">Upload Image</span>
                        </div>
                      )}
                    </div>
                    <Modal
                      className="w-full h-full overflow-scroll"
                      show={showModalProfile}
                      onClose={closeModalProfile}
                    >
                      <ImageUploader
                        image={myImageProfile}
                        handleUploadImage={handleUploadImage}
                        filename="cropped_image.jpg"
                        onCropped={handleCroppedImageProfile}
                        aspectRatio={1} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
                      />
                    </Modal>
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="banner" className="text-lg mb-1">
                      Banner Photo
                    </label>
                    <div
                      onClick={() =>
                        document.querySelector("#bannerSelector").click()
                      }
                      className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
                    >
                      <input
                        type="file"
                        id="bannerSelector"
                        accept="image/*"
                        name="bannerSelector"
                        onChange={onSelectFileBackground}
                        className="hidden"
                      />
                      {bannerLoading ? (
                        <div className="flex w-full h-full items-center justify-center text-center">
                          <span>Loading...</span>
                        </div>
                      ) : myImageBackground ? (
                        <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                          <img
                            src={myImageBackground}
                            alt="Preview"
                            className="w-auto h-40 shrink-0 object-cover object-center m-2"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-600">
                          <FiUpload className="w-10 h-10" />
                          <span className="ml-2">Upload Image</span>
                        </div>
                      )}
                    </div>
                    <Modal
                      className="w-full h-full overflow-scroll"
                      show={showModalBackground}
                      onClose={closeModalBackground}
                    >
                      <ImageUploader
                        image={myImageBackground}
                        handleUploadImage={handleUploadImage}
                        filename="cropped_image.jpg"
                        onCropped={handleCroppedImageBackground}
                        aspectRatio={16 / 9} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
                      />
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  disabled={loading}
                  type="submit"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // This smooth scrolls to the top
                    })
                  }
                  className={`${
                    loading ? "cursor-not-allowed bg-gray-300" : ""
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 1 && (
            <form className="flex flex-col" onSubmit={handleGeneralInfo}>
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] my-5">
                <div className="flex justify-around gap-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="level"
                      className="text-base md:text-lg mb-1"
                    >
                      Level
                    </label>
                    <select
                      name="level"
                      id="level"
                      value={generalInfo.level}
                      onChange={(e) =>
                        setGeneralInfo({
                          ...generalInfo,
                          level: e.target.value,
                        })
                      }
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    >
                      <option value="basic">Beginner</option>
                      <option value="inter">Intermediate</option>
                      <option value="amateur">Amateur</option>
                      <option value="pro">Professional</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="years"
                      className="text-base md:text-lg mb-1 flex gap-1"
                    >
                      Experience{" "}
                      <div className="text-xs my-auto">(in years)</div>
                    </label>
                    <input
                      type="number"
                      id="years"
                      name="years"
                      required
                      value={generalInfo.experience_years}
                      onChange={(e) =>
                        setGeneralInfo({
                          ...generalInfo,
                          experience_years: e.target.value,
                        })
                      }
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                      placeholder="years"
                    />
                  </div>
                </div>
                <label
                  htmlFor="profession"
                  className="text-base md:text-lg mb-1"
                >
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  required
                  value={generalInfo.profession}
                  onChange={(e) =>
                    setGeneralInfo({
                      ...generalInfo,
                      profession: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Profession"
                />
                <label htmlFor="about" className="text-base md:text-lg mb-1">
                  About Me
                </label>
                <textarea
                  required
                  type="text"
                  id="about"
                  name="about"
                  onChange={(e) =>
                    setGeneralInfo({
                      ...generalInfo,
                      about_me: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                  placeholder="I want to learn css, html, python with django"
                  style={{ minWidth: "200px", maxWidth: "575px" }}
                />
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // This smooth scrolls to the top
                    })
                  }
                  className={`${
                    loading ? "cursor-not-allowed bg-gray-300" : ""
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 2 && (
            <form
              onSubmit={handleEducationForm}
              className="flex flex-col w-full"
            >
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
                  <label htmlFor="type" className="text-base md:text-lg mb-1">
                    Degree Type:
                  </label>
                  <input
                    type="text"
                    name="type"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Type"
                    value={educationForm.type}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="certificate"
                    className="text-base md:text-lg mb-1"
                  >
                    Course:
                  </label>
                  <input
                    type="text"
                    name="certificate"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Course"
                    value={educationForm.certificate}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="institute_name"
                    className="text-base md:text-lg mb-1"
                  >
                    Institute Name:
                  </label>
                  <input
                    type="text"
                    name="institute_name"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Institute Name"
                    value={educationForm.institute_name}
                    onChange={handleChange1}
                  />
                  <label htmlFor="city" className="text-base md:text-lg mb-1">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="City"
                    value={educationForm.city}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="state_name"
                    className="text-base md:text-lg mb-1"
                  >
                    State:
                  </label>
                  <input
                    type="text"
                    name="state_name"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="State Name"
                    value={educationForm.state_name}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="country"
                    className="text-base md:text-lg mb-1"
                  >
                    Country:
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Country"
                    value={educationForm.country}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="start_date"
                    className="text-base md:text-lg mb-1"
                  >
                    Start Date:
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    value={educationForm.start_date}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="end_date"
                    className="text-base md:text-lg mb-1"
                  >
                    End Date:
                  </label>
                  <input
                    type="date"
                    name="end_date"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    value={educationForm.end_date}
                    onChange={handleChange1}
                  />
                  <label
                    htmlFor="Division"
                    className="text-base md:text-lg mb-1"
                  >
                    Division:
                  </label>
                  <input
                    type="text"
                    name="division"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Division"
                    value={educationForm.division}
                    onChange={handleChange1}
                  />
                </div>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                    onClick={handleAddEducation}
                  >
                    <GoPlus size={22} /> Add Education
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto mx-10">
                <table className="w-full bg-white border border-solid border-gray-300 mb-5">
                  <thead>
                    <tr>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Type
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Certificate
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Institute Name
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        City
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        State
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Country
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Start Date
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        End Date
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300 border-r">
                        Division
                      </th>
                      <th className="p-2 border-solid border-b border-gray-300">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((edu, index) => (
                      <tr key={index} className="text-wrap">
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.type}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.certificate}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.institute_name}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.city}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.state_name}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.country}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.start_date}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.end_date}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          {edu.division}
                        </td>
                        <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                          <button
                            className="bg-white border border-solid border-black text-black p-2 rounded-sm"
                            onClick={(e) => handleDeleteEducation(index, e)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // This smooth scrolls to the top
                    })
                  }
                  className={`${
                    loading
                      ? "bg-gray-600 text-white py-2 px-4 w-full sm:w-auto rounded-sm cursor-not-allowed"
                      : "bg-inherit"
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 3 && (
            <form onSubmit={handleSkillForm} className="flex flex-col w-full">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
                  <label
                    htmlFor="techName"
                    className="text-base md:text-lg mb-1"
                  >
                    Technology:
                  </label>
                  <input
                    type="text"
                    id="techName"
                    name="techName"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Technology Name"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                  />
                  <label
                    htmlFor="ratings"
                    className="text-base md:text-lg mb-1"
                  >
                    Rating:
                  </label>
                  <input
                    type="number"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <div className="flex mb-4 sm:mb-6">
                    <button
                      className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                      onClick={addSkillForm}
                    >
                      <GoPlus size={22} /> Add Skill
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-solid border-gray-300 mb-5">
                    <thead>
                      <tr>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Technology
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Rating
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {skills.map((skill, index) => (
                        <tr key={index} className="text-wrap">
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {skill.technology_name}
                          </td>
                          <td className="py-2 px-4 border-b border-solid border-gray-300 border-r text-center break-words">
                            {skill.ratings}
                          </td>
                          <td className="py-2 px-4 border-b border-solid border-gray-300 border-r text-center break-words">
                            <button
                              className="bg-white border border-solid border-black text-black p-2"
                              onClick={(e) => handleDeleteSkill(index, e)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center md:justify-end mt-4 sm:mt-2">
                  <button
                    className={`${
                      loading
                        ? "bg-gray-600 text-white py-2 px-4 w-full sm:w-auto rounded-sm cursor-not-allowed"
                        : "bg-inherit"
                    } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 border border-solid border-gray-300 rounded-md shadow-md`}
                    onClick={handleSkillForm}
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
          {currStep === 4 && (
            <form onSubmit={handleAchForm} className="flex flex-col">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
                  <label htmlFor="name" className="text-base md:text-lg mb-1">
                    Achievement Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Achievement Name"
                    value={achievementForm.name}
                    onChange={handleChange2}
                  />
                  <label htmlFor="year" className="text-base md:text-lg mb-1">
                    Year:
                  </label>
                  <input
                    type="text"
                    name="year"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Year"
                    value={achievementForm.year}
                    onChange={handleChange2}
                  />
                  <label
                    htmlFor="certificate"
                    className="text-base md:text-lg mb-1"
                  >
                    Certificate:
                  </label>
                  <div
                    onClick={() =>
                      document.querySelector("#certificateSelector").click()
                    }
                    className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
                  >
                    <input
                      type="file"
                      name="certificateSelector"
                      id="certificateSelector"
                      accept="image/*"
                      className="hidden"
                      onChange={onSelectFileCertificate}
                    />
                    {certificateLoading ? (
                      <div className="flex w-full h-full items-center justify-center text-center">
                        <span>Loading...</span>
                      </div>
                    ) : myImageCertificate ? (
                      <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                        <img
                          src={myImageCertificate}
                          alt="Preview"
                          className="w-auto h-40 shrink-0 object-cover object-center m-2"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-600">
                        <FiUpload className="w-10 h-10" />
                        <span className="ml-2">Upload Image</span>
                      </div>
                    )}
                  </div>
                  <Modal
                    className="w-full h-full overflow-scroll"
                    show={showModalCertificate}
                    onClose={closeModalCertificate}
                  >
                    <ImageUploader
                      image={myImageCertificate}
                      handleUploadImage={handleUploadImage}
                      filename="cropped_image.jpg"
                      onCropped={handleCroppedImageCertificate}
                      aspectRatio={16 / 9} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
                    />
                  </Modal>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                    onClick={handleAddAchievement}
                  >
                    <GoPlus size={22} /> Add Achievement
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-solid border-gray-300 mb-5">
                    <thead>
                      <tr>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Name
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Year
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Certificate
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 ">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {achievements.map((achievement, index) => (
                        <tr key={index} className="text-wrap">
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {achievement.name}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {achievement.year}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {typeof achievement.certificate === "object" &&
                            achievement.certificate instanceof Blob ? (
                              <img
                                src={URL.createObjectURL(
                                  achievement.certificate
                                )}
                                alt="Certificate"
                                className="w-20 h-20 object-cover"
                              />
                            ) : (
                              // Handle the case where it's a string (existing logic)
                              <img
                                src={achievement.certificate}
                                alt="Certificate"
                                className="w-20 h-20 object-cover"
                              />
                            )}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            <button
                              className="bg-white text-black border border-solid border-black rounded-sm p-2"
                              onClick={(e) => handleDeleteAchievement(index, e)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  disabled={loading}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // This smooth scrolls to the top
                    })
                  }
                  className={`${
                    loading
                      ? "bg-gray-600 text-white py-2 px-4 w-full sm:w-auto rounded-sm cursor-not-allowed"
                      : "bg-inherit"
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 5 && (
            <form onSubmit={handleExperienceForm} className="flex flex-col">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
                  <label
                    htmlFor="company_name"
                    className="text-base md:text-lg mb-1"
                  >
                    Company Name:
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Company Name"
                    value={experienceForm.company_name}
                    onChange={handleChange3}
                  />
                  <label
                    htmlFor="designation"
                    className="text-base md:text-lg mb-1"
                  >
                    Designation:
                  </label>
                  <input
                    type="text"
                    name="designation"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    placeholder="Designation"
                    value={experienceForm.designation}
                    onChange={handleChange3}
                  />
                  <label
                    htmlFor="start_date"
                    className="text-base md:text-lg mb-1"
                  >
                    Start Date:
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    className="border border-solid border-slate-400 rounded-sm p-2"
                    value={experienceForm.start_date}
                    onChange={handleChange3}
                  />
                  <div className="flex flex-col sm:col-span-2">
                    <div className="flex items-center mb-4 justify-between">
                      <label
                        htmlFor="isPresent"
                        className="text-base md:text-lg mb-1"
                      >
                        Currently Working Here:
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          name="isPresent"
                          className="border p-2"
                          checked={experienceForm.isPresent}
                          onChange={handleChange3}
                        />
                        <label
                          htmlFor="isPresent"
                          className="text-base md:text-lg mb-1"
                        >
                          Yes
                        </label>
                      </div>
                    </div>

                    {!experienceForm.isPresent && (
                      <div className="flex items-center mb-4 justify-between">
                        <label
                          htmlFor="end_date"
                          className="text-base md:text-lg mb-1"
                        >
                          End Date:
                        </label>
                        <input
                          type="date"
                          name="end_date"
                          className="border border-solid border-slate-400 rounded-sm p-2 md:w-[229px]"
                          value={experienceForm.end_date}
                          onChange={handleChange3}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <button
                    className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                    onClick={handleAddExperience}
                  >
                    <GoPlus size={22} /> Add Experience
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-solid border-gray-300 mb-5">
                    <thead>
                      <tr>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Company Name
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Start Date
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          End Date
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300 border-r">
                          Designation
                        </th>
                        <th className="p-2 border-solid border-b border-gray-300">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {experience.map((exp, index) => (
                        <tr key={index} className="text-wrap">
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {exp.company_name}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {exp.start_date}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {exp.isPresent ? "Present" : exp.end_date}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            {exp.designation}
                          </td>
                          <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                            <button
                              className="bg-white text-black rounded-sm border border-solid border-black p-2"
                              onClick={(e) => handleDeleteExperience(index, e)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading
                      ? "bg-gray-600 text-white py-2 px-4 w-full sm:w-auto rounded-sm cursor-not-allowed"
                      : "bg-inherit"
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 6 && (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] my-5">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="holderName"
                    className="text-base md:text-lg mb-1"
                  >
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    id="holderName"
                    name="holderName"
                    required
                    value={accInfo.account_holder}
                    onChange={(e) =>
                      setAccInfo({ ...accInfo, account_holder: e.target.value })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Account Holder Name"
                  />
                  <label
                    htmlFor="bankName"
                    className="text-base md:text-lg mb-1"
                  >
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    required
                    value={accInfo.bank_name}
                    onChange={(e) =>
                      setAccInfo({ ...accInfo, bank_name: e.target.value })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Bank Name"
                  />
                  <label
                    htmlFor="accNumber"
                    className="text-base md:text-lg mb-1"
                  >
                    Account Number
                  </label>
                  <input
                    type="number"
                    id="accNumber"
                    name="accNumber"
                    required
                    value={accInfo.account_number}
                    onChange={(e) =>
                      setAccInfo({ ...accInfo, account_number: e.target.value })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Account Number"
                  />
                  <label htmlFor="ifsc" className="text-base md:text-lg mb-1">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    id="ifsc"
                    name="ifsc"
                    required
                    value={accInfo.ifsc_code}
                    onChange={(e) =>
                      setAccInfo({ ...accInfo, ifsc_code: e.target.value })
                    }
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="IFSC Code"
                  />
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  className={`${
                    loading
                      ? "cursor-not-allowed bg-gray-400 text-white"
                      : "bg-inherit "
                  }  cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-blue-500 rounded-md shadow-md border border-solid border-gray-300`}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </>
      </div>
    </div>
  );
};

export default SignUpAsExpert;
