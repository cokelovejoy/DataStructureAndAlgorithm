/**
 * 使用队列打印杨辉三角的前n行， n >= 1
 * 杨辉三角中的每一行，都依赖于上一行，假设在队列里存储第n - 1行的数据。
 * 输出第n行时，只需要将队列里的数据依次出队列，进行计算得到下一行的数值并将计算所得放入到队列中。
 * 
 */

const { Queue } = require('./queue-1');

function printYangHui(n) {
    let queue = new Queue();
    // 初始化队列
    queue.enqueue(1);
    // 第一层循环 控制打几层
    for (let i = 1; i <= n; i++) {
        let line = "";
        let pre = 0;
        // 第二层循环 控制打印第i层， 第一行 1个，第2行 2个，第三行 3个
        for (let j = 0; j < i; j++) {
            let item = queue.dequeue();
            line += item + " ";

            let value = item + pre;     // 当前队列出的 + 上一行队列出的 作为下一行的值入队列。 
            pre = item;                 // 记录上一行队列中出的值
            queue.enqueue(value);
        }
        queue.enqueue(1);       // 每一层最后一个数字是1, 上面的for循环没有计算最后一个数
        console.log(line);
    }
}

// 每一行数据后面多存储一个0 作为分界。
function printYangHui2(n) {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(0);
    for (let i = 0; i < n; i++) {
        let line = "";
        let pre = 0;
        while (true) {
            let item = queue.dequeue();
            if (item == 0) {
                queue.enqueue(1);
                queue.enqueue(0);
                break;
            } else {
                line += item + " ";
                let value = item + pre;
                pre = item;
                queue.enqueue(value)
            }
        }
        console.log(line)
    }
}
printYangHui(10);
printYangHui2(10);