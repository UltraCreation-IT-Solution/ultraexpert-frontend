import React, { useState, useEffect } from "react";
import axios from "../../axios";

function QueryDetailsModal({ queryId, onClose }) {
  const [queryDetails, setQueryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  useEffect(() => {
    const fetchQueryDetails = async () => {
      try {
        const response = await axios.get(
          `/customers/query/?action=2&query_id=${queryId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        setQueryDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching query details", error);
        setLoading(false);
      }
    };
    fetchQueryDetails();
  }, [queryId]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        Loading...
      </div>
    );
  }

  if (!queryDetails) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        No details available
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">{queryDetails.topic}</h3>
        <p className="mb-2">
          <strong>Technology:</strong> {queryDetails.technology_name}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {queryDetails.description}
        </p>
        <p className="mb-4">
          <strong>Date Created:</strong> {queryDetails.date_created}
        </p>
        {queryDetails.expert_responses.map((response, index) => (
          <div key={index} className="border-t pt-4 mt-4">
            <p>
              <strong>Expert:</strong> {response.first_name}{" "}
              {response.last_name}
            </p>
            <p>
              <strong>Response:</strong> {response.response}
            </p>
            <p>
              <strong>Date:</strong> {response.date}
            </p>
            <p>
              <strong>Time:</strong> {response.time}
            </p>
            <a
              href={`#`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Expert Profile
            </a>
            <a
              href={`#`}
              className="text-blue-500 hover:underline ml-4 mt-2 inline-block"
            >
              View Service
            </a>
          </div>
        ))}
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default QueryDetailsModal;
