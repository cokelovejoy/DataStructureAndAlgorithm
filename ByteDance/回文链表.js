// 回文链表
// 判断一个链表是否为回文链表
// 思路：
// 1.复制链表值到数组列表中。
// 2.使用双指针法判断是否为回文。
function isPalindrome(head) {
  let vals = [];
  while (head != null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
}

// 使用递归： 使用递归反向迭代节点，同时使用递归函数外的变量向前迭代，就可以判断链表是否为回文。

function isPalindrome2(head) {
  let frontPointer = head;
  function recursivelyCheck(currentNode) {
    if (currentNode !== null) {
      if (!recursivelyCheck(currentNode.next)) {
        return false;
      }
      if (currentNode.val !== frontPointer.val) {
        // 开始比较时，currentNode已经移动到链表末尾，此时frontPointer链表头部开始移动，因此实现了一个正向和反向的双指针移动。
        return false;
      }
      frontPointer = frontPointer.next; // 递归函数之外的指针， 正向向前移动
    }
    return true;
  }
  return recursivelyCheck(head);
}
// 快慢指针
// 1.找到前半部分链表的尾节点。
// 2.反转后半部分链表。
// 3.判断是否回文。
// 4.恢复链表。
// 5.返回结果
function isPalindrome3(head) {
  if (head == null) {
    return true;
  }
  // 反转后半部分链表
  function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  }
  // 前半部分的尾节点
  function endOfFirstHalf(head) {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  const firstHalfEnd = endOfFirstHalf(head); // 前半部分链表的尾节点
  const secondHalfStart = reverseList(firstHalfEnd.next); // 反转后半部分链表

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
    if (p1.val != p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart); // 还原链表
  return result;
}
