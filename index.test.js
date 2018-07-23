const binarySearch = require('./index');

test('Testing when the number is in the array', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBeTruthy();
});

test('Testing the Binary Search when the number is not in the array', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toBeFalsy();
});

test('Testing the Binary Search when only one parameter is passed', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeFalsy();
});

test('Testing the Binary Search when a String is passed as a second parameter', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], '5')).toBeFalsy();
});

test('Testing the Binary Search when the number is the first digit', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBeTruthy();
});

test('Testing the Binary Search when the number is the last digit', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBeTruthy();
});

test('Testing the Binary Search when the number is immediately the middle digit', () => {
  "use strict";
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBeTruthy();
});

test('Testing the Binary Search when the length of the array is zero', () => {
  "use strict";
  expect(binarySearch([], 5)).toBeFalsy();
});
