function palindrome(s){
   let left = 0;
   let right = s.length - 1

   while(left <  right){
    if(s[left] !== s[right]){
        return 0
    }
    left++
    right--
   }
   return 1

}

s = "heleh"
console.log(palindrome(s));
