// 整数转罗马数字
// 遍历 valueSymbols 中的每个数值-符号对，若当前数值value 不超过 num，则从num 中不断减去 value，
// 直至 num 小于 value，然后遍历下一个数值-符号对。若遍历中num 为 0 则跳出循环。
function intToRoman(num) {
  let valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join("");
}
