/* 
    冒泡排序 改进
    传统冒泡排序，每一趟排序操作只能找到一个最大值或最小值。
    双指针，当双指针的下标相同时，退出排序循环。
    现在利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大值，最小值)，从而使排序趟数几乎减少了一半。
*/

function bubbleSort_improve_3(arr) {
    let low = 0
    let high = arr.length - 1
    let temp, j
    while (low < high) {                // low和high相等时，退出循环
        // 从左往右比较，将最大值放在右边
        for (j = low; j < high; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        // 游标前移一位
        high--
        // 从右往左比较，将最小值移动到左边
        for (j = high; j > low; j--) {
            if (arr[j] < arr[j-1]) {
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        // 游标后移一位
        low++
    }
    return arr 
}

console.log(bubbleSort_improve_2([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))
