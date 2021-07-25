// 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 思考 每一次都可以选择1 或 2 两种，接下来就是剩下n-1台阶和n-2台阶的方法之和，可以使用递归的方式，分解为子问题
// 如下递归方法会超时
function climbStairs(n) {
  if (n === 0 || n === 1) {
    // 递归边界条件
    return 1;
  }
  let n1 = climbStairs(n - 1);
  let n2 = climbStairs(n - 2);
  return n1 + n2;
}

// 使用记忆数组的递归， 用数组保存结果，不会超时
function climbStairs(n) {
  function climbStairSub(n, memo) {
    if (memo[n] > 0) return memo[n];
    if (n == 1) {
      memo[1] = 1;
      return memo[1];
    }
    if (n == 2) {
      memo[2] = 2;
      return memo[2];
    }
    memo[n] = climbStairSub(n - 1, memo) + climbStairSub(n - 2, memo);
    return memo[n];
  }
  return climbStairSub(n, []);
}
// 动态规划
// 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和

// 爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
// 爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
// 公式 dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]
// 同时需要初始化 dp[0]=1  和  dp[1]=1

var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 波那契数列，那么用斐波那契数列的公式即可解决问题
var climbStairs = function (n) {
  const sqrt_5 = Math.sqrt(5);
  const fib_n =
    Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
  return Math.round(fib_n / sqrt_5);
};
