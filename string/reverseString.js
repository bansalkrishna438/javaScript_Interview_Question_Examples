function reverseString(s){
    left = 0
    right = s.length -1
    s=s.split("");
    while(left < right){
        if(s[left] !== s[right]){
        [s[left],s[right]] = [s[right],s[left]]
        }
        left++
        right--
    }
    return s.join('')
}
s="hello"
console.log(reverseString(s));
