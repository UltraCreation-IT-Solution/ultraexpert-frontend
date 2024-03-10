// import React, { useState } from "react";
// import CalendarHeatmap from "react-calendar-heatmap";
// import "react-calendar-heatmap/dist/styles.css";
// import "./global.css";
// import {useHistory} from "react-router-dom";

// const history=useHistory();

// const generateRandomData = () => {
//   const today = new Date();
//   const yearAgo = new Date(new Date().setFullYear(today.getFullYear() - 1));
//   const values = [];

//   for (let d = new Date(yearAgo); d <= today; d.setDate(d.getDate() + 1)) {
//     values.push({
//       date: new Date(d),
//       count: Math.floor(Math.random() * 4),
//     });
//   }

//   return values;
// };

// const AllExperts = () => {
//   const values = generateRandomData();
//   const [updateDate, setUpdateDate] = useState("");
//   const [updateCount, setUpdateCount] = useState("");

//   const handleUpdate = () => {
//     const updatedValues = values.map((value) => {
//       if (value.date.toDateString() === updateDate) {
//         return { ...value, count: parseInt(updateCount) };
//       }
//       return value;
//     });
//     setValues(updatedValues);
//   };

//   return (
//     <div className="w-full py-8">
//       <h2 className="text-3xl font-semibold mb-4 text-blue-600">
//         Contribution Heatmap
//       </h2>
//       <div className="w-full">
//         <CalendarHeatmap
//           startDate={
//             new Date(new Date().setFullYear(new Date().getFullYear() - 1))
//           }
//           endDate={new Date()}
//           values={values}
//           classForValue={(value) => {
//             if (!value) {
//               return "color-empty";
//             }
//             return `color-blue-${value.count}`;
//           }}
//           tooltipDataAttrs={(value) => {
//             return {
//               "data-tip": `${value.date.toDateString()}: ${
//                 value.count
//               } contributions`,
//             };
//           }}
//         />
//         <button onClick={history.push("/")}>bchdvcdh</button>
//       </div>
//     </div>
//   );
// };

// export default AllExperts;
