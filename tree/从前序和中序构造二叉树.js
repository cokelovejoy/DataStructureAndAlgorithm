// 已知前序遍历和中树遍历的数组，构造这个二叉树
function buildTree(preorder, inorder) {
  let preLen = preorder.length;
  let inLen = inorder.length;
  if (preLen != inLen) {
    throw new Error("输入数据有误");
  }
  return buildTree2(preorder, 0, preLen - 1, inorder, 0, inLen - 1);
}

/**
 * 数组preorder为在索引区间[preLeft, preRight]中的所有元素
 * 数组inorder为索引区间[inLeft, inRight]中的所有元素
 *
 * @param preorder 二叉树前序遍历的结果
 * @param preLeft 二叉树前序遍历结果的左边界下标
 * @param preRight 二叉树前序遍历结果的右边界下标
 * @param inorder 二叉树后序遍历的结果
 * @param inLeft 二叉树后序遍历结果的左边界下标
 * @param inRight 二叉树后序遍历结果的右边界下标
 * @return 返回二叉树的根节点
 */

function buildTree2(preorder, preLeft, preRight, inorder, inLeft, inRight) {
  // 终止条件：左边界下标大于右边界下标
  if (preLeft > preRight || inLeft > inRight) {
    return null;
  }
  // 先序遍历的起点元素为根元素, 记录根节点的值
  let pivot = preorder[preLeft];
  // 当前根节点
  let root = { val: pivot, left: null, right: null };

  // 根据根节点元素值，找到根节点在中序遍历中的下标
  let pivotIndex = inLeft;
  while (inorder[pivotIndex] != pivot) {
    pivotIndex++;
  }

  // 递归地用前序遍历序列和中序遍历序列构造根结点的两个子树的
  // 先递归构建左子树
  root.left = buildTree2(
    preorder, 
    preLeft + 1,                        // 前序遍历的左子树的第一个元素的下标
    pivotIndex - inLeft + preLeft,      // 前序遍历的左子树的最后一个元素的下标
    inorder,      
    inLeft,                             // 中序遍历的左子树的第一个元素的下标
    pivotIndex - 1                      // 中序遍历的左子树的最后一个元素的下标
  );
  // 递归构建右子树
  root.right = buildTree2(
    preorder,
    pivotIndex - inLeft + preLeft + 1,// 前序遍历的右子树的第一个元素的下标
    preRight,                         // 前序遍历的右子树的最后一个元素的下标
    inorder,
    pivotIndex + 1,                   // 中序遍历的右子树的第一个元素的下标
    inRight                           // 中序遍历的右子树的最后一个元素的下标
  );
  return root;
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));

