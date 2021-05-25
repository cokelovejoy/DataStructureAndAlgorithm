// 找出二叉树的最小深度
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
// 叶子节点是没有子节点的节点

// 广度优先搜索的方法，一层层遍历，一旦发现当前层的某个节点没有子节点，说明当前结点的深度为最小深度
function minDepth1(root) {
  if (root === null) {
    return 0;
  }
  const queue = [root]; // 根结点入队列;
  let depth = 1;
  while (queue.length) { // 遍历直到清空 当前层的结点队列
    const levelSize = queue.length; // 当前层的结点个数
    for (let i = 0; i < levelSize; i++) { // 遍历，逐个出列
      const cur = queue.shift();
      if (cur.left === null && cur.right === null) {
        // 如果没有孩子，直接返回层数
        return depth;
      }
      if (cur.left) {
        queue.push(cur.left); // 如果有孩子，让孩子入队列
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    depth++; // 深度+1，进入下一层
  }
}
// 深度优先搜索的方法，遍历整棵树，记录最小深度
// 对于每一个非叶子节点，只需要分别计算其左右子树的最小叶子节点深度。
function minDepth2(root) {
  if (!root) {
    // 没有结点，最小深度为0
    return 0;
  }
  if (root.left === null && root.right === null) {
    // 没有左右子树，深度为1
    return 1;
  }
  // 存在左子树, 递归左子树
  let minDep = Number.MAX_SAFE_INTEGER;
  if (root.left !== null) {
    minDep = Math.min(minDepth(root.left), minDep);
  }
  // 存在右子树, 递归右子树，将左子树的深度和右子树的深度比较，选最小的
  if (root.right !== null) {
    minDep = Math.min(minDepth(root.right), minDep);
  }
  // 最后返回最小深度为minDep + 1
  return minDep + 1;
}
const minDepth = (root) => {
  if (root == null) {
    // 递归到null节点，返回高度0
    return 0;
  }
  if (root.left && root.right) {
    // 左右子树都存在，当前节点的高度1+左右子树递归结果的较小值
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    // 左子树存在，右子树不存在
    return 1 + minDepth(root.left);
  } else if (root.right) {
    // 右子树存在，左子树不存在
    return 1 + minDepth(root.right);
  } else {
    // 左右子树都不存在，光是当前节点的高度1
    return 1;
  }
};

const treeObj = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
      left: null,
      right: null,
    },
    right: {
      val: "E",
      left: null,
      right: null,
    },
  },
  right: {
    val: "C",
    left: null,
    right: {
      val: "F",
      left: null,
      right: null,
    },
  },
};

// console.log(minDepth(treeObj));
console.log(minDepth1(treeObj));
