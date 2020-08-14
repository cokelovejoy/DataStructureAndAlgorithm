/* 
    冒泡排序-简单
*/
function bubbleSort(arr) {
    console.time('1')
    const length = arr.length
    let temp
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length -1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.timeEnd('1')
    return arr
}

console.log(bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))