//Reverse a String
function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}
const inputString = "hello";
const reversedString = reverseString(inputString);
console.log(`Original String: ${inputString}`);
console.log(`Reversed String: ${reversedString}`);

