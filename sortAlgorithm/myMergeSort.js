// 归并排序 
// 特点：非原地排序（借助了临时数组保存元素），稳定排序（相同元素之间保持元素原本的位置关系）
// 思想：分而治之（先切分成更小的区间，递归处理，最后合并。局部有序，整体有序）
function myMergeSort(nums) {
  let len = nums.length;
  mergeSort(nums, 0, len - 1);
  return nums;
}
// 对数组nums的子区间[left, right]进行归并排序
function mergeSort(nums, left, right, dir) {
  console.log("div************** ", dir);
  console.log("left: ", left);
  // console.log('mid: ', mid);
  console.log("right: ", right);
  console.log("----------------------\n");

  if (left === right) {
    // 递归退出条件
    return;
  }
  // console.log('debug-------------\n');

  let mid = Math.floor((left + right) / 2);
  // console.log('left: ', left);
  // console.log('mid: ', mid);
  // console.log('right: ', right);
  mergeSort(nums, left, mid, "left");
  mergeSort(nums, mid + 1, right, "right");
  mergeTwoArray(nums, left, mid, right); // 从下往上开始，合并两个有序数组
}
// 在 合并两个区间时，将元素排序
// 在归并的过程中，可以使得原先位于数组后面的元素，在归并的时候一下子来到数组的前面
// 归并原理：k 表示马上要赋值回去的那个下标的位置：总共要赋值数组长度这么多次，我们每次从 temp 数组中比较，赋值回 nums 数组中，每次比较的时候，都看 i 和 j 指向的元素哪一个更小；

function mergeTwoArray(nums, left, mid, right) {
  // [left, mid] ,[mid+1, right]; 区间元素
  console.log("xxxxxxxxxxxxxxxxxxxxxxx ", "left:" + left, "right:" + right);
  let len = right - left + 1; // 区间数组元素的个数
  let temp = nums.slice(left, right + 1); // 临时变量保存 区间数组元素

  // i 和 j 分别表示当前子区间第 1 个部分的第 1 个元素的下标和第 2 个部分的第 1 个元素的下标；
  let i = 0;
  let j = mid - left + 1;
  // 总共要处理区间数组元素个数这个多次，保证每个元素都被赋值到原数组中。
  // 先处理i, j的越界情况
  // 再比较两区间开始位置i, j 元素的大小，总是把小的那个赋值到原数组。
  for (let k = 0; k < len; k++) {
    // 循环遍历当前区间内的元素, k 为要被赋值回原数组的当前区间的元素的下标
    if (i === mid - left + 1) {
      // 如果 i 来到了第 2 部分的第 1 个元素的位置，此时我们就一直把 j 指向的元素从前向后依次赋值；
      nums[left + k] = temp[j];
      console.log("边界i", j);
      j++;
    } else if (j === right - left + 1) {
      // 如果 j 来到了第 2 部分的最后一个元素的后面，此时我们就一直把 i 指向的元素从前向后依次赋值
      nums[left + k] = temp[i];
      console.log("边界j", i);
      i++;
    } else if (temp[i] <= temp[j]) {
      // temp[i] <= temp[j]，第 1 个部分先被选出, 赋值给原数组
      // 注意：这里必须写成 <=，否则归并排序就成了非稳定的排序
      nums[left + k] = temp[i];
      console.log("i< j 赋值");
      i++;
    } else {
      //  temp[i] > temp[j]， 将小的赋值给原数组
      nums[left + k] = temp[j];
      console.log("i>j 赋值");
      j++;
    }
    console.log("xxxxxxxxxxxxxxxxxxxxxxx ");
  }
}

console.log(myMergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
