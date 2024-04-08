import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
const CHECKOUT_STEPS = [{ name: "Personal Details" }, { name: "Skills" }];

const SignUpAsCustomer = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const [personalInfo, setPersonalInfo] = useState({
    marital_status: "Single",
    profession: "",
    about_me: "",
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
        "/customers/",
        {
          action: 1,
          marital_status: personalInfo.marital_status,
          profession: personalInfo.profession,
          about_me: personalInfo.about_me,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
            // "X-CSRF-TOKEN": `${jsonData.csrf_token}`,
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
  const handlePrevious = (e) => {
    e.preventDefault();
    setIsComplete(true);
    setCurrStep((prevStep) => prevStep - 1);
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
            // "X-CSRF-TOKEN": `${jsonData.csrf_token}`,
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

  if (!CHECKOUT_STEPS.length) return <></>;

  return (
    <div className="h-screen mt-[100px] bg-white">
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
                <label htmlFor="status" className="text-base md:text-lg mb-1">
                  Marital Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={personalInfo.marital_status}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      marital_status: e.target.value,
                    })
                  }
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
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
                  value={personalInfo.profession}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      profession: e.target.value,
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
                    setPersonalInfo({
                      ...personalInfo,
                      about_me: e.target.value,
                    });
                  }}
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                  placeholder="I want to learn css, html, python with django"
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
          {currStep === 1 && (
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
                            className="px-4 py-1 text-nowrap text-xs md:text-sm rounded-full bg-inherit border border-solid border-black"
                          >
                            {skill}
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
              <div className="flex justify-center gap-4 md:justify-end md:mx-20 mb-8">
                <button
                  onClick={() => {
                    setCurrStep((prev) => prev - 1);
                  }}
                  className=" cursor-pointer px-6 py-2 text-base md:text-lg font-semibold text-white bg-gray-500 rounded-md shadow-md"
                >
                  Previous
                </button>
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
