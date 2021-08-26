// 组合总和
// 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，
// 找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。

// 回溯算法
function combinationSum(candidates, target) {
  let len = candidates.length;
  let res = [];
  if (len == 0) {
    return res;
  }
  let path = [];
  function dfs(candidates, begin, len, target, path, res) {
    // if (target<0) {
    //   return;
    // }
    // 由于进入更深层的时候，小于 0 的部分被剪枝，因此递归终止条件值只判断等于 0 的情况
    if (target == 0) {
      res.push([...path]);
      return;
    }
    // 从 begin 开始搜索的
    for (let i = begin; i < len; i++) {
      // 剪枝优化，为负数时，就不需要再往下进行了，前提是候选数组必须是有序数组。
      if (target - candidates[i] < 0) {
        break;
      }
      path.push(candidates[i]);
      // 由于每一个元素可以重复使用，下一轮搜索的起点依然是 i
      dfs(candidates, i, len, target - candidates[i], path, res);
      // 回溯
      path.pop();
    }
  }
  // 先排序, 排序是剪枝的前提
  candidates.sort((a, b) => a - b);
  dfs(candidates, 0, len, target, path, res);
  return res;
}
