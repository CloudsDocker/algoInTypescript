// stock price

// Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will. Suppose we could access yesterday's stock prices as a list, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time. The values are the price in dollars of Apple stock at that time. So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

// Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

// stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

// getMaxProfit(stock_prices_yesterday)
// // returns 6 (buying for $5 and selling for $11)

console.log("========start======")

const prices = [600, 300, 205, 500, 200, 400];

function getMaxProfit(prices) {
    if (prices.length < 2) {
        throw Error("too less prices");
    }
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];
    let buyPrice = prices[0];
    let sellPrice = prices[1];

    prices.forEach((currentPrices, index) => {
        if (index > 0) {
            let nowProfit = currentPrices - minPrice;
            maxProfit = Math.max(maxProfit, nowProfit);
            if (maxProfit === nowProfit) {
                buyPrice = minPrice;
                sellPrice = currentPrices;
            }
            minPrice = Math.min(minPrice, currentPrices);
        }
    })
    console.log("buy price is :" + buyPrice);
    console.log("sell price is :" + sellPrice);

    return maxProfit;
}

console.log("===== max price is: " + getMaxProfit(prices));


console.log("========end======")
