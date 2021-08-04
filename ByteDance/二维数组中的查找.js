// 二维数组中的查找
// 在一个n * m 的二维数组中，每一行都按照从左往右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的二维数组和一个整数，判断数组中是否含有该整数。

// 暴力法
var findNumberIn2DArray = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
);
// 类比二叉搜索树
function findNumberIn2DArray2(matrix, target) {
  let i = matrix.length - 1; // 代表行数
  let j = 0; // 代表当前标志数的 列数
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      // 标志数大于目标数， 行数向上移动1
      i--;
    } else if (matrix[i][j] < target) {
      // 标志数小于目标数，列数向右移动1
      j++;
    } else {
      // 标志数等于目标数，相等。
      return true;
    }
  }
  return false;
}
