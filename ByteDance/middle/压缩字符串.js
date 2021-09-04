// 压缩字符串
// 给定一个字符数组chars，请使用下述算法压缩：
// 从一个空字符串s开始，对于chars中的每组连续重复字符：
// 如果这一组长度为 1 ，则将字符追加到 s 中。
// 否则，需要向 s 追加字符，后跟这一组的长度。
// 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。
// 需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
// 请在 修改完输入数组后 ，返回该数组的新长度。
// 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。

// 为了实现原地压缩，可以使用双指针，分别标志在字符串中读和写的位置。
// 当read指针移动到某一段连续相同子串的最右侧，就在write指针处一次写入该子串对应的字符和子串长度。
function compress(chars) {
  let len = chars.length;
  let write = 0; // 写入字符的下标
  let left = 0; // 左侧的下标
  // read读取字符的下标
  for (let read = 0; read < len; read++) {
    if (read === len - 1 || chars[read] !== chars[read + 1]) {
      // read指向一段连续相同字符串的最右侧
      chars[write] = chars[read]; // 在write指针处，写入读取的字符
      write++;
      let num = read - left + 1; // 连续相同字符串的个数
      // 将个数以短除法的形式，写入原字符串
      if (num > 1) {
        let anchor = write; // 记录第一次写入数字的下标
        // 使用短除法，获取数组的每个数位上的数
        while (num > 0) {
          chars[write] = "" + (num % 10); // 写入 个位，十位，百位上的数字
          write++;
          num = Math.floor(num / 10);
        }
        // 将数字交换为原来的位置
        reverse(chars, anchor, write - 1);
      }
      left = read + 1;
    }
  }
  console.log(chars);
  return write;

}
function reverse(chars, left, right) {
  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
}
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
