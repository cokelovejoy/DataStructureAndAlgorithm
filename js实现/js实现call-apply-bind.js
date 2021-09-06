// js 实现call, apply, bind方法
// context 是上下文对象即重新绑定的this的指向
// call函数内的 this 其实就是调用 call的函数实例对象，即当前函数
// 原理就是：将函数绑定到对象上，以对象的形式去调用函数，这样函数内的this就指向了这个对象
Function.prototype.myCall = function (context, ...args) {
  // 第一个参数为null或者undefined时，this指向全局对象window，值为原始值的指向该原始值的自动包装对象，如 String、Number、Boolean
  let cxt = context || window;
  // 将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)
  // 新建一个唯一的Symbol变量避免重复
  let func = Symbol();
  // this 就是这个函数实例
  cxt[func] = this;
  args = args ? args : [];
  // 以对象调用形式调用func,此时函数内部的this指向cxt 也就是传入的需要绑定的this指向
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
  // 删除该方法，不然会对传入对象造成污染（添加该方法）
  delete cxt[func];
  return res;
};

// apply 和 call 方法的区别，call的参数是多个，apply的参数是一个数组
Function.prototype.myApply = function (context, args = []) {
  let cxt = context || window;
  // 将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)
  // 新建一个唯一的Symbol变量避免重复
  let func = Symbol();
  cxt[func] = this;
  // 以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
  delete cxt[func];
  return res;
};

// bind 和apply ，call的区别是：返回的是一个函数；和call 一样传入的参数可以是多个
Function.prototype.myBind = function (context, ...args) {
  // 新建一个变量赋值为this，表示当前函数
  const fn = this;
  // 判断有没有传参进来，若为空则赋值[]
  args = args ? args : [];
  // 返回一个newFn函数
  // 这个函数可以作为一个构造函数来使用，当使用构造函数的时候，函数内部的this为函数的实例
  // 因此要通过new关键字去执行fn函数。
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) {
      // 通过 new 关键字，作为构造函数调用时，就是
      return new fn(...args, ...newFnArgs);
    }
    return fn.apply(context, [...args, ...newFnArgs]);
  };
};
