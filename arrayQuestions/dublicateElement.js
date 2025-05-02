// Given a sorted array arr[] of size n, the goal is to rearrange the array 
// so that all distinct elements appear at the beginning in sorted order. 
// Additionally, return the length of this distinct sorted subarray.

// function dublicateElement(arr){
//     const set = new Set(arr)
//     return set;

// }

function dublicateElement(arr){
    let n = arr.length

    if(n <= 1) return n

    let count = 1
    for (let i = 1; i < n; i++) {
        if(arr[i] !== arr[i-1]){
            arr[count++] = arr[i]
        }
        
    }
    return arr
}
const arr = [5,6,7,8,8,9,1,2,2,3]
console.log(dublicateElement(arr));

