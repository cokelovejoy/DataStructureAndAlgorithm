// 买卖股票的最佳时机
// 给定一个数组prices，它的第i个元素prices[i]表示一支给定股票第i天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 1.找到买入的最低点
// 2.找到卖出的最高点
function maxProfit(prices) {
    let len = prices.length;
    let buy = prices[0];
    let max = 0;
    for (let i = 0; i<len; i++) {
        if (prices[i] < buy) {
            buy = prices[i]; // 买入的价
        } else if (prices[i] > buy) {
            max = Math.max(prices[i] - buy, max);
        }
    }
    return max;
}
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
