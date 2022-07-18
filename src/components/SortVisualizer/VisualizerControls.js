import React from "react";
import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipNext as Forward,
  MdSkipPrevious as Backward,
  MdRepeat as Repeat,
} from "react-icons/md";
import "./style.css";

const VisualizerControls = () => {
  return (
    <div className="visualizer-controls">
      <button className="controls-btn">
        <Repeat className="icon-btn" />
      </button>
      <button className="controls-btn">
        <Backward className="icon-btn visualizerControls-icon" />
      </button>
      <button className="controls-btn play-pause-button">
        <Play className="icon-btn visualizerControls-icon" />
      </button>
      <button className="controls-btn">
        <Forward className="icon-btn visualizerControls-icon" />
      </button>
    </div>
  );
};

export default VisualizerControls;
