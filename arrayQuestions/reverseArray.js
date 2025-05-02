//Given an array arr[] and an integer k, 
// the task is to reverse every subarray formed by consecutive K elements.

// function reverseArray(arr,k){
//     let result = []
//     for(let i = 0; i<arr.length;i +=k ){
//         const reverse = arr.slice(i,i+k).reverse()
//         result = result.concat(reverse)
//     }
//     return result;

// }

// function reverseArray(arr, k){
//     let start = 0 
//     let end = arr.length - 1
//     let temp;
//     for(let i = 0; i < (arr.length/2); i+=k){
//         temp = arr[start]
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// } 

function reverseArray(arr,k){
    let n = arr.length; 
    for (let i = 0; i < n; i += k) {
        let left = i;
        let right = Math.min(i + k - 1, n - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
    }
    return arr;
}


const arr =[1,2,3,4,5,6,7,8,9]
const k = 2

console.log(reverseArray(arr,k));
