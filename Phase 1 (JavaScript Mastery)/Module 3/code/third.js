for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
for(let i = 0; i < products.length; i++) {
    if(products[i] === "Keyboard") {
        console.log("Product Found");
        break;
    }
}

// break in while loop
let i=1;
while(true) {
    console.log(i);
    if(i === 5) {
        break;
    }
    i++;
}

// Continue Statement
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

let users = ["Aman", "Ravi", "BannedUser", "Krishna"];
for(let i = 0; i < users.length; i++) {
    if(users[i] === "BannedUser") {
        continue;
    }
    console.log("Processing:", users[i]);
}

for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        if(j === 2) {
            break;
        }
        console.log(i, j);
    }
}

outerLoop:
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        if(i === 2 && j === 2) {
            break outerLoop;
        }
        console.log(i, j);
    }
}