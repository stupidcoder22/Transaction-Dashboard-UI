import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Verticalbar = () => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: [45, 65, 35, 51, 54, 76, 61],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  Chart.defaults.datasets.bar.barThickness = 4;

  return <Bar options={options} data={data} />;
};

export default Verticalbar;
