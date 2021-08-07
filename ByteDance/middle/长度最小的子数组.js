// 长度最小的子数组
// 给定一个含有n个正整数的数组和一个正整数target。
// 找出该数组中满足其和>=target的长度最小的连续子数组(不是子数组，不能改变数的顺序)，并返回长度。如果不存在符合条件的子数组返回0.
// 方法 双指针，滑动窗口
function minSubArrayLen(target, nums) {
  let n = nums.length;
  if (n == 0) {
    return 0;
  }
  let ans = n + 1;
  let start = 0,
    end = 0;
  let sum = 0;
  while (end < n) {
    // 右指针移动
    sum += nums[end];
    while (sum >= target) {
      // 和大于目标值时，窗口移动，左指针移动， end-start+1就等于元素个数
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === n + 1 ? 0 : ans;
}

console.log(
  minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])
);

// 双循环暴力求解
function minSubArrayLen(s, nums) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum >= s) {
      return 1;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= s) {
        // 大于s，记录最小长度，退出内层循环
        min = Math.min(min, j - i + 1);
        break;
      }
    }
  }
  return min == Number.MAX_SAFE_INTEGER ? 0 : min;
}
