import React from "react";
import { Form } from "react-bootstrap";
import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipPrevious as Backward,
  MdSkipNext as Forward,
  MdRepeat as Repeat,
} from "react-icons/md";
import "./style.css";

const renderIcon = (icon, iconClass) => {
  const ICON = icon;
  return <ICON className={iconClass} />;
};

const VisualizerControls = ({
  onPlay,
  onPause,
  playing,
  playDisabled,
  onBackward,
  backwardDisabled,
  onForward,
  forwardDisabled,
  onRepeat,
  repeatDisabled,
  onAdjustSpeed,
  playbackSpeed,
}) => {
  const playbackSpeedOptions = ["0.25x", "0.5x", "1x", "2x", "4x"];
  return (
    <div className="visualizer-controls">
      <button className="controls-btn" onClick={onRepeat} disabled={repeatDisabled}>
        {renderIcon(Repeat, "icon-btn visualizerControls-icon")}
      </button>
      <button className="controls-btn mx-2 mx-sm-4" onClick={onBackward} disabled={backwardDisabled}>
        {renderIcon(Backward, "icon-btn visualizerControls-icon")}
      </button>
      <button
        className="controls-btn play-pause-button"
        onClick={() => (playing ? onPause() : onPlay())}
        disabled={!playing && playDisabled}
      >
        {playing
          ? renderIcon(Pause, "icon-btn visualizerControls-icon")
          : renderIcon(Play, "icon-btn visualizerControls-icon")}
      </button>
      <button className="controls-btn mx-2 mx-sm-4" onClick={onForward} disabled={forwardDisabled}>
        {renderIcon(Forward, "icon-btn visualizerControls-icon")}
      </button>
      <Form.Select
        aria-label="Algorithm Type"
        bsPrefix="playback-speed-select"
        className="bg-transparent text-white text-opacity-75 mx-2 algo-dropdown"
        value={`${playbackSpeed}x`}
        onChange={(e) => {
          onAdjustSpeed(e.target.value);
        }}
      >
        {playbackSpeedOptions.map((ele, index) => (
          <option value={ele} key={index} className="text-black">
            {ele}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default VisualizerControls;
