// js 实现防抖
// 防抖 一段时间内多次触发, 一次都不会生效, 每次都会重置定时器.
// 连续触发只在最后一次执行方法，场景：输入框匹配最后输入的结果··
// immediate 立即执行标记
function debounce(fn, wait, immediate) {
  let timer = null;
  return function (...args) {
    // 立即执行的功能(timer为空表示首次触发)
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    // 有新的触发，则把定时器清空
    timer && clearTimeout(timer);
    // 重新计时
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
