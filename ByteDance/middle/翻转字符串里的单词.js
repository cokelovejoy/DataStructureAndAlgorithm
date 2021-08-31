// 翻转字符串里的单词
// 给定一个字符串s，逐个翻转字符串里的所有单词

var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};