// 反转链表
// 第一种利用数组保存，再reverse，最后再遍历数组，保存进链表
function reverseList(head) {
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
function reverseList(head) {
  let pre = null;
  let cur = head;
  let next = null;
  while(cur!== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// 反转链表 使用递归
// 分解问题，按小的去处理
function reverseList(head) {
    if (head===null || head.next===null) {
        return head;
    }
    let node = reverseList(head.next);
    // 反转
    head.next.next = head;
    head.next = null;
    return node;
}