/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let answer = 0;

    function dfs(node) {
        if (node === null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;

        if (node.val === Math.floor(sum / count)) {
            answer++;
        }

        return [sum, count];
    }

    dfs(root);
    return answer;
};