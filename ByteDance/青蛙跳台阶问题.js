// 青蛙跳台阶问题
// 一只青蛙一次可以跳上1级台阶也可以跳上2级台阶。求该青蛙跳上一个n级台阶总共有多少种跳法?
// 递归有超时的问题
// function numWays(n) {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   return numWays(n-1) + numWays(n-2);
// }
// 滚动数组
var numWays = function(n) {
  let a = 1, b = 1, sum = 0;
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007; // 比1000000007小的数对1000000007取模结果都为他们自身。
    a = b;
    b = sum;
  }
  return a;
}
console.log(numWays(44));