import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const EditProfileExpert = () => {
  const navigate = useNavigate();

  const [currStep, setCurrStep] = useState(0);

  const [generalInfo, setGeneralInfo] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
  });

  const handleSubmit1 = async (e) => {
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
        "/user_details/?action=1",
        {
          action: 1,
          first_name: generalInfo.first_name,
          last_name: generalInfo.last_name,
          mobile_number: generalInfo.mobile_number,
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
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const [personalInfo, setPersonalInfo] = useState({
    gender: "Male",
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
    try {
      // const response = await fetch("http://localhost:8000/experts/update/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 2,
      //     level: personalInfo.level,
      //     profession: personalInfo.profession,
      //     about_me: personalInfo.about_me,
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);
      const response = await axios.post(
        "/experts/update/",
        {
          action: 2,
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
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const [educationForms, setEducationForms] = useState([{ id: 1 }]);

  const addEducationForm = () => {
    const newId = educationForms.length + 1;
    setEducationForms([...educationForms, { id: newId }]);
    setEduInfo((prevEduInfo) => ({
      ...prevEduInfo,
      type: [...prevEduInfo.type, ""],
      institute_name: [...prevEduInfo.institute_name, ""],
      city: [...prevEduInfo.city, ""],
      passing_year: [...prevEduInfo.passing_year, ""],
      Devision: [...prevEduInfo.Devision, ""],
    }));
  };

  const [eduInfo, setEduInfo] = useState({
    type: [],
    institute_name: [],
    city: [],
    state_name: [],
    country: ["India"],
    passing_year: [],
    Devision: ["First"],
  });

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    console.log(jsonData);
    try {
      // const response = await fetch("http://localhost:8000/experts/update/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 3,
      //     education_json: [
      //       {
      //         type: eduInfo.type,
      //         institute_name: eduInfo.institute_name,
      //         city: eduInfo.city,
      //         state_name: eduInfo.state_name,
      //         country: eduInfo.country,
      //         passing_year: eduInfo.passing_year,
      //         Devision: eduInfo.devision,
      //       },
      //     ],
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);
      const educationData = educationForms.map((form, index) => ({
        type: eduInfo.type[index],
        institute_name: eduInfo.institute_name[index],
        city: eduInfo.city[index],
        state_name: eduInfo.state_name[index],
        country: eduInfo.country[index],
        passing_year: eduInfo.passing_year[index],
        Devision: eduInfo.Devision[index],
      }));
      const response = await axios.post(
        "/experts/update/",
        {
          action: 3,
          education_json: educationData,
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
      console.log(data,educationData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedSkill, setSelectedSkill] = useState({
    technology_name: [],
    ratings: [],
  });

  const [skillForms, setSkillForms] = useState([{ id: 1 }]);

  const addSkillForm = () => {
    const newId = skillForms.length + 1;
    setSkillForms([...skillForms, { id: newId }]);
    setSkillInfo((prevSkillInfo) => ({
      ...prevSkillInfo,
      technology_name: [...prevSkillInfo.technology_name, ""],
      ratings: [...prevSkillInfo.ratings, ""],
    }));
  };
  const handleSubmit4 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      // const response = await fetch("http://localhost:8000/experts/update/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     action: 4,
      //     skill_json: [
      //       {
      //         technology_name: selectedSkill.technology_name,
      //         ratings: selectedSkill.ratings,
      //       },
      //     ],
      //   }),
      //   credentials: "include",
      // });
      // const json = await response.json();
      // console.log(json);
      const skillData = skillForms.map((form, index) => ({
        technology_name: skillInfo.technology_name[index],
        ratings: skillInfo.ratings[index],
      }));
      const response = await axios.post(
        "/experts/update/",
        {
          action: 4,
          skill_json: skillData,
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
      console.log(data,skillData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const [expInfo, setExpInfo] = useState({
    company_name: [],
    start_date: ["2019-jan-01"],
    end_date: ["2019-feb-01"],
    designation: [],
  });

  const [experienceForms, setExperienceForms] = useState([{ id: 1 }]);

  const addExperienceForm = () => {
    const newId = experienceForms.length + 1;
    setExperienceForms([...experienceForms, { id: newId }]);
    setExpInfo((prevExpInfo) => ({
      ...prevExpInfo,
      company_name: [...prevExpInfo.company_name, ""],
      start_date: [...prevExpInfo.start_date, ""],
      end_date: [...prevExpInfo.end_date, ""],
      designation: [...prevExpInfo.designation, ""],
    }));
  };
  const handleSubmit5 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
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
      const experienceData = experienceForms.map((form, index) => ({
        company_name: expInfo.company_name[index],
        start_date: expInfo.start_date[index],
        end_date: expInfo.end_date[index],
        designation: expInfo.designation[index],
      }));
      const response = await axios.post(
        "/experts/update/",
        {
          action: 5,
          experience_json: experienceData,
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
      console.log(data,experienceData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const [accInfo, setAccInfo] = useState({
    account_holder: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  });
  const handleSubmit6 = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
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
          action: 6,
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
        alert(data.message);
        return;
      }
      console.log(data,accInfo);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-white mt-[200px]">
      <div className="w-[50%] flex border border-solid border-slate-300 mx-auto rounded-lg shadow-lg">
        <div className="w-1/4 flex flex-col bg-white justify-start border-r border-solid border-slate-300">
          <button
            onClick={() => setCurrStep(0)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 0
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            General Details
          </button>
          <button
            onClick={() => setCurrStep(1)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 1
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Personal Details
          </button>
          <button
            onClick={() => setCurrStep(2)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 2
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setCurrStep(3)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 3
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Skill Set
          </button>
          <button
            onClick={() => setCurrStep(4)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 4
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setCurrStep(5)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 5
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Account Details
          </button>
        </div>
        {currStep === 0 && (
          <form onSubmit={handleSubmit1} className="grow flex flex-col h-full">
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
              <label htmlFor="mobileNumber" className="text-lg mb-1">
                Mobile Number
              </label>
              <input
                required
                type="number"
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
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 1 && (
          <form onSubmit={handleSubmit2} className="grow flex flex-col h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              <div className="flex justify-around gap-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="gender" className="text-lg mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={personalInfo.gender}
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        gender: e.target.value,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
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
              <div className="flex justify-around gap-5">
                <div className="flex flex-col w-full">
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
                </div>
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
              </div>
              <label htmlFor="about" className="text-lg mb-1">
                About Me
              </label>
              <textarea
                required
                type="text"
                id="about"
                name="about"
                onChange={(e) => {
                  setPersonalInfo({
                    ...personalInfo,
                    about: e.target.value,
                  });
                }}
                className="border border-solid border-gray-300 px-2 py-2 rounded-md w-full mb-4"
                placeholder="I want to learn css, html, python with django"
              />
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 2 && (
          <form
            onSubmit={handleSubmit3}
            className="grow h-full flex flex-col overflow-y-scroll"
          >
            <div className="flex justify-center mx-auto flex-col w-[50%] my-8">
              {educationForms.map((form, ind) => (
                <>
                  <div key={form.id} className="flex justify-between">
                    <p className="font-bold text-lg">Education {ind + 1}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addEducationForm();
                      }}
                      className="underline cursor-pointer text-gray-400 bg-inherit"
                    >
                      + Add Education
                    </button>
                  </div>
                  <label
                    htmlFor={`institute${form.id}`}
                    className="text-lg mb-1"
                  >
                    Institute Name
                  </label>
                  <input
                    type="text"
                    id={`institute${form.id}`}
                    name={`institute${form.id}`}
                    value={eduInfo.institute_name[ind]}
                    onChange={(e) => {
                      const updatedInstituteNames = [
                        ...eduInfo.institute_name,
                      ];
                      updatedInstituteNames[ind] = e.target.value;
                      setEduInfo({
                        ...eduInfo,
                        institute_name: updatedInstituteNames,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Institute Name"
                  />
                  <div className="flex justify-around gap-5">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`type${form.id}`}
                        className="text-lg mb-1"
                      >
                        Type
                      </label>
                      <input
                        type="text"
                        id={`type${form.id}`}
                        name={`type${form.id}`}
                        value={eduInfo.type[ind]}
                        onChange={(e) => {
                          const updatedType = [...eduInfo.type];
                          updatedType[ind] = e.target.value;
                          setEduInfo({ ...eduInfo, type: updatedType });
                        }}
                        className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                        placeholder="Type"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`passing${form.id}`}
                        className="text-lg mb-1"
                      >
                        Passing Year
                      </label>
                      <input
                          type="text"
                          id={`passing${form.id}`}
                          name={`passing${form.id}`}
                          value={eduInfo.passing_year[ind]}
                          onChange={(e) => {
                            const updatedPassingYear = [
                              ...eduInfo.passing_year,
                            ];
                            updatedPassingYear[ind] = e.target.value;
                            setEduInfo({
                              ...eduInfo,
                              passing_year: updatedPassingYear,
                            });
                          }}
                          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                          placeholder="Passing Year"
                        />
                    </div>
                  </div>
                  <div className="flex justify-around gap-5">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`city${form.id}`}
                        className="text-lg mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id={`city${form.id}`}
                        name={`city${form.id}`}
                        value={eduInfo.city[ind]}
                        onChange={(e) => {
                          const updatedCityName = [...eduInfo.city];
                          updatedCityName[ind] = e.target.value;
                          setEduInfo({ ...eduInfo, city: updatedCityName });
                        }}
                        className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                        placeholder="City"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`state${form.id}`}
                        className="text-lg mb-1"
                      >
                        State
                      </label>
                      <input
                          type="text"
                          id={`state${form.id}`}
                          name={`state${form.id}`}
                          value={eduInfo.state_name[ind]}
                          onChange={(e) => {
                            const updatedStateName = [...eduInfo.state_name];
                            updatedStateName[ind] = e.target.value;
                            setEduInfo({
                              ...eduInfo,
                              state_name: updatedStateName,
                            });
                          }}
                          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                          placeholder="State"
                        />
                    </div>
                  </div>
                  <div className="flex justify-around gap-5">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`country${form.id}`}
                        className="text-lg mb-1"
                      >
                        Country
                      </label>
                      <select
                        name={`country${form.id}`}
                        id={`country${form.id}`}
                        value={eduInfo.country[ind]}
                        onChange={(e) => {
                          const updatedCountryNames = [...eduInfo.country];
                          updatedCountryNames[ind] = e.target.value;
                          setEduInfo({
                            ...eduInfo,
                            country: updatedCountryNames,
                          });
                        }}
                        className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                      >
                        <option value="United States">United States</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antartica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegowina">
                          Bosnia and Herzegowina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo">
                          Congo, the Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                        <option value="Croatia">Croatia (Hrvatska)</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="France Metropolitan">
                          France, Metropolitan
                        </option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard and McDonald Islands">
                          Heard and Mc Donald Islands
                        </option>
                        <option value="Holy See">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran (Islamic Republic of)</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Democratic People's Republic of Korea">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint LUCIA</option>
                        <option value="Saint Vincent">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">
                          Slovakia (Slovak Republic)
                        </option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="Span">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Helena">St. Helena</option>
                        <option value="St. Pierre and Miguelon">
                          St. Pierre and Miquelon
                        </option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard">
                          Svalbard and Jan Mayen Islands
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syrian Arab Republic</option>
                        <option value="Taiwan">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Viet Nam</option>
                        <option value="Virgin Islands (British)">
                          Virgin Islands (British)
                        </option>
                        <option value="Virgin Islands (U.S)">
                          Virgin Islands (U.S.)
                        </option>
                        <option value="Wallis and Futana Islands">
                          Wallis and Futuna Islands
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor={`division${form.id}`}
                        className="text-lg mb-1"
                      >
                        Division
                      </label>
                      <select
                        name={`division${form.id}`}
                        id={`division${form.id}`}
                        value={eduInfo.devision}
                        onChange={(e) => {
                          const updatedDivisionNames = [...eduInfo.Devision];
                          updatedDivisionNames[ind] = e.target.value;
                          setEduInfo({
                            ...eduInfo,
                            Devision: updatedDivisionNames,
                          });
                        }}
                        className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                      >
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                        <option value="forth">Forth</option>
                      </select>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 3 && (
          <form onSubmit={handleSubmit4} className="grow h-full flex flex-col">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              {skillForms.map((form, ind) => (
                <>
                  <div key={form.id} className="flex justify-between">
                    <p className="font-bold text-lg">Skill {ind + 1}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addSkillForm();
                      }}
                      className="underline cursor-pointer text-gray-400 bg-inherit"
                    >
                      + Add Skill
                    </button>
                  </div>
                  <label
                    htmlFor={`technology${form.id}`}
                    className="text-lg mb-1"
                  >
                    Technology Name
                  </label>
                  <input
                    type="text"
                    id={`technology${form.id}`}
                    name={`technology${form.id}`}
                    value={selectedSkill.technology_name}
                    onChange={(e) => {
                      const updatedTechNames = [...skillInfo.technology_name];
                      updatedTechNames[ind] = e.target.value;
                      setSkillInfo({
                        ...skillInfo,
                        technology_name: updatedTechNames,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                    placeholder="Technology Name"
                  />
                  <label htmlFor={`rating${form.id}`} className="text-lg mb-1">
                    Rating
                  </label>
                  <input
                    type="number"
                    id={`rating${form.id}`}
                    name={`rating${form.id}`}
                    value={selectedSkill.ratings}
                    onChange={(e) => {
                      const updatedRatings = [...skillInfo.ratings];
                      updatedRatings[ind] = e.target.value;
                      setSkillInfo({
                        ...skillInfo,
                        ratings: updatedRatings,
                      });
                    }}
                    className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4 w-[50%]"
                    placeholder="1"
                  />
                </>
              ))}
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 4 && (
          <form onSubmit={handleSubmit5} className="flex flex-col grow h-full">
            <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
              {experienceForms.map((form, ind) => (
                <>
                  <div key={form.id} className="flex justify-between">
                    <p className="font-bold text-lg">Experience {ind + 1}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addExperienceForm();
                      }}
                      className="underline cursor-pointer text-gray-400 bg-inherit"
                    >
                      + Add Experience
                    </button>
                  </div>
                  <label htmlFor={`company${form.id}`} className="text-lg mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id={`company${form.id}`}
                    name={`company${form.id}`}
                    value={expInfo.company_name}
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
                      <label
                        htmlFor={`start${form.id}`}
                        className="text-lg mb-1"
                      >
                        Start Year
                      </label>
                      <input
                        type="text"
                        id={`start${form.id}`}
                        name={`start${form.id}`}
                        value={expInfo.start_date[ind]}
                        className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                        pattern="\d{4}-\d{2}-\d{2}"
                        onChange={(e) => {
                          const updatedStartDate = [...expInfo.start_date];
                          updatedStartDate[ind] = e.target.value;
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
                        type="text"
                        id={`end${form.id}`}
                        name={`end${form.id}`}
                        value={expInfo.end_date[ind]}
                        pattern="\d{4}-\d{2}-\d{2}"
                          className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
                          onChange={(e) => {
                            const updatedEndDate = [...expInfo.end_date];
                            updatedEndDate[ind] = e.target.value;
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
            </div>
            <div className="flex justify-end mx-20 mb-8">
              <button
                type="submit"
                className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {currStep === 5 && (
          <form onSubmit={handleSubmit6} className="flex flex-col grow h-full">
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
                  onChange={(e) =>
                    setAccInfo({ account_holder: e.target.value })
                  }
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
                  onChange={(e) =>
                    setAccInfo({ account_number: e.target.value })
                  }
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
                className=" cursor-pointer px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfileExpert;
