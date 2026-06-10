// Parameters and Arguments

function greet(name){
    console.log("Hello " + name);
}

greet("krishna");
greet("rahul");
greet("priya");

// Example with three parameters
function introduce(name, age, city){
    console.log(name);
    console.log(age);
    console.log(city);
}
introduce("krishna", 21, "Moradabad");

// Default Parameters
function pi(name = "Guest"){
    console.log("Hello " + name);
}

pi();

// Calculate Total Price
function calculateTotal(price, quantity){
    return price * quantity;
}

let total = calculateTotal(500, 3);
console.log(total);