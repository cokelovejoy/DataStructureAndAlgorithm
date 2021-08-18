// 字符串的排列
// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
// 核心思想:回溯算法
function permutation(s) {
  let strArr = Array.from(s);
  function dfs(x) {
    if (x == strArr.length - 1) {
      res.push(strArr.join(''));
      return;
    }
    let map = {};
    for (let i = x; i < strArr.length; i++) {
      if (map[strArr[i]]) {
        // 重复字符,剪枝
        continue;
      }
      map[strArr[i]] = true;
      [strArr[i], strArr[x]] = [strArr[x], strArr[i]]; // 交换i 和 x的字符
      dfs(x + 1); // 开启向下层递归
      [strArr[i], strArr[x]] = [strArr[x], strArr[i]]; // 交换i 和 x的字符, 恢复
    }
  }
  let res = [];
  dfs(0);
  return res;
}

console.log(permutation("abc"));
