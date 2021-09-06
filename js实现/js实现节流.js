// js 实现节流
// 节流: 一段时间内点击多次,只有一次有效.
// 使用场景:
// 1.异步请求的调用,防止短时间内发送多次请求
// 2.节流可以使用在 scroll 函数的 事件监听上，通过事件节流来降低事件调用的频率.(对频繁触发的事件,影响性能的事件都可以采用节流的方法)
// 3.resize事件，滚动条事件，动画等，通常每隔 100 ~ 500ms执行一次。
// 时间戳版本
function throttle(fn, wait) {
  // 上一次执行时间
  let previous = 0;
  return function (...args) {
    // 当前时间
    let now = +new Date();
    if (now - previous > wait) {
      previous = now;
      fn.apply(this, args);
    }
  };
}
// 定时器版本
function throttle(fn, wait) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
