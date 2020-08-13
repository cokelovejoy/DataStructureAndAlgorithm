/* 
*   计算逆波兰式，也叫后缀表达式
*   1. 中缀表达式：'( a + b ) * ( c + d )'
*   2. 后缀表达式：'a b + c d + *'
*   3. 在计算机计算表达式的时候，会先将中缀表达式转换为后缀表达式，然后再按后缀表达式的规则去计算。
*/

// 实现中缀表达式转换为后缀表达式
const charLit = ['(', ')', '+', '-', '*', '/' ]

const { Stack } = require('./stack.js')
function middleExpToLastExp(str) {
    const stack = new Stack()          // 保存符号
    const expArr = []                  // 保存表达式字符
    for (let s of str) {
        if (!charLit.includes(s)) {   // 当前符号是数字
            expArr.push(s)
        } else if (s == '(') {        // 当前符号是'('
            stack.push(s)
        } else if (s == ')') {        // 当前符号是 ')'
            expArr.push(stack.pop())
            stack.pop()
        } else if (s == '*' || s == '/') {  // 当前符号是 '*' 或 '/'
            stack.push(s)
        }
         else if (s == '+' || s == '-') {   // 当前符号是 '+' 或者 '-'
            //  + 优先级小于栈顶符号优先级 , 栈顶先出来保存到数组，然后当前符号入栈。
            if (stack.top() == '*' || stack.top() == '/') {
                expArr.push(stack.pop())
            }
            // 当前符号入栈
            stack.push(s)
        }
    }
    while (!stack.isEmpty()) {
        expArr.push(stack.pop())
    }
    return expArr.join()
}

// 计算后缀表达式
function calculateLastExp(str) {
    const stack = new Stack()
    for (let s of str) {
        // 数字入栈
        if (!charLit.includes(s)) {
            stack.push(s)
        } else { 
        // 弹出两个数计算
            let value1 = stack.pop()
            let value2 = stack.pop()
            let exp = value2 + s + value1
            stack.push(eval(exp))
        } 
    }
    console.log(stack.top())
}

// 中缀表达式 转 后缀表达式
const res = middleExpToLastExp('(1+2)*(3+4)')
const res2 = middleExpToLastExp(["(", "4", "+", "(", "13", "/", "5", ")", ")"])
console.log(res)
console.log(res2)

// 计算后缀表达式
calculateLastExp(["4", "10", "5", "/", "+"])
calculateLastExp(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] )
