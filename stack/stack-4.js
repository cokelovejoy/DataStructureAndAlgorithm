/**
 * 使用两个栈实现一个队列
 * 实现enqueue，dequeue，head三个方法
 * 
 */
const {Stack} = require('./stack')

function stackQueue() {
    let data_stack = new Stack();
    let empty_stack = new Stack();

    this.enqueue = function (item) {
        data_stack.push(item);
    }
    this.dequeue = function () {
        if (empty_stack.isEmpty() && data_stack.isEmpty()) {
            return null;
        }
        // 空栈中没数据，说明数据都在数据栈中，将数据栈中的全部出栈，再压入空栈中。
        // 此时空栈中的top就是队列的head，将其pop
        if (empty_stack.isEmpty()) {
            while (!data_stack.isEmpty()) {
                empty_stack.push(data_stack.pop());
            }
        }
        // 空栈中有数据时，pop出去的都是队列出队列的头部的元素。
        return empty_stack.pop();

    }
    this.head = function () {
        if (data_stack.isEmpty() && empty_stack.isEmpty()) {
            return null;
        }
        // 空栈中没数据，说明数据都在数据栈中，将数据栈中的全部出栈，再压入空栈中。
        // 此时空栈中的top就是队列的head
        if (empty_stack.isEmpty()) {
            while (!data_stack.isEmpty()) {
                empty_stack.push(data_stack.pop())
            }
        }
        // 空栈中有数据时，则top就是队列的head。
        return empty_stack.top()
    }
}

const stackqueue = new stackQueue();
stackqueue.enqueue(0);
stackqueue.enqueue(1);
console.log(stackqueue.head());

stackqueue.dequeue();
stackqueue.dequeue();

stackqueue.enqueue(2);
stackqueue.enqueue(3);
console.log(stackqueue.head())