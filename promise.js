// const promise = new Promise((resolve, reject)=>{
//     const arr = [1,2,3]
//     const newArray = arr.map((e)=> e*1)
//     for(let i = 0;i<arr.length;i++){
//         if(newArray[i]%2 === 0){
//             resolve("all numbers are even")
//         }
//         else{
//             reject("arr is not even")
//         }
//     }
// });
// promise.then((value) => console.log(value)).catch((err) => console.log(err));

const promiseTwo = new Promise((resolve,reject) =>{
    let error = true
    if(!error){
        resolve("promise resolve"); 
    }
    else{
        reject("promise reject")
    }
})

async function isPromiseResolve() {
    try{
        const response = await promiseTwo
        console.log(response) 
    }
    catch(err){
        console.log("err");
        
        
    }
}

isPromiseResolve()