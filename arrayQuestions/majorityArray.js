// You are given an array arr, and your task is to find the majority element an element that occurs more than half the length of the array (i.e., arr.size() / 2). If such an element exists return it, otherwise return -1, indicating that no majority element is present.

function majorityArray(arr){
 let n = arr.length
 for( let i =0; i<n;i++){
    let count = 0;
    for(let j = 0 ;j<n;j++){
        if(arr[i] === arr[j]){
            count++
        }
    }
    if(count > n/3){
        return [arr[i],n/3,count]
    }
 }
 return [-1 , n/3]

}
const arr= [1,2,3,2,3,4,4,4,4,4,4,2,2,2,2]
console.log(majorityArray(arr));
