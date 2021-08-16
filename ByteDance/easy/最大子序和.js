// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
function maxSubArray(nums) {
  let len = nums.length;
  let maxSum = nums[0];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i ; j < len; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));