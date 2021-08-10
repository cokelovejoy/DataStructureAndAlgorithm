// 二叉树的层序遍历
// 给定一个二叉树，请返回按其层序遍历得到的节点值。
// 逐层遍历，从左到右的访问所有节点。
// 二叉树的层序遍历 使用广度优先遍历，利用了队列数据结构存储了每一层的节点。
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  let res = [];
  let list = [root]; // 根节点入队列
  while (list.length > 0) {
    let len = list.length; // 队列中的元素的个数
    let temp = []; // 临时数组保存当前层的数据元素
    for (let i = 0; i < len; i++) {
      let node = list.shift(); // 出队列
      temp.push(node.val);

      if (node.left !== null) {
        list.push(node.left); // 当前节点有左子节点，将其加入队列
      }
      if (node.right !== null) {
        // 当前节点有右子节点，将其加入队列
        list.push(node.right);
      }
    }
    res.push(temp); // 将每层级的元素列表，加入结果数组中
  }
  return res;
}
const treeNode = require("../../CONSTANT.js");
console.log(levelOrder(treeNode));

// 递归解法
function levelOrder2(root) {
  if (root == null) {
    return [];
  }
  // index 代表节点的层级
  function dfs(index, root, res) {
    if (res.length < index) {
      res.push([]); // 新增一个层级的空数组用来保存这个层级数据元素
    }
    res[index - 1].push(root.val); // index-1 为当前层存储在数组中的下标，添加数据到当前层级的数据数组中
    if (root.left !== null) {
      // 递归处理左右子树，同时将层数+1，即index+1
      dfs(index + 1, root.left, res);
    }
    if (root.left !== null) {
      dfs(index + 1, root.right, res);
    }
  }
  let res = [];
  dfs(1, root, res);
  return res;
}
console.log(levelOrder2(treeNode));
