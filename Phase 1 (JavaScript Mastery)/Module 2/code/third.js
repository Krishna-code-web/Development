let name = 'krishna';
console.log(name)

var city = 'Delhi';
var city = 'Mumbai';
console.log(city)

// var is function-scoped, which can create unexpected behavior.
if (true) {
    var x = 10;
}
console.log(x);

const pi = 3.14159;
console.log(pi)

// CamelCase is used as naming convention.

let firstName;
let lastName;

const company = "Google";
let salary = 50000;
salary = 60000;
console.log(company);
console.log(salary);