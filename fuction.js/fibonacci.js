var a=0,b=1;
console.log(a);
console.log(b);
for(i=0;i<=10;i++){
    var temp=a+b
    console.log(temp);
    a = b;
    b = temp;
}

// nth number of fibonacci using recursion
 
function fibonacci(n){
        if(n<=1){
            return n;
        }
        return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(5));