import BubbleSort, { BubbleSortKey, BubbleSortDesc } from "../Algorithms/BubbleSort";
import SelectionSort, { SelectionSortKey, SelectionSortDesc } from "../Algorithms/SelectionSort";
import InsertionSort, { InsertionSortKey, InsertionSortDesc } from "../Algorithms/InsertionSort";
import MergeSort, { MergeSortKey, MergeSortDesc } from "../Algorithms/MergeSort";

// eslint-disable-next-line
export default {
  "Bubble Sort": {
    algorithm: BubbleSort,
    colorKey: BubbleSortKey,
    description: BubbleSortDesc,
  },
  "Selection Sort": {
    algorithm: SelectionSort,
    colorKey: SelectionSortKey,
    description: SelectionSortDesc,
  },
  "Insertion Sort": {
    algorithm: InsertionSort,
    colorKey: InsertionSortKey,
    description: InsertionSortDesc,
  },
  "Merge Sort": {
    algorithm: MergeSort,
    colorKey: MergeSortKey,
    description: MergeSortDesc,
  },
};
