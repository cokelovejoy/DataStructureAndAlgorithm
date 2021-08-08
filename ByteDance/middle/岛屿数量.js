// 岛屿数量
// 给你一个由 ‘1’ 陆地 和 ‘0’ 水组成的二维网格，请你计算网络中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和竖直 方向上相邻的陆地连接形成。
// 假设该网格四条边均被水包围

// 使用深度优先遍历dfs
// 从岛屿中某一点 （i，j）出发 的对它的上下左右分别做做深度搜索
// 终止条件：(i, j) 越过矩阵的边界 或 grid[i][j] == '0' 到达岛屿的边界
// 搜索岛屿的同时，执行grid[i][j] = '0', 即将岛屿所有节点删除，以免之后重复搜索相同岛屿。
function numIslands(grid) {
  // 深度优先遍历，递归函数
  function dfs(grid, i, j) {
    if (
      i < 0 || // 越界情况
      j < 0 || // 越界情况
      i >= grid.length || // 行数
      j >= grid[0].length || // 列数
      grid[i][j] == "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    dfs(grid, i + 1, j); // 下方
    dfs(grid, i, j + 1); // 右方
    dfs(grid, i - 1, j); // 左方
    dfs(grid, i, j - 1); // 上方
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
}
// 使用广度优先遍历
// 借用一个队列，判断队列首部节点（i，j）是否越界且为1
// 是， 则置为零(删除岛屿节点)，并将此节点上下左右节点加入队列
// 否，跳过此节点
// 循环弹出队列首节点，直到整个队列为空，此时遍历完此岛屿
function numIslands2(grid) {
  function bfs(grid, i, j) {
    let list = [];
    list.push([i, j]);
    while (list.length > 0) {
      let cur = list.shift();
      i = cur[0];
      j = cur[1];
      if (
        i >= 0 &&
        i < grid.length &&
        j >= 0 &&
        j < grid[0].length &&
        grid[i][j] == "1"
      ) {
        grid[i][j] = "0";
        list.push([i + 1, j]); //上
        list.push([i - 1, j]); // 下
        list.push([i, j + 1]); // 右
        list.push([i, j - 1]); // 左
      }
    }
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        bfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
}
