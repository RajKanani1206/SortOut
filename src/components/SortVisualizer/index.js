import React, { useState } from "react";
import SortChart from "./SortChart";
import "./style.css";
import VisualizerControls from "./VisualizerControls";

const SortVisualizer = ({ array, trace, colorKey, description }) => {
  const [tracing, setTracing] = useState([]);
  const [traceStep, setTraceStep] = useState(-1);
  const [originalArray, setOriginalArray] = useState([]);
  const [newArray, setNewArray] = useState(["1", "4", "14", "23", "23"]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // // componentDidUpdate(prevProps) {
  // //   console.log("Adssadasdsan");
  // //   // console.log("prevProps", prevProps.trace);
  // //   if (prevProps.array !== this.props.array) {
  // //     this._reset(this.props.array);
  // //   }
  // //   if (prevProps.trace !== this.props.trace) {
  // //     this.clearTimeouts();
  // //     this.setState({ trace: this.props.trace });
  // //   }
  // // }

  // // Actions

  // const reset = (array) => {
  //   setNewArray(array);
  //   setTracing([]);
  //   setTraceStep(-1);
  //   setGroupA([]);
  //   setGroupB([]);
  //   setGroupC([]);
  //   setGroupD([]);
  //   setSortedIndices([]);
  //   setOriginalArray([...array]);
  // };

  // const clearTimeouts = () => {
  //   timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  //   setTimeoutIds([]);
  // };

  // const changeVisualState = (visualState) => {
  //   // visualState.array
  //   setNewArray(visualState.newArray);
  //   setGroupA(visualState.groupA);
  //   setGroupB(visualState.groupC);
  //   setGroupC(visualState.groupC);
  //   setGroupD(visualState.groupD);
  //   setSortedIndices(visualState.sortedIndices);
  // };

  // const run = (trace) => {
  //   const timeoutIds = [];
  //   const timer = 250 / playbackSpeed;

  //   // Set a timeout for each item in the trace
  //   trace.forEach((item, i) => {
  //     let timeoutId = setTimeout(
  //       (item) => {
  //         setTraceStep((prev) => prev + 1);
  //         changeVisualState(item);
  //         // this.setState(
  //         //   (prevState) => ({
  //         //     traceStep: prevState.traceStep + 1,
  //         //   }),
  //         //   this._changeVisualState(item)
  //         // );
  //       },
  //       i * timer,
  //       item
  //     );

  //     timeoutIds.push(timeoutId);
  //   });

  //   // Clear timeouts upon completion
  //   let timeoutId = setTimeout(clearTimeouts, trace.length * timer);
  //   timeoutIds.push(timeoutId);
  //   setTimeoutIds(timeoutIds);
  // };

  // const pause = () => {
  //   clearTimeouts();
  // };

  // const resume = () => {
  //   const trace = tracing.slice(traceStep);
  //   run(trace);
  // };

  // const stepForward = () => {
  //   const trace = tracing;
  //   const step = traceStep;
  //   if (step < trace.length - 1) {
  //     const item = trace[step + 1];
  //     setTraceStep(step + 1);
  //     changeVisualState(item);
  //     // this.setState({ traceStep: step + 1 }, this._changeVisualState(item));
  //   }
  // };

  // const stepBackward = () => {
  //   const trace = tracing;
  //   const step = traceStep;
  //   if (step > 0) {
  //     const item = trace[step - 1];
  //     setTraceStep(step - 1);
  //     changeVisualState(item);
  //     // this.setState({ traceStep: step - 1 }, this._changeVisualState(item));
  //   }
  // };

  // // const repeat = () => {
  // //   clearTimeouts();

  // //   this.setState((prevState) => ({
  // //     array: [...prevState.originalArray],
  // //     traceStep: -1,
  // //     comparing: [],
  // //     compared: [],
  // //     sorted: [],
  // //   }));
  // //   run(tracing);
  // // };

  // const adjustPlaybackSpeed = (speed) => {
  //   const playing = timeoutIds.length > 0;
  //   pause();
  //   const playbackSpeed = Number(speed.split("x")[0]);
  //   setPlaybackSpeed(playbackSpeed);
  //   if (playing) {
  //     resume();
  //   }
  //   // this.setState({ playbackSpeed }, () => {
  //   //   if (playing) this.continue();
  //   // });
  // };

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
      <VisualizerControls />
    </div>
  );
};

export default SortVisualizer;
