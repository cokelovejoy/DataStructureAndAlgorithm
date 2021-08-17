// 重建二叉树
// 输入某二叉树的前序遍历和中序遍历,请构建该二叉树并返回其根节点
// 递归方法
function buildTree(preorder, inorder) {
  let n = preorder.length;
  let map = {};
  for (let i = 0; i < n; i++) {
    map[inorder[i]] = i;
  }
  function myBuildTree(preorder, inorder, preLeft, preRight, inLeft, inRight) {
    if (preLeft > preRight) {
      return null;
    }
    // 前序遍历的第一个节点为根节点
    let preRoot = preLeft;
    // 在中序遍历中定位根节点
    let inRoot = map[preorder[preRoot]];
    // 先建立根节点
    let root = { val: preorder[preRoot], left: null, right: null };
    // 得到左子树中的节点数目
    let leftSubtreeSize = inRoot - inLeft;
    // 递归构造左子树,并连接到根节点
    root.left = myBuildTree(
      preorder,
      inorder,
      preLeft + 1, // 左子树在 前序遍历中的 起止下标
      preLeft + leftSubtreeSize,
      inLeft, // 左子树在 中序遍历中的 起止下标
      inRoot - 1
    );
    // 递归构造右子树,并连接到根节点
    root.right = myBuildTree(
      preorder,
      inorder,
      preLeft + leftSubtreeSize + 1, // 右子树 在前序遍历中的起止下标
      preRight,
      inRoot + 1, // 右子树在中序遍历中的起止下标
      inRight
    );
    return root;
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}