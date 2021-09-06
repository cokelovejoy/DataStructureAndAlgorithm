// js 使用setTimeout实现setInterval

// 核心 使用递归函数，不断地去执行setTimeout从而达到setInterval的效果
// 使用 闭包保存标记，用来控制暂停
function mySetInterval(fn, timeout) {
  let timer = { flag: true }; // 用于控制取消定时器
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }
  setTimeout(interval, timeout);
  return timer;
}
