// Given an array arr[], the task is to find the subarray that has 
// the maximum sum and return its sum.

function subArraySum(arr){
    let n = arr.length
    let maxSum = arr[0]
    let curr = arr[0]

    for(let i = 1; i<n;i++){
        curr = Math.max(arr[i], curr+arr[i])
        maxSum = Math.max(curr,maxSum)
    }
    return maxSum
}

const arr = [1,2,3,5,3,7,0]
console.log(subArraySum(arr));
