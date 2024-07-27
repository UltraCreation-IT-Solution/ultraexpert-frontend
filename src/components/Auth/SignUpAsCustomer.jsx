import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { handleUploadImage } from "../../constant";
import ImageUploader from "../../ImageUploader";
import Modal from "../../Modal";
import { FiUpload } from "react-icons/fi";

const CHECKOUT_STEPS = [
  { name: "Personal Details" },
  { name: "General Details" },
  { name: "Skills" },
];

const SignUpAsCustomer = () => {
  const [currStep, setCurrStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [myImage, setMyImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const onSelectFile = (event) => {
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
    setShowModal(false); // Close the modal after getting the URL
    setMyImage(url); // Reset the image state
    setPersonalInfo({ ...personalInfo, profile_img: url });
  };
  const closeModal = () => {
    setShowModal(false);
    setMyImage(null); // Reset the image state when modal is closed
  };

  const updatePersonalInfo = async (e) => {
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
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log(data, personalInfo);
      localStorage.setItem("isExpert", `false`);
      localStorage.setItem("isCustomer", `true`);
      localStorage.setItem("profile", `${personalInfo.profile_img}`);
      handleNext();
    } catch (error) {
      console.log(error.message);
      setLoading(false);
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

    setLoading(true);
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
          },
        }
      );
      const data = response.data;
      localStorage.setItem("customer_id", `${response.data.customer_id}`);
      if (!data) {
        console.log("Something went wrong");
        setLoading(false);
        return;
      }

      setLoading(false);
      console.log(data, generalInfo);
      handleNext();
    } catch (error) {
      console.log(error.message);
      setLoading(false);
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
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSuggestions(
      interest.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (suggestion) => {
    // Add suggestion to selected skills
    if (!selectedSkill.includes(suggestion.name)) {
      setSelectedSkill([...selectedSkill, suggestion.name]);
      console.log(selectedSkill);
    }
    // Clear input and suggestions
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemove = (skill) => {
    setSelectedSkill(selectedSkill.filter((s) => s !== skill));
  };

  const handleNewSkillAdd = (value) => {
    if (!selectedSkill.includes(value)) {
      setSelectedSkill([...selectedSkill, value]);
    }
    setInputValue("");
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
    setLoading(true);
    try {
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
        setLoading(false);
        return;
      }

      setLoading(false);
      console.log(data, selectedSkill);
      alert("Profile created successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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

  // const [selectedProfile, setSelectedProfile] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  if (!CHECKOUT_STEPS.length) return <></>;

  return (
    <div className="h-auto mt-[100px] bg-white">
      <div className="w-[95%] md:w-[60%] border border-solid border-gray-300 mx-auto">
        <>
          <div className="relative flex justify-between items-center my-5 mx-12 lg:mx-40">
            {CHECKOUT_STEPS.map((step, index) => (
              <div
                key={step.name}
                x
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
                      setPersonalInfo({ ...personalInfo, dob: formattedDate });
                    }
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
                              const day = String(
                                selectedDate.getDate()
                              ).padStart(2, "0");
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
                  <input
                    type="file"
                    accept="image/*"
                    id="profileSelector"
                    name="profileSelector"
                    onChange={onSelectFile}
                    className="hidden"
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
                <Modal
                  className="w-full h-full overflow-scroll"
                  show={showModal}
                  onClose={closeModal}
                >
                  <ImageUploader
                    image={myImage}
                    handleUploadImage={handleUploadImage}
                    filename="cropped_image.jpg"
                    onCropped={handleCroppedImage}
                    aspectRatio={9 / 16} // Change this to 1 for square, 16/9 for landscape, or 9/16 for portrait
                  />
                </Modal>
              </div>
              <div className="flex justify-center gap-4 md:justify-end md:mx-20 mb-8">
                <button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : ""
                  } cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`}
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
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : ""
                  } cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md`}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 2 && (
            <form onSubmit={handleInterests} className="flex flex-col">
              <div className="flex justify-center mx-auto flex-col w-[90%] md:w-[75%] lg:w-[65%] my-5">
                <label htmlFor="interests" className="text-lg mb-1 font-bold">
                  Inetrests
                </label>
                <div className="border border-solid border-gray-300 px-2 rounded-md mb-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.length > 0 ? (
                      selectedSkill.map((skill, ind) => {
                        return (
                          <div
                            key={ind}
                            className="flex gap-2 px-4 py-1 text-sm rounded-full bg-inherit border border-solid border-black my-2"
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
                <input
                  type="text"
                  id="interests"
                  value={inputValue}
                  onChange={handleChange}
                  className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none"
                  placeholder="Enter your interests"
                />
                {suggestions.length > 0
                  ? inputValue.length > 0 && (
                      <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                        <div>
                          {suggestions.map((suggestion, ind) => (
                            <div
                              key={suggestion.id}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="cursor-pointer hover:bg-gray-100 px-4 py-1"
                            >
                              {suggestion.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  : inputValue.length > 0 && (
                      <button
                        onClick={() => handleNewSkillAdd(inputValue)}
                        className="border border-solid border-slate-300 p-2 text-sm rounded-md focus:outline-none bg-green-500 text-white w-[30%] mt-2"
                      >
                        Add Interest
                      </button>
                    )}
              </div>
              <div className="flex justify-center md:justify-end md:mx-20 mb-8">
                <button
                  type="submit"
                  className={`${
                    loading ? "bg-blue-300 cursor-not-allowed" : ""
                  } cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md`}
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
