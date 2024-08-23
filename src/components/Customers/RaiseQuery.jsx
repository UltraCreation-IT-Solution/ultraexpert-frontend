import React, { useState } from "react";
import axios from "../../axios";

function RaiseQuery({ setRaiseQuery }) {
  const [queryData, setQueryData] = useState({
    action: 1,
    subject: "",
    technology_name: "",
    topic: "",
    description: "",
    // resolved: false,
    // reply: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const handleSubmit = async () => {
    try {
      // Make API call to submit the query
      const res = await axios.post("/customers/query/", queryData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      console.log(res);
      alert("Query raised successfully");
      setRaiseQuery(false);
      // Reset form if needed
    } catch (error) {
      console.log("Error raising query", error);
    }
  };

  return (
    <div className="container mx-auto p-4 h-full bg-slate-600 rounded">
      <h2 className="text-2xl font-semibold mb-4">Raise a Query</h2>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={queryData.subject}
        onChange={handleInputChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="technology_name"
        placeholder="Technology"
        value={queryData.technology_name}
        onChange={handleInputChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <input
        type="text"
        name="topic"
        placeholder="Topic"
        value={queryData.topic}
        onChange={handleInputChange}
        className="mb-4 p-2 w-full border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={queryData.description}
        onChange={handleInputChange}
        className="mb-4 p-2 w-full border rounded"
      ></textarea>
      <div className="flex justify-between">
        <button
          onClick={() => setRaiseQuery(false)}
          className=" rounded  py-2 px-4 bg-red-500 text-white hover:bg-red-600"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded  hover:bg-blue-600"
        >
          Submit Query
        </button>
      </div>
    </div>
  );
}

export default RaiseQuery;
