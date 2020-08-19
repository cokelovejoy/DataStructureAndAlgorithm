/**
 * 斐波那契数列：前两项是1，1,后面每项都是前两项的和。例如：1,1，2,3,5,8,13。
 * 使用队列计算斐波那契数列的第n项。
 */
const { Queue } = require('./queue-1')

function fibonacci(n) {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(1)
    let i = 2 
    if (n < 3) return
    while (i < n) {
        i++
        let first = queue.dequeue()
        let head = queue.head()
        let sum = first + head
        queue.enqueue(sum)

    }
    queue.dequeue()
    return queue.head()
}

console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))