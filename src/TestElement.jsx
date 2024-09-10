import React from "react";

export const QueryDetail = ({ id }) => {
  const [query, setQuery] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const response = await axios.get(
          `/customers/query/?action=2&query_id=${id}`
        );
        console.log(response.data);
        setQuery(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuery();
  });
  return (
    <div>
      <h1>{query.subject}</h1>
      <p>{query.description}</p>
    </div>
  );
};

export default QueryDetail;
// {
//   query.reply && query.reply.length > 0 ? (
//     query.reply.map((reply, index) => (
//       <div key={index} className="mt-2">
//         <p>
//           <strong>Expert:</strong> {reply.expertName}
//         </p>
//         <a
//           href={reply.link}
//           className="text-blue-500 hover:underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Visit Service
//         </a>
//       </div>
//     ))
//   ) : (
//     <p className="text-sm text-gray-500">
//       No replies available for resolved query.
//     </p>
//   );
// }
