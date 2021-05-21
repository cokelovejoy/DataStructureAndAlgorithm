/**
 * 判断回文字符串：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 例子： aba, abca => true
 * 思路： 分为内部区间和外部区间，都是回文的就是回文字符串
 */

function validpalindrome(s) {
  const length = s.length;
  let i = 0; // 左指针 下标
  let j = length - 1; // 右指针下标
  // 左右指针 一起向中间移动， 指向的字符相同
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  if (isPalindrome(i+1, j)) {
    return true;
  }
  if (isPalindrome(i, j-1)) {
    return true;
  }
  function isPalindrome (start, end) {
    while(start< end) {
      if (s[start] !==s[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }
  return false
}

console.log(validpalindrome('abba'));