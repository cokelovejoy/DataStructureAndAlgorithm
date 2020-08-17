// 实现apply
Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('type error')
    }
    context  = context || window
    context.fn = this
    let result
    // apply 与call 方法，参数不同
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}