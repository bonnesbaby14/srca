import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";
import Lienzo from "./Lienzo";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Lienzo></Lienzo>
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
