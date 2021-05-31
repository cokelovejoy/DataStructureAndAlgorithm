// 求根节点到叶子节点的所有数字之和
// 深度优先搜索
function dfs(root, prevSum) {
  if (root == null) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  // 当前节点为叶子节点
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    // 非叶子节点
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
}
function sumNumber(root) {
  return dfs(root, 0);
}
// 广度优先搜索
function sumNumber2(root) {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  // 节点队列
  const nodeQueue = [];
  // 数字队列
  const numQueue = [];
  nodeQueue.push(root);
  numQueue.push(root.val);
  while(nodeQueue.length) {
    const node = nodeQueue.shift();
    const num = numQueue.shift();
    const left = node.left, right = node.right;
    // 左子树没有 右子树没有，表明是叶子节点，求和
    if (left === null && right === null) {
      sum += num;
    } else {
      if (left !== null) {
        nodeQueue.push(left);
        numQueue.push(num*10+left.val);
      }
      if (right !== null) {
        nodeQueue.push(right);
        numQueue.push(num*10 + right.val);
      }
    }
  }
  return sum;
}
const treeObj = {
  val: 1,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};
console.log(sumNumber(treeObj));
console.log(sumNumber2(treeObj));
