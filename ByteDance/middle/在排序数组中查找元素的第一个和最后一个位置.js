// 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组nums 和 一个目标值target。找出给定目标值在数组中的开始位置和结束位置。

// 二分查找 时间复杂度logn
// 使用二分查找的条件，有序数组
// 二分查找 第1个数和目标书相同的 和 最后一个和目标数相同的。
const binarySearch = (nums, target, lower) => {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true); // 找第一个
  const rightIdx = binarySearch(nums, target, false) - 1; // 找最后一个
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};
