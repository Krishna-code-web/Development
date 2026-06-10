// console.log("Welcome Krishna");
// console.log("Welcome Krishna");
// console.log("Welcome Krishna");

// function greet(){
//     console.log("Welcome Krishna");
// }

// greet();
// greet();
// greet();

function sayHello(){
    console.log("Hello World!");
}

// sayHello();

// Function with Parameters

function greet(name){
    console.log("Hello " + name);
}

greet("Krishna");
greet("Rahul");

// Function with Return Value

function add(a,b){
    return a+b;
}

let result = add(10, 20);
console.log(result);

// Function without return 

function add1(a,b){
    console.log(a+b);
}

result = add1(10, 20);
console.log(result);

function square(num){
    return num*num;
}

console.log(square(5));

// Due to hoisting
hello();

// 1) Function Declaration
function hello(){
    console.log("Hello, how are you?");
}

// 2) Function Expression
// hello1(); not supported;

const hello1 = function(){
    console.log("Hello, how are you?");
};

const multiply = function multiply1(a, b){
    return a * b;
};

console.log(multiply(5, 4));

// Arrow Function
// const subtract = (a, b) => {
//     return a-b;
// }

const subtract = (a, b) => a-b;

console.log(subtract(10, 5));

const cube = num => num*num*num;

console.log(cube(3));

// All in one
// function greet10(){
//     console.log("Hello");
// }

// const greet10 = function(){
//     console.log("Hello");
// }

const greet10 = () => {
    console.log("Hello");
}

greet10();

