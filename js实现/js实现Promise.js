// js 实现Promise
/**
 * 实现 Promise 需要完全读懂 Promise A+ 规范，不过从总体的实现上看，有如下几个点需要考虑到：
 * Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），
 * 状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
 * then 需要支持链式调用
 * 1. Promise状态：pending进行中，fulfilled已成功，rejected已失败
 *   状态转换：状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
 *   转换成Fulfilled，则有成功的data，转换成Rejected，则有失败reason。
 * 2. 必须提供then方法来接收最终结果 promise.then(onFulfilled, onRejected)
 *   onFulfilled和onRejected都是必须是函数，并且是可选参数
 *   在状态变为fulfilled时，onFulfilled才会被调用，且promise的值作为其第一个参数，只能执行一次
 *   在状态变为rejected时，onRejected才会被调用，且promise的值作为其第一个参数，只能执行一次
 *   在执行上下文栈只包含平台代码之前，onFulfilled和onRejected不能被调用。
 *   由于promise被考虑为平台代码，所以在自身处理程序被调用时可能已经包含一个任务调度队列。
 *   then可以被调用多次，then必须返回一个promise。
 */

const PENDING = "pending"; // 等待状态
const FULFILLED = "fulfilled"; // 已经成功状态
const REJECTED = "rejected"; // 已经失败状态
/**
 * Promise构造函数
 * excutor: 内部同步执行的函数
 */
class Promise {
  constructor(excutor) {
    const self = this;
    self.status = PENDING;
    self.onFulfilled = []; // 成功的回调
    self.onRejected = []; // 失败的回调

    // 异步处理成功调用的函数
    // PromiseA+ 2.1 状态只能由Pending转为fulfilled或rejected；fulfilled状态必须有一个value值；rejected状态必须有一个reason值。
    function resolve(value) {
      if (self.status === PENDING) {
        self.status = FULFILLED;
        self.value = value;
        // PromiseA+ 2.2.6.1 相同promise的then可以被调用多次，当promise变为fulfilled状态，全部的onFulfilled回调按照原始调用then的顺序执行
        self.onFulfilled.forEach((fn) => fn());
      }
    }

    function reject(reason) {
      if (self.status === PENDING) {
        self.status = REJECTED;
        self.value = reason;
        // PromiseA+ 2.2.6.2 相同promise的then可以被调用多次，当promise变为rejected状态，全部的onRejected回调按照原始调用then的顺序执行
        self.onRejected.forEach((fn) => fn());
      }
    }

    try {
      excutor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    // PromiseA+ 2.2.1 onFulfilled和onRejected是可选参数
    // PromiseA+ 2.2.5 onFulfilled和onRejected必须被作为函数调用
    // PromiseA+ 2.2.7.3 如果onFulfilled不是函数且promise1状态是fulfilled，则promise2有相同的值且也是fulfilled状态
    // PromiseA+ 2.2.7.4 如果onRejected不是函数且promise1状态是rejected，则promise2有相同的值且也是rejected状态
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const self = this;
    // then 方法返回的是一个promise
    const promise = new Promise((resolve, reject) => {
      const handle = (callback, data) => {
        // PromiseA+ 2.2.4 onFulfilled或者onRejected需要在自己的执行上下文栈里被调用，所以此处用setTimeout
        setTimeout(() => {
          try {
            // PromiseA+ 2.2.2 如果onFulfilled是函数，则在fulfilled状态之后调用，第一个参数为value
            // PromiseA+ 2.2.3 如果onRejected是函数，则在rejected状态之后调用，第一个参数为reason
            const x = callback(data);
            // PromiseA+ 2.2.7.1 如果onFulfilled或onRejected返回一个x值，运行这[[Resolve]](promise2, x)
            resolvePromise(promise, x, resolve, reject);
          } catch (e) {
            // PromiseA+ 2.2.7.2 onFulfilled或onRejected抛出一个异常e，promise2必须以e的理由失败
            reject(e);
          }
        });
      };
      // pending 状态
      if (self.status === PENDING) {
        self.onFulfilled.push(() => {
          handle(onFulfilled, self.value);
        });

        self.onRejected.push(() => {
          handle(onRejected, self.reason);
        });
      } else if (self.status === FULFILLED) {
        // fulfilled 状态
        setTimeout(() => {
          handle(onFulfilled, self.value);
        });
      } else if (self.status === REJECTED) {
        // rejected状态
        setTimeout(() => {
          handle(onRejected, self.reason);
        });
      }
    });

    return promise;
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // PromiseA+ 2.3.1 如果promise和x引用同一对象，会以TypeError错误reject promise
  if (promise === x) {
    reject(new TypeError("Chaining Cycle"));
  }

  if ((x && typeof x === "object") || typeof x === "function") {
    // PromiseA+ 2.3.3.3.3 如果resolvePromise和rejectPromise都被调用，或者对同一个参数进行多次调用，那么第一次调用优先，以后的调用都会被忽略。
    let used;
    try {
      // PromiseA+ 2.3.3.1 let then be x.then
      // PromiseA+ 2.3.2 调用then方法已经包含了该条（该条是x是promise的处理）。
      let then = x.then;

      if (typeof then === "function") {
        // PromiseA+ 2.3.3.3如果then是一个函数，用x作为this调用它。第一个参数是resolvePromise，第二个参数是rejectPromise
        // PromiseA+ 2.3.3.3.1 如果resolvePromise用一个值y调用，运行[[Resolve]](promise, y)
        // PromiseA+ 2.3.3.3.2 如果rejectPromise用一个原因r调用，用r拒绝promise。
        then.call(
          x,
          (y) => {
            if (used) return;
            used = true;
            resolvePromise(promise, y, resolve, reject);
          },
          (r) => {
            if (used) return;
            used = true;
            reject(r);
          }
        );
      } else {
        // PromiseA+ 如果then不是一个函数，变为fulfilled状态并传值为x
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch (e) {
      // PromiseA+ 2.3.3.2 如果检索属性x.then抛出异常e，则以e为原因拒绝promise
      // PromiseA+ 2.3.3.4 如果调用then抛出异常，但是resolvePromise或rejectPromise已经执行，则忽略它
      if (used) return;
      used = true;
      reject(e);
    }
  } else {
    // PromiseA+ 2.3.4 如果x不是一个对象或函数，状态变为fulfilled并传值x
    resolve(x);
  }
}

// 实现Promise.resolve
// Promsie.resolve(value) 可以将任何值转成值为 value 状态是 fulfilled 的 Promise，
// 但如果传入的值本身是 Promise 则会原样返回它。
Promise.resolve = function (value) {
  if (value && value instanceof Promise) {
    return value;
  } else if (
    value &&
    typeof value === "object" &&
    typeof value.then === "function"
  ) {
    let then = value.then;
    return new Promise((resolve) => {
      then(resolve);
    });
  } else if (value) {
    return new Promise((resolve) => resolve(value));
  } else {
    return new Promise((resolve) => resolve());
  }
};

// 实现Promise.reject
// Promise.reject() 会实例化一个 rejected 状态的 Promise。但与 Promise.resolve() 不同的是，
// 如果给 Promise.reject() 传递一个 Promise 对象，则这个对象会成为新 Promise 的值。
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason));
};

// 实现Promise.all
// 传入的所有 Promsie 都是 fulfilled，则返回由他们的值组成的，状态为 fulfilled 的新 Promise；
// 只要有一个 Promise 是 rejected，则返回 rejected 状态的新 Promsie，且它的值是第一个 rejected 的 Promise 的值；
// 只要有一个 Promise 是 pending，则返回一个 pending 状态的新 Promise；
Promise.all = function (promiseArr) {
  let index = 0,
    result = [];
  return new Promise((resolve, reject) => {
    promiseArr.forEach((p, i) => {
      Promise.resolve(p).then(
        (val) => {
          index++;
          result[i] = val;
          if (index === promiseArr.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

// 实现Promise.race
// Promise.race 会返回一个由所有可迭代实例中第一个 fulfilled 或 rejected 的实例包装后的新实例。
Promise.race = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((p) => {
      Promise.resolve(p).then(
        (val) => {
          resolve(val);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};
