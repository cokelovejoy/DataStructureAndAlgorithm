/**
 * 希尔排序（Shell sort）
 * 第一个突破O(n^2)的排序算法，简单插入排序的改进版
 * 它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
 * 
 * 原理： 就是把数列进行分组(组内不停使用插入排序)，直至从宏观上看起来有序，最后插入排序起来就容易了(无须多次移位或交换)。组的数量称为增量，增量是不断递减的(直到增量为1)。
 * 
 */

function shellSort(arr) {
    let n = arr.length
    console.time('shell')
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) { // 这个循环控制分组的数量。
        for (let i = gap; i < n; i++) {
            let j = i
            let current = arr[i]
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap]
                j = j - gap
            }
            arr[j] = current
        }
    }
    console.timeEnd('shell')
    return arr
}

console.log(shellSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))