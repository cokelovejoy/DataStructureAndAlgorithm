/**
 * 希尔排序（Shell sort）
 * 第一个突破O(n^2)的排序算法，简单插入排序的改进版
 * 它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
 * 
 * 原理： 就是把数列进行分组(组内不停使用插入排序)，直至从宏观上看起来有序，最后插入排序起来就容易了(无须多次移位或交换)。
 *       每组中的数据个数称为增量(也叫间隔)，增量是不断递减的(直到增量为1)。
 *       元素的移动在数组内部完成，还是元素互换。
 */

function shellSort(arr) {
    let n = arr.length
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) { // 这个循环控制 增量(间隔)
        // 插入排序
        for (let i = gap; i < n; i++) {
            let pos = i  // pos 游标 
            let current = arr[i]
            //  当gap为1的时候，就是简单插入排序。
            while (pos - gap >= 0 && arr[pos - gap] > current) {            // 比较 间隔中第一个元素 与最远的元素的大小
                arr[pos] = arr[pos - gap]                                   // 赋值，让最远的元素为最大
                pos = pos - gap
            }
            arr[pos] = current
        }
    }
    return arr
}

console.log(shellSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))