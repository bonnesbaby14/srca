import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <DashboardCard></DashboardCard>
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
