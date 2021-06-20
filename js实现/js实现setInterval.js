// 使用setTimeout实现setInterval
// 目的确保 一个事件结束，才触发下定时器一个事件
// 思路使用递归函数，不断地去执行setTimeout从而达到setInterval的效果
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