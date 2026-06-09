// Print 1 to 5 numbers
for(let i=1;i<=5;i++){
    console.log(i);
}

// Print Even number from 1 to 10
for(let i=2;i<=10;i+=2){
    console.log(i);
}

// Multiplication table for 5
for(let i=1;i<=10;i++){
    // console.log("5 * " + i + " = ", 5*i);
    console.log(`5 * ${i} = ${5*i}`);
}

// while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let sum = 0;
i = 1;
while(i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

// do-while loop
i = 1;
do {
    console.log(i);
    i++;
} while(i<=5);

let passwordCorrect = false;
do {
    console.log("Enter Password");  
}
while(!passwordCorrect);


