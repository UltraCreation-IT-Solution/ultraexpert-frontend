import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Subheader from "../../utilities/Subheader";
import TestElement2 from "../../TestElement2";

function QueryDescriptionModal({ query, setOpenQueryModel, handleReply }) {
  const [reply, setReply] = useState("");

  const handleReplySubmit = () => {
    if (!reply.trim()) {
      return;
    }
    if (reply.trim()) {
      handleReply(query.id, reply);
      setReply("");
      setOpenQueryModel(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-60 flex items-center justify-center z-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 my-20 relative max-h-[600px] xs:max-h-[600px]">
        <button
          onClick={() => {
            setOpenQueryModel(false);
            // scrollTo(0, 0);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute top-2 right-2 bg-black text-white text-xl px-2 rounded hover:text-gray-300 transition duration-200"
        >
          &times;
        </button>

        <div className="flex items-center space-x-4">
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
        <div className="p-2 px-4 border border-slate-400 rounded border-solid max-h-[280px] xs:max-h-[240px] overflow-y-scroll my-4">
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
        </div>

        <div className="mb-4">
          <textarea
            id="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none   focus:border-slate-400 resize-none"
            rows="4"
            placeholder="Enter your reply..."
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setOpenQueryModel(false);
              // scrollTo(0, 0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-gray-700 bg-transparent border border-slate-500 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
          >
            Close Modal
          </button>
          <button
            onClick={handleReplySubmit}
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
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
  const [searchText, setSearchText] = useState("");
  const [searchFilter, setSearchFilter] = useState("technology_name"); // Filter selection state
  const [startDate, setStartDate] = useState(""); // Date filter state
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
        setQueries(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchQueries();
  }, []);

  // Filter queries based on search text, selected filter, and start date
  const filteredQueries = queries.filter((query) => {
    const queryDate = new Date(query.date_created);
    const isAfterStartDate = startDate
      ? queryDate >= new Date(startDate)
      : true;

    const searchMatch = query[searchFilter]
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return isAfterStartDate && searchMatch;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchText("");
    setSearchFilter("technology_name");
    setStartDate("");
  };

  const handleReply = async (queryId, reply) => {
    try {
      const response = await axios.post(
        `/experts/query/`,
        { action: 1, query_id: queryId, response: reply },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response.data);
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
      <div className="mx-auto mt-10 px-[7vw] md:px-[10vw]">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="text-xl lg:text-2xl font-bold mb-4">
            Unresolved Queries
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
            <select
              className="p-2 mb-4 border rounded"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            >
              <option value="technology_name">Technology Name</option>
              <option value="topic">Topic</option>
              <option value="description">Description</option>
            </select>

            <input
              type="text"
              placeholder="Search"
              className="p-2 mb-4 border rounded"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <input
              type="date"
              className="p-2 mb-4 border rounded"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <button
              onClick={clearFilters}
              className="px-4 py-2 mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between flex-wrap gap-4 ">
          {filteredQueries.length > 0 ? (
            filteredQueries.map((query) =>
              !openQueryModel ? (
                <div
                  key={query.id}
                  className="mb-4 py-2 px-4 border border-slate-300 border-solid rounded shadow w-full md:w-[48%] bg-[#fbfbfb]"
                >
                  <div className="flex items-center space-x-4 ">
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
                      {query.technology_name.charAt(0).toUpperCase() +
                        query.technology_name.slice(1)}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedQuery(query);
                        setOpenQueryModel(true);
                      }}
                      className="btnBlack text-white rounded text-sm py-2 px-4 mt-4"
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
            )
          ) : (
            <p className="text-gray-600 text-center w-full">
              No queries found matching your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// const QueriesPage = () => {
//   return (
//     <div>
//       <TestElement2 />
//     </div>
//   );
// };

export default QueriesPage;
