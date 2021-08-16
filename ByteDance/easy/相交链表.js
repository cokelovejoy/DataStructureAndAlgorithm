// 相交链表
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

// 双指针遍历，指针A遍历完单链表a之后，遍历链表b；指针B遍历完单链表b之后，遍历链表a。
// 当指针AB重合时，就位于首个公共节点。
function getIntersectionNode(headA, headB) {
  let a = headA;
  let b = headB;
  while(a != b) {
    a = a != null ? a.next : headB;
    b = b != null ? b.next : headA;
  }
  return a;
}