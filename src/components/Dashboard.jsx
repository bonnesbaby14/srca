import React from "react";

import DashboardCard from "./DashboardCard";
import { Line } from "react-chartjs-2";
import "./Dashboard.css";

import { FaSistrix } from "react-icons/fa";

const Dashboard = (props) => {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Tickets ",
        data: [12, 19, 3, 5, 2, 7, 5, 5],
        fill: false,
        backgroundColor: "rgba(183, 0, 155, 0.8)",
        borderColor: "rgba(103, 0, 155, 0.8)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <div className="dashboard">
      <div className="first">
        <div className="one">
          <Line data={data} options={options} />
        </div>
        <div className="two">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      <div className="second"></div>
    </div>
  );
};

export default Dashboard;
