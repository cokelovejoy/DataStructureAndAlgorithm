// 逆波兰表达式求值
// 根据逆波兰表达式，求表达式的值，逆波兰表达式也叫后缀表达式。
// 思路 遍历表达式数组，遇到数组使用栈存储，遇到符号弹出两个数字，计算之后再入栈。
// 循环结束后 栈顶元素即为所求。
function evalRPN(tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    // 是一个数字，入栈
    if (!isNaN(tokens[i])) {
      stack.push(Number(tokens[i]));
      continue;
    }
    let f = 0,
      s = 0;
    switch (tokens[i]) {
      case "+":
        f = stack.pop();
        s = stack.pop();
        console.log("+", f + s);
        stack.push(f + s);
        break;
      case "-":
        f = stack.pop();
        s = stack.pop();
        console.log("-", s - f);
        stack.push(s - f);
        break;
      case "*":
        f = stack.pop();
        s = stack.pop();
        console.log("*", s * f);
        stack.push(s * f);
        break;
      case "/":
        f = stack.pop();
        s = stack.pop();
        console.log("/", s / f);
        stack.push(parseInt(s / f));
        break;
      default:
        return;
    }
  }
  console.log(stack);
  return stack[stack.length - 1];
}
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
