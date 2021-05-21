// 选择排序
function selectionSort(nums) {
  let len = nums.length;
  // 最后只剩下一个元素 一定是未排序序列中最小的，因此不需要再比较
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i; // 假设第一个元素是最小的，先记录他的索引
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
  return nums;
}

console.log(
  selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
