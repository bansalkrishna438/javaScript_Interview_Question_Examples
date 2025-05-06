function largest(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        let maxEle = arr[i]
        for (let j = 0; j < n; j++) {
            if(maxEle < arr[j]){
                maxEle = arr[j]
            }
            
        }
        return maxEle;
    }
}

const arr = [99, 43 ,89,56,101]
console.log(largest(arr));
