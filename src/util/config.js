import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sort/BubbleSort";
import { SelectionSort } from "../sort/SelectionSort";
import { InsertionSort } from "../sort/InsertionSort";
import { QuickSort } from "../sort/QuickSort";
import { HeapSort } from "../sort/HeapSort.js";
import { MergeSort } from "../sort/MergeSort";

// colors setting
export const COMPARISON_COLOR = "pink";
export const SWAP_COLOR = "yellow";
export const SORTED_COLOR = "springgreen";
export const PIVOT_COLOR = "sandybrown";

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [4, 3, 2, 1];
  else if (screenSize < 720) return [8, 7, 6, 5, 4, 3, 2, 1];
  return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}
