// 多数元素
// 给定一个大小为n的数组，找到其中的多数元素是指数组中出现的次数大于n/2的元素
function majorityElement(nums) {
  let recoder = {};
  for (let i = 0; i < nums.length; i++) {
    if (recoder[nums[i]] !== undefined) {
        recoder[nums[i]] += 1;
    } else {
      recoder[nums[i]] = 1;
    }
    if (recoder[nums[i]] > (nums.length / 2)) {
      return nums[i];
    }
  }
}
