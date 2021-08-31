// 给定一个整数数组nums和一个整数target。
// 请统计并返回nums中能满足其最小元素和最大元素的和小于等于target的非空子序列的数目。

// 不能枚举出所有的子序列然后进行判断
// 可以通过转化成求出从原序列中选出一些元素来构成符合条件的子序列的方案数。
// 固定子序列的最小值v_min, 那么子序列的最大值v_max一定小于等于target - v_min。
// v_min <= v_max <= target − v_min
// ​得到 v_min <= target/2

// 先预处理出所有 2^i mod (10^9 + 7), 然后对原序列进行排序。
// 排序之后，我们顺序枚举所有合法的 v_min, 对于每个 v_min, 二分出最大的 v_max 的位置，
// 这个时候 v_min 和 v_max 最大值下标的差的绝对值为 x，当前的贡献就是 2^x。

function numSubseq(nums, target) {
  let P = 1000000007;
  let MaxN = 100005;
  let f = Array(MaxN);
  // 预处理
  function pretreatment() {
    f[0] = 1;
    for (let i = 1; i < MaxN; i++) {
      f[i] = (f[i - 1] << 1) % P; // 对最大数取余，就是得到自己本身，大于最大数，取余返回0，防止溢出
    }
  }
  // 二分查找
  function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
      let mid = parseInt((high - low) / 2) + low;
      if (mid == nums.length) {
        return mid;
      }
      let num = nums[mid];
      if (num <= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }
  pretreatment();
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length && nums[i] * 2 <= target; i++) {
    let maxValue = target - nums[i];
    // 找到最大值在数组中的位置
    let pos = binarySearch(nums, maxValue) - 1;
    // 拿到贡献值
    let contribute = pos >= i ? f[pos - i] : 0;
    ans = (ans + contribute) % P;
  }
  return ans;
}
