// 二叉搜索树节点最小距离
// 给你一个二叉搜索树的根节点，返回树中任意两不同节点值之间的最小差值
// 二叉搜索树的中序遍历是一个 递增的有序序列
// 升序数组 求任意两个元素之差的最小值，答案一定为相邻两个元素之差的最小值
// pre 用来比较上一个元素的值，ans记录最小差值
function minDiffInBST(root) {
  let ans = Number.MAX_SAFE_INTEGER;
  let pre = -1;
  function dfs(root) {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
        console.log('F', root.val)
      pre = root.val;
    } else {
        console.log('B', pre);
      ans = Math.min(ans, root.val - pre); // ans记录最小差值, root.val-pre 为升序数组中，后一个值-前一个值
      pre = root.val;                      // pre记录前一个值
    }
    dfs(root.right);
    return ans;
  }
  
  dfs(root);
  return ans;
}
const treeData = {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  };
console.log(minDiffInBST(treeData));