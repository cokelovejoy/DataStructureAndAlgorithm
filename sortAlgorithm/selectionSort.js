/**
 * 简单选择排序
 * 原理： 首先在未排序序列中找到最小元素，存放到排序序列的起始位置，然后再从剩余未排序元素中继续寻找最小元素，然后放到已排序序列的末尾
 * 
 */
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]            // 预先设定第一个值为最小值
        let index = i               // 最小值的下标
        for (let j = i+1; j<arr.length; j++) {
            if (arr[j] < min) {     // 发现最小值， 将最小值保存到min
                min = arr[j]
                index = j           // 记录最小值出现的下标
            }
        }
        // 最小值交换位置
        let temp = arr[i]     // i永远是当前的最小值应该处于的位置
        arr[i] = min
        arr[index] = temp    
    }
    return arr
}

console.log(selectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))
