// let a = 10;
// let b = 5;
// console.log(a + b);

// Types of Operators in JavaScript
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Relational (Comparison) Operators
// 4. Logical Operators
// 5. Increment & Decrement Operators
// 6. Ternary Operator
// 7. Type Operators
// 8. Nullish Coalescing Operator
// 9. Optional Chaining Operator

let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let x = 10;
console.log(x);
x += 5;
console.log(x);
x -= 5;
console.log(x);
x *= 5;
console.log(x);
x /= 5;
console.log(x);
x %= 5;
console.log(x);


console.log(5 == "5");
console.log(5 === "5");
console.log(10 > 5);
console.log(10 < 5);

let age = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense);
console.log(true || false)
console.log(!true)

let p = 5;
p++;
console.log(p);
p--;
console.log(p);
console.log(++p);
console.log(p++);

let myAge = 21;
let result = myAge >= 18 ? 'Adult': 'Minor';
console.log(result)

console.log(typeof "Krishna");
let arr = [];
console.log(arr instanceof Array);


let value = 'null';
console.log(value ?? "Guest");


let user = null;
console.log(user?.name);