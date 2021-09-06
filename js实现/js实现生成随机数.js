// 生成max-min之间的随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 实现数组的随机排序, 利用sort，改变排序函数
let arr = [2, 3, 454, 34, 324, 32];
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}
arr.sort(randomSort);

