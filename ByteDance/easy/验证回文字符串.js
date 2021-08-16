// 给定一个字符串，验证它是否为回文字符串。只考虑字母和数字字符，可以忽略字母的大小写。
/**
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 */
function isPalindrome(s) {
  s = s.replace(/[^A-Za-z\d]+/g, '').toLowerCase(); // 匹配字母和数字以外的字符，替换为空
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));