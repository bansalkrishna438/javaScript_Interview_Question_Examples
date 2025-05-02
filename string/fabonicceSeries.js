let num = 0
let temp =1
console.log(num,temp);
for(let i =0; i<6;i++){
    let sum = temp + num
    console.log(sum);
    num =temp
    temp = sum
}
