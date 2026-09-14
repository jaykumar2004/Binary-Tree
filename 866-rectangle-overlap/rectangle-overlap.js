/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(a, b) {
    
    let left = Math.max(a[0], b[0]);
    let right = Math.min(a[2], b[2]);
    
    let bottom = Math.max(a[1], b[1]);
    let top = Math.min(a[3], b[3]);
    
    return left < right && bottom < top;
};