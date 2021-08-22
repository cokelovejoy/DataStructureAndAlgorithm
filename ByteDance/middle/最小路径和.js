// 最小路径和
// 给定一个包含非负整数的网格（m*n）grid，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

//  回溯解法：一般深度优先搜索，有大量重复遍历的情况，会超出时间限制
function minPathSum(grid) {
  let minSum = Number.MAX_SAFE_INTEGER; // 记录最小路径和
  let dirs = [
    [1, 0], // 1 代表row移动动1，0代表col不移动,[1,0]代表向下移动
    [0, 1], // 0 代表row不移动，1代表col移动1， [0,1]代表向右移动
  ]; // 方向数组
  // 递归函数， row， col为横纵左边，sum为当前和
  function dfs(grid, row, col, sum) {
    //  到达目标位置, 更新最小路径和
    if (row == grid.length - 1 && col == grid[0].length - 1) {
      minSum = Math.min(minSum, sum);
      return;
    }
    for (let dir of dirs) {
      let nextRow = row + dir[0]; // 下一个节点的row
      let nextCol = col + dir[1]; // 下一个节点的col
      // 边界处理
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= grid.length ||
        nextCol >= grid[0].length
      ) {
        continue;
      }
      sum += grid[nextRow][nextCol]; // 求和
      dfs(grid, nextRow, nextCol, sum); // 继续遍历下一个节点
      sum -= grid[nextRow][nextCol]; // 回溯
    }
  }
  dfs(grid, 0, 0, grid[0][0]); // 递归遍历
  return minSum;
}

// 递归优化：
// 使用记忆化数组，记录重复的最小路径和，来消除重复递归。
function minPathSum2(grid) {
  let maxInt = Number.MAX_SAFE_INTEGER; // 记录最小路径和
  let dirs = [
    [1, 0], // 1 代表row移动动1，0代表col不移动,[1,0]代表向下移动
    [0, 1], // 0 代表row不移动，1代表col移动1， [0,1]代表向右移动
  ]; // 方向数组
  let m = grid.length; // 行数
  let n = grid[0].length; // 列数
  let memo = Array(m)
    .fill(0)
    .map(() => Array(n).fill(maxInt)); // 记忆数组，记录当前节点的最小路径和
  // 递归函数， row， col为横纵坐标
  function dfs(grid, row, col, memo) {
    //  到达目标位置, 更新最小路径和
    if (row == m - 1 && col == n - 1) {
      return grid[row][col];
    }
    if (memo[row][col] != maxInt) {
      return memo[row][col];
    }
    let minSum = maxInt;
    for (let dir of dirs) {
      let nextRow = row + dir[0]; // 下一个节点的row
      let nextCol = col + dir[1]; // 下一个节点的col
      // 边界处理
      if (nextRow < 0 || nextCol < 0 || nextRow >= m || nextCol >= n) {
        continue;
      }
      // 最小路径和
      minSum = Math.min(minSum, dfs(grid, nextRow, nextCol, memo));
    }
    // 记录 坐标 [row, col]的最小路径和
    memo[row][col] = minSum + grid[row][col];
    return memo[row][col];
  }
  return dfs(grid, 0, 0, memo); // 递归遍历
}

// 动态规划
// 状态推导的方向：由已知向未知推导
// 从终点右下角往起点左上角推导
// dp[i][j]表示从[i,j] 到右下角终点的最短路径
// dp[m-1][n-1] = grid[m-1][n-1];
// 最后一行：dp[m-1][j] = grid[m-1][j] + dp[m-1][j+1];
// 最后一列：dp[i][n-1] = grid[i][n-1] + dp[i+1][n-1];
// 中间的位置： dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
function minPathSum3(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  // 状态初始化
  dp[m - 1][n - 1] = grid[m - 1][n - 1];
  // 状态转移
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i == m - 1 && j != n - 1) {
        // 最后一行
        dp[i][j] = grid[i][j] + dp[i][j + 1];
      } else if (i != m - 1 && j == n - 1) {
        // 最后一列
        dp[i][j] = grid[i][j] + dp[i + 1][j];
      } else if (i != m - 1 && j != n - 1) {
        // 中间位置, 为右边和下边中的最小路径和
        dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[0][0];
}

// 动态规划 ：从起始点到终点推导
// 状态定义： dp[i][j] 表示从[0,0] 到[i,j] 的最小路径和
// dp[0][0] = grid[0][0];
// dp[0][j] = grid[0][j] + dp[0][j-1]; // 第一行，等于左边的最小路径和
// dp[i][0] = grid[i][0] + dp[i-1][0]; // 第一列，等于上面的最小路径和
// dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]);// 中间位置的节点，为左边和上边中的最小路径和
function minPathSum4(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  // 状态初始化
  dp[0][0] = grid[0][0];
  // 状态转移
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j != 0) {
        // 第一行
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else if (i != 0 && j == 0) {
        // 第一列
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } else if (i != 0 && j != 0) {
        // 中间位置, 等于上面和左边的最小路径和
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // 返回结果
  return dp[m - 1][n - 1];
}
// 优化：动态规划：从起始点到终点 + 状态数组压缩
function minPathSum5(grid) {
  let m = grid.length;
  let n = grid[0].length;
  // 使用一维的状态数组存储每一行的最小路径和
  // 每次循环到下一行时，更新dp状态数组
  // 状态定义：dp[j] 表示从[0, 0] 到达 第 i 行第j列的最小路径值。
  let dp = Array(n).fill(0);
  // 状态初始化
  dp[0] = grid[0][0];
  // 状态转移
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j != 0) {
        dp[j] = grid[i][j] + dp[j - 1];
      } else if (i != 0 && j == 0) {
        dp[j] = grid[i][j] + dp[j];
      } else if (i != 0 && j != 0) {
        dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
      }
    }
  }
  return dp[n - 1];
}

// 优化：空间优化 从起始点到终点 + 使用输入数组作为状态数组
// 在原数组上更改，空间复杂度O(1);
function minPathSum6(grid) {
  let m = grid.length;
  let n = grid[0].length;

  // 状态转移
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j != 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (i != 0 && j == 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      } else if (i != 0 && j != 0) {
        grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  // 返回结果
  return grid[m - 1][n - 1];
}
console.log(
  minPathSum5([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
// 动态规划法
// function minPathSum(grid) {}
