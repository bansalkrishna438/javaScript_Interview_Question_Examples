// Given an array of integers arr[] of size n, the task is to rotate the 
// array elements to the left by d positions.

function rotateArray(arr,d){
    let n = arr.length;
    for (let i = 0; i < d; i++) {
        let first = arr[0];
        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = first;
    }
    return arr
}

const arr =[1,2,3,4,5,6]
let d = 2

console.log(rotateArray(arr,d));
