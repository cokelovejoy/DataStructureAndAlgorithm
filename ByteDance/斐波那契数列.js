// 斐波那契数列 0 1 1 2 3 5 8 13
// 求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
// 方法1：递归，缺点深度大，导致栈溢出
// function fib(n) {
//      if (n === 0) {
//         return 0;
//      }
//      if (n === 1) {
//         return 1;
//      }
//      return fib(n - 1) + fib(n - 2);
// }
// 方法2： 动态规划
// 将每次前两数之和存起来，便于下次直接使用
function fib(n) {
  let a = 0,
    b = 1,
    sum;
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
}
console.log(fib(3));
