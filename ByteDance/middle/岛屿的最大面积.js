// 岛屿的最大面积
// 给定一个包含了一些 0 和 1 的非空二维数组 grid。
/**
 * 一个岛屿是由一些相邻的1代表土地构成的组合，相邻要求两个1，在水平或竖直方向上相邻。
 * 假设grid的边缘都被0包围。
 * 找到给定的二维数组中最大的岛屿面积。没有岛屿返回面积为0。
 */

// 深度优先遍历，遍历过的元素 设置为0.
function maxAreaOfIsland(grid) {
  function dfs(grid, i, j) {
    // 越过边界条件
    if (
      i < 0 ||
      j < 0 ||
      i === grid.length ||
      j === grid[0].length ||
      grid[i][j] !== 1
    ) {
      return 0;
    }
    grid[i][j] = 0; // 标记为0，代表已经遍历过
    let di = [0, 0, 1, -1]; // di , dj 的取值为 递归遍历走向：四个方向：i = 0,j = 1 向右移动; i = 0,j = -1向左移动;i=1,j=0向下移动;i=-1,j=0向上移动
    let dj = [1, -1, 0, 0];
    let ans = 1;
    for (let index = 0; index != 4; index++) {
      let nextI = i + di[index];
      let nextJ = j + dj[index];
      ans += dfs(grid, nextI, nextJ);
    }
    return ans;
  }
  let ans = 0;
  for (let i = 0; i != grid.length; i++) {
    for (let j = 0; j != grid[0].length; j++) {
      ans = Math.max(ans, dfs(grid, i, j));
    }
  }
  return ans;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
