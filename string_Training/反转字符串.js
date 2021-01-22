/** 反转字符串 */

const str = "pinkman";
const res = str.split("").reverse().join("");
console.log(res);

/**判断一个字符串是否为回文字符串 */
// 'loveevol'
// 方法1
function isPalindrome(str) {
  const res = str.split("").reverse().join("");
  return res === str;
}
console.log(isPalindrome("loveevol"));

// 方法2 利用对称特性，从中间位置“劈开”，那么两边的两个子串在内容上是完全对称的。
function isPalindrome2(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome2("loveevol"));
