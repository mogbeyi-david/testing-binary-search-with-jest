const binarySearch = (array, number) => {
  "use strict";
  const sortedArray = array.sort((a, b) => (a - b));
  const arrayLength = sortedArray.length;
  const middle = Math.floor(arrayLength / 2);
  if (number !== array[0] && number !== array[arrayLength - 1] && number !== array[middle]) {
    if (arrayLength <= 2) {
      return false;
    }

    if (number > array[middle]) {
      const newArray = [];
      for (let i = array[middle]; i < arrayLength; i++) {
        newArray.push(array[i]);
      }
      binarySearch(newArray, number);
    } else if (number < array[middle]) {
      const newArray = [];
      for (let i = 0; i < array[middle]; i++) {
        newArray.push(array[i]);
      }
      binarySearch(newArray, number);
    }
  } else {
    return true;
  }
};

module.exports = binarySearch;