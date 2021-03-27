// Initial unsorted array
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

// Merge function
const merge = (arr1, arr2) => {
  let sorted = [];

  // Loop while there are elements in both arrays
  while (arr1.length && arr2.length) {
    // If number in arr1 is smaller than arr2, remove it from arr1 and push it to the sorted array
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    // If number in arr2 is smaller, remove it and add it to the sorted array
    else sorted.push(arr2.shift());
  };

  // Concat whatever numbers where left over in any of the arrays, in case they were not of equal size
  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

// Check #1
// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

// Merge sort function
const mergeSort = arr => {
  // If array is of length 1 or less (no elements), exit and return the array right away
  if (arr.length <= 1) return arr;
  // Find middle, left and right of the array
  let mid = Math.floor(arr.length / 2),
      // Run mergeSort recursively for each side of the array
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));

  // Run the merge function
  return merge(left, right);
};

// Check #2
console.log(mergeSort(unsortedArr));