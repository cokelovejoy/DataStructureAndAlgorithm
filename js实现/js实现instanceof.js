// js 实现 instanceof
// instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置。
// instanceof 是用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true,否则返回false。
function myInstanceof(left, right) {
  let leftProto = Object.getPrototypeOf(left); // 对象的原型
  let rightProto = right.prototype; // 构造函数的prototype对象
  // 判断构造函数的 prototype 对象是否在对象的原型链上
  // 循环遍历实例的原型链
  while (leftProto !== null) {
    if (leftProto === rightProto) {
      return true;
    }
    leftProto = Object.getPrototypeOf(leftProto);
  }
  return false;
}
