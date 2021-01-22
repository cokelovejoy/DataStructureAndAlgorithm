/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 */
// 双指针法
function mergeTwoArray(nums1, m, nums2, n) {
  // 初始化两个指针的起始位置 i, j
  // 记录 nums1 尾部索引k
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
  console.log("nums1", nums1);
}
mergeTwoArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
