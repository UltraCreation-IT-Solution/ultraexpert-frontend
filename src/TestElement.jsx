import React, { useState, useEffect } from "react";
import axios from "./axios";
import { GoPlus } from "react-icons/go";

const TestElement = () => {
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
      console.log(response.data.data.education.education_json);
      setEducation(response.data.data.education.education_json);
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
    const educationJson = { education_json: education };
    try {
      const response = await axios.post(
        "/experts/update/",
        {
          action: 2,
          education_json: educationJson,
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
    <form onSubmit={handleSubmit3} className="flex flex-col w-full mt-20">
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
          <label htmlFor="certificate" className="text-base md:text-lg mb-1">
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
          <label htmlFor="institute_name" className="text-base md:text-lg mb-1">
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
            {education.length > 0 &&
              education?.map((edu, index) => (
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
  );
};
export default TestElement;
