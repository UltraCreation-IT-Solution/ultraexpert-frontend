import React, { useState } from "react";
import axios from "axios";

function RaiseQuery() {
  const [queryData, setQueryData] = useState({
    subject: "",
    technology_name: "",
    topic: "",
    description: "",
    resolved: false,
    reply: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Make API call to submit the query
      await axios.post("/api/queries", queryData);
      alert("Query raised successfully");
      // Reset form if needed
    } catch (error) {
      console.error("Error raising query", error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
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
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Submit Query
      </button>
    </div>
  );
}

export default RaiseQuery;
