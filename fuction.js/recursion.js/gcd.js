function gcd(a,b){
    if (b==0){
        return a;
    }
    return gcd(b,a%b);
}
const num1 = 64;
const num2 = 16;

const result = gcd(num1, num2);
console.log(`GCD of ${num1} and ${num2} is: ${result}`);