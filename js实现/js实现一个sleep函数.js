// sleep函数作用是让线程休眠，等到指定时间在重新唤起。
// 核心 while循环，到达指定时间后退出循环
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
}

function test() {
  console.log("111");
  sleep(2000);
  console.log("222");
}

test();