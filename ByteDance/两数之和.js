// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 暴力解法
function twoSum(nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let cur = nums[i];
    for (let j = i+1; j < len; j++) {
      let point = nums[j];
      if (cur === target - point) {
        return [i, j];
      }
    }
  }
}
// 使用map记录已经遍历的元素
function twoSum2(nums, target) {
  let len = nums.length;
  let mapObj = {};
  for (let i = 0; i < len; i++) {
    if (mapObj[target - nums[i]] === undefined) {
      mapObj[nums[i]] = i;
    } else {
      return [mapObj[target - nums[i]], i];
    }
  }
}

console.log(twoSum2([2,7,11,15], 9))