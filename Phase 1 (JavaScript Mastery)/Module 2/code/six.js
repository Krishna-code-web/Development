// Type Coercion is the automatic conversion of one data type into another by JavaScript when performing
// operations.

console.log("5" + 2);

// String Coercion

console.log("10" + 5);
console.log("Age: " + 21);

// Numeric Coercion

console.log("10" - 5);
console.log("10" * 2);
console.log("20" / 2);
console.log("10" % 3);

// Boolean Coercion

if("hello"){
    console.log("Executed");
}

// Equality Coercion

console.log(5 == "5");

// Type Casting

console.log(Number("5")+2);

let age = 21;
let strAge = String(age);
console.log(strAge);
console.log(typeof strAge);

let value = "123";
let num = Number(value);
console.log(num);
console.log(typeof num);

console.log(Number("Hello"));

console.log(Number(true));
console.log(Number(false));

console.log(Boolean(1));
console.log(Boolean(0));

console.log(parseInt("100krishna"));
console.log(parseInt("123abc456"));

console.log(parseFloat("99.99"));
console.log(parseFloat("99.99kg"));