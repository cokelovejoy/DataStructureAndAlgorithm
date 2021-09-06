// js 实现eventEmitter
// 事件触发器 同发布订阅模式
class EeventEmitter {
  constructor() {
    this.events = {};
  }
  // 注册事件
  on(event, callback) {
    let callbacks = this.events[event] || [];
    callbacks.push(callback);
    this.events[event] = callbacks;
    return this;
  }
  // 注销事件
  off(event, callback) {
    let callbacks = this.events[event];
    this.events[event] = callbacks && callbacks.filter((fn) => fn !== callback);
    return this;
  }
  // 触发事件
  emit(event, ...args) {
    let callbacks = this.events[event];
    callbacks.forEach((fn) => {
      fn(...args);
    });
    return this;
  }
  // 只执行一次
  once(event, callback) {
    let wrapFun = function (...args) {
      callback(...args);
      this.off(event, wrapFun);
    };
    this.on(event, wrapFun);
    return this;
  }
}
