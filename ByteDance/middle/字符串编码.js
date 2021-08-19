// 字符串编码
// 给定一个经过编码的字符串，返回它解码后的字符串。
// 使用栈
function decodeString(s) {
  let res = ""; // 记录结果
  let multi = 0; // 记录数字
  let stackMulti = []; // 记录数字的栈
  let stackRes = []; // 记录临时结果栈
  let size = s.length;
  for (let i = 0; i < size; i++) {
    if (s[i] == "[") {
      // 遇到 [ ，将当前multi， res入栈，再重置
      stackMulti.push(multi);
      stackRes.push(res);
      multi = 0; // 重置
      res = "";
    } else if (s[i] == "]") {
      // 遇到 ],将数字栈中的数字弹出，循环遍历，将[]内的字符串重复拼接，再和栈顶的字符拼接
      let tmp = "";
      let curMulti = stackMulti.pop();
      for (let j = 0; j < curMulti; j++) {
        tmp += res;
      }
      res = stackRes.pop() + tmp;
    } else if (s[i] >= "0" && s[i] <= "9") {
      // 遇到数字，将数字字符转化为数字，连续数字 需要*10
      multi = multi * 10 + parseInt(s[i]);
    } else {
      // 遇到英文字符时，将英文字符和结果拼接
      res += s[i];
    }
  }
  return res;
}
console.log(decodeString("3[a2[c]]"));
