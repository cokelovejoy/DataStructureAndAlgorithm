// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
function isValid(s) {
  let list = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      list.push(s[i]);
    } else {
      let breakStr = list.pop();
      if (breakStr === undefined) {
        return false;
      }
      if (
        (breakStr === "(" && s[i]!== ")") ||
        (breakStr === "{" && s[i] !== "}") ||
        (breakStr === "[" && s[i] !== "]")
      ) {
        return false;
      } 
    }
  }
  return list.length > 0 ? false : true;
}
