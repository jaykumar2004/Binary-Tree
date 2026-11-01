/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (val) {
    let n = val.length;
    if (n == 1) return val[0]
    let dp = [val[0], Math.max(val[0], val[1])]

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + val[i], dp[i - 1])
    }

    return dp[n-1];

};