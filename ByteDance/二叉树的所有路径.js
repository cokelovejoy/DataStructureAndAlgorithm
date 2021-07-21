// 二叉树的所有路径
// 给定一个二叉树，返回所有根节点到叶子节点的路径
function binaryTreePaths(root) {
  let paths = [];
  function setpath(root, path) {
    if (root) {
      path += root.val.toString();
      console.log("---- ", path);
      if (!root.left && !root.right) {
        paths.push(path); // 当前节点是叶子节点，将路径添加到结果中
      } else {
        path += "->"; // 不是叶子节点，继续递归遍历
        setpath(root.left, path);
        setpath(root.right, path);
      }
    }
  }
  setpath(root, "");
  return paths;
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
console.log(binaryTreePaths(treeObj));
