// 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集

// 思路使用 map
function intersection(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let sameNum = [];
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (nums1[i] === nums2[j] && !sameNum.includes(nums1[i])) {
        sameNum.push(nums1[i]);
      }
    }
  }
  return sameNum;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
