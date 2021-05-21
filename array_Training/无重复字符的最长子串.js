// 无重复字符的最长字串
// 暴力解法（三层循环）
// function longestSubstring(str) {
//   let len = str.length;
//   if (len < 2) {
//     return len;
//   }
//   let maxLen = 1;
//   for (let left = 0; left < len - 1; left++) {
//     for (let right = 0; right < len; right++) {

//     }
//   }
//   return maxLen;
// }

// console.log(longestSubstring("abcabcbb"));
// 使用滑动窗口解决
// right 主动向右移动，left 被动向右移动的方式就是滑动窗口的思想，也叫「尺取法」或者「虫取法」
// 1、用双指针维护一个滑动窗口，用来剪切子串。
// 2、不断移动右指针，直到遇到重复字符的时候把左指针移到前面的重复字符的下一位。（相当于把前面的重复字符删除）
// 3、移动指针过程中，记录窗口长度的最大值即为答案。

function longestSubString2(str) {
  let len = str.length;
  let l = 0; // 定义左指针
  let maxLen = 0;
  let map = new Map(); // 存放字符和对应下标
  for (let r = 0; r < len; r++) {
    // 出现重复字符,并且重复字符的索引要大于左指针索引，将左指针向右移动到重复字符的下一位
    if (map.has(str[r]) && map.get(str[r]) >= l) {
      l = map.get(str[r]) + 1;
    }
    // 记录字符，及对应下标
    maxLen = Math.max(maxLen, r - l + 1); // 字串长度
    map.set(str[r], r); // 更新重复字符的 最新出现的位置
  }
  return maxLen;
}

console.log(longestSubString2("abbcdea"));
