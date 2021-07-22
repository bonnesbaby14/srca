import React from "react";
import PropTypes from "prop-types";
import "./DashboardCard.css";

const DashboardCard = (props) => {
  return (
    <>
      <div className="course">
        <div className="course-preview"></div>
        <div className="course-info"></div>
      </div>
    </>
  );
};

DashboardCard.propTypes = {};

export default DashboardCard;
