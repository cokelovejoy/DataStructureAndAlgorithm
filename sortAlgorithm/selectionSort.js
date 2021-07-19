/**
 * 简单选择排序
 * 原理： 首先在未排序序列中找到最小元素，存放到排序序列的起始位置，然后再从剩余未排序元素中继续寻找最小元素，然后放到已排序序列的末尾
 * 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
 * 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 */
function selectionSort(nums) {
  let len = nums.length;
  // 最后只剩下一个元素 一定是未排序序列中最小的，因此不需要再比较
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i; // 假设第一个元素是最小的，先记录他的索引
    for (let j = i + 1; j < len; j++) { // 从未排序的序列中，选择最小的元素
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[minIndex]; // 交换
    nums[minIndex] = nums[i];
    nums[i] = temp;
  }
  return nums;
}

console.log(
  selectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
