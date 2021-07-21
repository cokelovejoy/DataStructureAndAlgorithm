// 二叉树前序遍历, 先遍历根节点，再左子树，再右子树
function preorderTraversal(root) {
  function preorder(node, result) {
    if (!node) {
      return;
    }
    result.push(node.val);
    preorder(node.left, result);
    preorder(node.right, result);
  }
  let result = [];
  preorder(root, result);
  return result;
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
console.log(preorderTraversal(treeObj));
