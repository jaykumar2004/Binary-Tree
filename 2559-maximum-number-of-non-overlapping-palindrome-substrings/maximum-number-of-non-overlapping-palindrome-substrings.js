/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;

    const palindrome = Array.from(
        { length: n },
        () => Array(n).fill(false)
    );
    for (let len = 1; len <= n; len++) {
        for (let left = 0; left + len - 1 < n; left++) {
            const right = left + len - 1;

            if (
                s[left] === s[right] &&
                (len <= 2 || palindrome[left + 1][right - 1])
            ) {
                palindrome[left][right] = true;
            }
        }
    }
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1];

        for (let j = 0; j < i; j++) {
            const len = i - j;

            if (len >= k && palindrome[j][i - 1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[n];
};