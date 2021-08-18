// 删除链表的倒数第N个节点
// 给定一个链表,删除链表的倒数第n个节点,并返回链表的头节点.
function removeNthFromEnd(head, n) {
  let left = head;
  let right = head;
  for (let i = 0; i < n; i++) {
    // right为第n个节点
    right = right.next;
  }
  if (right == null) {
    return null;
  }
  while (right) {
    // right指针走到最后一个节点的时候, left就是倒数第n个节点的前一个节点.
    right = right.next;
    if (right == null) {
      let next = left.next.next;
      left.next = next;
    }
    left = left.next; // left指针
  }
  return head;
}
