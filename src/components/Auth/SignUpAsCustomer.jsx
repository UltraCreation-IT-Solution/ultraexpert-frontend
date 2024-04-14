import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { BsUpload, BsX } from "react-icons/bs";
import { imageDB } from "../firebase/config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

const CHECKOUT_STEPS = [
  { name: "Personal Details" },
  { name: "General Details" },
  { name: "Skills" },
];

const SignUpAsCustomer = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const [personalInfo, setPersonalInfo] = useState({
    marital_status: "Single",
    anniversary_date: "",
    dob: "",
    gender: "Male",
    profile_img: "",
  });

  const updatePersonalInfo = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    console.log(jsonData);
    // console.log(cookies.csrf_token);
    try {
      // const res = await fetch("http://localhost:8000/customers/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 1,
      //     marital_status: personalInfo.marital_status,
      //     profession: personalInfo.profession,
      //     about_me: personalInfo.about_me,
      //   }),
      //   credentials: "include",
      // });
      // const json = await res.json();
      // console.log(json);

      const response = await axios.post(
        "/user_details/",
        {
          action: 1,
          marital_status: personalInfo.marital_status,
          anniversary_date: personalInfo.anniversary_date,
          dob: personalInfo.dob,
          gender: personalInfo.gender,
          profile_img: personalInfo.profile_img,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
            // "X-CSRF-TOKEN": ${jsonData.csrf_token},
          },
        }
      );
      const data = response.data;
      if (!data) {
        console.log("Something went wrong");
        return;
      }
      console.log(data, personalInfo);
      handleNext();
    } catch (error) {
      console.log(error.message);
    }
  };

  const [generalInfo, setGeneralInfo] = useState({
    about_me: "",
    profession: "",
  });

  const handleMaritalStatusChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      marital_status: e.target.value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    try {
      const response = await axios.post(
        "/customers/",
        {
          action: 1,
          about_me: generalInfo.about_me,
          profession: generalInfo.profession,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
            // "X-CSRF-TOKEN": ${jsonData.csrf_token},
          },
        }
      );
      const data = response.data;
      if (!data) {
        console.log("Something went wrong");
        return;
      }
      console.log(data, generalInfo);
      handleNext();
    } catch (error) {
      console.log(error.message);
    }
  };

  const interest = [
    { id: 1, name: "Python" },
    { id: 2, name: "C++" },
    { id: 3, name: "Django" },
    { id: 4, name: "HTML" },
    { id: 5, name: "CSS" },
    { id: 6, name: "JS" },
    { id: 7, name: "React JS" },
  ];

  const [selectedSkill, setSelectedSkill] = useState([]);

  const handleChange = (skill) => {
    if (!selectedSkill.includes(skill)) {
      setSelectedSkill([...selectedSkill, skill]);
    }
  };

  const navigate = useNavigate();
  const stepRef = useRef([]);

  const handleNext = () => {
    setIsComplete(true);
    setCurrStep((prevStep) => prevStep + 1);
    setIsComplete(false);
  };

  const handleInterests = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      // const res = await fetch("http://localhost:8000/customers/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 2,
      //     interest_list:selectedSkill
      //   }),
      //   credentials: "include",
      // });
      // const json = await res.json();
      const response = await axios.post(
        "/customers/",
        { action: 2, interest_list: selectedSkill },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
            // "X-CSRF-TOKEN": ${jsonData.csrf_token},
          },
        }
      );
      // console.log(json);
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(data, selectedSkill);
      alert("Profile created successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  useEffect(() => {
    if (stepRef.current && stepRef.current.length > 0) {
      setMargin({
        marginLeft: stepRef.current[0]?.offsetWidth / 2 || 0,
        marginRight:
          stepRef.current[stepRef.current.length - 1]?.offsetWidth / 2 || 0,
      });
    }
  }, [stepRef.current]);

  const calculateProgressBarWidth = () => {
    return (currStep / (CHECKOUT_STEPS.length - 1)) * 100;
  };

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [uploadProfileProgress, setUploadProfileProgress] = useState(0);

  const handleProfileChange = async (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      const imgRef = ref(imageDB, `UltraXpertImgFiles/${v4()}`);
      const uploadTask = uploadBytesResumable(imgRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get upload progress as a percentage
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProfileProgress(progress);
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
        setPersonalInfo({
          ...personalInfo,
          profile_img: url, // Store the image data in an array
        });
      } catch (error) {
        console.error("Error uploading image: ", error);
        // Handle error if needed
      }
      reader.onload = () => {
        setSelectedProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfile = () => {
    setSelectedProfile(null);
  };

  if (!CHECKOUT_STEPS.length) return <></>;

  return (
    <div className="h-auto mt-[100px] bg-white">
      <div className="w-[95%] md:w-[60%] border border-solid border-gray-300 mx-auto">
        <>
          <div className="relative flex justify-between items-center my-5 mx-12 lg:mx-40">
            {CHECKOUT_STEPS.map((step, index) => (
              <div
                key={step.name}
                ref={(el) => (stepRef.current[index] = el)}
                className="flex flex-col items-center relative"
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
                  className={`text-xs  ${
                    currStep >= index ? "text-[#3E5676]" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </div>
              </div>
            ))}
            <div
              className="absolute top-1/4 left-0 h-[1px] bg-gray-400"
              style={{
                width: `calc(100% - ${
                  margin.marginLeft + margin.marginRight
                }px)`,
                marginLeft: `${margin.marginLeft}px`,
                marginRight: `${margin.marginRight}px`,
              }}
            >
              <div
                className="h-full bg-[#3E5676] transition-all duration-500 ease-in"
                style={{ width: `${calculateProgressBarWidth()}%` }}
              ></div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 my-2"></div>
          {currStep === 0 && (
            <form onSubmit={updatePersonalInfo} className="flex flex-col">
              <div className="flex flex-col text-center my-5 md:my-8">
                <div className="text-3xl md:text-4xl font-bold text-[#3E5676]">
                  Sign Up as Customer
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
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
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
                    const year = selectedDate.getFullYear();
                    const month = String(selectedDate.getMonth() + 1).padStart(
                      2,
                      "0"
                    );
                    const day = String(selectedDate.getDate()).padStart(2, "0");
                    const formattedDate = `${year}-${month}-${day}`;
                    setPersonalInfo({
                      ...personalInfo,
                      dob: formattedDate,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                />
                <div className="flex justify-around gap-5">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="status"
                      className="text-base md:text-lg mb-1"
                    >
                      Marital Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      value={personalInfo.marital_status}
                      onChange={handleMaritalStatusChange}
                      className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
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
                          }}
                          className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                        />
                      </>
                    )}
                  </div>
                </div>

                <label htmlFor="profile" className="text-lg mb-1">
                  Profile Photo
                </label>
                <div
                  onClick={() =>
                    document.querySelector("#profileSelector").click()
                  }
                  className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-[50%] mx-auto cursor-pointer rounded-lg"
                >
                  {uploadProfileProgress > 0 && uploadProfileProgress < 100 && (
                    <p>Upload Progress: {uploadProfileProgress}%</p>
                  )}
                  {selectedProfile ? (
                    <div className="relative">
                      <img
                        src={selectedProfile}
                        alt="Selected Profile"
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      <div
                        onClick={handleRemoveProfile}
                        className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                      >
                        <BsX
                          size={20}
                          className="text-white text-xl drop-shadow-sm bg-black border border-solid border-white rounded-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      {uploadProfileProgress === 0 && (
                        <>
                          <BsUpload size={20} />
                          <div className="text-sm text-[#1475cf] mt-2">
                            Click here to upload a profile photo
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    id="profileSelector"
                    name="profileSelector"
                    onChange={handleProfileChange}
                    className="hidden"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4 md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 1 && (
            <form className="flex flex-col" onSubmit={handleSubmit2}>
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] my-5">
                <label
                  htmlFor="profession"
                  className="text-base md:text-lg mb-1"
                >
                  Profession
                </label>
                <input
                  required
                  type="text"
                  id="profession"
                  name="profession"
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
                  type="text"
                  id="about"
                  name="about"
                  onChange={(e) => {
                    setGeneralInfo({
                      ...generalInfo,
                      about_me: e.target.value,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                  placeholder="I want to learn css, html, python with django"
                  style={{ minWidth: "200px", maxWidth: "575px" }}
                />
              </div>
              <div className="flex justify-center gap-4 md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 2 && (
            <form onSubmit={handleInterests} className="flex flex-col">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] my-5">
                <label
                  htmlFor="interests"
                  className="text-base md:text-lg mb-1"
                >
                  Interests
                </label>
                <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                  <div className="flex flex-wrap gap-3">
                    {selectedSkill.length > 0 ? (
                      selectedSkill.map((skill) => {
                        return (
                          <div
                            key={skill}
                            className="flex gap-2 px-4 py-1 text-sm rounded-full bg-inherit border border-solid border-black"
                          >
                            {skill}
                            <div
                              className="cursor-pointer"
                              onClick={() => handleRemove(skill)}
                            >
                              x
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-gray-300 text-sm">
                        Select skills of your interest from below.
                      </p>
                    )}
                  </div>
                </div>
                <div className="border border-solid border-slate-200 px-4 py-2 rounded-md mb-4">
                  <div className="flex flex-wrap justifty-around gap-3">
                    {interest.map((skill, ind) => {
                      return (
                        <div
                          key={ind}
                          onClick={() => {
                            handleChange(skill.name);
                          }}
                          className="cursor-pointer px-4 py-1 text-nowrap text-xs md:text-sm rounded-full bg-inherit border border-solid border-[#c7c7c7] text-[#8D8D8D] bg-[#E8E8E8] flex justify-center items-center overflow-visible"
                        >
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  className=" cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md"
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

export default SignUpAsCustomer;
