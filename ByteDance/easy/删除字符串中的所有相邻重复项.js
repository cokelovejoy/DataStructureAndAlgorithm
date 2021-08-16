// 删除字符串中的所有相邻重复项
// 给出由小写字母组成的字符串S,重复项删除操作会选择两个相邻且相同的字母，并删除它们。
// 在s上反复执行重复项删除操作，直到无法继续删除。

// 使用栈解法 
function removeDuplicates(s) {
  const stk = [];
  for (let ch of s) {
    if (stk.length && stk[stk.length - 1] === ch) { // 栈顶元素和字符相等，要弹出
      stk.pop();
    } else { // 不相等入栈
      stk.push(ch);
    }
  }
  return stk.join('');
}