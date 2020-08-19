/**
 * 约瑟夫环问题
 * 有一个数组存放0-99,要求每隔两个数删除掉一个数，到末尾时循环至开头继续进行，求最后一个被删掉的数。
 */
const { Queue } = require('./queue-1')

function joseph_ring(arrList) {
    const queue = new Queue()
    let len = arrList.length
    let i = 0
    while (i < len) {
        queue.enqueue(arrList[i])
        i++
    }

    let index = 0
    while (queue.size() != 1) {
        let item = queue.dequeue()
        index++
        if (index % 3 !== 0) {
            queue.enqueue(item)
        }
    }
    return queue.head()
}
console.log(joseph_ring([0,1,2,3,4,5,6,7,8,9]))