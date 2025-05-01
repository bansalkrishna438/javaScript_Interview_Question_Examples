function FlatAnArray(arr){
    let result = [];
    for(let i =0;i<arr.length;i++){
        if(Array.isArray((arr[i]))){
            result.push(...FlatAnArray(arr[i]))
        }
        else{
            result.push(arr[i])
        }
    }
    return result;
}
const arr = [1,2,[4,7,9,[4,7,3]]]
console.log(FlatAnArray(arr))