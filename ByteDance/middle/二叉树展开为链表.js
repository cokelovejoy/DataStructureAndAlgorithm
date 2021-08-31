// 给顶一个二叉树的根节点root,请将它展开为一个单链表
// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，
// 而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
// 原地修改该二叉树
// 左子树和右子树分别操作:将左子节点替换到右边,将原来的右子节点接到左子节点之后.
// 递归处理
// 将二叉树展开为单链表之后，单链表中的节点顺序即为二叉树的前序遍历访问各节点的顺序。
// 因此，可以对二叉树进行前序遍历，获得各节点被访问到的顺序。由于将二叉树展开为链表之后会破坏二叉树的结构，因此在前序遍历结束之后更新每个节点的左右子节点的信息，将二叉树展开为单链表。
// 使用前序遍历,先用数组保存,前序遍历的结果,然后循环遍历数组中的节点,将前后节点连接
function flatten(root) {
  // 前序遍历
  function dfs(root, list) {
    if (!root) {
      return;
    }
    list.push(root);
    dfs(root.left, list);
    dfs(root.right, list);
  }
  let list = [];
  dfs(root, list);
  let len = list.length;
  // 使用数组记录节点.
  for (let i = 1; i < len; i++) {
    // 将前一个结点和下一个结点拼接
    // 前一个结点left为null,right为下一个节点
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
}

// 优化: 寻找前驱结点法, 空间复杂度为O(1)
// 对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，作为前驱节点，将当前节点的右子节点赋给前驱节点的右子节点，
// 然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束。

var flatten = function(root) {
  let curr = root;
  while (curr !== null) {
      if (curr.left !== null) {
          const next = curr.left;
          let predecessor = next;
          // 获取最后一个节点
          while (predecessor.right !== null) {
              predecessor = predecessor.right;
          }
          // 拼接
          predecessor.right = curr.right;
          curr.left = null;
          curr.right = next;
      }
      curr = curr.right;
  }
};

