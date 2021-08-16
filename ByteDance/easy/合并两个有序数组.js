// 合并两个有序数组
// 方法1: 插入排序的思路
// 方法2: 双指针的思路
function merge(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m] = nums2[i];
    for (let j = 0; j < m; j++) {
      if (nums1[m] < nums1[j]) {
        let temp = nums1[j];
        nums1[j] = nums1[m];
        nums1[m] = temp;
      } 
    }
    m++;
  }
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
