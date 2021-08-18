// 给定一个单链表的头指针head和两个整数left和right，其中left<=right。请反转从位置left到位置right的链表节点，返回反转后的链表。
function reverseBetween(head, left, right) {
  function reverseLinkedList(head) {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next; // 先暂存下一个节点
      cur.next = pre;  // 将结点的next重新指向前一个节点
      pre = cur;  // 将前一个结点重新指向当前节点
      cur = next; // 将当前节点next往下移动
    }
  }
  // 使用虚拟头节点
  let dummyNode = { val: -1, next: null };
  dummyNode.next = head;
  let pre = dummyNode; // 子链表的前一个节点
  // 找到left的前一个结点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // 找到right的结点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  // 切断出一个子链表
  let leftNode = pre.next; // 记录子链表的头节点
  let cur = rightNode.next; // right的下一个结点
  // 切断连接
  pre.next = null;
  rightNode.next = null;

  // 反转子链表
  reverseLinkedList(leftNode);
  // 拼接原来的链表
  pre.next = rightNode;
  leftNode.next = cur;
  return dummyNode.next;
}
