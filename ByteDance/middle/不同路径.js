// 不同路径
// 一个机器人位于一个m*n的网格左上角，作为起始点，标记为start
// 机器人每次只能向下或者向右移动一步，机器人到达网格的右下角，标记为finish的位置，一共有多少条不同的路径。

// 动态规划方法
// 走到(i, j) 位置的路径数量其实就为 走到(i-1, j) 和 (i, j-1)路径数量之和
// 动态规划转移方程 f(i, j) = f(i-1, j) + f(i , j-1);
// 其中f(0, 0) 作为起始条件等于1，f(0, j) f(i, 0)作为边界条件只有一种走法所以值为 1.
function uniquePaths(m, n) {
  let list = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0)); // m 行 n 列的数组
  // 起始位置 (0, 0) 终止位置(m, n)
  // path 记录路径
  let path = [];
  for (let i = 0; i < m; i++) {
    list[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    list[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      list[i][j] = list[i - 1][j] + list[i][j - 1];
    }
  }
  return list[m - 1][n - 1];
}
console.log(uniquePaths(7, 3));

// 数学方法
function uniquePaths2(m, n) {
  let ans = 1;
  for (let x = n, y = 1; y < m; x++, y++) {
    ans = Math.floor(ans * x / y);
  }
  return ans;
}
console.log(uniquePaths2(7, 3));

