// Example using O(n^2), find the Big O

// Log all pair of the nums array
function logAllPairs(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
        }
    }
}

const exampleArray = [1, 2, 3, 4];
logAllPairs(exampleArray); // O(n^2)