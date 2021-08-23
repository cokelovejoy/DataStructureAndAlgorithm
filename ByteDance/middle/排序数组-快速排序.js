// 快速排序
// 给定一个整数数组nums,将该数组升序排列
function sortArray(nums) {
  function partition(nums,left, right) {
    let pointer = left;
    let pivot = nums[left];
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < pivot) {
        pointer++;
        [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
      }
    }
    [nums[left], nums[pointer]] = [nums[pointer], nums[left]];
    return pointer;
  }
  function quickSort(nums, left, right) {
    if (left >= right) {
      return;
    }
    let p = partition(nums, left, right);
    quickSort(nums, left, p - 1);
    quickSort(nums, p + 1, right);
  }
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

console.log(sortArray([1, 3, 2, 5, 6, 4]));
