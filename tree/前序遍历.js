// 前序遍历
function preorderTraversal(root) {
  let result = [];
  preorderNode(root, result);
  return result;
}
function preorderNode(node, result) {
  if (!node) {
    return;
  }
  result.push(node.val); // 先把根节点插入
  preorderNode(node.left, result); // 遍历左子树
  preorderNode(node.right, result);// 遍历右子树
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
