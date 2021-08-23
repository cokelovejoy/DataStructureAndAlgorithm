// 给定两个字符串text1和text2，返回这两个字符串的最长公共子序列的长度。如果不存在公共子序列，返回0。
// 子序列：原字符串不改变字符的相对顺序，可以删除某些字符后，组成新的字符串。
// 动态规划
// text1字符串作为行数组，text2字符串作为列数组，组合为一个矩阵
/**
 *     a c e
 *   0 0 0 0
 * a 0 1 1 1
 * b 0 1 1 1
 * c 0 1 2 2
 * d 0 1 2 2
 * e 0 1 2 3
 */
// 1.确定dp数组及下标含义
// dp[i][j] 长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
// 2.确定递推公式
// text[i-1] 与text[j-1]相同，就找到一个公共元素所以dp[i][j] = dp[i-1][j-1] +1;
// text1[i - 1] 与 text2[j - 1]不相同，那就看看text1[0, i - 2]与text2[0, j - 1]的最长公共子序列 和 text1[0, i - 1]与text2[0, j - 2]的最长公共子序列，取最大的。
// dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
// 3.dp数组初始化
// test1[0, i-1]和空串的最长公共子序列自然是0，所以dp[i][0] = 0; dp[0][j]也是0。
// 4.确定遍历顺序
// 从前往后，从上往下来遍历
function longestCommonSubsequence(text1, text2) {
  // dp数组初始化
  let dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    let char1 = text1[i - 1];
    for (let j = 1; j <= text2.length; j++) {
      let char2 = text2[j - 1];
      if (char1 == char2) {
        // 字符相同时
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 字符不相同时
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
}
console.log(longestCommonSubsequence("abcde", "ace"));
