import React, { useEffect, useState } from "react";
import ColorKey from "./ColorKey";
import Description from "./Description";
import ProgressBar from "./ProgressBar";
import SortChart from "./SortChart";
import "./style.css";
import VisualizerControls from "./VisualizerControls";

const SortVisualizer = ({ array, trace, colorKey, description }) => {
  const [tracing, setTracing] = useState([]);
  const [traceStep, setTraceStep] = useState(-1);
  const [newArray, setNewArray] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  useEffect(() => {
    // conditions might change
    reset(array);
    clearTimeouts();
    setTracing(trace);
    // eslint-disable-next-line
  }, [array, trace]);

  const reset = (array) => {
    setNewArray(array);
    setTracing([]);
    setTraceStep(-1);
    setGroupA([]);
    setGroupB([]);
    setGroupC([]);
    setGroupD([]);
    setSortedIndices([]);
  };

  const clearTimeouts = () => {
    timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    setTimeoutIds([]);
  };

  const changeVisualState = (visualState) => {
    setNewArray(visualState.array);
    setGroupA(visualState.groupA);
    setGroupB(visualState.groupB);
    setGroupC(visualState.groupC);
    setGroupD(visualState.groupD);
    setSortedIndices(visualState.sortedIndices);
  };

  const run = (trace) => {
    const timeoutIds = [];
    const timer = 250 / playbackSpeed;

    // Set a timeout for each item in the trace
    trace.forEach((item, i) => {
      let timeoutId = setTimeout(
        (item) => {
          setTraceStep((prev) => prev + 1);
          changeVisualState(item);
        },
        i * timer,
        item
      );
      timeoutIds.push(timeoutId);
    });

    // Clear timeouts upon completion
    let timeoutId = setTimeout(clearTimeouts, trace.length * timer);
    timeoutIds.push(timeoutId);
    setTimeoutIds(timeoutIds);
  };

  const pause = () => {
    clearTimeouts();
  };

  const resume = () => {
    const trace = tracing.slice(traceStep);
    run(trace);
  };

  return (
    <div className="sort-visualizer">
      <SortChart
        numbers={newArray}
        maxNum={Math.max(...newArray)}
        groupA={groupA}
        groupB={groupB}
        groupC={groupC}
        groupD={groupD}
        sortedIndices={sortedIndices}
      />
      <div className="progress-bar mt-3">
        <ProgressBar width={tracing.length > 0 ? (traceStep / (tracing.length - 1)) * 100 : 0} />
      </div>
      <VisualizerControls
        onPlay={() => (traceStep === -1 ? run(tracing) : resume())}
        onPause={() => pause()}
        playing={timeoutIds.length > 0}
        playDisabled={(traceStep >= tracing.length - 1 && traceStep !== -1) || tracing.length <= 0}
      />
      <ColorKey colorKey={colorKey} />
      <Description description={description} />
    </div>
  );
};

export default SortVisualizer;
