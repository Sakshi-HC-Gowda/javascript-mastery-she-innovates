console.log("===== Program 1: Even or Odd =====");
let num1 = 12;
if (num1 % 2 === 0) {
    console.log(num1 + " is Even");
} else {
    console.log(num1 + " is Odd");
}

console.log("\n===== Program 2: Positive, Negative or Zero =====");
let num2 = -8;
if (num2 > 0) {
    console.log(num2 + " is Positive");
} else if (num2 < 0) {
    console.log(num2 + " is Negative");
} else {
    console.log("Number is Zero");
}

console.log("\n===== Program 3: Largest of Two Numbers =====");
let a = 45;
let b = 72;

if (a > b) {
    console.log(a + " is Larger");
} else {
    console.log(b + " is Larger");
}

console.log("\n===== Program 4: Largest of Three Numbers =====");
let x = 50;
let y = 75;
let z = 25;

if (x >= y && x >= z) {
    console.log(x + " is Largest");
} else if (y >= x && y >= z) {
    console.log(y + " is Largest");
} else {
    console.log(z + " is Largest");
}

console.log("\n===== Program 5: Smallest of Three Numbers =====");

if (x <= y && x <= z) {
    console.log(x + " is Smallest");
} else if (y <= x && y <= z) {
    console.log(y + " is Smallest");
} else {
    console.log(z + " is Smallest");
}

console.log("\n===== Program 6: Leap Year Check =====");
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}

console.log("\n===== Program 7: Voting Eligibility =====");
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

console.log("\n===== Program 8: Divisible by 5 and 11 =====");
let number = 55;

if (number % 5 === 0 && number % 11 === 0) {
    console.log(number + " is divisible by both 5 and 11");
} else {
    console.log(number + " is NOT divisible by both 5 and 11");
}

console.log("\n===== Program 9: Grade Calculator =====");
let marks = 84;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

console.log("\n===== Program 10: BMI Calculator =====");

let weight = 68;
let height = 1.72;

let bmi = weight / (height * height);

console.log("BMI =", bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal Weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}