/**
 * 插入排序
 * 原理： 从一开始构建有序序列，对于未排序的数据，在已经排序的序列中从后向前扫描，找到相应位置并插入。
 * 
 */
function insertSort(arr) {
    let n = arr.length
    let preIndex, current

    for (let i = 1; i < n; i++) { // 每循环一次，要拿之前排好序的序列 和 后面的一个数比较
        preIndex = i - 1
        current = arr[i]
        // 在while循环中，current的值是固定的，始终是拿着个值和之前的值比较，
        while (preIndex >= 0 && arr[preIndex] > current) {    // 如果大于 current的值，且游标 >= 0
            arr[preIndex + 1] = arr[preIndex]                 // 移动元素
            preIndex--                                        // 下标向前移动一位
        }
        arr[preIndex + 1] = current                           // 如果进入了while循环，则元素移动了，需要把current值赋值给 原来的缺口中。没有进循环，则还是在原来的位置赋值为current的值
    }
    return arr
}

console.log(insertSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))