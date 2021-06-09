// 二叉树右视图

function rightSideView(root) {
    let list = [];
    // 按先根，再右子树，最后左子树的顺序访问，能保证，右边的节点最先访问
    function dfs(root, depth) {
        if (root === null) {
            return;
        }
        // 如果当前节点所在深度和list个数相等，说明在该深度下当前节点是第一个被访问的节点，因此将当前节点加入list中。
        if (depth === list.length) {
            list.push(root.val);
        }
        depth++;
        dfs(root.right, depth);
        dfs(root.left, depth);
    }
    dfs(root, 0);
    return list;
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
  console.log(rightSideView(treeObj));