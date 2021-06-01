// 求完全二叉树的节点个数
function exists(root, level, k) {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
}
function countNodes(root) {
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
    level++;
    node = node.left;
  }
  let low = 1 << level,
    high = (1 << (level + 1)) - 1;
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
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
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  };
  console.log(countNodes(treeObj));
