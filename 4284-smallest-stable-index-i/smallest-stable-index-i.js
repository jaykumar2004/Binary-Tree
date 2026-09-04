/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    for (i = 0; i < nums.length; i++) {
        let first = nums.slice(0, i + 1)
        let last = nums.slice(i, nums.length)
        let instability = Math.max(...first) - Math.min(...last)
        if (instability <= k) {
            return i
        }
    }
    return -1
};