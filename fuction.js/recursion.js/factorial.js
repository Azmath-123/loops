function factorial(n){
    if(n==0)return 1;
    return n*factorial(n-1);
}
let res = factorial(10);
console.log(res);
