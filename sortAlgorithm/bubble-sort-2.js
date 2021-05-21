/* 
    冒泡排序 - 冒泡排序 while写法
    使用一个标记变量pos,用于记录每趟排序中最后一次进行交换的位置。
    由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
*/

function bubbleSort_improve_2(arr) {
    let length = arr.length
    while (length > 0) {                     // pos 为0时，即不再进行交换，退出循环。
        let pos = 0                          // 每一趟pos重置
        for (let i = 0; i < length; i++) {   // 比较只到pos位置
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                pos = i + 1                     // 交换改变pos值
            }
        }
        length = pos                         // 改变length，直到length为 0, 即没有交换的时候，退出循环。
    }
    return arr
}

console.log(bubbleSort_improve_2([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))