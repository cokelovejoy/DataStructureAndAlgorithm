// 模拟call
Function.prototype.myCall = function (context) {
    // 传入的上下文为null的时候，采用window
    context = context || window
    // 此处没有考虑context非object情况
    // this就是当前函数， 把当前函数作为属性绑定给上下文对象，再删除该属性
    context.fn = this
    // 处理参数
    let args = []
    for (let i = 1,len = arguments.length; i < len; i++) {
        args.push(arguments[i])
    }
    let result = context.fn(...args)
    // 删除属性
    delete context.fn
    return result
}

function bar() {
    console.log(this.value)
}
const foo = {
    value: 'coke'
}
bar.myCall(foo)
