// MODULE 4: Control Structures 

/*
    INTRODUCTION:
    Control structures allow us to control the flow of our program's execution.


    JavaScript provides several types of control structures:
    1. Conditional Statements (if, else if, else).
    2. Switch Case Statements.
    3. Looping Structures (for, while, do-while).
    
    These structures are essential for making decisions and repeating actions in programs.
*/

/* 
    CONDITIONAL STATEMENTS:
    Conditional statements are used to perform different actions based on different conditions.
    The most common are `if`, `else if`, and `else`.
*/

// Example of if-else statement:
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Output: "You are eligible to vote."
/* 
    NOTES:
    - The `if` statement checks a condition (age >= 18).
    - If the condition is true, the first block of code runs.
    - If the condition is false, the code in the `else` block is executed.
*/

/* 
    ELSE IF STATEMENT:
    Use `else if` to specify a new condition to test if the first condition is false.
*/

let score = 85;

if (score >= 90) {
    console.log("Grade: A");


} else if (score >= 75) {
    console.log("Grade: B");

    
} else {
    console.log("Grade: C");
}

// Output: "Grade: B"

/*
    NOTES:
    - The first condition checks if the score is 90 or above.
    - If false, the `else if` block checks if the score is 75 or above.
    - The `else` block is executed only if both conditions are false.
*/

/* 
    SWITCH STATEMENT:
    Switch statements provide an alternative to multiple `if-else if` statements.
    They evaluate an expression, matching the result to a case label.
*/

let day = 3;

switch (day) {
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
        console.log("Invalid day");
        break;
}

// Output: "Wednesday"

/*
    NOTES:
    - The `switch` statement compares the `day` variable to the cases.
    - If a match is found, the corresponding block of code runs.
    - The `break` statement ensures the program exits the switch once a match is found.
    - The `default` case is executed if no match is found.
*/

/* 
    LOOPS:
    Loops allow you to repeat a block of code multiple times.
    The most common loop types are `for`, `while`, and `do-while`.
*/

/* 
    FOR LOOP:
    The `for` loop is commonly used when you know how many times the loop should run.
    Syntax: for (initialization; condition; increment/decrement) { // code to be executed }
*/

// Example of a for loop:
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
// Output:
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4
// Iteration number: 5

/*
    NOTES:
    - The loop runs as long as the condition (i <= 5) is true.
    - In each iteration, the value of `i` is incremented by 1.
    - When `i` becomes 6, the loop stops.
*/

/* 
    WHILE LOOP:
    The `while` loop continues to run as long as the condition is true.
    Syntax: while (condition) { // code to be executed }
*/

// Example of a while loop:
let counter = 1;

while (counter <= 3) {
    console.log("Counter is: " + counter);
    counter++;
}

// Output:
// Counter is: 1
// Counter is: 2
// Counter is: 3

/*
    NOTES:
    - The `while` loop checks the condition before each iteration.
    - As long as the condition is true, the loop continues to run.
    - The variable `counter` is incremented after each loop iteration.
*/

/* 
    DO-WHILE LOOP:
    The `do-while` loop is similar to the `while` loop, but the condition is checked after the code is executed.
    This guarantees the loop runs at least once.
    Syntax: do { // code to be executed } while (condition);
*/

// Example of a do-while loop:
let number = 1;

do {
    console.log("Number is: " + number);
    number++;
} while (number < 3);

// Output:
// Number is: 0
// Number is: 1
// Number is: 2

/*
    NOTES:
    - The `do-while` loop ensures the code inside the block is executed at least once, even if the condition is false initially.
*/

/* 
    DOM MANIPULATION WITH CONTROL STRUCTURES:
    Control structures can be used to interact with and manipulate the DOM based on certain conditions.
*/

// Example: Using if-else to change the background color of a page:
function changeBackgroundColor(color) {
    if (color === "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (color === "green") {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "white";
    }
}

// HTML element: <button onclick="changeBackgroundColor('blue')">Make Blue</button>
//               <button onclick="changeBackgroundColor('green')">Make Green</button>
//               <button onclick="changeBackgroundColor('reset')">Reset</button>

/*
    NOTES:
    - The `if-else if` block checks the color parameter passed to the function.
    - The `document.body.style.backgroundColor` is used to change the background color of the web page.
*/

// Example: Using a loop to display list items in the DOM:
function displayList() {
    let fruits = ["Apple", "Banana", "Cherry"];
    let list = document.getElementById("fruit-list");

    for (let i = 0; i < fruits.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        list.appendChild(listItem);
    }
}

// HTML structure: <ul id="fruit-list"></ul>
// Call the function: <button onclick="displayList()">Show Fruits</button>

/*
    NOTES:
    - The `for` loop iterates over the `fruits` array.
    - For each fruit, a new list item is created and added to the DOM using `appendChild`.
*/

// MODULE 4: SUMMARY
/*
    1. **Control structures** like `if-else`, `switch`, and loops (`for`, `while`, `do-while`) are essential for controlling the flow of a program.
    2. **Conditional statements** help make decisions in your code based on certain conditions.
    3. **Loops** allow you to repeat actions multiple times, making code more efficient.
    4. **DOM manipulation** can be integrated with control structures to create dynamic and interactive web pages.
*/











//  😉😚Check Positive or Negative

let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}



// 😚🙂 Even or Odd

let num = 10;

if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}



// 😋😙 Grade Evaluation
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// 😋😙😶 Age Verification

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}



// 😂🤩 Simple Voting Eligibility

let voterAge = 17;

if (voterAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



// 🤔😎Check Leap Year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}



// 😎😚Simple Calculator
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



// Temperature Conversion 😍😚
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



// Check for Vowel or Consonant 😊🤗

let char = 'E';

if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ||
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(char + " is a vowel.");
} else {
    console.log(char + " is a consonant.");
}




// 😎😚 Simple Password Check

let password = "admin123";

if (password === "admin123") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}


// --------------------------------------

// Day of the Week 😍☺😋
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




// 🙂🤗 Simple Calculator

let num1 = 15;
let num2 = 5;
let operation = "*";

switch (operation) {
    case "+":
        console.log("Result: " + (num1 + num2));
        break;
    case "-":
        console.log("Result: " + (num1 - num2));
        break;
    case "*":
        console.log("Result: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Result: " + (num1 / num2));
        } else {
            console.log("Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid operation.");
}



// 😋😍 Grade Evaluation

let marks = 85;

switch (true) {
    case (marks >= 90):
        console.log("Grade: A");
        break;
    case (marks >= 80):
        console.log("Grade: B");
        break;
    case (marks >= 70):
        console.log("Grade: C");
        break;
    case (marks >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}



//  Month Evaluation 😶🤗
let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}



// Simple Voting Eligibility 🙄😋
let voterAge = 19;

switch (true) {
    case (voterAge >= 18):
        console.log("You are eligible to vote.");
        break;
    default:
        console.log("You are not eligible to vote.");
}




// Check Season 😘😋
let monthNum = 11;

switch (monthNum) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}




// Check Traffic Light 🤣😏
let lightColor = "red";

switch (lightColor) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Caution!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid color");
}


// User Role Access😎😘

let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Access granted: Admin privileges.");
        break;
    case "editor":
        console.log("Access granted: Editor privileges.");
        break;
    case "viewer":
        console.log("Access granted: Viewer privileges.");
        break;
    default:
        console.log("Access denied.");
}



//  Simple Temperature Conversion 😎😮
let tempUnit = "C";
let tempValue = 100;

switch (tempUnit) {
    case "C":
        console.log("Temperature in Fahrenheit: " + (tempValue * 9/5 + 32));
        break;
    case "F":
        console.log("Temperature in Celsius: " + ((tempValue - 32) * 5/9));
        break;
    default:
        console.log("Invalid temperature unit.");
}




// Simple Password Check 🤣🤗

let password = "mypassword";

switch (password) {
    case "mypassword":
        console.log("Access granted.");
        break;
    default:
        console.log("Access denied.");
}


// --------------------------

// 1. Print Numbers from 1 to 10
console.log("1. Print Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/* Explanation: This loop starts from 1 and goes to 10, incrementing i by 1 in each iteration, printing each number. */

// 2. Calculate the Sum of First 10 Natural Numbers
console.log("\n2. Calculate the Sum of First 10 Natural Numbers:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum: " + sum);
/* Explanation: This loop calculates the sum of numbers from 1 to 10 by adding each number to the sum variable. */

// 3. Print Even Numbers from 1 to 20
console.log("\n3. Print Even Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
/* Explanation: This loop checks if a number is even by using the modulo operator. If it is even (remainder is 0), it prints the number. */

// 4. Print Odd Numbers from 1 to 20
console.log("\n4. Print Odd Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
/* Explanation: Similar to the even numbers example, this loop checks for odd numbers and prints them if the remainder is not 0. */

// 5. Factorial of a Number
console.log("\n5. Factorial of a Number:");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + ": " + factorial);

/* Explanation: This loop calculates the factorial of a number by multiplying each number from 1 to the specified num. */
