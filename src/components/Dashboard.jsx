import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Lienzo from "./Lienzo";

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
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
