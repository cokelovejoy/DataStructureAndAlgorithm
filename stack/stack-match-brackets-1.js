/* 
* 匹配括号
* 编写一个函数判断字符串中的括号是否合法，所谓合法，就是括号成对出现。
*/

const { Stack } = require('./stack')

function matchBrackets(str) {
    const stack = new Stack()
    for (let s of str.split('')) {
        if (s == ')' && stack.size() == 0) {
            return false
        } else if (s == '(') {
            stack.push(s)
        } else if (s == ')' && stack.size() != 0) {
            stack.pop()
        }
    }
   
    return stack.size() == 0
}

const bracketStr = '(())1231()'
console.log(matchBrackets(bracketStr))