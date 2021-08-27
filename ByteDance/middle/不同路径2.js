// 不同路径2
// 一个机器人位于一个m*n网格左上角，起始点为（0，0）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（m-1,n-1）。
// 现在考虑网格中有障碍物，那么从左上角到右下角会有多少条不同的路径.
// 动态规划
// 动态规划的题目分为两大类，一种是求最优解类，典型问题是背包问题，
// 另一种就是计数类，比如这里的统计方案数的问题，它们都存在一定的递推性质。
// 前者的递推性质还有一个名字，叫做 「最优子结构」 — —即当前问题的最优解取决于子问题的最优解，
// 后者类似，当前问题的方案数取决于子问题的方案数。所以在遇到求方案数的问题时，我们可以往动态规划的方向考虑。

// 有障碍物的点（i，j） = 1 ，就不需要计算
// dp [i][j]代表的含义： 从起点走到（i，j）这一个点的路径数。
// 状态初始化dp[0][0] = 0;
// 状态转移方程

function uniquePathsWithObstacles(obstacleGrid) {
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  let dp = Array(rows + 1)
    .fill(0)
    .map(() => Array(cols + 1).fill(0));
  // 行遍历
  for (let i = 1; i <= rows; i++) {
    // 列遍历
    for (let j = 1; j <= cols; j++) {
      // if (i == 1 && j == 1) {
      //   dp[i][j] = obstacleGrid[0][0];
      //   continue;
      // }
      if (i == 1) {
        // 第一行只能往右走
        dp[i][j] =
          obstacleGrid[0][j - 1] == 1 ? -1 : dp[i][j - 1] == -1 ? -1 : 1;
      } else if (j == 1) {
        // 第一列只能往下走
        dp[i][j] =
          obstacleGrid[i - 1][0] == 1 ? -1 : dp[i - 1][j] == -1 ? -1 : 1;
      } else {
        // 中间
        if (obstacleGrid[i - 1][j - 1] == 1) {
          dp[i][j] = -1;
        } else if (dp[i - 1][j] != -1 && dp[i][j - 1] != -1) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        } else if (dp[i - 1][j] == -1 && dp[i][j - 1] == -1) {
          dp[i][j] = -1;
        } else if (dp[i - 1][j] == -1) {
          dp[i][j] = dp[i][j - 1];
        } else if (dp[i][j - 1] == -1) {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  return dp[rows][cols] == -1 ? 0 : dp[rows][cols];
}
console.log(uniquePathsWithObstacles([[1]]));
