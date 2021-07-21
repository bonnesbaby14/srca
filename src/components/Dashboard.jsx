import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <DashboardCard></DashboardCard>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
