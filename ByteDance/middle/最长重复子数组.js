// 最长重复子数组
// 给定两个整数数组A和B,返回两个数组中的公共的，长度最长的子数组的长度

// 暴力循环法
function findLength(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let maxCount = 0;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        let count = 0;
        for (let k = j, l = i; k < len2 && l < len1; k++, l++) {
          if (nums1[l] === nums2[k]) {
            count++;
          } else {
            // 跳出本轮循环比较
            break;
          }
        }
        maxCount = Math.max(maxCount, count);
      }
    }
  }
  return maxCount;
}

console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]));

// 滑动窗口

function findLength(A, B) {
  let n = A.length;
  let m = B.length;
  let ret = 0;
  function maxLength(A, B, addA, addB, len) {
    let ret = 0,
      k = 0;
    for (let i = 0; i < len; i++) {
      if (A[addA + i] === B[addB + i]) {
        k++;
      } else {
        k = 0;
      }
      ret = Math.max(ret, k);
    }
    return ret;
  }
  for (let i = 0; i < n; i++) {
    let len = Math.min(m, n - i);
    let maxLen = maxLength(A, B, i, 0, len);
    ret = Math.max(ret, maxLen);
  }
  for (let i = 0; i < m; i++) {
    let len = Math.min(n, m - i);
    let maxLen = maxLength(A, B, 0, i, len);
    ret = Math.max(ret, maxLen);
  }
  return ret;
}
