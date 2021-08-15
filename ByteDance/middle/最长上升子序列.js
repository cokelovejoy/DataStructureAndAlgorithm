// 最长递增子序列
// 给定一个整数数组nums，找到其中最长严格递增子序列的长度。
// 子序列是由数组派生而来的序列，内部元素的相对位置不改变。

// 动态规划
// dp[i]的值代表nums前i个数字的最长子序列长度。
// 转移方程 dp[i] = max(dp[i], dp[j] + 1)
// 初始状态 dp[i] 所有元素值为1，含义是每个元素都至少可以单独成为子序列，此时长度为1
// 返回值：返回dp列表的最大值，即可得到全局最长上升子列表长度。
function lengthOfLIS(nums) {
  if (nums.length == 0) {
    return 0;
  }
  let dp = Array(nums.length).fill(1); // 初始化状态值
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 遍历区间[0,i]之间的元素， 如果nums[j] 小于nums[i] , 更新dp[i]
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]); // 更新结果
  }
  return res;
}
console.log(lengthOfLIS([0]));

// 动态规划+二分查找
