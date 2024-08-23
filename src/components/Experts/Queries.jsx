import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Subheader from "../../utilities/Subheader";

function QueryDescriptionModal({ query, setOpenQueryModel, handleReply }) {
  const [reply, setReply] = useState("");

  const handleReplySubmit = () => {
    if (reply.trim()) {
      handleReply(query.id, reply);
      setReply("");
      setOpenQueryModel(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex items-center justify-center z-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 my-20 relative max-h-[550px]">
        <button
          onClick={() => setOpenQueryModel(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition duration-200"
        >
          &times;
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <img
            src={query?.customer?.user?.profile_img}
            alt={`${query.first_name} ${query.last_name}`}
            className="w-20 h-20 rounded shadow-md object-cover object-top"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {query?.customer?.user?.first_name}{" "}
              {query?.customer?.user?.last_name}
            </h2>
            <p className="text-sm text-gray-600">
              {query?.customer?.profession}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6 text-base">
          <p className="text-gray-800">
            <strong>About Me:</strong>{" "}
            <span className="line-clamp-3 text-ellipsis">
              {query?.customer?.about_me}
            </span>
          </p>
          <p className="text-gray-800">
            <strong>Gender:</strong> {query?.customer?.user?.gender}
          </p>
          <p className="text-gray-800">
            <strong>Date Created:</strong> {query.date_created}
          </p>
          <p className="text-gray-800">
            <strong>Subject:</strong> {query.subject}
          </p>
          <p className="text-gray-800">
            <strong>Technology:</strong> {query.technology_name}
          </p>
          <p className="text-gray-800">
            <strong>Topic:</strong> {query.topic}
          </p>
          <p className="text-gray-800">
            <strong>Description:</strong> {query.description}
          </p>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="reply"
          >
            Your Reply:
          </label>
          <textarea
            id="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            rows="4"
            placeholder="Enter your reply..."
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setOpenQueryModel(false)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleReplySubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit Reply
          </button>
        </div>
      </div>
    </div>
  );
}

const QueriesPage = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [openQueryModel, setOpenQueryModel] = useState(false);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await axios.get("/experts/query/?action=2", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        // setQueries(data);
        setQueries(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchQueries();
  }, []);

  const handleReply = async (queryId, reply) => {
    try {
      await axios.post(`/api/queries/${queryId}/reply`, { reply });
      alert("Reply submitted successfully!");
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  return (
    <div className="w-full relative">
      <div className="mt-[80px] mb-5 md:mb-10 px-[7vw] md:px-[10vw]">
        <Subheader heading={"Raised Queries"} />
      </div>
      <div className="  mx-auto mt-10 px-[7vw] md:px-[10vw]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            Unresolved Queries
          </h2>
          <input
            type="text"
            placeholder="Search by technology"
            className="w-2/6 p-2 mb-4 border rounded"
          />
        </div>
        <div className="w-full flex flex-wrap gap-4 md:gap-8 ">
          {queries &&
            queries?.map((query) =>
              !openQueryModel ? (
                <div
                  key={query.id}
                  className="mb-4 py-2 px-4 border border-slate-300 border-solid rounded shadow w-[45%] bg-[#fbfbfb]"
                >
                  <h3 className="text-xl font-semibold text-ellipsis line-clamp-2">
                    {query.topic}
                  </h3>
                  <p className="text-gray-600 text-ellipsis line-clamp-2">
                    {query.description}
                  </p>
                  <div className="flex justify-end items-center text-gray-600 font-semibold">
                    <span>{query.date_created}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 font-bold">
                      {query.technology_name}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedQuery(query);
                        setOpenQueryModel(true);
                      }}
                      className=" text-blue-500 py-2 px-4 mt-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <QueryDescriptionModal
                    query={selectedQuery}
                    setOpenQueryModel={setOpenQueryModel}
                    handleReply={handleReply}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default QueriesPage;
