/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const total = nums.reduce((acc, num) => acc + num, 0);
    const target = total - x;

    if (target < 0) return -1;
    if (target === 0) return nums.length;

    const n = nums.length;
    let maxLen = -1;
    let curSum = 0;
    let left = 0;

    for (let right = 0; right < n; ++right) {
        curSum += nums[right];
        while (curSum > target && left <= right) {
            curSum -= nums[left++];
        }
        if (curSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen !== -1 ? n - maxLen : -1;
};