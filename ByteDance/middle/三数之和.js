// 三数之和
// 给你一个包含n个整数nums，判断nums中是否存在三个元素a,b,c使得a+b+c=0，请找出所有和为0 且不重复的三元组。
// 暴力解法
// 双指针法
// 先排序，固定3个指针，k 为 最小数字的指针， i，j指针设置在数组索引[k+1, length-1]之间
// 通过双指针交替向中间移动，记录每个固定指针的k的所有满足的nums[k], nums[i], nums[j]的组合。
function threeSum(nums) {
  nums.sort((a, b) => a - b); // 先排序
  let res = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) {
      // 当前元素大于0，直接退出循环
      break;
    }
    if (k > 0 && nums[k] == nums[k - 1]) {
      continue; // 连续两个元素相等，跳过，直接进行下一次循环
    }
    let i = k + 1;  // i 为左指针
    let j = nums.length - 1; // j 为右指针
    while (i < j) {
      // i左指针，j右指针，退出循环条件i == j时
      let sum = nums[k] + nums[i] + nums[j]; // 三数之和
      if (sum < 0) { // 和小于0， i指针向右移动
        while (i < j && nums[i] == nums[++i]);  // i 和i+1 相等直接将i后移
      } else if (sum > 0) { // 和大于0 ，j指针向左移动
        while (i < j && nums[j] == nums[--j]); //  j 和 j-1 相等直接将j前移
      } else { // 和为0 ，记录数据
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] == nums[++i]);
        while (i < j && nums[j] == nums[--j]);
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
