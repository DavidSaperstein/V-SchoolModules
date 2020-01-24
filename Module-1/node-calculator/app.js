const readline = require("readline-sync")

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function sub(num1, num2) {
    return num1-num2;
}

function mul(num1, num2) {
    return num1*num2;
}

function div(num1, num2) {
    return num1/num2;
}

const num1 = readline.question("Please enter your first number: ")
const num2 = readline.question("Please enter your second number: ")
const choice = readline.question("Please enter the operation to perform: add, sub, mul, div: ")

if (choice == "add") {
    console.log("The result is: " + add(num1, num2));
} else if (choice == "sub") {
    console.log("The result is: " + sub(num1,num2));
} else if (choice == "mul") {
    console.log("The result is: " + mul(num1,num2));
} else {
    console.log("The result is: " + div(num1, num2));
}
