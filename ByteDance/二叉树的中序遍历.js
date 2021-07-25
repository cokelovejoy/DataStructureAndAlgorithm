// 二叉树的中序遍历
// 给定一个二叉树的根节点root, 返回它的中序遍历
function inorderTravesal(root) {
    let res = [];
    function dfs(root, res) {
        if (!root) {
            return;
        }
        dfs(root.left, res);
        res.push(root.val);
        dfs(root.right, res);
    }
    dfs(root, res);
    return res;
}
const treeObj = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D",
      },
      right: {
        val: "E",
      },
    },
    right: {
      val: "C",
      right: {
        val: "F",
      },
    },
  };


console.log(inorderTravesal(treeObj))