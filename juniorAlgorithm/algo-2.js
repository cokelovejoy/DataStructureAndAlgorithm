/**
 * 买卖股票的最佳时机
 * 给定一支股票的价格数组，它的第i个元素代表第i天的价格。
 * 可以多次买卖，但是只能卖出之后再买入，求出最大收益。
 */

/**
 * 分析：找到最大值的位置根据它位置进行分析，想要获得最大收益的原则就是低点买入，高点卖出。
 */
// 找到最大值及其下标
function maxPrice(arr) {
    let maxValue = 0
    let maxIndex
    for (let i = 1; i < arr.length + 1; i++) {
        if (arr[i - 1] > maxValue) {
            maxValue = arr[i - 1]
            maxIndex = i - 1
        }
    }
    return { maxValue, maxIndex }
}
// 找波动中的峰值及其下标, 谷底及其下标
function findPeakValue(arr) {
    let peakList = []
    let bottomList = []
    let maxValue = 0
    let maxIndex
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
            maxIndex = i                
        }
        if (i < arr.length -2 && arr[i] < arr[i+1] && arr[i+2] < arr[i+1]) {
            peakList.push({ value: arr[i+1], index: i+1 })
        } 
        if ( i < arr.length -2 && arr[i] > arr[i+1] && arr[i+2] > arr[i+1]) {
            bottomList.push({value: arr[i+1], index: i+1})
        }
    }
    return { peakList, bottomList, max: {maxValue, maxIndex} }
}

function maxProfit(prices) {
    let { peakList, bottomList, max } = findPeakValue(prices)
    if (peakList.length == 0 && bottomList.length == 0 && max.maxIndex == 0) {
        return 0
    } else if (peakList.length == 0 && bottomList.length == 0 && max.maxIndex == prices.length-1) {
        return max.maxValue - prices[0]
    } else if (peakList.length == 0 && bottomList.length == 1) {
        return prices[prices.length] - bottomList[0].value
    } else if (bottomList.length == 0 && peakList.length == 1) {
        return peakList[0].value -  prices[0]
    } else if (peakList.length == bottomList.length && peakList[0].index < bottomList[0].index) {
        
    } else if (peakList.length == bottomList.length && peakList[0].index > bottomList[0].index) {

    } else if (peakList.length != bottomList.length && peakList[0].index < bottomList[0].index) {

    } else if (peakList.length != bottomList.length && peakList[0].index > bottomList[0].index) {

    }

    console.log(peakList)
    console.log(bottomList)
    console.log(max)
}
maxProfit([7,1,5,3,6,4])