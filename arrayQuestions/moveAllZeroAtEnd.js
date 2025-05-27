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

 // in one iterartion
function moveZerosToFront(arr) {
  let n = arr.length;
  let j = n - 1; // start filling from the end
  // Traverse from end to start
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[j] = arr[i];
      j--;
    }
  }
  // Fill the remaining positions with zeros
  while (j >= 0) {
    arr[j] = 0;
    j--;
  }
  return arr;
}

const arr = [0,1,3,0,4,0,0,7]
console.log(moveZero(arr));

// Example usage
let arr1 = [3,0,0,1,0,2,0,0,5,0];
console.log(moveZerosToFront(arr1)); // [0, 0, 0, 0, 0, 3, 1, 2, 5]

let arr2 = [0,0,0,0,0,0,3,1,2,5];
console.log(moveZerosToFront(arr2)); // [0, 0, 0, 0, 0, 0, 3, 1, 2, 5]

