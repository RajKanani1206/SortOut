import React from "react";
import "./style.css";

const ProgressBar = ({ width }) => (
  <div className="progress-bar-inner">
    <div
      className="progress-bar-active"
      style={{
        width: `${width}%`,
      }}
    ></div>
  </div>
);

export default ProgressBar;
