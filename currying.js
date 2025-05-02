function currrying(a){
        return function(c){
            return a+c;
        }
}

console.log(currrying(8)(1))