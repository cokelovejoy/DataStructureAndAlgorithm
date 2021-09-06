// 函数柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数的技术
// 核心：搜集函数的参数，在满足函数要执行的参数个数时，执行
function curry(fn, args) {
  let length = fn.length; // 函数定义时，需要传入的参数的个数
  args = args || [];
  return function () {
    let subArgs = args.slice(0);
    // 计算现有的所有参数
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
// 利用 curry.bind() 返回的是一个新函数，
// 新函数内部会将新函数的参数合并成一个再去执行currya.apply(null, [fn, ...args, newargs])
/**
 * function (newargs) {
 *  curry.apply(null, [fn, ...args, newargs])
 * }
 */
function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args);
}

// 简单实现
function sumFn(a, b, c) {
  return a + b + c;
}
let sum = curry(sumFn);
console.log(sum(2)(3)(5)); //10
console.log(sum(2, 3)(5)); //10
