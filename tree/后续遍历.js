function postorderTraversal(root) {
  let result = [];
  postorderNode(root, result);
  return result;
}
function postorderNode(node, result) {
  if (!node) {
    return;
  }
  postorderNode(node.left, result);
  postorderNode(node.right, result);
  result.push(node.val);
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
console.log(postorderTraversal(treeObj));