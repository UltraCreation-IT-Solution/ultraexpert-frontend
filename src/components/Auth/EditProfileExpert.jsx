import React, { useEffect, useState, useRef } from "react";
import axios from "../../axios";
import {
  BiSolidCaretLeftSquare,
  BiSolidCaretRightSquare,
} from "react-icons/bi";
import { handleUploadImage } from "../../constant";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";
import { FiUpload } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const cookies = document.cookie.split("; ");
const jsonData = {};
cookies.forEach((item) => {
  const [key, value] = item.split("=");
  jsonData[key] = value;
});

const GeneralDetails = () => {
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalBackground, setShowModalBackground] = useState(false);
  const [myImageBackground, setMyImageBackground] = useState(null);
  const [myImageProfile, setMyImageProfile] = useState(null);

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

  const handleCroppedImageProfile = (url) => {
    console.log("Cropped image URL:", url);
    setShowModalProfile(false); // Close the modal after getting the URL
    setProfileLoading(false);
    setMyImageProfile(url); // Reset the image state
    setGeneralInfo({
      ...generalInfo,
      profile_img: url,
    });
  };
  const handleCroppedImageBackground = (url) => {
    console.log("Cropped image URL:", url);
    setShowModalBackground(false); // Close the modal after getting the URL
    setBannerLoading(false);
    setMyImageBackground(url); // Reset the image state
    setGeneralInfo({
      ...generalInfo,
      banner_img: url,
    });
  };
  const closeModalProfile = () => {
    setShowModalProfile(false);
    setProfileLoading(false);
    setMyImageProfile(generalInfo.profile_img); // Reset the image state when modal is closed
  };
  const closeModalBackground = () => {
    setShowModalBackground(false);
    setBannerLoading(false);
    setMyImageBackground(generalInfo.banner_img); // Reset the image state when modal is closed
  };

  const getGenInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data.data);
      setLoading(false);
      setGeneralInfo({
        ...generalInfo,
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
        mobile_number: response.data.data.mobile_number,
        marital_status: response.data.data.marital_status,
        profile_img: response.data.data.profile_img,
        banner_img: response.data.data.banner_img,
        gender: response.data.data.gender,
      });
      setMyImageProfile(response.data.data.profile_img);
      setMyImageBackground(response.data.data.banner_img);
      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenInfo();
  }, []);

  const [generalInfo, setGeneralInfo] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    marital_status: "Single",
    profile_img: "",
    banner_img: "",
    gender: "Male",
  });

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setLoading(true);
    try {
      const response = await axios.post(
        "/user_details/?action=1",
        {
          action: 1,
          first_name: generalInfo.first_name,
          last_name: generalInfo.last_name,
          mobile_number: generalInfo.mobile_number,
          marital_status: generalInfo.marital_status,
          profile_img: generalInfo.profile_img,
          gender: generalInfo.gender,
          banner_img: generalInfo.banner_img,
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
        return;
      }
      console.log(data, generalInfo);
      setLoading(false);
      localStorage.setItem("profile", generalInfo.profile_img);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [selectedProfileUrl, setSelectedProfileUrl] = useState(null);
  const [selectedBannerUrl, setSelectedBannerUrl] = useState(null);

  const [profileLoading, setProfileLoading] = useState(false);
  const [bannerLoading, setBannerLoading] = useState(false);

  console.log(generalInfo);
  return (
    <form onSubmit={handleSubmit1} className="grow flex flex-col h-full">
      {dataLoading ? (
        <>
          <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
            <label htmlFor="firstName" className="text-lg mb-1">
              First Name
            </label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              value={generalInfo.first_name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, first_name: e.target.value })
              }
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Enter your first name"
            />
            <label htmlFor="lastName" className="text-lg mb-1">
              Last Name
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={generalInfo.last_name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, last_name: e.target.value })
              }
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Enter your last name"
            />
            <div className="flex gap-4 justify-around">
              <div className="flex flex-col w-full">
                <label htmlFor="mobileNumber" className="text-lg mb-1">
                  Mobile Number
                </label>
                <input
                  required
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={generalInfo.mobile_number}
                  onChange={(e) =>
                    setGeneralInfo({
                      ...generalInfo,
                      mobile_number: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="gender" className="text-lg mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={generalInfo.gender}
                  onChange={(e) =>
                    setGeneralInfo({
                      ...generalInfo,
                      gender: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="status" className="text-lg mb-1">
                  Marital Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={generalInfo.marital_status}
                  onChange={(e) => {
                    setPersonalInfo({
                      ...generalInfo,
                      marital_status: e.target.value,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="basic">Single</option>
                  <option value="inter">Married</option>
                </select>
              </div>
            </div>
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
                    accept="image/*"
                    id="profileSelector"
                    name="profileSelector"
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
                    accept="image/*"
                    id="bannerSelector"
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
          <div className="flex justify-end mx-20 mb-8">
            <button
              type="submit"
              className={
                loading
                  ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
                  : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
              }
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      )}
    </form>
  );
};

const PersonalDetails = () => {
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const getPerInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data.data);
      setLoading(false);
      setPersonalInfo({
        ...personalInfo,
        level: response.data.data.level,
        profession: response.data.data.profession,
        about_me: response.data.data.about_me,
        experience_years: response.data.data.experience_years,
      });
      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerInfo();
  }, []);

  const [personalInfo, setPersonalInfo] = useState({
    level: "Basic",
    profession: "",
    about_me: "",
    experience_years: "",
  });
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    setLoading(true);
    try {
      const response = await axios.post(
        "/experts/update/",
        {
          action: 1,
          level: personalInfo.level,
          profession: personalInfo.profession,
          about_me: personalInfo.about_me,
          experience_years: personalInfo.experience_years,
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
      console.log(data);
      setLoading(false);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit2} className="grow flex flex-col h-full">
      {dataLoading ? (
        <>
          <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
            <div className="flex justify-around gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="experience" className="flex gap-1 text-lg mb-1">
                  Experience <div className="text-xs my-auto">(in years)</div>
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  required
                  value={personalInfo.experience_years}
                  onChange={(e) => {
                    setPersonalInfo({
                      ...personalInfo,
                      experience_years: e.target.value,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Experience"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="level" className="text-lg mb-1">
                  Level
                </label>
                <select
                  name="level"
                  id="level"
                  value={personalInfo.level}
                  onChange={(e) => {
                    setPersonalInfo({
                      ...personalInfo,
                      level: e.target.value,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                >
                  <option value="basic">Basic</option>
                  <option value="inter">Intermediate</option>
                  <option value="amateur">Amateur</option>
                  <option value="pro">Professional</option>
                </select>
              </div>
            </div>

            <label htmlFor="profession" className="text-lg mb-1">
              Profession
            </label>
            <input
              type="text"
              id="profession"
              name="profession"
              required
              value={personalInfo.profession}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  profession: e.target.value,
                });
              }}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
              placeholder="Profession"
            />

            <label htmlFor="about" className="text-lg mb-1">
              About
            </label>
            <textarea
              required
              type="text"
              id="about"
              name="about"
              value={personalInfo.about_me}
              onChange={(e) => {
                setPersonalInfo({
                  ...personalInfo,
                  about_me: e.target.value,
                });
              }}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full min-h-20 shrink-0 mb-4"
              placeholder="I want to learn css, html, python with django"
            />
          </div>
          <div className="flex justify-end mx-20 mb-8">
            <button
              type="submit"
              className={
                loading
                  ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
                  : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
              }
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      )}
    </form>
  );
};

const EducationDetails = () => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(false);

  const [dataLoading, setDataLoading] = useState(false);

  const getEduInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data.data.education);
      setEducation(response.data.data.education);
      setLoading(false);

      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEduInfo();
  }, []);

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
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/experts/update/",
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
    <form onSubmit={handleSubmit3} className="flex flex-col w-full">
      {dataLoading ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      ) : (
        <>
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
              <label htmlFor="state_name" className="text-base md:text-lg mb-1">
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
              <label htmlFor="country" className="text-base md:text-lg mb-1">
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
              <label htmlFor="start_date" className="text-base md:text-lg mb-1">
                Start Date:
              </label>
              <input
                type="date"
                name="start_date"
                className="border border-solid border-slate-400 rounded-sm p-2"
                value={educationForm.start_date}
                onChange={handleChange1}
              />
              <label htmlFor="end_date" className="text-base md:text-lg mb-1">
                End Date:
              </label>
              <input
                type="date"
                name="end_date"
                className="border border-solid border-slate-400 rounded-sm p-2"
                value={educationForm.end_date}
                onChange={handleChange1}
              />
              <label htmlFor="Division" className="text-base md:text-lg mb-1">
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
                {education?.map((edu, index) => (
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
        </>
      )}
    </form>
  );
};

const SkillDetails = () => {
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [skillForms, setSkillForms] = useState({
    technology_name: "",
    ratings: "",
  });

  const getSkillInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(response.data.data);
      const skillData = response.data.data.skills;
      console.log(skillData);
      setSkill(skillData);
      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSkillInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillForms({
      ...skillForms,
      [name]: value,
    });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillForms.technology_name && skillForms.ratings) {
      setSkill([...skill, skillForms]);
      setSkillForms({ technology_name: "", ratings: "" });
    }
  };

  const handleDeleteSkill = (index, e) => {
    e.preventDefault();
    const newSkills = skill.filter((_, i) => i !== index);
    setSkill(newSkills);
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const skillJson = { skill_json: skill };
      const response = await axios.post(
        "/experts/update/",
        {
          action: 3,
          skill_json: skillJson,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data, skill);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(skill);
  return (
    <form onSubmit={handleSubmit4} className="grow h-full flex flex-col">
      {!dataLoading ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      ) : (
        <>
          <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
              <label htmlFor="techName" className="text-base md:text-lg mb-1">
                Technology Name:
              </label>
              <input
                type="text"
                name="technology_name"
                className="border border-solid border-slate-400 rounded-sm p-2"
                placeholder="Technology Name"
                value={skillForms.technology_name}
                onChange={handleChange}
              />
              <label htmlFor="rating" className="text-base md:text-lg mb-1">
                Rating:
              </label>
              <input
                type="number"
                name="ratings"
                className="border border-solid border-slate-400 rounded-sm p-2"
                placeholder="Ratings (1-5)"
                value={skillForms.ratings}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mb-4 sm:mb-6">
              <button
                className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
            </div>
          </div>
          <div className="overflow-x-auto mx-10">
            <table className="w-full bg-white border border-solid border-gray-300 mb-5">
              <thead>
                <tr>
                  <th className="p-2 border-solid border-b border-gray-300 border-r">
                    Technology Name
                  </th>
                  <th className="p-2 border-solid border-b border-gray-300 border-r">
                    Ratings
                  </th>
                  <th className="p-2 border-solid border-b border-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {skill?.map((s, index) => (
                  <tr key={index} className="text-wrap">
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      {s.technology_name}
                    </td>
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      {s.ratings}
                    </td>
                    <td className="p-2 border-b border-solid border-gray-300 text-center break-words">
                      <button
                        className="bg-white border border-solid border-black text-black p-2 rounded-sm"
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
          <div className="flex justify-end mx-20 mb-8">
            <button
              type="submit"
              className={
                loading
                  ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
                  : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
              }
            >
              Update
            </button>
          </div>
        </>
      )}
    </form>
  );
};

const AchDetails = () => {
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [achievement, setAchievement] = useState([]);
  const [achievementForm, setAchievementForm] = useState({
    name: "",
    year: "",
    certificate: "",
  });

  const [imageLoading, setImageLoading] = useState(false);
  const [myImage, setMyImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const onSelectFile = (event) => {
    setImageLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setMyImage(reader.result);
        setShowModal(true); // Show the modal when an image is selected
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleCroppedImage = (url) => {
    console.log("Cropped image URL:", url);
    setShowModal(false);
    setImageLoading(false);
    setMyImage(url); // Reset the image state
    setAchievement({ ...achievement, certificate: url });
  };
  const closeModal = () => {
    setShowModal(false);
    setImageLoading(false);
    setMyImage(achievement.certificate); // Reset the image state when modal is closed
  };

  const getAchForm = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log(data);
        return;
      }
      console.log(response.data.data);
      setLoading(false);
      const achData = response.data.data.achievements;
      console.log(achData);
      setAchievement(achData);
      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAchForm();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievementForm({
      ...achievementForm,
      [name]: value,
    });
  };

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (
      achievementForm.name &&
      achievementForm.year &&
      achievementForm.certificate
    ) {
      setAchievement([...achievement, achievementForm]);
      setAchievementForm({
        name: "",
        year: "",
        certificate: "",
      });
    }
  };

  const handleDeleteAchievement = (index, e) => {
    e.preventDefault();
    const newAchievements = achievement.filter((_, i) => i !== index);
    setAchievement(newAchievements);
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const achievementJson = { achievements_json: achievement };
    try {
      const response = await axios.post(
        "/experts/update/",
        {
          action: 7,
          achievements_json: achievementJson,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        console.log(data.message);
        return;
      }
      console.log(data, achievement);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit4} className="grow h-full flex flex-col">
      {!dataLoading ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      ) : (
        <>
          {/* <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                addAchForm();
              }}
              className="underline cursor-pointer text-gray-400 bg-inherit hover:text-gray-700"
            >
              + Add Achievment
            </button>
            {achForms.map((form, ind) => (
              <>
                <div key={form.id} className="flex justify-between">
                  <p className="font-bold text-lg">Achievement {ind + 1}</p>
                  <button
                    onClick={() => removeAchForm(form.id)}
                    className="underline cursor-pointer text-red-400 bg-inherit hover:text-red-600"
                  >
                    - Remove Achievement
                  </button>
                </div>
                <label htmlFor={`name${form.id}`} className="text-lg mb-1">
                  Achievement Name
                </label>
                <input
                  type="text"
                  id={`name${form.id}`}
                  name={`name${form.id}`}
                  value={achInfo.name[ind]}
                  onChange={(e) => {
                    const updatedTechNames = [...achInfo.name];
                    updatedTechNames[ind] = e.target.value;
                    setAchInfo({
                      ...achInfo,
                      name: updatedTechNames,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Achievement Name"
                />
                <label htmlFor={`year${form.id}`} className="text-lg mb-1">
                  Achievement Year
                </label>
                <input
                  type="number"
                  id={`year${form.id}`}
                  name={`year${form.id}`}
                  value={achInfo.year[ind]}
                  onChange={(e) => {
                    const updatedRatings = [...achInfo.year];
                    updatedRatings[ind] = e.target.value;
                    setAchInfo({
                      ...achInfo,
                      year: updatedRatings,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4 w-full"
                  placeholder="Enter Year"
                />
                <label
                  className="text-lg mb-1 flex gap-1"
                  htmlFor={`certificate${form.id}`}
                >
                  Certificate
                </label>
                <div
                  className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
                  onClick={() =>
                    document.querySelector(`#certificate${form.id}`).click()
                  }
                >
                  <input
                    type="file"
                    name={`certificate${form.id}`}
                    id={`certificate${form.id}`}
                    className="hidden"
                    onChange={(e) => handleCertificateChange(e, ind)}
                    aria-label="Upload certificate for achievement"
                  />
                  {imageLoading ? (
                    <div className="flex w-full h-full items-center justify-center text-center">
                      <span>Loading...</span>
                    </div>
                  ) : selectedCertificate[ind] ? (
                    <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                      <img
                        src={selectedCertificate[ind]}
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
              </>
            ))}
          </div> */}
          <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] mb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:my-6">
              <label htmlFor="name" className="text-base md:text-lg mb-1">
                Achievement Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-solid border-slate-400 rounded-sm p-2"
                placeholder="Achievement Name"
                value={achievementForm.name}
                onChange={handleChange}
              />
              <label htmlFor="year" className="text-base md:text-lg mb-1">
                Year:
              </label>
              <input
                type="number"
                name="year"
                id="year"
                className="border border-solid border-slate-400 rounded-sm p-2"
                placeholder="Year"
                value={achievementForm.year}
                onChange={handleChange}
              />
              <label
                htmlFor="certificate"
                className="text-base md:text-lg mb-1"
              >
                Certificate:
              </label>
              <input
                type="text"
                name="type"
                accept="image/*"
                className="border border-solid border-slate-400 rounded-sm p-2"
                onChange={onSelectFile}
              />
              {imageLoading ? (
                <div className="flex w-full h-full items-center justify-center text-center">
                  <span>Loading...</span>
                </div>
              ) : myImage ? (
                <div className="w-full max-w-sm mx-auto shrink-0 p-2 py-4 flex justify-center items-center">
                  <img
                    src={myImage}
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
            <Modal show={showModal} onClose={closeModal}>
              <ImageUploader
                image={myImage}
                handleUploadImage={handleUploadImage}
                filename="cropped_image.jpg"
                onCropped={handleCroppedImage}
                aspectRatio={1} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
              />
            </Modal>
            <div className="flex justify-center mb-4 sm:mb-6">
              <button
                className="flex items-center gap-1 btnBlack text-white p-2 w-full sm:w-auto rounded-sm"
                onClick={handleAddAchievement}
              >
                <GoPlus size={22} /> Add Achievement
              </button>
            </div>
          </div>
          <div className="overflow-x-auto mx-10">
            <table className="w-full bg-white border border-solid border-gray-300 mb-5">
              <thead>
                <tr>
                  <th className="p-2 border-solid border-b border-gray-300 border-r">
                    Achievement Name
                  </th>
                  <th className="p-2 border-solid border-b border-gray-300 border-r">
                    Year
                  </th>
                  <th className="p-2 border-solid border-b border-gray-300 border-r">
                    Certificate
                  </th>
                  <th className="p-2 border-solid border-b border-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {achievement?.map((a, index) => (
                  <tr key={index} className="text-wrap">
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      {a.name}
                    </td>
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      {a.year}
                    </td>
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      <img
                        src={a.certificate}
                        alt="Certificate"
                        className="w-20 h-20 object-cover"
                      />
                    </td>
                    <td className="p-2 border-b border-solid border-gray-300 border-r text-center break-words">
                      <button
                        className="bg-white border border-solid border-black text-black p-2 rounded-sm"
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
          <div className="flex justify-end mx-20 mb-8">
            <button
              type="submit"
              className={
                loading
                  ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
                  : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
              }
            >
              Update
            </button>
          </div>
        </>
      )}
    </form>
  );
};

const ExperienceDetails = () => {
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState([]);

  const [experienceForms, setExperienceForms] = useState({
    company_name: "",
    start_date: "",
    isPresent: false,
    end_date: "",
    designation: "",
  });

  const getExpInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data);
        return;
      }
      console.log(response.data.data);
      const expData = response.data.data.experience;
      console.log(expData);

      setExperienceForms(expData.map((form, index) => ({ id: index + 1 })));

      const updatedCompName = [];
      const updatedStartDate = [];
      const updatedEndDate = [];
      const updatedDesignation = [];

      expData.forEach((form) => {
        updatedCompName.push(form.company_name);
        updatedStartDate.push(form.start_date);
        updatedEndDate.push(form.is_present ? "" : form.end_date);
        updatedDesignation.push(form.designation);
      });

      setExpInfo({
        company_name: updatedCompName,
        start_date: updatedStartDate,
        end_date: updatedEndDate,
        designation: updatedDesignation,
      });
      setDataLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getExpInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperienceForms({
      ...experienceForms,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (
      experienceForms.company_name &&
      experienceForms.start_date &&
      experienceForms.designation &&
      (experienceForms.isPresent || experienceForms.end_date)
    ) {
      setExperience([...experience, experienceForms]);
      setExperienceForms({
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

  const handleSubmit6 = async (e) => {
    e.preventDefault();
    setLoading(true);
    const experienceJson = { experience_json: experience };
    try {
      // const response = await fetch("http://localhost:8000/experts/update/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 5,
      //     experience_json: [
      //       {
      //         company_name: expInfo.company_name,
      //         start_date: expInfo.start_date,
      //         end_date: expInfo.end_date,
      //         designation: expInfo.designation,
      //       },
      //     ],
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);

      const response = await axios.post(
        "/experts/update/",
        {
          action: 4,
          experience_json: experienceJson,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data, experience);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [dataLoading, setDataLoading] = useState(false);

  return (
    <form onSubmit={handleSubmit6} className="flex flex-col grow h-full">
      {!dataLoading ? (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          Data Loading...
        </div>
      ) : (
        <>
          {/* <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                addExperienceForm();
              }}
              className="underline cursor-pointer text-gray-400 bg-inherit hover:text-gray-700"
            >
              + Add Experience
            </button>
            {experienceForms.map((form, ind) => (
              <>
                <div key={form.id} className="flex justify-between">
                  <p className="font-bold text-lg">Experience {ind + 1}</p>
                  <button
                    onClick={() => removeExpForm(form.id)}
                    className="underline cursor-pointer text-red-400 bg-inherit hover:text-red-600"
                  >
                    - Remove Experience
                  </button>
                </div>
                <label htmlFor={`company${form.id}`} className="text-lg mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id={`company${form.id}`}
                  name={`company${form.id}`}
                  value={expInfo.company_name[ind]}
                  onChange={(e) => {
                    const updatedCompany = [...expInfo.company_name];
                    updatedCompany[ind] = e.target.value;
                    setExpInfo({
                      ...expInfo,
                      company_name: updatedCompany,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Company Name"
                />
                <div className="flex justify-around gap-5">
                  <div className="flex flex-col w-full">
                    <label htmlFor={`start${form.id}`} className="text-lg mb-1">
                      Start Year
                    </label>
                    <input
                      type="date"
                      id={`start${form.id}`}
                      name={`start${form.id}`}
                      value={expInfo.start_date[ind]}
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                      onChange={(e) => {
                        const selectedDate = new Date(e.target.value);
                        const year = selectedDate.getFullYear();
                        const month = String(
                          selectedDate.getMonth() + 1
                        ).padStart(2, "0");
                        const day = String(selectedDate.getDate()).padStart(
                          2,
                          "0"
                        );
                        const formattedDate = `${year}-${month}-${day}`;
                        const updatedStartDate = [...expInfo.start_date];
                        updatedStartDate[ind] = formattedDate;
                        setExpInfo({
                          ...expInfo,
                          start_date: updatedStartDate,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor={`end${form.id}`} className="text-lg mb-1">
                      End Year
                    </label>
                    <input
                      type="date"
                      id={`end${form.id}`}
                      name={`end${form.id}`}
                      value={expInfo.end_date[ind]}
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                      onChange={(e) => {
                        const selectedDate = new Date(e.target.value);
                        const year = selectedDate.getFullYear();
                        const month = String(
                          selectedDate.getMonth() + 1
                        ).padStart(2, "0");
                        const day = String(selectedDate.getDate()).padStart(
                          2,
                          "0"
                        );
                        const formattedDate = `${year}-${month}-${day}`;
                        const updatedEndDate = [...expInfo.end_date];
                        updatedEndDate[ind] = formattedDate;
                        setExpInfo({
                          ...expInfo,
                          end_date: updatedEndDate,
                        });
                      }}
                    />
                  </div>
                </div>
                <label
                  htmlFor={`designtaion${form.id}`}
                  className="text-lg mb-1"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id={`designtaion${form.id}`}
                  name={`designtaion${form.id}`}
                  value={expInfo.designation[ind]}
                  onChange={(e) => {
                    const updatedDesignation = [...expInfo.designation];
                    updatedDesignation[ind] = e.target.value;
                    setExpInfo({
                      ...expInfo,
                      designation: updatedDesignation,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Designtaion"
                />
              </>
            ))}
          </div> */}
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
                id="company_name"
                className="border border-solid border-slate-400 rounded-sm p-2"
                placeholder="Company Name"
                value={experienceForms.company_name}
                onChange={handleChange}
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
                value={experienceForms.designation}
                onChange={handleChange}
              />
              <label htmlFor="start_date" className="text-base md:text-lg mb-1">
                Start Date:
              </label>
              <input
                type="date"
                name="start_date"
                className="border border-solid border-slate-400 rounded-sm p-2"
                value={experienceForms.start_date}
                onChange={handleChange}
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
                      checked={experienceForms.isPresent}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="isPresent"
                      className="text-base md:text-lg mb-1"
                    >
                      Yes
                    </label>
                  </div>
                </div>

                {!experienceForms.isPresent && (
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
                      className="border border-solid border-slate-400 rounded-sm p-2 md:w-[250px]"
                      value={experienceForms.end_date}
                      onChange={handleChange}
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
          <div className="flex justify-end mx-20 mb-8">
            <button
              type="submit"
              className={
                loading
                  ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
                  : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
              }
            >
              Update
            </button>
          </div>
        </>
      )}
    </form>
  );
};

const AccDetails = () => {
  const [accInfo, setAccInfo] = useState({
    account_holder: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit7 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    setLoading(true);
    try {
      // const response = await fetch("http://localhost:8000/experts/update/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 6,
      //     account_holder: accInfo.account_holder,
      //     bank_name: accInfo.bank_name,
      //     account_number: accInfo.account_number,
      //     ifsc_code: accInfo.ifsc_code,
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);
      const response = await axios.post(
        "/experts/update/",
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
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(data, accInfo);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAccInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      setLoading(false);
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(response.data.data);
      setAccInfo({
        ...accInfo,
        account_holder: response.data.data.account_holder,
        bank_name: response.data.data.bank_name,
        account_number: response.data.data.account_number,
        ifsc_code: response.data.data.ifsc_code,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccInfo();
  }, []);

  return (
    <form onSubmit={handleSubmit7} className="flex flex-col grow h-full">
      <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
        <div className="flex flex-col w-full">
          <label htmlFor="holderName" className="text-lg mb-1">
            Account Holder Name
          </label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            required
            value={accInfo.account_holder}
            onChange={(e) => setAccInfo({ account_holder: e.target.value })}
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Account Holder Name"
          />
          <label htmlFor="bankName" className="text-lg mb-1">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            required
            value={accInfo.bank_name}
            onChange={(e) => setAccInfo({ bank_name: e.target.value })}
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Bank Name"
          />
          <label htmlFor="accNumber" className="text-lg mb-1">
            Account Number
          </label>
          <input
            type="number"
            id="accNumber"
            name="accNumber"
            required
            value={accInfo.account_number}
            onChange={(e) => setAccInfo({ account_number: e.target.value })}
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="Account Number"
          />
          <label htmlFor="ifsc" className="text-lg mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifsc"
            name="ifsc"
            required
            value={accInfo.ifsc_code}
            onChange={(e) => setAccInfo({ ifsc_code: e.target.value })}
            className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            placeholder="IFSC Code"
          />
        </div>
      </div>
      <div className="flex justify-end mx-20 mb-8">
        <button
          type="submit"
          className={
            loading
              ? `px-6 py-2 text-gray-300 rounded-md font-semibold bg-inherit`
              : `cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`
          }
        >
          Update
        </button>
      </div>
    </form>
  );
};

const EditProfileExpert = () => {
  const categoryRef = useRef(null);
  const [currStep, setCurrStep] = useState(0);
  const scrollLeft = () => {
    categoryRef.current.scrollBy({
      left: -150, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    categoryRef.current.scrollBy({
      left: 150, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="h-auto bg-white w-[68%]">
      <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
        Update Profile
      </div>
      <div className=" w-full flex md:flex-col border border-solid border-slate-300 mx-auto rounded-sm mt-5">
        <div className="flex h-full justify-between w-full items-center px-2">
          <BiSolidCaretLeftSquare
            className=" shrink-0 border border-slate-300 border-solid mx-2"
            size={32}
            onClick={scrollLeft}
          />
          <div
            ref={categoryRef}
            className=" w-full flex bg-white justify-start overflow-x-scroll"
          >
            <button
              className={`w-fit shrink-0 text-sm md:text-base py-1 px-2 border-b border-solid border-slate-300 ${
                currStep === 0 ? " bg-white" : "bg-inherit text-black"
              }`}
            >
              <div
                onClick={() => setCurrStep(0)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 0 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Personal Details
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300 ${
                currStep === 1 ? " bg-white" : "bg-inherit text-black "
              }`}
            >
              <div
                onClick={() => setCurrStep(1)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 1 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                General Details
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300 ${
                currStep === 2 ? " bg-white" : "bg-inherit text-black "
              }`}
            >
              <div
                onClick={() => setCurrStep(2)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 2 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Education
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300 ${
                currStep === 3 ? "bg-white" : "bg-inherit text-black "
              }`}
            >
              <div
                onClick={() => setCurrStep(3)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 3 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Skill Set
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300  ${
                currStep === 4 ? "bg-white" : "bg-inherit text-black"
              }`}
            >
              <div
                onClick={() => setCurrStep(4)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 4 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Achievements
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300  ${
                currStep === 5 ? "bg-white" : "bg-inherit text-black"
              }`}
            >
              <div
                onClick={() => setCurrStep(5)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 5 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Experience
              </div>
            </button>
            <button
              className={`w-fit shrink-0 text-sm md:text-base p-5 border-b border-solid border-slate-300  ${
                currStep === 6 ? "bg-white" : "bg-inherit text-black"
              }`}
            >
              <div
                onClick={() => setCurrStep(6)}
                className={`px-3 py-2 text-black rounded-md font-semibold cursor-pointer ${
                  currStep === 6 ? "bg-[#ececec]" : "bg-white"
                }`}
              >
                Account Details
              </div>
            </button>
          </div>
          <BiSolidCaretRightSquare
            className=" h-full left-0 shrink-0 border border-slate-300 border-solid mx-2"
            size={32}
            onClick={scrollRight}
          />
        </div>
        {currStep === 0 && <GeneralDetails />}
        {currStep === 1 && <PersonalDetails />}
        {currStep === 2 && <EducationDetails />}
        {currStep === 3 && <SkillDetails />}
        {currStep === 4 && <AchDetails />}
        {currStep === 5 && <ExperienceDetails />}
        {currStep === 6 && <AccDetails />}
      </div>
    </div>
  );
};

export default EditProfileExpert;
