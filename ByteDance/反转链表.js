// 反转链表
// 第一种利用数组保存，再reverse，最后再遍历数组，保存进链表
function reverseList1(head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  list.reverse();
  let root = { val: null, next: null };
  let cur = root;
  for (let i = 0; i <= list.length - 1; i++) {
    let next = { val: list[i], next: null };
    cur.next = next;
    cur = cur.next;
  }
  return root.next;
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
console.log(JSON.stringify(reverseList(head)));

// 反转链表方法二 迭代+头插法
function reverseList2(head) {
  let pre = null;  // 用于记录前一个节点, 一开始为null
  let cur = head;  // 指针 用于遍历链表
  let next = null; // 用于记录下一个节点
  while (cur !== null) {
    next = cur.next; // 先保存下一个节点
    cur.next = pre;  // 将当前节点的next指向记录的之前的节点
    pre = cur;       // 在保存当前节点，作为下一个节点的前一个节点
    cur = next; // 指针移动到下一个节点
  }
  return pre;
}

// 反转链表 使用递归
// 分解问题，按小的去处理
function reverseList3(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let node = reverseList(head.next); // 链表的最后一个节点 作为头节点返回。
  // 反转
  head.next.next = head;  // 如果head 为k节点，则head.next为k+1节点，此时希望反转，将k+1指向k节点。则head.next.next = head;
  head.next = null;       // 该行代码会做大部分无用功，指定每个节点的next为null，但是反转的时候会产生新的next。有用功的部分只是当原来的头节点变为尾节点时需要指向null （n1.next = null;）避免循环
  return node;
}
