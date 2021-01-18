// 二叉树遍历
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
// 先序遍历 - 先遍历根节点
function firstOrder(node) {
  // 递归边界
  if (!node) {
    return;
  }
  console.log("当前节点的data:", node.val);
  firstOrder(node.left);
  firstOrder(node.right);
}
firstOrder(treeObj);

console.log("--------------------------------------------");
// 中序遍历 - 中间遍历根节点
function middleOrder(node) {
  if (!node) {
    return;
  }
  middleOrder(node.left);
  console.log("当前节点的data:", node.val);
  middleOrder(node.right);
}
middleOrder(treeObj);
console.log("--------------------------------------------");

// 后序遍历- 最后遍历根节点
function lastOrder(node) {
  if (!node) {
    return;
  }
  lastOrder(node.left);
  lastOrder(node.right);
  console.log("当前节点的data:", node.val);
}
lastOrder(treeObj);
