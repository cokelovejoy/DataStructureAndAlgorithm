// 现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
// 遇到1 加2表示移动2位代表2个字符，遇到0 加1表示移动1位代表1个字符
// 如果i 最终和bits.length-1 相等就表明最后一位一定是一比特字符。
function isOneBitCharacter(bits) {
  let i = 0;
  while (i < bits.length - 1) {
    i += bits[i] + 1;
  }
  return i === bits.length - 1;
}
console.log(isOneBitCharacter([1, 0, 0]));

// 三种字符分别为 0，10 和 11，那么 \mathrm{bits}bits 数组中出现的所有 0 都表示一个字符的结束位置（无论其为一比特还是两比特）。因此最后一位是否为一比特字符，只和他左侧出现的连续的 1 的个数（即它与倒数第二个 0 出现的位置之间的 1 的个数，如果 \mathrm{bits}bits 数组中只有 1 个 0，那么就是整个数组的长度减一）有关。如果 1 的个数为偶数个，那么最后一位是一比特字符，如果 1 的个数为奇数个，那么最后一位不是一比特字符。
function isOneBitCharacter2() {
    let i = bits.length -2; // 倒数第二个元素的下标
    while(i>=0 && bits[i] > 1) { // 从倒数第二个元素往左边数 ，连续1的个数，如果1的个数是偶数，如果 1 的个数为偶数个，那么最后一位是一比特字符，如果 1 的个数为奇数个，那么最后一位不是一比特字符。
        i--;
    }
    return (bits.length - i) % 2 === 0;
}