/**
 * 用两个队列实现栈
 * 思路： 两个队列分别命名为queue_1, queue_2
 * 1. push: 实现push方法，如果两个队列都为空，那么默认向queue_1里添加数据，如果有一个不为空，则向这个不为空的队列里添加数据。
 * 2. pop： pop方法要删除的是栈顶元素，但这个栈顶元素其实就是队列的尾部元素。每一次做pop操作时，将不为空的队列里的元素一次删除并放入到另一个队列中直到遇到队列中只剩下一个元素，删除这个元素，其余的元素都跑到之前为空的队列中。
 * 3. top：两个队列，都为空或者一个为空，只需要返回不为空的队列的尾部元素即可。
 * 定义data_queue 始终指向不为空的队列，empty_queue始终指向那个为空的队列。
 */

 const {Queue} = require('./queue-1');
 function QueueStack() {
    let queue_1 = new Queue();
    let queue_2 = new Queue();
    let data_queue = null;   // 放数据的队列
    let empty_queue = null;  // 空队列备份使用
    // 初始化，始终让empty_queue 是空队列， data_queue 都是有数据的队列
    const init_queue = function () {
        // 都为空
        if (queue_1.isEmpty() && queue_2.isEmpty()) {
            data_queue = queue_1;
            empty_queue = queue_2;
        } else if (queue_1.isEmpty()) {
            // 只有queue_1 为空
            data_queue = queue_2;
            empty_queue = queue_1;
        } else if (queue_2.isEmpty()) {
            // 只有queue_2 为空
            data_queue = queue_1;
            empty_queue = queue_2;
        }
    }
    // 每一次改变栈的操作都必须先初始化 data_queue 和 empty_queue，始终让empty_queue 是空队列， data_queue 都是有数据的队列
    this.push = function (item) {
        init_queue();
        data_queue.enqueue(item);
    };
    this.pop = function () {
        init_queue();
        // 将数据队列里的移到空队列
        while(data_queue.size() > 1) {
            empty_queue.enqueue(data_queue.dequeue());
        }
        return data_queue.dequeue();
    }
    this.top = function () {
        init_queue();
        return data_queue.tail()
    }
 }


 const q_stack = new QueueStack()
 q_stack.push(1)
 q_stack.push(2)
 q_stack.push(3)
 q_stack.push(4)

 console.log(q_stack.top())
 console.log(q_stack.pop())
 console.log(q_stack.top())