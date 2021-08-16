// 环形链表
// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，返回true， 否则返回false

// 方法1 数组 记录已经保存的节点
function hasCycle1(head) {
  const ret = [];
  while (head) {
    if (ret.includes(head) > -1) {
      return true;
    } else {
      ret.push(head);
      head = head.next;
    }
  }
  return false;
}
// 方法2 哈希表
// 使用哈希表来存储所有已经访问过的节点。
// 每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。
// 重复这一过程，直到我们遍历完整个链表即可。
function hasCycle2(head) {
  const map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head);   // 以节点对象作为key
      head = head.next;
    }
  }
  return false;
}

// 方法3快慢指针法
// 快指针走两步，慢指针走一步
// 如果是环，快指针一定能追上慢指针
// 否则快指针一定会走到链尾
function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
