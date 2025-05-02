//Given an array of positive integers arr[] of size n, 
// the task is to find second largest distinct element in the array.
// Note: If the second largest element does not exist, return -1.

// if dublicate alound
function secondLargestElement(arr){
    let n = arr.length;
    arr.sort((a,b)=>a-b)
    for (let i = n-2; i >0; i--) {
        if( arr[i] !== arr[n-1]){
            return arr[i];
        }
    }
    return -1;
}

// if dublicate not aloud
function secondLargestElement(arr){
    let n = arr.length
    arr.sort((a,b)=>a-b)
    return arr[n-2]
}

const arr =  [2,5,3,8,1,9,9,0];
console.log(secondLargestElement(arr));
