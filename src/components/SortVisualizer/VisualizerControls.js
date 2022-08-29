import React from "react";
import { MdPlayArrow as Play, MdPause as Pause, MdSkipPrevious as Backward } from "react-icons/md";
import "./style.css";

const renderIcon = (icon, iconClass) => {
  const ICON = icon;
  return <ICON className={iconClass} />;
};

const VisualizerControls = ({ onPlay, onPause, playing, playDisabled, onBackward, backwardDisabled }) => {
  return (
    <div className="visualizer-controls">
      <button className="controls-btn" onClick={onBackward} disabled={backwardDisabled}>
        {renderIcon(Backward, "icon-btn visualizerControls-icon")}
      </button>
      <button
        className="controls-btn play-pause-button mx-4"
        onClick={() => (playing ? onPause() : onPlay())}
        disabled={!playing && playDisabled}
      >
        {playing
          ? renderIcon(Pause, "icon-btn visualizerControls-icon")
          : renderIcon(Play, "icon-btn visualizerControls-icon")}
      </button>
    </div>
  );
};

export default VisualizerControls;
