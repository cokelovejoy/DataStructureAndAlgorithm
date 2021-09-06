// 例: abbcccddddd -> 字符最多的是d，出现了5次

let str = "abcabcabcbbccccc";
let num = 0;
let char = "";

// 使其按照一定的次序排列
str = str.split("").sort().join("");
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
// match表示匹配的字符串
// $1表示分组中第一个()匹配的字符
str.replace(re, (match, $1) => {
  if (num < match.length) {
    num = match.length;
    char = $1;
  }
});
console.log(`字符最多的是${char}，出现了${num}次`);
