// 思路：
// 维护一个数组dp：
// dp[0]: 当前持有股票的最大金额
// dp[1]: 当前不持有股票的最大金额

// 初始值： dp=[-prices[0],0]
// 公式：
//     dp[0] = Math.max(dp[0], dp[1] - prices[i]); (取一个最小的买入值)
//     dp[1] = Math.max(dp[1], dp[0] + prices[i]); (根据动态变化的最小买入值，取最大的利润)
// 例：i = 0时 dp[0] = -prices[0],dp[1] = 0

function maxProfit(prices: number[]): number {
  const dp = [-prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }
  return dp[1];
}
