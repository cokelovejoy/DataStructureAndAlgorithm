// 合并两个有序链表
// 将两个升序链表合并为一个新地升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 迭代法
function mergeTwoLists(l1, l2) {
  const preHead = { val: -1, next: null };
  let prev = preHead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      // 比较两个单链表的头节点，将小的那个头节点，加入prev链表，并将那个链表向后移动一位
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next; // 将自定义的指针向下移动。
  }
  prev.next = l1 === null ? l2 : l1; // 将剩下的链表合并到自定义的指针
  return preHead.next;
}
// 递归法
// 判断 l1 和 l2 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。
// 如果两个链表有一个为空，递归结束。
function mergeTwoLists2(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2); // 递归合并
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
}
