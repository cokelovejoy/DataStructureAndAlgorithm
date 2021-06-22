// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。
// 暴力求解
var maxSubArray = function (nums) {
  let len = nums.length;
  let maxSum = nums[0]; // 假设第一个为最大
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 动态规划方法
// nums[i]是以nums[i]数字结尾的连续数组的和
function maxSubArray2(nums) {
    let res = nums[0];
    for (let i=1; i < nums.length; i++) {
        nums[i] += Math.max(nums[i-1], 0); //
        res = Math.max(res, nums[i]);
    }
    return res;
}
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));