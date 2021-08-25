// 两数相加
// 给定两个非空的链表，表示两个非负整数。
// 它们每位数字都是按照逆序的方式存储，并且每个节点只能存储一位数字.
// 请将两个数相加,并以下相同的形式返回一个表示和的链表.
function addTwoNumbers(l1, l2) {
  let add = 0; // 进位
  let dummyNode = { next: null };
  let list = dummyNode;
  while (l1 != null || l2 != null) {
    let num1 = !l1 ? 0 : l1.val;
    let num2 = !l2 ? 0 : l2.val;
    let value = num1 + num2 + add;
    add = parseInt(value / 10);
    list.next = { val: value % 10, next: null };
    list = list.next;
    l1 = !l1 ? null : l1.next;
    l2 = !l2 ? null : l2.next;
  }
  if (add!=0) {
    list.next ={ val: add, next: null };
  }
  return dummyNode.next;
}

console.log(addTwoNumbers());
