const arr = [1,2,3,1,3,1,2,3]
const freq = []
arr.forEach(ele =>{
    if(freq[ele]) freq[ele]++
    else freq[ele]=1
})
for (const ele in freq) {
    console.log(ele,freq[ele]);
    
}