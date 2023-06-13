import {ASCENDING_MODE, DEFAULT_MODE, DESCENDING_MODE} from "@utils/constants.js";

export function sortObjectsByOrder(arr, sortMode, sortKey) {
  if (sortMode === ASCENDING_MODE) {
    return arr.sort((a, b) => {
      const firstValue = a[sortKey];
      const secondValue = b[sortKey];

      if (firstValue < secondValue) {
        return -1;
      }
      if (firstValue > secondValue) {
        return 1;
      }
      return 0;
    });
  }

  if (sortMode === DESCENDING_MODE) {
    return arr.sort((a, b) => {
      const firstValue = a[sortKey];
      const secondValue = b[sortKey];
      if (firstValue > secondValue) {
        return -1;
      }
      if (firstValue < secondValue) {
        return 1;
      }
      return 0;
    });
  }

  if (sortMode === DEFAULT_MODE) {
    return arr
  }

  return arr;
}