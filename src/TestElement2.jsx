import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

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
        console.log(response);
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
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm overflow-hidden">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white bg-[#2A2A2A] hover:scale-105 w-8 h-8 text-3xl flex justify-center items-center rounded"
          onClick={() => {
            onClose();
            //scroll to top smoothly
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          &times;
        </button>

        {/* Modal Content */}
        <h3 className="text-3xl font-bold mb-4">{queryDetails.topic}</h3>
        <p className="text-lg mb-2">
          <strong>Technology:</strong> {queryDetails.technology_name}
        </p>
        <p className="text-lg mb-2">
          <strong>Description:</strong> {queryDetails.description}
        </p>
        <p className="text-lg mb-4">
          <strong>Date Created:</strong> {queryDetails.date_created}
        </p>

        {/* Expert Responses Section */}
        <div className="mt-6">
          <h4 className="text-2xl font-semibold mb-4">Experts Response:</h4>
          <div className="space-y-6">
            {queryDetails.expert_responses.length > 0 ? (
              queryDetails.expert_responses.map((response, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-300 border-solid p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={response.profile}
                      alt="Expert"
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <p className="text-xl font-medium text-gray-800">
                        {response.first_name} {response.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Date: {response.date} | Time: {response.time}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Response: </strong>Please visit the service with
                    service ID <b>{response.response}</b>
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      to={`/experts/expertprofile/${response.expert_id}`}
                      className="bg-white text-[#2A2A2A] border border-solid border-slate-400 px-4 py-2 rounded no-underline hover:underline"
                    >
                      View Expert Profile
                    </Link>
                    <Link
                      to={`/experts/service/:${response.service_id}`}
                      className="bg-[#2A2A2A] text-white px-4 py-2 rounded no-underline hover:underline"
                    >
                      View Service
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 font-bold">No responses yet.</p>
            )}
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            className="bg-[#2A2A2A] hover:scale-105 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform"
            onClick={() => {
              onClose();
              //scroll to top smoothly
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default QueryDetailsModal;
