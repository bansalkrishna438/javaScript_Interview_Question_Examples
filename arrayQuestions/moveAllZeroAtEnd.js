//Given an array of integers arr[], 
// the task is to move all the zeros to the end of the array 
// while maintaining the relative order of all non-zero elements.

function moveZero(arr){
   let n = arr.length
   arr.sort((a,b)=> b-a)
   return arr
}

function moveZero(arr){
    let n = arr.length
    arr.sort((a, b) => (a === 0) - (b === 0));

    return arr
 }


arr = [0,1,3,0,4,0,0,7]
console.log(moveZero(arr));
