/* 
 * 实现一个栈，除了常见的push，pop方法以外，提供一个min方法，返回栈里最小的元素，且时间复杂度为o(1)
 * 使用俩个栈 一个原始数据栈，一个最小数据栈。
 * 最小数据栈栈顶元素永远是最小值。
 * 使用两个栈的原因是 要保证 在pop元素后，最小元素仍然在最小栈栈顶。
 * 只要修改push pop min
*/
const { Stack } = require('./stack.js')

function minStack() {
    
    const datastack = new Stack()
    const minstack = new Stack()

    // 入栈
    this.push = function (val) {
        datastack.push(val)
       
        if (minstack.isEmpty() || val < minstack.top()) {
            minstack.push(val)
        } else {
            // 栈顶始终是最小值
            minstack.push(minstack.top())
        }
    }
    // 弹出栈顶元素， 最小栈也要弹出
    // 
    this.pop =  function () {
        minstack.pop()
        return datastack.pop()
    }
    // 返回栈顶元素
    this.top =  function () {
        return datastack.top()
    }
    // 判断栈是否为空
    this.isEmpty = function () {
        return datastack.isEmpty()
    }
    // 返回栈中元素个数
    this.size = function () {   
        return datastack.size()
    }
    // 清空栈
    this.clear = function () {
        datastack.clear()
    }
    // 打印栈中的所有元素
    this.print = function () {
        datastack.print()
    }
    // 返回最小值
    this.min = function () {
        return minstack.top()
    }

}

const minstack = new minStack()
minstack.push(1)
minstack.push(2)
minstack.push(3)
minstack.push(4)
minstack.push(5)
minstack.push(0)
minstack.push(1)
minstack.pop()
minstack.pop()
console.log(minstack.min())
