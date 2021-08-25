// 函数柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数的技术
function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;
  args = args || [];
  return function () {
    let subArgs = args.slice(0);
    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足执行函数
      return fn.apply(this, subArgs);
    } else {
      // 不满足 递归返回柯里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

// 简单实现
function sumFn(a, b, c) {
  return a + b + c;
}
let sum = curry(sumFn);
sum(2)(3)(5); //10
sum(2, 3)(5); //10

function curry(fn, ...args) {
  let fnLen = fn.length,
    argsLen = args.length;
  //对比函数的参数和当前传入参数
  //若参数不够就继续递归返回curry
  //若参数够就调用函数返回相应的值
  if (fnLen > argsLen) {
    return function (...arg2s) {
      return curry(fn, ...args, ...arg2s);
    };
  } else {
    return fn(...args);
  }
}
