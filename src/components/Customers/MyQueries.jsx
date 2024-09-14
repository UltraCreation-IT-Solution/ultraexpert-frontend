import React, { useState, useEffect } from "react";
import axios from "../../axios";
import RaiseQuery from "./RaiseQuery";
import QueryDetailsModal from "./QueriesModal"; // Import the modal component
import TestElement2 from "../../TestElement2";

function MyQueries() {
  const [queries, setQueries] = useState([]);
  const [raiseQuery, setRaiseQuery] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [notResolved, notRetResolved] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("topic");
  const [dateFilter, setDateFilter] = useState("");

  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("/customers/query/?action=1", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        setQueries(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQueries();
  }, []);

  const handleResolve = async (queryId) => {
    try {
      const response = await axios.post(
        `/customers/query/`,
        { query_id: queryId, action: 2 },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response.data);

      setQueries(
        queries.map((query) =>
          query.id === queryId ? { ...query, status: "resolved" } : query
        )
      );
    } catch (error) {
      console.log("Error resolving query", error);
    }
  };

  const HandleNotResolved = () => {
    setLoading(true);
    setResolved(false);
    notRetResolved(true);
    setLoading(false);
  };

  const HandleResolved = () => {
    setLoading(true);
    setResolved(true);
    notRetResolved(false);
    setLoading(false);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSearchBy("topic");
    setDateFilter("");
  };

  const filteredQueries = queries
    .filter((query) => {
      const searchMatch = query[searchBy]
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const queryDate = new Date(query.date_created);
      const selectedDate = dateFilter ? new Date(dateFilter) : null;
      const dateMatch = !selectedDate || queryDate >= selectedDate;

      return searchMatch && dateMatch;
    })
    .filter((query) =>
      notResolved ? query.status === "" : query.status === "resolved"
    );

  return (
    <div className="w-full md:w-[68%] ">
      <div className="container mx-auto sm:p-4">
        <div className="flex justify-between mb-2">
          <div className="text-2xl font-bold mb-4">My Queries</div>
          <button
            className="btnBlack text-sm text-white px-4 py-2 rounded"
            onClick={() => setRaiseQuery(true)}
          >
            Raise a Query
          </button>
        </div>
        {raiseQuery ? (
          <div className="w-full h-full mt-8">
            <RaiseQuery setRaiseQuery={setRaiseQuery} />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap md:flex-nowrap flex-col xs:flex-row gap-4 mb-6 mt-4">
              <select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="border p-2 rounded w-full md:w-1/4 "
              >
                <option value="topic">Topic</option>
                <option value="description">Description</option>
                <option value="technology_name">Technology</option>
              </select>
              <input
                type="text"
                placeholder={`Search by ${searchBy}`}
                className="border p-2 rounded w-full md:w-1/2 "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <input
                type="date"
                className="border p-2 rounded w-full md:w-1/4 "
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <button
                onClick={clearFilters}
                className="bg-red-500 text-white px-4 py-2 rounded "
              >
                Clear Filters
              </button>
            </div>

            <div className="flex mb-4 gap-3 border-b border-solid border-[#c7c7c7] pb-3 text-sm md:text-base overflow-x-scroll pr-2">
              <div
                className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                  notResolved && `bg-[#ececec] rounded-sm`
                }`}
                onClick={() => HandleNotResolved()}
              >
                Unresolved Queries
              </div>
              <div
                className={`px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                  resolved && `bg-[#ececec] rounded-sm`
                }`}
                onClick={() => HandleResolved()}
              >
                Resolved Queries
              </div>
            </div>

            <div>
              {filteredQueries.length === 0 ? (
                <p>No queries found</p>
              ) : (
                <div className="flex gap-4 flex-col">
                  {filteredQueries.map((query) => (
                    <div
                      key={query.id}
                      className="border border-slate-300 border-solid px-2 py-4 xs:p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4"
                    >
                      {/* Image */}
                      <img
                        src="https://ultraxpert.s3.ap-south-1.amazonaws.com/Screenshot+2024-09-10+115557.png"
                        alt="Query"
                        className="w-full md:w-1/4 rounded-lg object-cover"
                      />

                      {/* Query Info */}
                      <div className="w-full md:w-3/4">
                        <div className="w-full flex justify-end text-slate-600 text-xs">
                          {new Date(query.date_created).toLocaleDateString()}
                        </div>
                        <div className="font-semibold text-lg mb-2">
                          {query.topic}
                        </div>
                        <div className="text-gray-600 mb-2">
                          {query.description}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Technology: {query.technology_name}
                        </div>
                        <div className="flex gap-2 justify-start mt-2">
                          <button
                            onClick={() => setSelectedQueryId(query.id)}
                            className="bg-[#2A2A2A] text-white px-4 py-2 rounded"
                          >
                            View Replies
                          </button>
                          {query.status === "" && (
                            <button
                              onClick={() => handleResolve(query.id)}
                              className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                              Resolve
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {selectedQueryId && (
        <QueryDetailsModal
          queryId={selectedQueryId}
          onClose={() => setSelectedQueryId(null)}
        />
      )}
    </div>
  );
}

export default MyQueries;
