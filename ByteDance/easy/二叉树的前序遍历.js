// 二叉树前序遍历, 先遍历根节点，再左子树，再右子树
// 递归实现
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
// 迭代实现, 模拟了栈
function preorderTraversal2(node) {
  // 模拟栈
  let stack = [];
  let list = [];
  while (node !== null || stack.length) {
    while (node !== null) {
      list.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  return list;
}

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
console.log(preorderTraversal2(treeObj));
