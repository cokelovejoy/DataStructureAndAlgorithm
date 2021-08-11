// 最长回文子串
// 给定一个字符串s，找到s中最长的回文子串。
// 暴力解法
function longestPalindrome(s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }
  let maxLen = 1; // 回文字串的最大长度
  let begin = 0; // 记录回文子串的起始位置
  // 判断子串是否是回文子串
  function validpalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && validpalindrome(s, i, j)) {
        // 如果是回文子串，还要判断是否大于最大长度
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen); // 返回回文字符串
}

console.log(longestPalindrome("babad"))