// 两数求和 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 示例: nums = [2, 7, 11, 15], target = 9 ;返回 [0, 1]

// 普通方法 双循环遍历 求和
function getSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        return [i, j];
      }
    }
  }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log("data: ", getSum(nums, target));

// 使用map 或者对象字面量，空间换时间, 使用一次循环 找到结果
// 求和问题 转化为 求差问题

function getSumByMap(nums, target) {
  let recoder = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (recoder.get(target - nums[i]) !== undefined) {
      return [recoder.get(target - nums[i]), i];
    }
    recoder.set(nums[i], i);
  }
}

console.log("data: ", getSumByMap(nums, target));
