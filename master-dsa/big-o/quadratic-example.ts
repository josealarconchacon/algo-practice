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

// Log all numbers in array, then their sum
function logNumberAndTheirSum(nums: number[]): void {
    console.log('All numbers')
    nums.forEach(n => { // O(n)
        console.log(n)
    })

    console.log('Sum of all numners')
    nums.forEach(firstNum => { // O(^2)
        nums.forEach(secondNum => {
            console.log(firstNum + secondNum)
        })
    })
}
// O(n + n^2) = O(n^2)
console.log(logNumberAndTheirSum([1,2,3]))