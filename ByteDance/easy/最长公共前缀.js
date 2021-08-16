// 最长公共前缀
// 查找字符串数组中的最长公共前缀

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let minStr = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minStr.length) {
      minStr = strs[i];
    }
  }
  let longestCommonStr = "";
  for (let j = 0; j < minStr.length; j++) {
    if (strs.every(s =>  s[j] === minStr[j])) {
      longestCommonStr += minStr[j];
    } else {
        return longestCommonStr;
    }
  }
  return longestCommonStr;
}
console.log(longestCommonPrefix(["reflower","flow","flight"]));