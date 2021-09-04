// 给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回null。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
// 说明：不允许修改给定的链表。

// 这链表类题目都可以使用双指针解决，例如寻找距离尾部第K个节点、寻找环入口、寻找公共尾部入口等。
// 算法流程： 关键找到 a， b的值
// 双指针第一次相遇
// 设置两个指针fast每次走2步， low每次走1步
// 第一种结果，fast走过链表末端，说明链表无环，直接返回null；
//    若有环，两指针一定会相遇，因为fast始终会追上slow。
// 第二种结果，fast == slow时，两指针在环中第一次相遇：此时分析fast与slow的步数关系
// 链表总共a+b个节点，不成环的节点个数a（不包含环入口节点），成环的节点个数b（包含环入口节点）
// 两个指针分别走了f，s步，则：
// 1.fast 是slow的两倍，即f=2s;
// 2.fast 比slow 多走了 n个环的长度，即f = s +nb（双指针都走过a步，然后在环内绕圈直到重合，重合时fast比slow多走环的长度的整数倍）
// 因次两式相减得到 s = nb, f = 2nb, 即fast和slow指针分别走了2n， n个环的周长。

// 如果让指针从链表头部一直向前走并统计步数为k，那么走到链表入口节点时的步数是：k= a + nb;
// 目前slow指针走的步数为nb步，因此让slow再走a步停下来，就可以找到环的入口。

// 双指针第二次相遇：
// slow指针位置不变，将fast重新指向链表头部；slow和fast同时每轮向前走一步，此时f=0,s=nb;
// 当fast指针走到f=a步时，slow指针走到s=a+nb,此时两指针重合，并同时指向链表环入口。
// 返回slow指针指向的节点。
function detectCycle(head) {
  let fast = head,
    slow = head;
  while (true) {
    if (fast == null || fast.next == null) {
      return null;
    }
    fast = fast.next.next; // 快指针走两步
    slow = slow.next; // 慢指针走一步
    if (fast == slow) {
      break;
    }
  }
  // 重新让fast指向head
  fast = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}
