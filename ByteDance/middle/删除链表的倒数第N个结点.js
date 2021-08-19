// 删除链表的倒数第N个节点
// 给定一个链表,删除链表的倒数第n个节点,并返回链表的头节点.
// 快慢指针
function removeNthFromEnd(head, n) {
  let dummyHead = {next:null};
  let fast = head;
  let slow = dummyHead;
  dummyHead.next = head;
  for (let i = 0; i < n; i++) {
    // fast 为第n个节点
    fast = fast.next;
  }
  
  while (fast) {
    // fast指针走到最后一个节点的时候, slow就是倒数第n个节点的前一个节点.
    fast = fast.next;
    slow = slow.next; // slow指针
  }
  slow.next = slow.next.next; // 改变倒数第n个节点的前一个节点的指向。

  return dummyHead.next;
}
