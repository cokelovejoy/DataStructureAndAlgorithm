// 反转链表
// [5,4,3,2,1] -> [1,2,3,4,5]
function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let preNode = null; // 头结点
  let curNode = head; // 当前要操作的结点
  while (curNode != null) {
    let nextNode = curNode.next; // 先保存当前结点的下一个结点
    curNode.next = preNode; // 将当前结点的next 指向 前一结点
    preNode = curNode; // 将前一结点 向后移动
    curNode = nextNode; // 将当前结点 向后移动
  }
  return preNode; // 循环结束后，curNode为null，preNode即为头节点。
}