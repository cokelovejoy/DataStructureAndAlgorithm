/**
 * 插入排序
 * 原理： 从一开始构建有序序列，对于未排序的数据，在已经排序的序列中从后向前扫描，找到相应位置并插入。
 * 
 */
 function myInsertSort(nums) {
    let len = nums.length;
    for (let i = 1; i < len; i++) { // 从第二个元素开始，把第一个元素作为已经有序的序列
      for (let j = i; j > 0; j--) { // 逐个比较，排序
        if (nums[j] < nums[j-1]) {
          let temp = nums[j];
          nums[j] = nums[j-1];
          nums[j-1] = temp;
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
        nums[j] = nums[j-1];
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
  

console.log(insertSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))