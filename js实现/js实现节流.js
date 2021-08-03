// js 实现节流
// 节流: 一段时间内点击多次,只有一次有效.
// 使用场景: 1.异步请求的调用,防止短时间内发送多次请求
// 2.节流可以使用在 scroll 函数的 事件监听上，通过事件节流来降低事件调用的频率.(对频繁触发的事件,影响性能的事件都可以采用节流的方法)
function throttle(callBack, delay) {
  let preTime = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let nowTime = Date.now();
    // 如果两次时间间隔超过了指定的时间,才执行回调函数
    if (nowTime - preTime >= delay) {
      preTime = Date.now();  // 重置开始时间
      return callBack.apply(context, args);
    }
  };
}
