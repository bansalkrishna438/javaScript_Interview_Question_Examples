arr1 = [1,3,5,7]
arr2 = [2,4,6,8]
result = []
const maxLen = Math.max(arr1.length,arr2.length);
for (let i = 0; i < maxLen; i++) {
    if(i < arr1.length){
        result.push(arr1[i])
    }
    if(i< arr2.length){
        result.push(arr2[i])
    }  
}
console.log(result);
