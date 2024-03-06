//Implement a recursive function to calculate the power of a number base raised to an exponent exponent.
function powerFunction(x,n){
    if(n==1) return x;
    return x*powerFunction(x,n-1); 
}
console.log(powerFunction(2,3));