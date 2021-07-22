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
    while(step > 0) {
        step--;
        head = head.next;
    }
    return head;
}