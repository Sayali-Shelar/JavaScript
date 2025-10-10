//  Month Evaluation
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

// check season
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




// Check Traffic Light 
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


// User Role Access

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


//  Calculate the Sum of First 10 Natural Numbers
console.log("\n2. Calculate the Sum of First 10 Natural Numbers:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum: " + sum);


//  Print Even Numbers from 1 to 20
console.log("\n3. Print Even Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//  Print Odd Numbers from 1 to 20
console.log("\n4. Print Odd Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Factorial of a Number
console.log("\n5. Factorial of a Number:");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial of " + num + ": " + factorial);


// count number
let countnum=12345;
count=0;
while(countnum>0){
    countnum=Math.floor(countnum/10)
    count++;
}
console.log(count)


// fibonacci series
let a=0 , b=1;
for(i=1;i<=10;i++)
{
    next=a+b;
    a=b;
    b=next;
    console.log(next);
    
}

// Multiplication Table of a Number
console.log("\n7. Print Multiplication Table of a Number:");
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

//  Reverse a Number
console.log("Reverse a Number:");
let originalNum = 12345;
let reversedNum = 0;
while (originalNum > 0) {
    let digit = originalNum % 10;
    reversedNum = (reversedNum * 10) + digit;
    originalNum = Math.floor(originalNum / 10);
}
console.log("Reversed Number: " + reversedNum);



// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  
    let area = length * width;
    return area; 
}
let area = calculateArea(5, 3);
console.log("The area of the rectangle is:", area);


// Function to check if a number is even or odd
function isEven(number) {
    if (number % 2 === 0) {
        return "Even"; 
    } else {
        return "Odd";
    }
}
console.log(isEven(4));
console.log(isEven(7)); 


// Function to find the largest number
function findLargest(a, b, c) {
    let largest = Math.max(a, b, c);
    return largest;
}
console.log(findLargest(4, 9, 2));


// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(25));


// Function to calculate the total price of items in a shopping cart
function calculateTotal(prices) {
    let total = 0; 
    for (let price of prices) {
        total += price; 
    }
    return total;
}
console.log(calculateTotal([10, 20, 30]));



// Function to count vowels in a string
function countVowels(input) {
    let vowels = "aeiouAEIOU";
    let count = 0; 
    for (let char of input) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;
}
console.log(countVowels("hello")); 
console.log(countVowels("programming")); 


// Function to validate a password
function validatePassword(password) {
    if (password.length >= 8 && /\d/.test(password)) {
        return "Valid"; 
    } else {
        return "Invalid"; 
    }
}
console.log(validatePassword("Pass123")); 
console.log(validatePassword("Pass1234")); 



// Function to perform a calculation
function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid operator";
    }
}
console.log(calculator(5, 3, '+')); 
console.log(calculator(10, 2, '/')); 



 
// Function to check if a string is a palindrome
function isPalindrome(input) {
    let reversed = input.split('').reverse().join(''); 
    return input.toLowerCase() === reversed.toLowerCase(); 
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 