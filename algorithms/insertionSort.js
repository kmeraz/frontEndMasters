// occassionally useful
// mostly useful only when the array
// is mostly already sorted

const insertionSort = nums => {
  for( let i = 1; i < array.length; i++) {
    for( j = 0; j < i; j++) {
      if(nums[i] < nums[j]))
        const spliced = nums.splice(i,1);
        nums.splice(j, 0, spliced[0]);
    }
  }
}