import React from "react";
import PropTypes from "prop-types";
import "./DashboardCard.css";

const DashboardCard = (props) => {
  return (
    <div>
      <div className="course">
        <div className="course-preview">
          <h6>Course</h6>
          <h2>JavaScript Fundamentals</h2>
          <a href="#">
            View all chapters <i className="fas fa-chevron-right" />
          </a>
        </div>
        <div className="course-info">
          <div className="progress-container">
            <div className="progress" />
            <span className="progress-text">6/9 Challenges</span>
          </div>
          <h6>Chapter 4</h6>
          <h2>Callbacks &amp; Closures</h2>
          <button className="btn">Continue</button>
        </div>
      </div>
      {/* SOCIAL PANEL HTML */}
      <div className="social-panel-container">
        <div className="social-panel">
          <p>
            Created with <i className="fa fa-heart" /> by
            <a target="_blank" href="https://florin-pop.com">
              Florin Pop
            </a>
          </p>
          <button className="close-btn">
            <i className="fas fa-times" />
          </button>
          <h4>Get in touch on</h4>
          <ul>
            <li>
              <a href="https://www.patreon.com/florinpop17" target="_blank">
                <i className="fab fa-discord" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/florinpop1705" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/florinpop17" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/florinpop17" target="_blank">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/florinpop17" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {};

export default DashboardCard;
