// 组合
// 给定两个整数 n 和 k，返回范围[1, n]中所有可能的k个数的组合。可以按任何顺序返回答案。
// 使用回溯算法
// 如果一个问题有多个步骤，每一个步骤有多种方法，又要找出所有方法，可以使用回溯算法
//  回溯算法是在一棵树上的深度优先遍历（因为要找所有解，所以需要遍历）
// 组合问题，相对于排列问题，不计较组合内元素的顺序性，[1,2,3] 和 [1,3,2] 认为是同一个组合。
// 需要按某种顺序展开搜索，才能做到不重不漏。
function combine(n, k) {
  function dfs(n, k, index, path, res) {
    if (path.length == k) {
      // 长度为k的时候
      res.push([...path]);
      return;
    }
    // 接下来要选择的元素的个数为 k - path.length
    // 搜索起点的最大值 = n - (k - path.length) + 1 ----> 剪枝优化的地方（原来为index < n）
    for (let i = index; i <= n - (k - path.length) + 1; i++) {
      path.push(i); // 递归之前
      dfs(n, k, i + 1, path, res); // 递归
      path.pop(); // 递归之后, 回溯
    }
  }
  let res = [];
  if (k <= 0 || n < k) {
    return res;
  }
  let path = [];
  dfs(n, k, 1, path, res);
  return res;
}
console.log(combine(4, 2));
