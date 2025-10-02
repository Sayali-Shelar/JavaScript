// Switch
let day=3
switch(day){
    case (2&&3):
    console.log("monday");
    break;
    case (4&&5):
        console.log("friday");
        break;
        default:
            console.log("invalid");
            break;
            }


// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// while loop
let counter = 1;
while (counter <= 3) {
    console.log("Counter is: " + counter);
    counter++;
}

// do-while
let number1 = 1;

do {
    console.log("Number is: " + number1);
    number1++;
} while (number1 < 3);


// practice program
let num1 = 10;
let num2 = 20;
let operation = "+";

if (operation === "+") {
    console.log("Result: " + (num1 + num2));
} else if (operation === "-") {
    console.log("Result: " + (num1 - num2));
} else if (operation === "*") {
    console.log("Result: " + (num1 * num2));
} else if (operation === "/") {
    if (num2 !== 0) {
        console.log("Result: " + (num1 / num2));
    } else {
        console.log("Division by zero is not allowed.");
    }
} else {
    console.log("Invalid operation.");
}




let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let num = 10;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


let tempCelsius = 30;
if (tempCelsius < 0) {
    console.log("It's freezing!");
} else if (tempCelsius >= 0 && tempCelsius <= 20) {
    console.log("It's cold.");
} else if (tempCelsius > 20 && tempCelsius <= 30) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}




let char = 'E';

if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}
