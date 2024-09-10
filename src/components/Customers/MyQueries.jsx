import React, { useState, useEffect } from "react";
import axios from "../../axios";
import RaiseQuery from "./RaiseQuery";
import QueryDetailsModal from "./QueriesModal"; // Import the modal component

function MyQueries() {
  const [queries, setQueries] = useState([]);
  const [raiseQuery, setRaiseQuery] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [notResolved, notRetResolved] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedQueryId, setSelectedQueryId] = useState(null); // State for selected query ID

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
      await axios.patch(`/api/queries/${queryId}/resolve`);

      setQueries(
        queries.map((query) =>
          query.id === queryId ? { ...query, status: "resolved" } : query
        )
      );
    } catch (error) {
      console.log("Error resolving query", error);
    }
  };

  return (
    <div className="w-full md:w-[68%] ">
      <div className="container mx-auto p-4">
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
            <div className="flex mb-4 gap-3 border-b border-solid border-[#c7c7c7] pb-3 text-sm md:text-base overflow-x-scroll pr-2">
              <div
                className={
                  loading
                    ? `text-gray-300`
                    : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                        notResolved && `bg-[#ececec] rounded-sm`
                      }`
                }
                onClick={() => HandleNotResolved()}
              >
                Unresolved Queries
              </div>
              <div
                className={
                  loading
                    ? `text-gray-300`
                    : `px-3 py-2 cursor-pointer font-semibold shrink-0 ${
                        resolved && `bg-[#ececec] rounded-sm`
                      }`
                }
                onClick={() => HandleResolved()}
              >
                Resolved Queries
              </div>
            </div>
            <div className="">
              {notResolved && (
                <div className="flex gap-4 flex-col">
                  {queries
                    .filter((query) => query.status === "")
                    .map((query) => (
                      <div
                        key={query.id}
                        className="border border-slate-400 border-solid p-2 rounded shadow-sm"
                      >
                        <div className="w-full flex justify-end text-slate-600">
                          {query.date_created}
                        </div>
                        <div className="font-semibold">{query.topic}</div>
                        <div className="text-gray-600 mt-2">
                          {query.description}
                        </div>
                        <div className="flex justify-between flex-col xs:flex-row">
                          <p className="text-sm text-gray-600">
                            {query.technology_name}
                          </p>
                          <div className="flex gap-2 justify-between xs:justify-end">
                            <button
                              onClick={() => setSelectedQueryId(query.id)} // Set selected query ID
                              className="bg-black text-white px-4 py-2 rounded mt-2"
                            >
                              View Replies
                            </button>
                            <button
                              onClick={() => handleResolve(query.id)}
                              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                            >
                              Resolve
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {resolved && (
                <section>
                  {queries
                    .filter((query) => query.status === "resolved")
                    .map((query) => (
                      <div
                        key={query.id}
                        className="border border-slate-400 border-solid p-2 rounded shadow-sm"
                      >
                        <div className="w-full flex justify-end text-slate-600">
                          {query.date_created}
                        </div>
                        <div className="font-semibold">{query.topic}</div>
                        <div className="text-gray-600 mt-2">
                          {query.description}
                        </div>
                        <p className="text-sm text-gray-600">
                          {query.technology_name}
                        </p>
                      </div>
                    ))}
                </section>
              )}
            </div>
          </>
        )}
      </div>
      {selectedQueryId && (
        <QueryDetailsModal
          queryId={selectedQueryId}
          onClose={() => setSelectedQueryId(null)} // Reset selected query ID on close
        />
      )}
    </div>
  );
}

export default MyQueries;
