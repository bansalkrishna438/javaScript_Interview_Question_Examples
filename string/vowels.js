function vowels(str){
    let count = 0;
    let vowArr = ['a','e','i','o','u'];
    const str1 = str.toLowerCase()
    console.log(str1);
    
    for(let i =0;i<str.length;i++){
        if(vowArr.includes(str1[i])){
            count++
        }
    }
    return count
}
const str = "Hello"
console.log(vowels(str));

