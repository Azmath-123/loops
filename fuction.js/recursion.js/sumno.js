//Sum of Natural Numbers:
function sumNatural(n){
        if(n==0) return 0;
        return n+sumNatural(n-1);
}
var n=10;
var res=n+sumNatural(n-1);
console.log(`sum of first ${n} numbers is : ${res}` );