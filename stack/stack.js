/* 
*   数组实现数据结构栈
*   1. 栈的特性： 后进先出，操作元素永远在栈顶
*   2. 实现方法： push pop top isEmpty size clear
*/
function Stack() {
    let items = [] // 数组存储数据
    // 入栈
    this.push = function (value) {
        items.push(value)
    }
    // 弹出栈顶元素，并返回弹出元素
    this.pop =  function () {
        return items.pop()
    }
    // 返回栈顶元素
    this.top =  function () {
        return items[items.length - 1]
    }
    // 判断栈是否为空
    this.isEmpty = function () {
        return items.length == 0
    }
    // 返回栈中元素个数
    this.size = function () {   
        return items.length
    }
    // 清空栈
    this.clear = function () {
        items = []
    }
    // 打印栈中的所有元素
    this.print = function () {
        console.log(items)
    }
}

module.exports = { Stack }
// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)

// stack.print()

// console.log(stack.size())