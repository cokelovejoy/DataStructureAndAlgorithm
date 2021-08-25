// js 实现Promise
/**
 * 实现 Promise 需要完全读懂 Promise A+ 规范，不过从总体的实现上看，有如下几个点需要考虑到：
 * Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），
 * 状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
 * then 需要支持链式调用
 */
const PENDING = "pending"; // 等待状态
const RESOLVED = "resolved"; // 已经成功状态
const REJECTED = "rejected"; // 已经失败状态

function MyPromise(fn) {
  // 保存初始化 状态
  let self = this;
  // 初始化状态
  this.state = PENDING;
  // 用于保存resolve或者rejected传入的值
  this.value = null;
  // 用于保存resolve的回调函数
  this.resolvedCallbacks = [];
  // 用于保存reject的回调函数
  this.rejectedCallbacks = [];

  // 状态转变为resolved方法
  function resolve(value) {
    // 判断传入的元素是否为Promise的实例，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      // 只有状态为pending时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = RESOLVED;
        // 设置传入的值
        self.value = value;
        // 执行回调函数
        self.resolvedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  // 状态转变为rejected 方法
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为pending时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = REJECTED;
        // 设置传入的值
        self.value = value;
        // 执行回调函数
        self.rejectedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  // 将两个方法传入函数执行
  try {
    fn(resolve, reject);
  } catch (e) {
    // 遇到错误时，捕获错误，执行reject函数
    reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function (value) {
          return value;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function (error) {
          throw error;
        };
  // 如果是等待状态，则将函数加入对应列表中
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }
  // 如果状态已经确定，则直接执行对应状态的函数
  if (this.state === RESOLVED) {
    onResolved(this.value);
  }
  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};

// class 写法
class Promise {
  callbacks = [];
  state = 'pending';//增加状态
  value = null;//保存结果
  constructor(fn) {
      fn(this._resolve.bind(this), this._reject.bind(this));
  }
  then(onFulfilled, onRejected) {
      return new Promise((resolve, reject) => {
          this._handle({
              onFulfilled: onFulfilled || null,
              onRejected: onRejected || null,
              resolve: resolve,
              reject: reject
          });
      });
  }
  _handle(callback) {
      if (this.state === 'pending') {
          this.callbacks.push(callback);
          return;
      }

      let cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;

      if (!cb) {//如果then中没有传递任何东西
          cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
          cb(this.value);
          return;
      }

      let ret = cb(this.value);
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(ret);
  }
  _resolve(value) {

      if (value && (typeof value === 'object' || typeof value === 'function')) {
          var then = value.then;
          if (typeof then === 'function') {
              then.call(value, this._resolve.bind(this), this._reject.bind(this));
              return;
          }
      }

      this.state = 'fulfilled';//改变状态
      this.value = value;//保存结果
      this.callbacks.forEach(callback => this._handle(callback));
  }
  _reject(error) {
      this.state = 'rejected';
      this.value = error;
      this.callbacks.forEach(callback => this._handle(callback));
  }
}

// 实现Promise.resolve
// Promsie.resolve(value) 可以将任何值转成值为 value 状态是 fulfilled 的 Promise，
// 但如果传入的值本身是 Promise 则会原样返回它。
Promise.resolve= function (value) {
  if (value && value instanceof Promise) {
    return value;
  } else if (value && typeof value === 'object' && typeof value.then === 'function') {
    let then = value.then;
    return new Promise(resolve => {
      then(resolve);
    });
  } else if (value) {
    return new Promise(resolve => resolve(value));
  } else {
    return new Promise(resolve => resolve());
  }
}

// 实现Promise.reject
// Promise.reject() 会实例化一个 rejected 状态的 Promise。但与 Promise.resolve() 不同的是，
// 如果给 Promise.reject() 传递一个 Promise 对象，则这个对象会成为新 Promise 的值。
Promise.reject = function(reason) {
  return new Promise((resolve, reject) => reject(reason))
}

// 实现Promise.all
// 传入的所有 Promsie 都是 fulfilled，则返回由他们的值组成的，状态为 fulfilled 的新 Promise；
// 只要有一个 Promise 是 rejected，则返回 rejected 状态的新 Promsie，且它的值是第一个 rejected 的 Promise 的值；
// 只要有一个 Promise 是 pending，则返回一个 pending 状态的新 Promise；
Promise.all = function(promiseArr) {
  let index = 0, result = []
  return new Promise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
          Promise.resolve(p).then(val => {
              index++
              result[i] = val
              if (index === promiseArr.length) {
                  resolve(result)
              }
          }, err => {
              reject(err)
          })
      })
  })
}

// 实现Promise.race
// Promise.race 会返回一个由所有可迭代实例中第一个 fulfilled 或 rejected 的实例包装后的新实例。
Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
      promiseArr.forEach(p => {
          Promise.resolve(p).then(val => {
              resolve(val)
          }, err => {
              reject(err)
          })
      })
  })
}