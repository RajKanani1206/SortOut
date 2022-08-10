import React from "react";
import { swap, newTrace, addToTrace, lastSorted, createKey } from "./helpers";

const BubbleSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      // Visualize: Comparing A[j] and A[j + 1]
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        // Visualize: Swap A[j] and A[j + 1]
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }

    // Visualize: final value is sorted
    addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1 - i]);
  }

  return trace;
};

export const BubbleSortKey = createKey("Comparing", "Swapping");
export const BubbleSortDesc = {
  title: "Bubble Sort",
  desc: "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure. The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
  worstCase: "O(n²)",
  avgCase: "O(n²)",
  bestCase: "O(n)",
  space: "O(1)",
};
export default BubbleSort;
