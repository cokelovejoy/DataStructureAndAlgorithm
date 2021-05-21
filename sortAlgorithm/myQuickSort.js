// 快速排序
// 思想： 分，递归

function myQuickSort(nums) {
  let len = nums.length;
  quickSort(nums, 0, len - 1);
  return nums;
}

function quickSort(nums, left, right) {
  // 左下标大于右下标的时候，退出递归
  if (left >= right) {
    return;
  }
  // 找到分割元素应该所处的位置
  let p = partition(nums, left, right);
  // 递归对分割元素左边进行快排[left,  p-1]
  quickSort(nums, left, p - 1);
  // 递归对分割元素右边进行快排 [p+1, right]
  quickSort(nums, p + 1, right);
}
// 焦点元素 前面的 要严格小于它，后面的要严格大于它
// 遇到大于等于的元素就什么都不做，继续遍历，而遇到小的元素，就把它们依次交换到数组的前面去
// 大放过，小操作
// 每次划分 都会排定 一个元素的位置。
function partition(nums, left, right) {
  let pointer = left; // 记录焦点元素的位置
  let pivot = nums[left]; // 始终把区间的第一个元素作为焦点元素
  for (let i = left + 1; i <= right; i++) { // 扫描区间元素，将小于焦点元素的元素，交换到前面
    if (nums[i] < pivot) { 
      console.log(i, pointer);
      pointer++;
      swap(nums, i, pointer, '小于'); // 交换焦点元素和
    }
  }
  // pointer 记录的是焦点元素应该出现的位置，交换位置
  swap(nums, left, pointer, '交换');
  return pointer;
}

function swap(nums, index1, index2, type) {
  console.log('**************************', type);
  console.log('------------------- ', index1);
  console.log('------------------- ', index2);
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

console.log(
  myQuickSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
