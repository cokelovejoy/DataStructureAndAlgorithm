/* 
   冒泡排序 也是简单交换排序，所有的操作都是在原数组上进行。
   对数组进行n次轮询，比较相邻两个元素的大小，将大的和小的互换位置，每次轮询的结果都会将最大或最小值放在数组最后。
   每一轮之后已经排序的就不再比较。
*/
function bubbleSort(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length -1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))
