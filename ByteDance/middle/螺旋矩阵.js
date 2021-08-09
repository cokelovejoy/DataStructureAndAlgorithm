// 螺旋矩阵
// 给定一个m行n列的矩阵matrix，请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 方法1：模拟螺旋矩阵的路径
// 走法：节点[i, j] 始终是在围绕矩阵的四周移动。
// 使用一个 visited 作为原数组的映射，来记录该元素已经被访问。
// 每走过一个元素，需要将其标记为已经读取，避免重复读取。
function spiralOrder(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  let row = matrix.length; // 获取行数
  let col = matrix[0].length; // 获取列数
  // 设置一个对应原矩阵的二维数组，记录对应的值是否被访问。
  let visited = Array(row)
    .fill(0)
    .map(() => Array(col).fill(false));
  let count = row * col; // 元素的总个数
  let res = Array(count).fill(0);
  let directions = [
    [0, 1], // 行为0 ，列为1，移动方向：向右移动
    [1, 0], // 行为1， 列为0， 移动方向：向下移动
    [0, -1], // 行为0， 列为-1，移动方向：向左移动
    [-1, 0], // 行为-1， 列为0，移动方向：向上移动
  ];
  let directIndex = 0,
    r = 0, // 指向行
    c = 0; // 指向列
  for (let i = 0; i < count; i++) {
    res[i] = matrix[r][c];
    visited[r][c] = true;
    // 下一行
    const nextRow = r + directions[directIndex][0];
    // 下一列
    const nextCol = c + directions[directIndex][1];
    // 当超出界限时或者进入之前访问过的位置时，顺时针旋转，调整方向，进入下一个方向。
    if (
      !(
        0 <= nextRow &&
        nextRow < row &&
        0 <= nextCol &&
        nextCol < col &&
        !visited[nextRow][nextCol]
      )
    ) {
      directIndex = (directIndex + 1) % 4;
    }
    // 方向调整后，得到最新的行指针和列指针。
    r += directions[directIndex][0];
    c += directions[directIndex][1];
  }
  return res;
}
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 方法2： 按层模拟
// 按层去遍历元素
// 四个顶点(top, left) (top, right) (bottom, left) (bottom, right)
function spiralOrder2(matrix) {
  if (matrix.length === 0 && matrix[0].length === 0) {
    return [];
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  let res = [];
  let left = 0, // 左
    right = cols - 1; // 右
  let top = 0, // 上
    bottom = rows - 1; // 下
  while (left <= right && top <= bottom) {
    // 遍历 上边元素，层不变，列变化，向右移动
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    // 遍历 右边的元素，列不变，层变化，向下移动
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    // 如果还有行和列
    if (left < right && top < bottom) {
      // 遍历 下边的元素，层不变，列变化，向左移动
      for (let col = right - 1; col > left; col--) {
        res.push(matrix[bottom][col]);
      }
      // 遍历 左边的元素， 列不变，层变化，向上移动
      for (let row = bottom; row > top; row--) {
        res.push(matrix[row][left]);
      }
    }
    // 每一轮，遍历完四条边，遍历完之后，更新四个顶点的值，
    // 上下代表行，左右代表列
    // 上边下移：top + 1
    // 下边上移：bottom -1
    // 左边右移：left + 1
    // 右边左移：right -1
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return res;
}
console.log(
  spiralOrder2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
