import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Doughchart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        data: [12, 45],
        backgroundColor: ["#4A7DFF", "#C25DFF"],
        borderColor: [
          "#4A7DFF",
          "#C25DFF",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="">
      <Doughnut
        data={data}
        height="150px"
        width="150px"
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Doughchart;
