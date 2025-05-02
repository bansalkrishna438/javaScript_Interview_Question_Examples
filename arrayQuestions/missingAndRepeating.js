// Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. The task is to find these two numbers

function missing(arr){
    arr.sort((a,b)=>(a-b))
    for(let i = 0; i< arr.length; i++){
        // return arr
        if(i+1 !== arr[i]){
            return i+1
        }
    }

}

function repeating(){
}

const arr = [3,4,5,6,1,8]
console.log(missingAndRepeating(arr));
