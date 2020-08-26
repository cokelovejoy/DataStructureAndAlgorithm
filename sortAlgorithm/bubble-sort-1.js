/* 
    冒泡排序 - 改进
    设置标记，有元素交换，证明无序，继续循环。无元素交换时，就证明已经有序。
*/
function bubbleSort_improve_1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true;                // 每一轮循环重置 标记值
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSorted = false; // 有元素交换，证明无序，继续循环
            }
        }
        if (isSorted) {
            break;
        }
    }
    return arr
}
console.log(bubbleSort_improve_1([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))