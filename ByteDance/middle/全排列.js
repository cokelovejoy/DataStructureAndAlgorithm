// 全排列
// 给定一个不含重复数字的数组nums,返回其所有可能的全排列。
// 回溯算法 = 深度优先遍历 + 回退
/**
 * 回溯法 采用试错的思想，它尝试分步的去解决一个问题。
 * 在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，
 * 它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。
 * 回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种情况：

 * 找到一个可能存在的正确的答案；
 * 在尝试了所有可能的分步方法后宣告该问题没有答案。
 * 回溯算法搜索一个问题的所有的解。
 */
// 设计状态变量
// 递归终止条件：一个排列中的数字已经选完，使用depth变量表示当前递归遍历到第几层。
// 布尔数组used：对应每个位置的元素是否使用过。初始化为false，使用过标记为true。
// 变量path保存深度优先遍历过程中 保存的列表元素。
// 注意 引用类型的元素的赋值是地址，深度优先遍历完成后，回到根节点，变为了空列表，
// 因此保存到res中的时候要做一次保存。
function permute(nums) {
  let len = nums.length;
  // 使用一个动态数组保存所有可能的全排列
  let res = [];
  if (len == 0) {
    return res;
  }
  let used = Array(len).fill(false);
  let path = [];
  function dfs(nums, len, depth, path, used, res) {
    if (depth == len) {
      // 遍历到最后一层之后时，将列表元素添加到返回结果的数组中。
      res.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) { // 遍历的目的是为了找出没有被使用的 元素。循环变量i代表了元素在元素组的下标，used数组用于标记对应下标的元素判断该元素是否被使用过。
      if (!used[i]) {
        // 判断遍历到的元素是否使用过，没有使用，添加到列表元素的数组中。
        path.push(nums[i]);
        used[i] = true; // 将当前元素标记为true
        console.log("path1: ", path, " ", used, i);
        dfs(nums, len, depth + 1, path, used, res); // 递归进入下一层，depth+1
        // 回溯，状态复原
        used[i] = false; // 使用的状态变为false
        path.pop(); // path列表元素弹出之前存入的元素
        console.log("path2: ", path, " ", used, i);
      }
    }
  }
  dfs(nums, len, 0, path, used, res);
  return res;
}

console.log(permute([1, 2, 3]));
