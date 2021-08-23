/**
 * 快速排序 - 处理大数据最快的排序算法之一
 * 思想：通过一趟排序将待排序记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 * 实现：
 *      1. 从数组中选择中间一项作为基准
 *      2. 创建两个指针，左边一个指向数组的第一项，右边指向数组的最后一项。移动左指针直到我们找到一个比基准大的元素，然后移动右指针直到找到一个比基准小的元素。
 *         然后交换他们。重复这个过程，直到左指针超过右指针。这个过程完成后比基准小的值都排在了基准之前，大的值排在基准之后，这一步叫分治。
 *      3. 然后继续对划分的小数组重复之前的两个步骤直到数组排序完。
 */

// 比较
function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}
// 交换
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
// 分治函数
function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compare(array[i], pivot) === -1) {
      i++;
    }
    while (compare(array[j], pivot) === 1) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
// 快排函数
function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right); // 找出 基准元素的位置
    if (left < index - 1) {
      // 对左边的小分组再执行快排
      quick(array, left, index - 1);
    }
    if (index < right) {
      // 对右边的小分组再执行快排
      quick(array, index, right);
    }
  }
  return array;
}

function quickSort(array) {
  return quick(array, 0, array.length - 1);
}

console.log(
  quickSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
