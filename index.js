const binarySearch = (array, number) => {
  "use strict";
  const sortedArray = array.sort((a, b) => (a - b));
  const arrayLength = sortedArray.length;
  const mid = Math.floor(arrayLength / 2);
  if (number !== array[0] && number !== array[arrayLength - 1] && number !== array[mid]) {
    if (arrayLength <= 2) {
      return false;
    }

    if (number > array[mid]) {
      const newArray = [];
      for (let i = array[mid]; i < arrayLength; i++) {
        newArray.push(array[i]);
      }
      binarySearch(newArray, number);
    } else if (number < array[mid]) {
      const newArray = [];
      for (let i = 0; i < array[mid]; i++) {
        newArray.push(array[i]);
      }
      binarySearch(newArray, number);
    }
  } else {
    return true;
  }
};

module.exports = binarySearch;