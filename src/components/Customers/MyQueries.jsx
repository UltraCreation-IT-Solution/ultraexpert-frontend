import React, { useState, useEffect } from "react";
import axios from "../../axios";
import RaiseQuery from "./RaiseQuery";

function MyQueries() {
  const [queries, setQueries] = useState([]);
  const [raiseQuery, setRaiseQuery] = useState(false);

  useEffect(() => {
    // Fetch all queries
    const fetchQueries = async () => {
      try {
        const response = await axios.get("/api/queries/mine");
        setQueries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQueries();
  }, []);

  const handleResolve = async (queryId) => {
    try {
      const res = await axios.patch(`/api/queries/${queryId}/resolve`);

      setQueries(
        queries.map((query) =>
          query.id === queryId ? { ...query, resolved: true } : query
        )
      );
    } catch (error) {
      console.log("Error resolving query", error);
    }
  };

  return (
    <div className="w-full md:w-[68%] ">
      <div className="  container mx-auto p-4">
        <div className="flex justify-between">
          <div className="text-2xl font-bold mb-4">My Queries</div>
          <button
            className="bg-blue-500 text-white px-4  rounded"
            onClick={() => setRaiseQuery(true)}
          >
            Raise a Query
          </button>
        </div>
        {raiseQuery ? (
          <div className=" w-full   h-full  mt-8">
            <RaiseQuery setRaiseQuery={setRaiseQuery} />
          </div>
        ) : (
          <div className="grid gap-4">
            <section>
              <h3 className="text-xl font-semibold mb-2">Unresolved Queries</h3>
              {queries
                .filter((query) => !query.resolved)
                .map((query) => (
                  <div key={query.id} className="border p-4 rounded shadow-sm">
                    <h4 className="font-semibold">{query.topic}</h4>
                    <p className="text-sm text-gray-600">
                      {query.technology_name}
                    </p>
                    <button
                      onClick={() => handleResolve(query.id)}
                      className="bg-green-500 text-white p-2 rounded mt-2"
                    >
                      Resolve
                    </button>
                  </div>
                ))}
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Resolved Queries</h3>
              {queries
                .filter((query) => query.resolved)
                .map((query) => (
                  <div key={query.id} className="border p-4 rounded shadow-sm">
                    <h4 className="font-semibold">{query.topic}</h4>
                    <p className="text-sm text-gray-600">
                      {query.technology_name}
                    </p>
                    {query.reply.map((reply, index) => (
                      <div key={index} className="mt-2">
                        <p>
                          <strong>Expert:</strong> {reply.expertName}
                        </p>
                        <a
                          href={reply.link}
                          className="text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Service
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyQueries;
