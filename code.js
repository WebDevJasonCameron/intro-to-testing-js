// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if(input === "Alex") return "Hello, Alex!";
//     else if(input === "Pat") return "Hello, Pat!"
//     return "Hello, Jane!";
// }


function sayHello(input) {
    if(typeof input === 'undefined' || input === true || input === false) input = 'World'
    return "Hello, " + input + "!";
}
