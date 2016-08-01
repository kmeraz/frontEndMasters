// divide and conquer
// usually the sorting algo that
// we will use

// array.sort() uses mergeSort under the hood
// with the exception of Firefox's javascript engine
  // sometimes it uses quickSort, depending on the 
  // data type
// it is mostly used because it is very consistent
// very dependable what we will get out of it

// MergeSort is also stable which just
// means if you have equivalent elements,
// it will keep their original order in the array.
// This is sometimes important and sometimes not.

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  
  const results = [];
  
  while(left.length && right.length) {
    
    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }
  
  return results;
};

