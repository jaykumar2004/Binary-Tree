const stoneGameVIII = A => {
    for (let i = 1; i < A.length; i++)
        A[i] += A[i - 1];

    let ans = A.at(-1);

    for (let i = A.length - 2; i > 0; i--)
        ans = Math.max(ans, A[i] - ans);

    return ans;
};