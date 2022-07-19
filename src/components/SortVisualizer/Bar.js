import React from "react";
import "./style.css";

const Bar = ({ width, height, val, stateA, stateB, stateC, stateD, sorted, style }) => {
  let classNames = "bar";
  if (sorted) classNames += " bar-sorted";
  if (stateD) classNames += " bar-stateD";
  else if (stateC) classNames += " bar-stateC";
  else if (stateB) classNames += " bar-stateB";
  else if (stateA) classNames += " bar-stateA";

  let BarStyle = { ...style, width: `${width}%`, height: `${height}%` };
  if (stateA || stateB || stateC || stateD) {
    BarStyle["marginRight"] = `${0.3 * width}%`;
    BarStyle["marginLeft"] = `${0.3 * width}% `;
  }

  return (
    <div style={BarStyle} className={classNames}>
      <span className="bar-text">{val}</span>
    </div>
  );
};

export default Bar;
