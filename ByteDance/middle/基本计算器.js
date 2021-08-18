// 基本计算器2
// 给定一个字符串表达式s,请你实现一个基本计算器来计算并返回它的值。
// 整数除法仅保留整数部分

// 使用preSign 记录每个数字之前的运算符
// 遇到+，将数字入栈
// 遇到-，将负数入栈
// 乘除，将数字和栈顶元素计算的结果加入栈中
// 最后将栈中所有的元素求和
function calculate(s) {
  s = s.trim(); // 去除前后的空格
  let stack = [];
  let preSign = "+"; // 初始化符号，设置为第一个数之前的符号。
  let num = 0;
  let size = s.length;
  for (let i = 0; i < size; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== " ") { // 遇到数字
      num = num * 10 + Number(s[i]); // 连续数字 要 组合成一个整数
    }
    // 遇到符号，或者最后一个字符
    if (isNaN(Number(s[i])) || i === size - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push((stack.pop() / num) | 0);
      }
      preSign = s[i]; // 更新符号
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
}
console.log(calculate("42"));