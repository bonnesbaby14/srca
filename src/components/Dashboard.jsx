import React from "react";

import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

import { FaSistrix } from "react-icons/fa";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <DashboardCard icon={<FaSistrix></FaSistrix>}></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
      <DashboardCard></DashboardCard>
    </div>
  );
};

export default Dashboard;
