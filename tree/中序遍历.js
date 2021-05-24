function inorderTraversal(root) {
  let result = [];
  inorderNode(root, result);
  return result;
}
function inorderNode(node, result) {
  if (!node) {
    return;
  }
  inorderNode(node.left, result);
  result.push(node.val);
  inorderNode(node.right, result);
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

console.log(inorderTraversal(treeObj));