// 下一个排列
// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。即组合出下一个更大的整数。
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列。即升序排列。

// 算法思路：找到左边的较小数和右边的较大数交换，能够让当前排列变大
// 较小数要尽量靠右，较大数尽量小。
// 当交换完成后，「较大数」右边的数需要按照升序重新排列。
// 这样可以在保证新排列大于原来排列的情况下，使变大的幅度尽可能小。
function nextPermutation(nums) {
  function reverse(nums, start) {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  let i = nums.length - 2;
  // 从后往前找，找到nums[i] < nums[i+1]的 i, a[i] 为后段中的较小元素。
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 从后往前找，找到 nums[i] < nums[j]的j; j为 较大数a[j] 要大于 a[i];
  // 然后将i和j的元素互换
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 将 i 之后的元素 反转排列，保证新排列大于原来排列的情况下，使变大的幅度尽可能小。
  reverse(nums, i + 1);
}
let nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
