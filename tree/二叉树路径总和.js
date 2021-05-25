// 判断树中是否存在根节点到叶子结点的路径上所有结点值相加等于目标数。
// 递归方法，将问题缩小为判断一个子树的叶子节点是否等于 <目标和-父节点的值>
function hasPathSum1 (root, targetSum) {
    // 根节点为null
    if (!root) {
        return false;
    }
    // 子节点为叶子节点,判断叶子节点的值是否为目标和
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    return hasPathSum1(root.left, targetSum - root.val) || hasPathSum1(root.right, targetSum - root.val);
}

// 广度优先搜索方法
function hasPathSum2(root, targetSum) {
    if (!root) {
        return false;
    }
    let nodeQueue = [root];
    let valQueue = [root.val];
    while(nodeQueue.length) {
        let curNode = nodeQueue.shift();
        let curVal = valQueue.shift();
        // 当前节点是叶子节点
        if (!curNode.left && !curNode.right) {
            if (curVal === targetSum) {
                return true;
            }
            continue;
        }
        // 当前节点左子树不为空
        if (curNode.left !== null) {
            nodeQueue.push(curNode.left);
            valQueue.push(curNode.left.val + curVal);
        }
        // 当前节点右子树不为空
        if (curNode.right !== null) {
            nodeQueue.push(curNode.right);
            valQueue.push(curNode.right.val + curVal)
        }
    }
    return false;
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
  const targetSum = 6;
  console.log(hasPathSum1(treeObj, targetSum));
  console.log(hasPathSum2(treeObj, targetSum));
