// 迷路的机器人
// 设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。
// 机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。
// 设计一种算法，寻找机器人从左上角移动到右下角的路径。
// 暴力深度优先搜索 会超出时间限制
function pathWithObstacles(obstacleGrid) {
  let ans = [];
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  function findPath(matrix, x, y, rows, cols, ans) {
    if (matrix[x][y] == 1) {
      return false;
    }
    if (x == rows && y == cols) {
      let p = [];
      p.push(x);
      p.push(y);
      ans.push(p);
      return true;
    } else if (
      (x < rows && findPath(matrix, x + 1, y, rows, cols, ans)) ||
      (y < cols && findPath(matrix, x, y + 1, rows, cols, ans))
    ) {
      let p = [];
      p.push(x);
      p.push(y);
      console.log("p", p);
      ans.unshift(p);
      return true;
    }
    return false;
  }
  if (rows > 0 && cols > 0) {
    findPath(obstacleGrid, 0, 0, rows - 1, cols - 1, ans);
  }
  return ans;
}

// 优化：深度优先搜索配合剪枝
// 由于矩阵中的每个点x,y 都有大于到达的方法，因此暴力深度搜索会反复搜索不可能到达的路径。
// 可以标记不可到达的路径，比如将不可达路径也设置为1，使得再次便利到这个位置时可以直接返回，节省时间。
function pathWithObstacles2(obstacleGrid) {
  let ans = [];
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  function findPath(matrix, x, y, rows, cols, ans) {
    if (matrix[x][y] == 1) {
      return false;
    }
    if (x == rows && y == cols) {
      // 到达最后目标位置
      let p = [];
      p.push(x);
      p.push(y);
      ans.push(p);
      return true;
    } else if (
      (x < rows && findPath(matrix, x + 1, y, rows, cols, ans)) ||
      (y < cols && findPath(matrix, x, y + 1, rows, cols, ans))
    ) {
      // rows，cols内满足条件的情况，由于是递归，因此要反过来将，走过的位置，从头部插入数组
      let p = [];
      p.push(x);
      p.push(y);
      console.log("p", p);
      ans.unshift(p);
      return true;
    }
    matrix[x][y] = 1; // 剪枝操作，将不可能到达的地方设置为1
    return false;
  }

  if (rows > 0 && cols > 0) {
    findPath(obstacleGrid, 0, 0, rows - 1, cols - 1, ans);
  }
  return ans;
}

console.log(
  pathWithObstacles2([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
// 动态规划方法
// 对矩阵进行动态规划后，每个位置代表能到达当前位置的路径数。
// 从起点向有右或者向下查找路径，所以也可以从终点向左或向上查找路径，
// 因为动态规划计算后每个位置只要大于0说明一定有路径可以到达这个位置，只需要从终点反向查找一条大于0的路径到达起点即可。
function pathWithObstacles3(obstacleGrid) {
  let ans = [];
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;
  function getPath(matrix, x, y, ans) {
    let p = [];
    p.push(x);
    p.push(y);
    ans.unshift(p);
    if (x > 0 && matrix[x - 1][y] > 0) {
      getPath(matrix, x - 1, y, ans);
    } else if (y > 0 && matrix[x][y - 1] > 0) {
      getPath(matrix, x, y - 1, ans);
    }
  }
  if (rows == 0 && cols == 0) {
    return ans;
  }
  obstacleGrid[0][0] = 1;
  // 动态规划计算
  for (let i = 1; i < cols; i++) {
    obstacleGrid[0][i] = obstacleGrid[0][i] == 1 ? 0 : obstacleGrid[0][i - 1];
  }
  for (let j = 1; j < rows; j++) {
    obstacleGrid[j][0] = obstacleGrid[j][0] == 1 ? 0 : obstacleGrid[j - 1][0];
    for (let k = 1; k < cols; k++) {
      obstacleGrid[j][k] =
        obstacleGrid[j][k] == 1
          ? 0
          : obstacleGrid[j - 1][k] + obstacleGrid[j][k - 1];
    }
  }
  // 反向查找路径
  if (obstacleGrid[--rows][--cols] > 0) {
    getPath(obstacleGrid, rows, cols, ans);
  }
  return ans;
}

console.log(
  pathWithObstacles3([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);