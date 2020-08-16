// 模拟instanceOf
//  L instanceOf R
// L 表示左表达式，P表示右表达式

function instance_of(L, R) {
    // 获取R的原型
    let o = R.prototype
    // 获取L的原型
    L = L.__proto__
    // 一直迭代判断两者的原型是否完全相等
    while (true) {
        if (L === null) return false
        if (o === L) return true
        // 向上寻找L的原型
        L = L.__proto__
    }
}