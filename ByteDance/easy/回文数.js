// 回文数
// 给你一个整数x, 如果x是一个回文整数，返回true；否则返回false。
// 双指针
var isPalindrome = function(x) {
  let str = String(x);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome(121));