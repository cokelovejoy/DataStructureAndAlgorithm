// js 实现使用闭包每隔一秒打印1，2，3，4
// 方法1
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeput(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// 方法2
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
