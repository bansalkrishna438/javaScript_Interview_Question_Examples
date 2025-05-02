// Third largest element in an array of distinct elements

function thirdLargestNumber(arr){
    let n = arr.length;
    arr.sort((a,b)=> a-b)
    return arr[n-3]
}
const arr = [5,8,3,7,4,9,1]
console.log(thirdLargestNumber(arr));
