function isPalindrome(str){
    // return input.filter((e)=> e === e.split("").reverse().join(''))

    // let left = 0
    // let right = arr.length - 1
    
    // while(left <= right){
    //     if(str[left] !== str[right]) return false
    //     left++
    //     right--
    // }
    // return true

    let reverse = ""
    for(let i = str.length -1; i>=0; i--){
        reverse +=str[i]
    }
    return str === reverse
}

function palindrome(arr){
   let result = []
   for (let i = 0; i < arr.length; i++) {
    if(isPalindrome(arr[i])){
       result.push(arr[i])
    }
   }
   return result
}




const arr = ["level", "world", "radar", "hello", "madam"];
console.log(palindrome(arr));
