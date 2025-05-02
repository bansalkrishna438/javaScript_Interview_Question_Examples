// Given an array arr[] consisting of only 0’s and 1’s, 
// the task is to find the count of a maximum number of consecutive 
// 1’s or 0’s present in the array.

function maxAnyNum(arr){
    let maxCount = 0;
    let count = 1;

    for(let i =1;i<arr.length;i++){
        if(arr[i] === arr[i-1] && arr[i] === 1){
            count++;
        }
        else{
            maxCount = Math.max(maxCount,count);
            count = 1;
        }
    }
    return Math.max(maxCount,count)

}

function maxOnces(arr){
    let maxCount = 0
    let count = 0 
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 7){
            count++
            maxCount = Math.max(maxCount,count)
        }
        else{
            count = 0
        }
    }
    return maxCount
}

const arr = [2,2,2,2,2,2,2,4,5,7,1,1, 1, 0, 1, 0, 1, 0, 1, 0,1,1,1,1,1]
console.log(maxAnyNum(arr));
