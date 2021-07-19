/**
 * 插入排序
 * 原理： 从一开始构建有序序列，对于未排序的数据，在已经排序的序列中从后向前扫描，找到相应位置并插入。
 * 我们将数组中的数据分为两个区间，已排序区间和未排序区间。初始已排序区间只有一个元素，就是数组的第一个元素。
 * 插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序。
 * 重复这个过程，直到未排序区间中元素为空，算法结束。
 */
function myInsertSort(nums) {
  let len = nums.length;
  for (let i = 1; i < len; i++) { // 外层循环表示未排序序列中的元素
    // 从第二个元素开始，把第一个元素作为已经有序的序列
    for (let j = i; j > 0; j--) {  // 内层循环表示在已经有序的序列中，比较，找到插入的位置
      // 逐个比较，排序
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return nums;
}
console.log(
  myInsertSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);

function myInsertSort2(nums) {
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    let cur = nums[i]; // 使用临时变量 存储当前值，严格大于当前值的元素直接向后移动一位
    let j = i;
    while (j > 0 && nums[j - 1] > cur) {
      nums[j] = nums[j - 1];
      j--;
    }
    // 放置当前值应该占的位置
    nums[j] = cur;
  }
  return nums;
}

console.log(
  myInsertSort2([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);

console.log(
  insertSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
