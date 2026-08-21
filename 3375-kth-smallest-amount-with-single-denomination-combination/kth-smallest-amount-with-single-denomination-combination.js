/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {


    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }


    function count(x) {
        let total = 0;
        let n = coins.length;

        for (let mask = 1; mask < (1 << n); mask++) {

            let common = 1;
            let bits = 0;

            for (let i = 0; i < n; i++) {

                if (mask & (1 << i)) {
                    common = lcm(common, coins[i]);
                    bits++;
                    if (common > x) {
                        break;
                    }
                }
            }

            if (common > x) continue;

            if (bits % 2 === 1) {
                total += Math.floor(x / common);
            } else {
                total -= Math.floor(x / common);
            }
        }

        return total;
    }

    let left = 1;
    let right = Math.min(...coins) * k;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (count(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};