// 连续数组
// 给定一个二进制数组nums，
// 找到一个最长连续子数组，其中的0 的数量和1的数量相同,并返回该子数组的长度。
// 前缀和+哈希
// 思路，由于0 和 1数量相等，等价于1的数量减去0的数量等于0，转化为 求最长的连续子数组，其元素和为0.
// 使用map存储前缀和的下标
function findMaxLength(nums) {
  let maxLength = 0;
  let map = new Map();
  let counter = 0;
  // 使用哈希表存储 0：-1
  map.set(counter, -1);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (num == 1) {
      // 遇到 1 ，数量加 1
      counter++;
    } else {
      // 遇到 0 ，数量减 1
      counter--;
    }
    // counter记录 1 的个数
    if (map.has(counter)) {
      // 如果 counter 的个数 已经存在， 取出 counter 在哈希表中对应的下标 prevIndex
      const prevIndex = map.get(counter);
      // 子数组的长度为 i - prevIndex 和 maxLength比较，取较大值
      maxLength = Math.max(maxLength, i - prevIndex);
    } else {
      // 如果 counter 的值在哈希表中不存在，则将当前余数和当前下标 i 的键值对存入哈希表中。
      map.set(counter, i);
    }
  }
  return maxLength;
}
