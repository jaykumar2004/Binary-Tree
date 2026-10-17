/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums1) {
    function sumofdigits(n) {
        if (n === 0) return 0;
        return n % 10 + sumofdigits(Math.floor(n / 10));
    }

    const nums2 = [...nums1];
    nums2.sort((a, b) => {
        const x = sumofdigits(a);
        const y = sumofdigits(b);

        if (x === y) return a - b;
        return x - y;
    });
    const mp = new Map();
    for (let i = 0; i < nums2.length; i++) {
        mp.set(nums2[i], i);
    }

    let ans = 0;
    let i = 0;
    while (i < nums1.length) {
        if (mp.get(nums1[i]) === i) {
            i++;
        } else {
            ans++;
            const j = mp.get(nums1[i]);

            [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
        }
    }

    return ans;
};