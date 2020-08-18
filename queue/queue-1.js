/**
 * queue 队列 
 * 特点： 先进先出，出队列在头，入队列在尾
 * 使用数组实现队列
 * 队列方法：
 * enqueue
 * dequeue
 * head
 * size
 * clear
 * tail
 * isEmpty
 * 
 */
function Queue() {
    const arr = []
    // 尾部插入元素
    this.enqueue = function (item) {
        arr.push(item)
    }

    // 头部移除元素
    this.dequeue = function () {
        return arr.shift()
    }
    // 返回头部元素
    this.head = function () {
        return arr[0]
    }
    // 返回队列长度
    this.size = function () {
        return arr.length
    }
    // 清空队列
    this.clear = function () {
        arr = []
    }
    // 返回尾部元素
    this.tail = function () {
        return arr[arr.length-1]
    }
    // 判断是否为空
    this.isEmpty = function () {
        return arr.length == 0
    }
}
