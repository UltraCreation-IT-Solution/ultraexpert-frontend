import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CHECKOUT_STEPS = [
  { name: "Personal Details" },
  { name: "Skills" },
];

const SignUpAsCustomer = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

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

  const handleNext = (e) => {
    e.preventDefault();
    setIsComplete(true);
    setCurrStep((prevStep) => prevStep + 1);
    setIsComplete(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
    navigate("/");
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
    <div className="min-h-screen mt-[80px] bg-white">
      <div className="w-[60%] border border-solid border-gray-300 mx-auto">
        <>
          <div className="relative flex justify-between items-center my-5 mx-52">
            {CHECKOUT_STEPS.map((step, index) => (
              <div
                key={step.name}
                ref={(el) => (stepRef.current[index] = el)}
                className={`flex flex-col items-center relative ${
                  currStep > index || isComplete
                    ? "text-[#3E5676]"
                    : "text-gray-400"
                } ${currStep === index ? "text-[#3E5676]" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full bg-white flex items-center justify-center mb-1 z-10 border border-solid ${
                    currStep > index || isComplete
                      ? "border-[#3E5676]"
                      : "border-gray-400"
                  } `}
                >
                  {currStep > index || isComplete ? "✔" : index + 1}
                </div>
                <div className="text-xs">{step.name}</div>
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
            <form className="flex flex-col">
              <div className="flex flex-col text-center my-8">
                <div className="text-4xl font-bold text-[#3E5676]">
                  Sign Up as Customer
                </div>
                <div className="text-sm text-gray-500">
                  Provide accurate information to ensure proper record-keeping.
                </div>
              </div>
              <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
                <label htmlFor="status" className="text-lg mb-1">
                  Marital Status
                </label>
                <select
                  name="status"
                  id="status"
                  className="border border-solid border-gray-300 px-2 py-2 rounded-s-md w-full mb-4"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
                <label htmlFor="profession" className="text-lg mb-1">
                  Profession
                </label>
                <input
                  required
                  type="text"
                  id="profession"
                  name="profession"
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  placeholder="Profession"
                />
                <label htmlFor="about" className="text-lg mb-1">
                  About Me
                </label>
                <textarea
                  required
                  type="text"
                  id="about"
                  name="about"
                  className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                  placeholder="I want to learn css, html, python with django"
                />
              </div>
              <div className="flex justify-end mx-20 mb-8">
                <button
                  onClick={handleNext}
                  className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currStep === 1 && (
            <form className="flex flex-col">
              <div className="flex flex-col text-center my-8">
                <div className="text-4xl font-bold text-[#3E5676]">
                  Sign Up as Customer
                </div>
                <div className="text-sm text-gray-500">
                  Provide accurate information to ensure proper record-keeping.
                </div>
              </div>
              <div className="flex justify-center mx-auto flex-col w-[50%] mb-8">
                <label htmlFor="interests" className="text-lg mb-1">
                  Interests
                </label>
                <div className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4">
                  <div className="flex gap-2">
                    {selectedSkill.length > 0 ? (
                      selectedSkill.map((skill) => {
                        return (
                          <button
                            key={skill}
                            className="px-4 py-1 rounded-full bg-inherit border border-solid border-black"
                          >
                            {skill}
                          </button>
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
                        <button
                          key={ind}
                          onClick={(e) => {
                            e.preventDefault();
                            handleChange(skill.name);
                          }}
                          className="cursor-pointer px-4 py-1 text-nowrap rounded-full bg-inherit border border-solid border-[#c7c7c7] text-[#8D8D8D] bg-[#E8E8E8] flex justify-center items-center overflow-visible"
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mx-20 mb-8">
                <button
                  onClick={handleSubmit}
                  className=" cursor-pointer px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md"
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
