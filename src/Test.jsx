import HeatmapComp from "./Heatmap";

const AllExperts = () => {
  const yearlyData = generateYearlyData();

  // Function to generate data for the entire year
  function generateYearlyData() {
    const yearlyData = [];
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= getDaysInMonth(month, 2024); day++) {
        const dayStr = day.toString().padStart(2, "0");
        const monthStr = month.toString().padStart(2, "0");
        const date = `2024-${monthStr}-${dayStr}`;
        const count = Math.floor(Math.random() * 21); // Random count between 0 and 20
        yearlyData.push({ day: dayStr, month: monthStr, count });
      }
    }
    return yearlyData;
  }

  // Function to get the number of days in a month
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  return (
    <div className="App">
      <HeatmapComp yearlyData={yearlyData} />
    </div>
  );
};

export default AllExperts;
