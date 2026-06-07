// A data type specifies the kind of value a variable can store.

// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// JavaScript has 7 Primitive Data Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

let name = "Krishna";
let city = 'Meerut';
let course = `JavaScript`;
console.log(name);
console.log(city);
console.log(course.length);

let age = 21;
let salary = 50000.75;
console.log(age);
console.log(salary);

// Special number values

console.log(10 / 0)
console.log("hello" * 5)

let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn);
console.log(hasPermission);

let number;
console.log(number);
console.log(typeof number);

let user = null;
console.log(user);
console.log(typeof user)

let a;
let b = null;
console.log(a);
console.log(b);

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

console.log(Number.MAX_SAFE_INTEGER);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

console.log(typeof "Krishna");
console.log(typeof 21);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);
console.log(typeof Symbol("id"));

// let name = "Krishna";
// let age = 21;
// let isStudent = true;
// let city;
// let salary = null;
// let bigNum = 12345678901234567890n;
// let id = Symbol("ID");
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof city);
// console.log(typeof salary);
// console.log(typeof bigNum);
// console.log(typeof id);

let str = "Hello";
str[0] = "Y";
console.log(str);