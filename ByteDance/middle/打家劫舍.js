// 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两件相邻的房屋在同一晚上被小偷闯入，系统就会自动报警。
// 给定一个代表房屋存放金额的非负整数数组，计算你不触动警报装置的情况下，一夜之间能偷窃的最高的金额。
// 典型动态规划问题
// 状态定义：dp[i]代表前i个房子在满足条件下能偷窃到的最高金额。
// 状态转移方程：dp[n] = max(dp[n-1], dp[n-2] + num)
// 初始状态：前0间房的最大偷窃价值为0 ，即dp[0] = 0;
// n个房间，前n个能偷窃的最高金额为dp[n],前n-1个能偷窃的最高金额为dp[n-1],此时向后面增加一间房，此房价格为num
// 加一间房后；n+1就不能抢第n间，那么前n+1间房能偷取得最高金额为dp[n+1]为以下两种情况：
// 1.不抢n+1间房，因此等于前n个房子得最高金额：dp[n+1] =dp[n];
// 2.抢n+1，就不能抢第n个房；因此等于前n-1间房的最高金额加上当前房间的价值：dp[n+1] = dp[n-1] + num;
// dp[n]只与 dp[n−1] 和 dp[n−2] 有关系，因此我们可以设两个变量 cur和 pre 交替记录,就不需要记录整个数组
// 方法1
var rob = function (nums) {
  const len = nums.length;
  if (len == 0) return 0;
  const dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
};
// 优化设两个变量 cur和 pre 交替记录,就不需要记录整个数组
function rob(nums) {
  let pre = 0;
  let cur = 0;
  let temp = 0;
  for (let num of nums) {
    temp = cur; // 临时变量记录当前的偷窃的最高金额
    cur = Math.max(pre + num, cur); // 新增一间房时的，最高金额
    pre = temp; // 记录之前金额
  }
  return cur; // cur最终为第n间房的最高的金额
}
console.log(rob([2, 7, 9, 3, 1]));
