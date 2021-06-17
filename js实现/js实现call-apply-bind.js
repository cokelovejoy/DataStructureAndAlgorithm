// js 实现call, apply, bind方法
// context是上下文对象即重新绑定的this的指向
// 函数内的this是当前函数的引用

Function.prototype.myCall = function (context) {
  // 判断调用对象, this是调用call 方法的实例，它必须是一个方法
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  // 获取参数
  let args = [...arguments].slice(1);
  let result = null;
  // 判断context是否传入，如果未传入则设置为window
  contxt = context || window;
  // 将调用函数设为对象的方法
  contex.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
}
// apply 和 call 方法的区别，call的参数是多个，apply的参数是一个数组
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  let result = null;
  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn();
  return result;
}

// bind 和apply ，call的区别是：返回的是一个函数；和call 一样传入的参数可以是多个
Function.prototype.myBind = function (context) {
  if (typeof this != "function") {
    throw new TypeError("error");
  }
  let args = [...arguments].slice(1);
  let fn = this;
  return function Fn() {
      // 判断函数作为构造函数的情况
      // 这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传 入指定的上下文对象
      return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments))
  }
}