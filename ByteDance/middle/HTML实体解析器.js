// HTML实体解析器
// HTML实体解析器是一种特殊的解析器，它将HTML代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。
// 使用replace接口直接替换
// 手动匹配
// 遇到&，就将新来的字符存储起来，直到：
// 1.下一个&出现，表示当前活跃的替换字符串无法成功替换。
// 2. ;出现，查看当前存储的字符串是否能被成功替换。成功则将替换后的字符串加入结果字符串，失败则直接将字符串加入结果字符串。
// 3.字符串扫描结束，本次替换无法成功。
function entityParser(text) {
  let len = text.length;
  let map = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
  };
  let result = []; // 存储遍历过的子字符串
  let temp = ""; // 记录 需要替换子字符串（即以&开头的子串）
  for (let c of text) {
    if (c == "&") {             
      if (temp.length != 0) {    // 再次遇到 &, 无需替换，需要将 temp 收集,
        result.push(temp);       // 然后清空temp，
        temp = "";
      }
      // 开始新一轮的收集
      temp += "&";               
    } else if (c == ";") {        // 遇到 ; ,需要判断temp是否可以替换，可以替换就替换，然后将替换后的字符记录
      if (temp.length != 0) {       
        temp += ";";               // 拼接;
        if (map[temp]) {             // 判断是否可以替换
          let replace = map[temp];       // 可以替换，加入替换后的字符到结果
          result.push(replace);
        } else {                  
          result.push(temp);           // 不能替换,将temp加入结果
        }
        temp = "";                     // 清空temp
      } else {                   // temp 为空，直接保存 ;
        result.push(";")
      }
    } else {                   // 遇到其他字符，如果temp为空，直接将该字符保存，否则要加入到temp中
      if (temp.length != 0) {
        temp += c;
      } else {
        result.push(c);
      }
    }
  }
  // 结束时还有等待替换的字符，则无法替换，直接加入结果
  if (temp.length != 0) {
    result.push(temp);
  }
  return result.join("");
}

console.log(entityParser("and I quote: &quot;...&quot;"));
