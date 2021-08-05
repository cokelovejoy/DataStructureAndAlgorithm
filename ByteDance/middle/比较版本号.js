// 比较版本号
// 给定两个版本号v1和v2，请比较它们。
// 版本号由一个或多个修订号组成，各修订号由一个'.'连接。
// 每个修订号由多位数字组成，可能包含前导零。
// 每个版本号至少包含一个字符。修订号从左到右编号。
// 下标从0开始，最左边的修订号下标为0，下一个修订号下标为1，以此类推。
// 例如 2.5.33 和0.1都是有效的版本号
// 比较版本号时，请按照从左到右的顺序依次比较它们的修订号。比较修订号时，只需要比较忽略任何前导零后的数字，也就是1和001相等。
// 如果版本号没有指定某个下标处的修订号，则该修订号视为0.
// 规则 v1 > v2 返回 1; v1 < v2 返回 -1;除此之外返回 0.

function compareVersion(version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  if (v1.length < v2.length) {
    // v1 长度小于 v2，给v1补零
    let len = v2.length - v1.length;
    while (len > 0) {
      v1.push(0);
      len--;
    }
  }
  for (let i = 0; i < v1.length; i++) {
    let num1 = Number(v1[i]);
    let num2 = v2[i] === undefined ? 0 : Number(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

console.log(compareVersion("1.0.1", "1"));
