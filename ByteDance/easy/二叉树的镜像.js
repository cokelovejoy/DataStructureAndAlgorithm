// 二叉树的镜像
// 输入一个二叉树，该函数输出它的镜像
function mirrorTree(root) {
  if (!root) {
    return null;
  }
  let left = mirrorTree(root.left);
  let right = mirrorTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
const treeObj = {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
  };
  
  console.log(mirrorTree(treeObj));
  