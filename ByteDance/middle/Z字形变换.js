// z字形变换
// 给定一个以z字形为顺序存储的字符串, numsRow为行数.返回按行打印的字符串.

function convert(s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let rows = Array(numRows).fill(""); // 以行数为长度的字符串数组,存储每一行的字符串.
  let i = 0; // 循环变量,用于指向哪一行
  let flag = -1;
  for (let c of s) {
    rows[i] = rows[i] + c; // 将遍历的字符串加入到当前行中
    if (i == 0 || i == numRows - 1) {
      // 第一行和最后一行的时候要改变方向
      flag = -flag;
    }
    // flag为1时 行下标+1,行数组往下遍历, flag为-1时行下标-1,行数组往上遍历
    i += flag;
  }
  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
