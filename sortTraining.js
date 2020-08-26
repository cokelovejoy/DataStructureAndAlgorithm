// 使用两个指针
// 一趟排序 排出最大最小值
function sort(arr) {
    let low = 0;
    let high = arr.length -1;
    while (low < high) {
        // 从low 到 high
        for (let i = low; i < high; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        high--;
        for (let j = high; j > low; j--) {
            if (arr[j] < arr[j-1]) {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
        low++;
    }
    return arr;
}
console.log(sort([5,1,3,4,7,6]))