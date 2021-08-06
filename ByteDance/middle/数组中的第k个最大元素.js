// 数组中的第k个最大元素
// 给定 整数数组nums和整数 k。请返回数组中第k个最大的元素。
// 求我们找到“数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素”

// 暴力解法 ： 注意清楚排序以后索引是多少
function findKthLargest(nums, k) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  return nums[len - k];
}
console.log(
  findKthLargest(
    [
      3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7,
      8, 5, 6,
    ],
    2
  )
);
// 快速排序减而治之，借助 partition 操作定位到 最终排定后索引为len-k的那个元素。
function findKthLargest2(nums, k) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let target = len - k; // 第k大元素的索引时len-k
  // 在数组nums 的子区间[lefty, right]切分操作，返回nums[left]排序以后应该在的位置。
  // 在遍历过程中保持循环不变量的语义
  // [left+1, j] < nums[left]; (j, i] >= nums[left];
  function partition(nums, left, right) {
    let pivot = nums[left];
    let j = left;
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < pivot) {
        // 小于pivot的元素都被交换到前面。
        j++;
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
    // 在之前的遍历过程中，满足[left+1, j] < pivot, 并且（j, i] >= pivot
    [nums[j], nums[left]] = [nums[left], nums[j]];
    // 交换之后[left, j-1] < pivot, [j+1, right] >= pivot;
    return j;
  }

  while (true) {
    let index = partition(nums, left, right); // 得到该元素应该出现的位置。
    if (index === target) {
      return nums[index];
    } else if (index < target) {
      // 子区间左边界右移，缩小区间
      left = index + 1;
    } else {
      // 子区间向右边界左移，缩小区间
      right = index - 1;
    }
  }
}
// 优先队列
