import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HeatmapComp = ({ yearlyData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && yearlyData) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "scatter", // Use scatter plot for heatmap effect
        data: {
          datasets: [
            {
              data: yearlyData.map(({ day, month, count }) => ({
                x: day,
                y: month,
                value: count,
              })),
              backgroundColor: "rgba(0, 128, 0, 0.8)", // Green color with opacity
              pointRadius: 10, // Adjust point size for heatmap effect
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
              labels: Array.from(new Array(31), (_, i) => (i + 1).toString()), // Labels for days
            },
            y: {
              type: "category",
              labels: Array.from(new Array(12), (_, i) => (i + 1).toString()), // Labels for months
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, [yearlyData]);

  return <canvas ref={chartRef} />;
};

export default HeatmapComp;
