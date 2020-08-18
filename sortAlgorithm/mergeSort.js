/**
 * 归并排序 - 选择排序的改进版
 * 原理 ：将已有序的子序列合并，得到完全有序的序列;即先使每个子序列有序，再使每个子序列之间有序。如果将两个有序表合并成一个有序表，称为2路归并。
 * 思想 ：分而治之
 * 分解 ：把长度为n的待排序列分解成两个长度为n/2的序列
 * 治理 ：对每个子序列分别调用归并排序，进行递归操作。当子序列长度为1时，序列本身有序，停止递归。
 * 合并 ：合并每个排序好的子序列。
 */

 function mergeSort(arr) {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
 }

 function merge(left, right) {
    let result = []
    console.time('merge')
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    console.timeEnd('merge')
    return result
 }
 const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
 console.log(mergeSort(arr))
