let age = 20;

// if 
if(age >= 18){
    console.log("You can vote");
}

// if-else
age = 16;
if(age >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// if-else ladder
let marks = 75;

if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 80){
    console.log("Grade B");
} else if(marks >= 70){
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Truthy Falsy values
// false, 0, -0, 0n, "", null, undefined, NaN

let username = "";

if(username){
    console.log("Welcome", username);
} else {
    console.log("Please enter username");
}

// Switch Statement
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}
// break prevents from Fall Through

// Multiple Cases Together

let fruit = "banana";

switch(fruit){
    case "apple":
    case "mango":
    case "banana":
        console.log("Fruit Found");
        break;
    default:
        console.log("Unknown Fruit");
}

// Ternary Operator

age = 20;
let result = age >= 18 ? "Adult": "Minor";
console.log(result);

marks = 85;
let grade =
marks >= 90 ? "A" :
marks >= 80 ? "B" :
marks >= 70 ? "C" :
"Fail";
console.log(grade);



