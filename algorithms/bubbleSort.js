const bubbleSort = nums => {  
  let start = 0;
  do {
    var swapped = false;
    for (var i = start; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
    start++;

  } while(swapped);
  return nums;
};

console.log(bubbleSort([4,3,6,4,7]));
