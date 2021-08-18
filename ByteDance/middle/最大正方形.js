// 最大正方形
// 在一个由 ‘0’ 和 ‘1’组成的二维矩阵内，可以找到只包含‘1’的最大正方形，并返回其面积。
// 暴力解法
// 找最大正方形的面积，先要找最大正方形的边长，然后计算最大边长的平方即可
// 1.遍历矩阵中的每个元素,每次遇到1,则将该元素作为正方形的左上角.
// 2.确定正方形的左上角后,根据左上角所在的行和列计算可能的最大正方形的边长(不能超过矩阵的行和列),在该边长范围内寻找只包含1的最大正方形.
// 3.每次在下方新增一行以及在右方新增一列,判断新增的行和列是否满足所有元素都是1.
function maximalSquare(matrix) {
  let maxSide = 0;
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return maxSide;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == "1") {
        // 遇到1作为正方形的左上角
        maxSide = Math.max(maxSide, 1);
        let currentMaxSide = Math.min(rows - i, cols - j);
        for (let k = 1; k < currentMaxSide; k++) {
          let flag = true; // 判断新增的一行一列是否均为1
          if (matrix[i + k][j + k] == "0") {
            break;
          }
          for (let m = 0; m < K; m++) {
            if (matrix[i + k][j + m] == "0" || matrix[i + m][j + k] == "0") {
              flag = false;
              break;
            }
          }
          if (flag) {
            maxSide = Math.max(maxSide, k + 1);
          } else {
            break;
          }
        }
      }
    }
  }
  let maxSquare = maxSide * maxSide;
  return maxSquare;
}
// 动态规划
// 用 dp(i, j) 表示以 (i,j) 为右下角，且只包含 1 的正方形的边长最大值。如果我们能计算出所有 dp(i,j) 的值，那么其中的最大值即为矩阵中只包含 1 的正方形的边长最大值，其平方即为最大正方形的面积。
// 对于每个位置 (i, j)(i,j)，检查在矩阵中该位置的值
// 如果该位置的值是 0，则 dp(i,j)=0，因为当前位置不可能在由 1 组成的正方形中；
// 如果该位置的值是 1，则 dp(i,j) 的值由其上方、左方和左上方的三个相邻位置的 dp 值决定。具体而言，当前位置的元素值等于三个相邻位置的元素中的最小值加 1，状态转移方程如下：
// 状态转移方程 dp(i,j)=min(dp(i−1,j),dp(i−1,j−1),dp(i,j−1))+1
// 边界条件:i和j至少一个为0,以位置(i,j)为右下 角的最大正方形的边长只能是1,即dp(i,j) = 1.
function maximalSquare2(matrix) {
  let maxSide = 0;
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return maxSide;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] =
            Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) +
            1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }
  let maxSquare = maxSide * maxSide;
  return maxSquare;
}
