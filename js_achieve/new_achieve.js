// 实现new
// objectFactory(className, arg1, arg2)
function objectFactory() {
    // 创建一个空对象
    const obj = new Object()
    // 获取构造函数
    const Consturctor = [].shift.call(arguments)
    // 获取构造函数的原型，并赋给空对象
    obj.__proto__ = Constructor.prototype
    // 绑定this：使用apply，将构造函数中的this指向新对象，这样新对象就可以访问构造函数中的属性和方法
    const ret = Constructor.apply(obj, argument)
    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof ret === "object" ? ret : obj
}
function People(name, age) {
    this.name = name
    this.age =age
}
let obj = objectFactory(People, 'coke', '18')