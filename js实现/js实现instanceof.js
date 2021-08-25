// instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置。
// instanceof 是用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true,否则返回false。
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);// 对象的原型
    let prototype = right.prototype; // 构造函数的prototype对象
    // 判断构造函数的 prototype 对象是否在对象的原型链上
    // 循环遍历实例的原型对象
    while(true) {
        if (!proto) { // proto 为 null 时, 实例的原型对象结束
            return false;
        }
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}