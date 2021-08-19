// 第N位数字
// 在无限的整数序列1，2，3，4，5，6，7，8，9，10，11 中找到第n位数字
// 三步：
// 1. 找到n属于哪个数位里的索引。分为个位，十分位，百分位
// 2. 找到n属于哪个数。
// 3. 找到n是这个数的第几位。
function findNthDigit(n) {
  if (n == 0) {
    return 0;
  }
  let digit = 1; // 数位占几位数字 （1为个位, 2为十位, 3为百位）
  let start = 1; // 属于该数位的所有数的起始点数（个位是1，十位是10， 百位是100）
  let count = digit * 9 * start; // 该数位的数的索引的个数

  while (n > count) {
    n -= count; // 找出n属于的哪个数位里的索引
    digit++; // 更新数位
    start *= 10; // 数位中开始的数
    count = digit * 9 * start; // 更新该数位的数的索引的个数
  }
  // 循环之后：digit等于原始的n所属的数位
  // start等于原始的n所属数位的数的起点
  // n 等于当前数位里的第n-1个索引 （索引从0 开始算）
  let num = start + Math.floor((n - 1) / digit); // 算出原始的n到底对应哪个数字
  let remainder = (n - 1) % digit; // 余数就是原始的n是这个数字中的第几位
  let s = String(num);
  return Number(s[remainder]);
}
console.log(findNthDigit(365));