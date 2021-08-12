// LRU缓存机制
// 设计和实现一个LRU缓存机制
// 实现LRUCache类：
/**
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * 实现 get(key) 方法，如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * 实现 put(key, value)方法，如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
 * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */

// LRU 缓存淘汰算法就是一种常用策略。
// LRU 的全称是 Least Recently Used，也就是说我们认为最近使用过的数据应该是是「有用的」，
// 很久都没用过的数据应该是无用的，内存满了就优先删那些很久没用过的数据。

// 核心 使用双向链表和哈希表的结合体。
// 哈希表查询速度快，链表有顺序之分。
// 链表节点：存key和对应的数据值。
// 哈希表快速访问存储于双向链表中的数据 key存双向链表中存的key，value存链表节点的引用。

// Node类
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// LRUCache类
// 虚拟头尾节点，不存数据，只是为了让真实头尾节点和其他节点一致，方便快速访问头尾节点。
// 初始还没有添加真实节点，要将虚拟头尾节点连接在一起
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 缓存容量
        this.hash = {}; // 哈希表
        this.count = 0; // 记录缓存的数目
        this.dummyHead = new ListNode(); // 虚拟头节点
        this.dummyTail = new ListNode(); // 虚拟尾节点
        this.dummyHead.next = this.dummyTail; // 将虚拟头尾节点连接在一起
        this.dummyTail.prev = this.dummyHead;

    }
    // 实现get方法
    get(key) {
        let node = this.hash[key]; // 从哈希表中获取对应的节点。
        if(node == null) return -1;// 节点不存在，返回-1
        this.moveToHead(node); // 被读取了，将该节点移动到链表的头部
        return node.value; // 返回节点值
    }
    // moveToHead方法实现
    moveToHead(node) {
       this.removeFromList(node); // 从链表中删除节点
       this.addToHead(node); // 添加到链表的头部
    }
    // removeFromList 从链表中移除节点
    removeFromList(node) {
        let temp1 = node.prev; // 暂存前驱节点
        let temp2 = node.next; // 暂存后继节点
        temp1.next = temp2; // 前驱节点的next指向后继
        temp2.prev = temp1; // 后继节点的prev指向前驱节点
    }
    // addToHead 将节点添加到头
    addToHead(node) {
        node.prev = this.dummyHead;
        node.next = this.dummyHead.next;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node
    }
    // put方法实现
    // 写入新数据，先检查容量，决定是否删除老的节点，然后创建新的节点，添加到链表头部，映射到哈希表。
    put(key, value) {
        let node = this.hash[key]; // 获取链表中的node
        if (!node) { // 该节点不存在 
            if (this.count == this.capacity) { // 缓存容量已经满了，删除最远使用的数据。
                this.removeLRUItem();
            }
            let newNode = new ListNode(key, value) // 创建新节点
            this.hash[key] = newNode; // 存入哈希表
            this.addToHead(newNode);// 添加到链表的头部
            this.count++; // 缓存数目+1
        } else { // 已经存在于链表，老数据
            node.value = value; // 更新value
            this.moveToHead(node); // 将节点移到链表的头部
        }
    }
    // removeLRUItem 删除老节点的方法
    removeLRUItem() {
        let tail = this.popTail(); // 将它从链表的尾部删除 
        delete this.hash[tail.key]; // 从哈希表中删除节点的key
        this.count--; // 缓存数目-1
    }
    // 删除链表尾节点
    popTail() {
        let tail = this.dummyTail.prev; // 通过虚拟尾节点找到真实的尾节点
        this.removeFromList(tail); // 删除该真实尾节点
        return tail; // 返回被删除的节点
    }
}