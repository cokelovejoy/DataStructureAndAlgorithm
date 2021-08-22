// 寻找峰值
// 峰值元素是指其值大于左右相邻值的元素。
// 给定一个输入数组nums，找到峰值元素并返回其索引。
// 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
// 由于nums[i] 和 nums[i+1] 一定不相等，所以峰值出现只会有以下3种情况：
// 峰值出现在第一个，数组为降序排列
// 峰值出现在中间，其左右两侧小于它
// 峰值出现在最后一个，数组为升序排列。
function findPeakElement(nums) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      // nums[i] > nums[i+1], i 处于峰值。
      return i;
    }
  }
  return nums.length - 1; // 峰值处于最后一个
}

// 递归二分查找 对数组的局部（局部有序的部分）进行二分查找
// 首先从数组 numsnums 中找到中间的元素 midmid。
// 若该元素恰好位于降序序列或者一个局部下降坡度中（通过将 nums[i]nums[i] 与右侧比较判断)，则说明峰值会在本元素的左边。
// 于是，我们将搜索空间缩小为 midmid 的左边(包括其本身)，并在左侧子数组上重复上述过程。
// 若该元素恰好位于升序序列或者一个局部上升坡度中（通过将 nums[i]nums[i] 与右侧比较判断)，则说明峰值会在本元素的右边。于是，我们将搜索空间缩小为 midmid 的右边，并在右侧子数组上重复上述过程
// 不断地缩小搜索空间，直到搜索空间中只有一个元素，该元素即为峰值元素。
function findPeakElement(nums) {
  function search(nums, l, r) {
    // 递归函数
    if (l == r) {
      // l 和 r 相同， 退出
      return l;
    }
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // nums[i] > nums[i+1]; 缩小区间为[l， mid]
      return search(nums, l, mid);
    }
    return search(nums, mid + 1, r); // nums[i] < nums[i+1]; 缩小区间为[mid+1, r]
  }
  return search(nums, 0, nums.length - 1);
}
// 迭代二分查找
function findPeakElement(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // 二分查找，将右边区间减去
      r = mid;
    } else {
      //将左边区间减去
      l = mid + 1;
    }
  }
  return l;
}
