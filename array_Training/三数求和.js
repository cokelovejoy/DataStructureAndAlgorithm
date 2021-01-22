/** 三数求和问题
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。答案中不可以包含重复的三元组。
 *  示例: 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */

// 使用双指针法：双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。
// 在上面这道题中，左右指针一起从两边往中间位置相互迫近，这样的特殊双指针形态，被称为“对撞指针”。
// 关键字： “有序”和“数组” 联想到 对撞指针。
function threeSum(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;
  // 外层循环遍历 整个 数组，遍历的当前值作为固定值
  // 然后设置左右指针移动，找到和为目标值的两个数的索引就分别是左指针和右指针
  for (let i = 0; i < length - 2; i++) {
    let left = i + 1; // 左指针下标 为当前遍历值的右边一个值得索引
    let right = length - 1; // 右指针下标 为数组的最后一个值的索引
    // 相同数字 跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 左指针下标 小于 右指针下标 就需要移动指针，左指针往后移动，右指针往前移动
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        // 当前值 左指针的值 右指针的值 之和 小于 0，
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          // 左指针的值 重复时
          left++;
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        // 当前值 左指针的值 右指针的值 之和 大于 0
        right--;
        while (left < right && nums[right] === nums[right + 1]) {
          // 右指针的值 重复时
          right--;
        }
      } else {
        // 当前值 左指针的值 右指针的值 之和 等于 0
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          // 若左指针元素重复，跳过
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          // 若右指针元素重复，跳过
          right--;
        }
      }
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
