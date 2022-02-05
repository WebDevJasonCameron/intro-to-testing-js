// helloWorld Function
function helloWorld() {
    return "Hello, World!";
}

// SayHello Function

// Prior to Refactor
// function sayHello(input) {
//     if(input === "Alex") return "Hello, Alex!";
//     else if(input === "Pat") return "Hello, Pat!"
//     return "Hello, Jane!";
// }

function sayHello(input) {
    if(typeof input === 'undefined' || input === true || input === false) input = 'World'
    return "Hello, " + input + "!";
}

// isFive Function
function isFive(input){
    return input == 5;
}

// isEven Function

// Refactor
// function isEven(input){
//     if(input === 2) return true;
//     else if(input === -4) return true;
//     return false;
// }

function isEven(input){
    if(typeof input === 'boolean')return false;
    return input % 2 === 0;

}

// isVowel Function

// Refactor
// function isVowel(input){
//     if(input === 'a')return true;
//     else if(input === 'A')return true;
//     else return false;
// }

function isVowel(input){
    if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') return true;
    else if (input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U') return true;
    else return false;
}

// add Function
function add(num1, num2){
    if(isNaN(num1) || isNaN(num2)) return NaN;
    else return num1 + num2;
}

console.log(add('banana', 'split'));











