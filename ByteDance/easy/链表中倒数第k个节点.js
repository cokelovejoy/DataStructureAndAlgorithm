// 输入一个链表，输出该链表中倒数第k个节点
// 方法1 先遍历一边计算链表元素的个数 ，然后指针走n-k步，即为倒数第k个节点
function getKthFromEnd(head, k) {
  let root = head;
  let len = 0;
  while (root) {
    root = root.next;
    len++;
  }
  let step = len - k;
  while (step > 0) {
    step--;
    head = head.next;
  }
  return head;
}
// 方法2 双指针， 快指针先行
function getKthFromEnd2(head, k) {
  let latter = head;
  let former = head;
  for (let i = 0; i < k; i++) {
    // 先让快指针先行k步
    if (former === null) {
      return null;
    }
    former = former.next;
  }
  while (former !== null) {
    // 前后两个指针同时一步一步向后移动，当 former指针为null时，latter就走到了倒数第k个节点。
    former = former.next;
    latter = latter.next;
  }
  return latter;
}
