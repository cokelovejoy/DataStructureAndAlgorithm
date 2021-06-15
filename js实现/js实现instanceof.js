// instanceof运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置。
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);// 对象的原型
    let prototype = right.prototype; // 构造函数的prototype
    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while(true) {
        if (!proto) {
            return false;
        }
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}