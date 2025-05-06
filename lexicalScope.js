function outer(){
    let outerVar = "hello"
    function inner(){
        console.log(outerVar);
    }
    console.log("outerVar");
    inner()
}
outer()