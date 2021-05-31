// 相同的树
// 校验两颗二叉树是否相同
// 深度优先遍历

function isSameTree(p, q) {
  // 两个树都是空
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    // 其中一个为空，另一个不为空，一定不相同
    return false;
  } else if (p.val !== q.val) {
    // 都不为空，比较两个节点的值，不相等，返回false
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
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
  console.log(isSameTree(treeObj, treeObj));
