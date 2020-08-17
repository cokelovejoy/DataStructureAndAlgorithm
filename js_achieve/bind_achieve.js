// 实现bind
// 最后返回的是一个函数
// 函数 可以以new 的方式调用，也可以以直接调用
Function.prototype.myBind = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this; // this就是原函数
    var args = Array.prototype.slice.call(arguments, 1); // 获取参数数组

    var fNOP = function () {};
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments); // 获取参数数组
        // 当返回的这个函数以new形式调用，则this 是FNOP的实例，则给原函数绑定为this实例，否则以context为this的指向
        // 参数合并
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype; // 改变FNOP原型，原型指向原函数的原型
    fBound.prototype = new fNOP();   // 改变FBound原型，使用FNOP做中转
    return fBound;
}

function foo(name) {
    this.name = name
    console.log(this.value, name)
}
let bar = {
    value: 'coke'
}
const val = foo.myBind(bar, 'joy')
console.log(new val())
