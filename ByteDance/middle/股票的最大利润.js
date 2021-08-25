// 把某股票的价格按照时间的先后顺序存储在数组中,请问买卖该股票一次可能获得的最大利润
// 最大利润:最小买入价 - 最大卖出价,之间的差价就是最大利润,最大卖出价格在最小买入价之和.
// 外层循环遍历, 以当前价格作为买入价 ,遍历其后的数组中的每个数并计算差值,对比作为最大利润.
function maxProfit(prices) {
  let profit = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j<len;j++) {
      profit = Math.max(prices[j] - prices[i], profit)  ;
    }
  }
  return profit;
}

console.log(maxProfit([2,4,1]));