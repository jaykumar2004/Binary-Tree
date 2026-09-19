/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function (
    radius, xCenter, yCenter, x1, y1, x2, y2) {
    const closestXDistance =
        calculateDistanceToRange(x1, x2, xCenter);
    const closestYDistance =
        calculateDistanceToRange(y1, y2, yCenter);
    return closestXDistance * closestXDistance
        + closestYDistance * closestYDistance
        <= radius * radius;
};

function calculateDistanceToRange(rangeStart, rangeEnd, point) {

    if (rangeStart <= point && point <= rangeEnd) {
        return 0;
    }
    return point < rangeStart
        ? rangeStart - point
        : point - rangeEnd;
}