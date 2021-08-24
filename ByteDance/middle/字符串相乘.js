// 字符串相乘
// 给定两个以字符串形式表示的非负整数num1和num2，返回num1和num2的乘积，它们的乘积也表示为字符串的形式。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
// 思路模拟 数学的竖式乘法
// addStrings为两个字符串相加，模拟竖式相加
function addStrings(num1, num2) {
  let i = num1.length - 1; // 字符串长度
  let j = num2.length - 1; // 字符串长度
  let add = 0; // 进位数字
  let ans = []; // 保存对应数位数字求和的个位的结果。
  while (i >= 0 || j >= 0 || add != 0) {
    let x = i >= 0 ? num1[i] - "0" : 0; // i 上面有数时取数，没数用0替代
    let y = j >= 0 ? num2[j] - "0" : 0; // j 上面有数时取数，没数用0替代
    let result = x + y + add; // 计算 同一数位上的和
    ans.push(result % 10); // 和大于10，要对10取模，求余数，将个位数字，记录到ans数组中
    add = parseInt(result / 10); // 计算出进位的数字，将用于下一次数位上的计算。
    i--; // 数位向前移动
    j--;
  }
  ans.reverse();
  return ans.join("");
}
// num1 * num2
function multiply(num1, num2) {
  // num1 或 num2 其中 有 1个为 0
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  let ans = "0";
  let m = num1.length; // num1字符长度 ，num1 作为被乘数
  let n = num2.length; // num2字符长度 ，num2 作为乘数
  for (let i = n - 1; i >= 0; i--) {
    // 遍历num2字符串中的每个字符
    let curr = []; // 保存 num2 和 num1对应数位上的数字乘积+进位之和的个位数值。
    let add = 0; // 进位数字
    // 乘数的位数不是个位时，需要根据位数补0. 
    // num2除了最低位以外，其余的每一位的运算结果都需要补 0
    for (let j = n - 1; j > i; j--) { 
      curr.push(0);
    }

    let y = num2[i] - "0"; // 第 i 位字符 在 num2 的数字值
    // 遍历num2字符串中的所有字符
    for (let j = m - 1; j >= 0; j--) {
      let x = num1[j] - "0"; // num1 中对应数位上的数字值。
      let product = x * y + add; // 对应数位上数字乘积 和 进位数值之和
      curr.push(product % 10); // 将个位数 保存进数组
      add = Math.floor(product / 10); // 更新进位数值
    }
    // 进位不为0，需要添加进数组
    if (add != 0) {
      curr.push(add % 10);
    }

    ans = addStrings(ans, curr.reverse().join("")); // 两个字符串，模拟竖式求和，更新最新的ans
  }
  return ans;
}
// console.log(addStrings("123", "456"))
console.log(multiply("123", "456"));
