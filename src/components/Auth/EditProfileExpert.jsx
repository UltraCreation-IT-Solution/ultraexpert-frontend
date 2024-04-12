import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { BsUpload, BsX } from "react-icons/bs";

const cookies = document.cookie.split("; ");
const jsonData = {};
cookies.forEach((item) => {
  const [key, value] = item.split("=");
  jsonData[key] = value;
});

const GeneralDetails = () => {
  const getGenInfo = async () => {
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
      setGeneralInfo({
        ...generalInfo,
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
        mobile_number: response.data.data.mobile_number,
        dob: response.data.data.dob,
        marital_status: response.data.data.marital_status,
        profile_img: response.data.data.profile_img,
        banner_img: response.data.data.banner_img,
        gender: response.data.data.gender,
      });
      console.log(generalInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenInfo();
  }, []);

  const [generalInfo, setGeneralInfo] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    dob: "",
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
    console.log(jsonData);
    try {
      const response = await axios.post(
        "/user_details/?action=1",
        {
          action: 1,
          first_name: generalInfo.first_name,
          last_name: generalInfo.last_name,
          mobile_number: generalInfo.mobile_number,
          dob: generalInfo.dob,
          marital_status: generalInfo.marital_status,
          profile_img: selectedProfile,
          gender: generalInfo.gender,
          banner_img: selectedBanner,
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

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const handleProfileChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedProfile(reader.result);
        setPersonalInfo({
          ...personalInfo,
          profile_img: [reader.result], // Store the image data in an array
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedBanner(reader.result);
        setPersonalInfo({
          ...personalInfo,
          banner_img: [reader.result], // Store the image data in an array
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfile = () => {
    setSelectedProfile(null);
  };
  const handleRemoveBanner = () => {
    setSelectedBanner(null);
  };

  return (
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
        <div className="flex gap-4 justify-around">
          <div className="flex flex-col w-full">
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
        </div>

        <div className="flex justify-around gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="dob" className="text-lg mb-1">
              Date of Birth
            </label>
            <input
              name="dob"
              id="dob"
              value={generalInfo.dob}
              type="text"
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="YYYY-MM-DD"
              onChange={(e) => {
                setPersonalInfo({
                  ...generalInfo,
                  dob: e.target.value,
                });
              }}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4"
            />
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
              onClick={() => document.querySelector("#profileSelector").click()}
              className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
            >
              {selectedProfile ? (
                <div className="relative">
                  <img
                    src={selectedProfile}
                    alt="Selected Profile"
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div
                    onClick={handleRemoveProfile}
                    className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                  >
                    <BsX />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <BsUpload size={20} />
                  <div className="text-sm text-[#1475cf] mt-2">
                    Click here to upload a profile photo
                  </div>
                </div>
              )}
              <input
                type="file"
                id="profileSelector"
                accept="image/*"
                onChange={handleProfileChange}
                className="hidden"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="banner" className="text-lg mb-1">
              Banner Photo
            </label>
            <div
              onClick={() => document.querySelector("#bannerSelector").click()}
              className="flex flex-col justify-center items-center border border-dashed border-[#1475cf] h-[200px] w-full cursor-pointer rounded-lg"
            >
              {selectedProfile ? (
                <div className="relative">
                  <img
                    src={selectedBanner}
                    alt="Selected Banner"
                    className="w-28 h-28 object-cover rounded-lg"
                  />
                  <div
                    onClick={handleRemoveBanner}
                    className="cursor-pointer absolute top-0 right-0 bg-inherit text-white rounded-full p-1"
                  >
                    <BsX />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <BsUpload size={20} />
                  <div className="text-sm text-[#1475cf] mt-2">
                    Click here to upload a banner photo
                  </div>
                </div>
              )}
              <input
                type="file"
                id="bannerSelector"
                accept="image/*"
                onChange={handleBannerChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
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
  );
};

const PersonalDetails = () => {
  const getPerInfo = async () => {
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
      setPersonalInfo({
        ...personalInfo,
        level: response.data.data.level,
        profession: response.data.data.profession,
        about_me: response.data.data.about_me,
        experience_years: response.data.data.experience_years,
      });
    } catch (error) {
      console.log(error);
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
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit2} className="grow flex flex-col h-full">
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
          About Me
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
  );
};

const EducationDetails = () => {
  const [educationForms, setEducationForms] = useState([]);

  const addEducationForm = () => {
    setEducationForms([...educationForms, { id: educationForms.length + 1 }]);
  };

  const getEduInfo = async () => {
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
      const eduData = response.data.data.education;
      console.log(eduData);

      setEducationForms(eduData.map((form, index) => ({ id: index + 1 })));

      const updatedTypes = [];
      const updatedInstituteNames = [];
      const updatedCities = [];
      const updatedStateNames = [];
      const updatedCountries = [];
      const updatedPassingYears = [];
      const updatedDivisions = [];

      // Populate the arrays with data from the server
      eduData.forEach((form) => {
        updatedTypes.push(form.type);
        updatedInstituteNames.push(form.institute_name);
        updatedCities.push(form.city);
        updatedStateNames.push(form.state_name);
        updatedCountries.push(form.country);
        updatedPassingYears.push(form.passing_year);
        updatedDivisions.push(form.Division);
      });

      // Update the state once with all the arrays
      setEduInfo({
        type: updatedTypes,
        institute_name: updatedInstituteNames,
        city: updatedCities,
        state_name: updatedStateNames,
        country: updatedCountries,
        passing_year: updatedPassingYears,
        Devision: updatedDivisions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEduInfo();
  }, []);

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
      console.log(data, educationData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const removeEducationForm = (idToRemove) => {
    const updatedEducationForms = educationForms.filter(
      (form) => form.id !== idToRemove
    );
    setEducationForms(updatedEducationForms);
    setEduInfo((prevEduInfo) => {
      const updatedType = [...prevEduInfo.type];
      const updatedInstituteName = [...prevEduInfo.institute_name];
      const updatedCity = [...prevEduInfo.city];
      const updatedCountry = [...prevEduInfo.country];
      const updatedPassingYear = [...prevEduInfo.passing_year];
      const updatedDevision = [...prevEduInfo.Devision];

      updatedType.splice(idToRemove - 1, 1);
      updatedInstituteName.splice(idToRemove - 1, 1);
      updatedCity.splice(idToRemove - 1, 1);
      updatedCountry.splice(idToRemove - 1, 1);
      updatedPassingYear.splice(idToRemove - 1, 1);
      updatedDevision.splice(idToRemove - 1, 1);

      return {
        ...prevEduInfo,
        type: updatedType,
        institute_name: updatedInstituteName,
        city: updatedCity,
        country: updatedCountry,
        passing_year: updatedPassingYear,
        Devision: updatedDevision,
      };
    });
  };

  return (
    <form
      onSubmit={handleSubmit3}
      className="grow h-full flex flex-col overflow-y-scroll"
    >
      <div className="flex justify-center mx-auto flex-col w-[50%] my-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            addEducationForm();
          }}
          className="underline cursor-pointer text-gray-400 bg-inherit"
        >
          + Add Education
        </button>
        {educationForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Education {ind + 1}</p>
              <button
                onClick={() => removeEducationForm(form.id)}
                className="underline cursor-pointer text-red-400 bg-inherit"
              >
                - Remove Education
              </button>
            </div>
            <label htmlFor={`institute${form.id}`} className="text-lg mb-1">
              Institute Name
            </label>
            <input
              type="text"
              id={`institute${form.id}`}
              name={`institute${form.id}`}
              value={eduInfo.institute_name[ind]}
              onChange={(e) => {
                const updatedInstituteNames = [...eduInfo.institute_name];
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
                <label htmlFor={`type${form.id}`} className="text-lg mb-1">
                  Degree Type
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
                <label htmlFor={`passing${form.id}`} className="text-lg mb-1">
                  Passing Year
                </label>
                <input
                  type="text"
                  id={`passing${form.id}`}
                  name={`passing${form.id}`}
                  value={eduInfo.passing_year[ind]}
                  onChange={(e) => {
                    const updatedPassingYear = [...eduInfo.passing_year];
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
                <label htmlFor={`city${form.id}`} className="text-lg mb-1">
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
                <label htmlFor={`state${form.id}`} className="text-lg mb-1">
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
                <label htmlFor={`country${form.id}`} className="text-lg mb-1">
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
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
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
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
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
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
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
                  <option value="French Polynesia">French Polynesia</option>
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
                  <option value="Lao">Lao People's Democratic Republic</option>
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
                  <option value="Marshall Islands">Marshall Islands</option>
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
                  <option value="Papua New Guinea">Papua New Guinea</option>
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
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
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
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
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
                <label htmlFor={`division${form.id}`} className="text-lg mb-1">
                  Division
                </label>
                <select
                  name={`division${form.id}`}
                  id={`division${form.id}`}
                  value={eduInfo.Devision[ind]}
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
  );
};

const SkillDetails = () => {
  const [selectedSkill, setSelectedSkill] = useState({
    technology_name: [],
    ratings: [],
  });

  const [skillForms, setSkillForms] = useState([]);

  const addSkillForm = () => {
    setSkillForms([...skillForms, { id: skillForms.length + 1 }]);
  };
  const handleSubmit4 = async (e) => {
    e.preventDefault();
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
        technology_name: selectedSkill.technology_name[index],
        ratings: selectedSkill.ratings[index],
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
      console.log(data, skillData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const getSkillInfo = async () => {
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
        return;
      }
      console.log(response.data.data);
      const skillData = response.data.data.skills;
      console.log(skillData);
      setSkillForms(skillData.map((form, index) => ({ id: index + 1 })));

      const updatedTechNames = [];
      const updatedRatings = [];

      skillData.forEach((form) => {
        updatedTechNames.push(form.technology_name);
        updatedRatings.push(form.ratings);
      });

      setSelectedSkill({
        technology_name: updatedTechNames,
        ratings: updatedRatings,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkillInfo();
  }, []);

  const removeSkillForm = (id) => {
    const updatedSkillForms = skillForms.filter((form) => form.id !== id);
    setSkillForms(updatedSkillForms);
    setSelectedSkill((prevSkill) => {
      const updatedTechNames = [...prevSkill.technology_name];
      const updatedRatings = [...prevSkill.ratings];
      updatedTechNames.splice(id - 1, 1);
      updatedRatings.splice(id - 1, 1);
      return {
        ...prevSkill,
        technology_name: updatedTechNames,
        ratings: updatedRatings,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit4} className="grow h-full flex flex-col">
      <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            addSkillForm();
          }}
          className="underline cursor-pointer text-gray-400 bg-inherit"
        >
          + Add Skill
        </button>
        {skillForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Skill {ind + 1}</p>
              <button
                onClick={() => removeSkillForm(form.id)}
                className="underline cursor-pointer text-red-400 bg-inherit"
              >
                - Remove Skill
              </button>
            </div>
            <label htmlFor={`technology${form.id}`} className="text-lg mb-1">
              Technology Name
            </label>
            <input
              type="text"
              id={`technology${form.id}`}
              name={`technology${form.id}`}
              value={selectedSkill.technology_name[ind]}
              onChange={(e) => {
                const updatedTechNames = [...selectedSkill.technology_name];
                updatedTechNames[ind] = e.target.value;
                setSelectedSkill({
                  ...selectedSkill,
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
              value={selectedSkill.ratings[ind]}
              onChange={(e) => {
                const updatedRatings = [...selectedSkill.ratings];
                updatedRatings[ind] = e.target.value;
                setSelectedSkill({
                  ...selectedSkill,
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
  );
};

const AchDetails = () => {
  const [achInfo, setAchInfo] = useState({
    name: [],
    year: [],
    certificate: [],
  });

  const [achForms, setAchForms] = useState([]);

  const addAchForm = () => {
    setAchForms([...achForms, { id: achForms.length + 1 }]);
  };

  const getAchForm = async () => {
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
      const achData = response.data.data.achievements;
      console.log(achData);

      setAchForms(achData.map((form, index) => ({ id: index + 1 })));

      const updatedNames = [];
      const updatedYears = [];
      const updatedCertificates = [];

      achData.forEach((form) => {
        updatedNames.push(form.name);
        updatedYears.push(form.year);
        updatedCertificates.push(form.certificate);
      });

      setAchInfo({
        name: updatedNames,
        year: updatedYears,
        certificate: updatedCertificates,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAchForm();
  }, []);

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    try {
      const achData = achForms.map((form, index) => ({
        name: achInfo.name[index],
        year: achInfo.year[index],
        certificate: achInfo.certificate[index],
      }));
      const response = await axios.post(
        "/experts/",
        {
          action: 7,
          achievements_json: achData,
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
        console.log(data.message);
        return;
      }
      console.log(data, achData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const removeAchForm = (id) => {
    const updatedAchForms = achForms.filter((form) => form.id !== id);
    setAchForms(updatedAchForms);
    setAchInfo((prevAchInfo) => {
      const updatedNames = [...prevAchInfo.name];
      const updatedYears = [...prevAchInfo.year];
      const updatedCertificates = [...prevAchInfo.certificate];

      updatedNames.splice(id - 1, 1);
      updatedYears.splice(id - 1, 1);
      updatedCertificates.splice(id - 1, 1);

      return {
        ...prevAchInfo,
        name: updatedNames,
        year: updatedYears,
        certificate: updatedCertificates,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit4} className="grow h-full flex flex-col">
      <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            addAchForm();
          }}
          className="underline cursor-pointer text-gray-400 bg-inherit"
        >
          + Add Achievment
        </button>
        {achForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Achievement {ind + 1}</p>
              <button
                onClick={() => removeAchForm(form.id)}
                className="underline cursor-pointer text-red-400 bg-inherit"
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
              Certificate <div className="text-xs">(optional)</div>
            </label>
            <input
              type="file"
              name={`certificate${form.id}`}
              id={`certificate${form.id}`}
              className="border border-solid border-gray-300 px-2 py-2 rounded-md mb-4 w-full"
              onChange={(e) => {
                const file = e.target.files[ind]; // Get the first selected file
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const updatedCertificates = [...achInfo.certificate];
                    updatedCertificates[ind] = reader.result; // Store the file contents (base64 data) in the array
                    setAchInfo({
                      ...achInfo,
                      certificate: updatedCertificates,
                    });
                  };
                  reader.readAsDataURL(file); // Read the file as a data URL
                }
              }}
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
  );
};

const ExperienceDetails = () => {
  const [expInfo, setExpInfo] = useState({
    company_name: [],
    start_date: [],
    end_date: [],
    designation: [],
  });

  const [experienceForms, setExperienceForms] = useState([]);

  const addExperienceForm = () => {
    setExperienceForms([
      ...experienceForms,
      { id: experienceForms.length + 1 },
    ]);
  };
  const handleSubmit6 = async (e) => {
    e.preventDefault();
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
      console.log(data, experienceData);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const getExpInfo = async () => {
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        alert(data.message);
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
        updatedEndDate.push(form.end_date);
        updatedDesignation.push(form.designation);
      });

      setExpInfo({
        company_name: response.data.data.company_name,
        start_date: response.data.data.start_date,
        end_date: response.data.data.end_date,
        designation: response.data.data.designation,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExpInfo();
  }, []);

  const removeExpForm = (id) => {
    const updatedExpForms = setExperienceForms(
      experienceForms.filter((form) => form.id !== id)
    );

    setExperienceForms(updatedExpForms);
    setExpInfo((prevExpInfo) => {
      const updatedCompName = [...prevExpInfo.company_name];
      const updatedStartDate = [...prevExpInfo.start_date];
      const updatedEndDate = [...prevExpInfo.end_date];
      const updatedDesignation = [...prevExpInfo.designation];
      updatedCompName.splice(id - 1, 1);
      updatedStartDate.splice(id - 1, 1);
      updatedEndDate.splice(id - 1, 1);
      updatedDesignation.splice(id - 1, 1);
      return {
        company_name: updatedCompName,
        start_date: updatedStartDate,
        end_date: updatedEndDate,
        designation: updatedDesignation,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit6} className="flex flex-col grow h-full">
      <div className="flex justify-center mx-auto flex-col w-[65%] my-8">
        <button
          onClick={(e) => {
            e.preventDefault();
            addExperienceForm();
          }}
          className="underline cursor-pointer text-gray-400 bg-inherit"
        >
          + Add Experience
        </button>
        {experienceForms.map((form, ind) => (
          <>
            <div key={form.id} className="flex justify-between">
              <p className="font-bold text-lg">Experience {ind + 1}</p>
              <button
                onClick={() => removeExpForm(form.id)}
                className="underline cursor-pointer text-red-400 bg-inherit"
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
                <label htmlFor={`start${form.id}`} className="text-lg mb-1">
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
            <label htmlFor={`designtaion${form.id}`} className="text-lg mb-1">
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
  );
};

const AccDetails = () => {
  const [accInfo, setAccInfo] = useState({
    account_holder: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
  });
  const handleSubmit7 = async (e) => {
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
      console.log(data, accInfo);
      alert("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const getAccInfo = async () => {
    try {
      const response = await axios.get("/experts/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = response.data;
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
          className="cursor-pointer px-6 py-2 text-lg font-semibold text-blue-500 bg-inherit border border-solid border-gray-300 rounded-md shadow-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const EditProfileExpert = () => {
  const [currStep, setCurrStep] = useState(0);

  return (
    <div className="h-auto bg-white mt-[150px]">
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
            Personal Details
          </button>
          <button
            onClick={() => setCurrStep(1)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 1
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            General Details
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
            Achievements
          </button>
          <button
            onClick={() => setCurrStep(5)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 5
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setCurrStep(6)}
            className={`w-full text-lg py-5 border-b border-solid border-slate-300 cursor-pointer ${
              currStep === 6
                ? "bg-[#3E5676] text-white hover:bg-[#3E5676]"
                : "bg-inherit text-[#3E5676] hover:bg-[#e1ebf9]"
            }`}
          >
            Account Details
          </button>
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
