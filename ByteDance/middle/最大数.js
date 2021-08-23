// 最大数
// 给定一组非负整数nums, 重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
// 返回字符串
// 字符串比较，依次比较每一个位上面的字符的字符编码（ASCII）
function largestNumber(nums) {
  // 重新排序
  nums.sort((a, b) => {
    let sx = 10;
    let sy = 10;
    console.log("a", a);
    console.log("b", b);
    // sx,和sy 是为了让 b,a两个数具有相同的位数，字符串长度一样，然后在加上a,b尾数，再进行比较大小。
    while (sx <= a) {
      sx *= 10;
    }
    while (sy <= b) {
      sy *= 10;
    }
    let left = "" + (sx * b + a);  // b在前a在后，组合后的字符串
    let right = "" + (sy * a + b); // a在前b在后，组合后的字符串
    console.log("left", left);
    console.log("right", right);
    return left - right; // 将较大的组合放在前面，得到一个降序排列的数组
  });
  console.log(nums);
  // 排序后第一个元素为0，那后面有元素则只能是0
  if (nums[0] == 0) {
    return "0";
  }
  return nums.join("");
}
console.log(largestNumber([3, 30, 34, 5, 9]));
