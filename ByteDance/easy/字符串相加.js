// 给定两个字符串形式的非负整数num1和num2,计算它们的和
// 大数的处理 
// 思路： 模拟人工计算的方式，进位求和
function addStrings(num1, num2) {
  let res = ""; // 每一次求和后，在数位上占的数
  let carry = 0; // 进位
  let i = num1.length - 1; // num1的位数
  let j = num2.length - 1; // num2的位数
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1.charAt(i) - "0" : 0;
    let n2 = j >= 0 ? num2.charAt(j) - "0" : 0;
    let tmp = n1 + n2 + carry; // 对应数位上的两个数求和 ，并且加上上一次计算的进位
    carry = parseInt(tmp / 10); // 计算进位
    res = (tmp % 10) + res; // 将当前位计算的结果保存到数组
    i--;
    j--;
  }
  if (carry === 1) res = 1 + res;
  return res;
}

console.log(addStrings('123', '456'))