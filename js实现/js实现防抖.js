// js 实现防抖
// 防抖 一段时间内多次触发, 一次都不会生效, 每次都会重置定时器.
// 连续触发只在最后一次执行方法，场景：输入框匹配
function deboundce(callBack, wait) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;

    // 如果定时器存在,则取消之前的定时器重新计时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 重新设置定时器, 指定间隔时间后执行回调函数
    timer = setTimeout(()=> {
      callBack.apply(context, args);
    }, wait)
  }
}

// 简约写法
let debounce = (fn, time = 1000) => {
  let timeLock = null

  return function (...args){
      clearTimeout(timeLock)
      timeLock = setTimeout(()=>{
          fn(...args)
      },time)
  }
}