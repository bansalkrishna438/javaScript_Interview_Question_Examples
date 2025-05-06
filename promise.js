const promise = new Promise((resolve, reject)=>{
    const arr = [1,2,3]
    const newArray = arr.map((e)=> e*1)
    for(let i = 0;i<arr.length;i++){
        if(newArray[i]%2 === 0){
            resolve("all numbers are even")
        }
        else{
            reject("arr is not even")
        }
    }
});
promise.then((value) => console.log(value)).catch((err) => console.log(err));