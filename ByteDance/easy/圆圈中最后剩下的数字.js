// 圆圈中最后剩下的数字
// 0, 1, ···, n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
// 求出这个圆圈里剩下的最后一个数字。

// f(n) 可由 f(n−1) 得到，f(n−1) 可由 f(n−2) 得到，……，f(2) 可由 f(1) 得到；
// 因此，若给定 f(1)的值，就可以递推至任意 f(n) 。而「1, m 问题」的解 f(1)=0 恒成立，即无论 m 为何值，长度为 1 的数字环留下的是一定是数字 0 。
// 因此有递推公式：x = (x + m) % n ; 当前轮索引 = （ 上轮索引 + m ） % 上轮人数


// 递归方法
function lastRemaining1(n, m) {
  if (n === 1) {
    return 0;
  }
  let x = lastRemaining1(n - 1, m); // n-1个数中，最后留下的数字
  return (m + x) % n;
}

console.log(lastRemaining1(5, 3));

// 迭代方法
function lastRemaining2(n, m) {
  let f = 0;
  for (let i = 2; i <= n; i++) {
    f = (m + f) % i;
  }
  return f;
}
console.log(lastRemaining2(5, 3));
