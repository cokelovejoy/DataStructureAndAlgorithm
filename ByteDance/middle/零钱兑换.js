// 零钱兑换
// 给定一个整数数组coins，表示不同面额的硬币；以及一个整数amount，表示总金额
// 计算并返回可以凑成总金额所需要的最少的硬币个数。如果没有任何一种硬币组合能组成金额，返回-1.

// 递归 + 记忆数组
function coinChange(coins, amount) {
  if (amount < 1) {
    return 0;
  }
  function change(coins, rem, count) {
    if (rem < 0) {
      return -1;
    }
    if (rem == 0) {
      return 0;
    }
    if (count[rem - 1] !== 0) {
      return count[rem - 1];
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
      let res = change(coins, rem - coin, count);
      if (res >= 0 && res < min) {
        min = 1 + res;
      }
    }
    count[rem - 1] = min == Number.MAX_SAFE_INTEGER ? -1 : min;
    return count[rem - 1];
  }
  return change(coins, amount, Array(amount).fill(0));
}
console.log(coinChange([186, 419, 83, 408], 6249));

// 动态规划
// 状态转移方程 F(i) = min(F(i- c)) + 1;
function coinChange2(coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
console.log(coinChange2([186, 419, 83, 408], 6249));
