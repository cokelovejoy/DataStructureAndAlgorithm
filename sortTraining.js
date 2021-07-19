// 使用两个指针
// 一趟排序 排出最大最小值
// function sort(arr) {
//     let low = 0;
//     let high = arr.length -1;
//     while (low < high) {
//         // 从low 到 high
//         for (let i = low; i < high; i++) {
//             if (arr[i] > arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//         high--;
//         for (let j = high; j > low; j--) {
//             if (arr[j] < arr[j-1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//             }
//         }
//         low++;
//     }
//     return arr;
// }
// 插入排序
// function sort(arr) {
//     let length = arr.length;
//     for (let i = 1; i < length; i++) { // 外层循环表示每个元素要执行一次比较
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j-1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//             } else {
//                 break;
//             }
//         }
//     }
//     return arr;
// }
// 选择排序
function sort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) { // 从未排序的序列中，选择最小的元素
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];   // 交换
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(sort([5, 1, 3, 4, 7, 6]));
