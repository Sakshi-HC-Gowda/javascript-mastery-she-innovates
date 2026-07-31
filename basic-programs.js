// Program 1: Swap Two Numbers
console.log("===== Program 1: Swap Two Numbers =====");
let a = 10;
let b = 20;
console.log("Before Swap:");
console.log("a =", a);
console.log("b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap:");
console.log("a =", a);
console.log("b =", b);

// Program 2: Average of Three Numbers
console.log("\n===== Program 2: Average of Three Numbers =====");
const num1 = 85;
const num2 = 90;
const num3 = 95;
const average = (num1 + num2 + num3) / 3;
console.log("Average =", average);

// Program 3: Area of Rectangle
console.log("\n===== Program 3: Area of Rectangle =====");
const length = 15;
const width = 8;
const rectangleArea = length * width;
console.log("Area =", rectangleArea);

// Program 4: Area of Circle
console.log("\n===== Program 4: Area of Circle =====");
const radius = 7;
const circleArea = Math.PI * radius * radius;
console.log("Area =", circleArea.toFixed(2));

// Program 5: Perimeter of Rectangle
console.log("\n===== Program 5: Perimeter of Rectangle =====");
const perimeter = 2 * (length + width);
console.log("Perimeter =", perimeter);

// Program 6: Simple Interest
console.log("\n===== Program 6: Simple Interest =====");
const principal = 10000;
const rate = 5;
const time = 2;
const simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest =", simpleInterest);

// Program 7: Celsius to Fahrenheit
console.log("\n===== Program 7: Celsius to Fahrenheit =====");
const celsius = 30;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius + "°C =", fahrenheit + "°F");

// Program 8: Fahrenheit to Celsius
console.log("\n===== Program 8: Fahrenheit to Celsius =====");
const f = 98.6;
const c = (f - 32) * 5 / 9;
console.log(f + "°F =", c.toFixed(2) + "°C");

// Program 9: Even or Odd
console.log("\n===== Program 9: Even or Odd =====");
const evenOdd = 17;
if (evenOdd % 2 === 0) {
    console.log(evenOdd + " is Even");
} else {
    console.log(evenOdd + " is Odd");
}

// Program 10: Positive or Negative
console.log("\n===== Program 10: Positive or Negative =====");
const number = -12;
if (number > 0) {
    console.log(number + " is Positive");
} else if (number < 0) {
    console.log(number + " is Negative");
} else {
    console.log("Number is Zero");
}

// Program 11: Largest of Two Numbers
console.log("\n===== Program 11: Largest of Two Numbers =====");
const first = 45;
const second = 72;
if (first > second) {
    console.log(first + " is Larger");
} else {
    console.log(second + " is Larger");
}

// Program 12: Largest of Three Numbers
console.log("\n===== Program 12: Largest of Three Numbers =====");
const x = 25;
const y = 40;
const z = 35;
if (x >= y && x >= z) {
    console.log(x + " is Largest");
} else if (y >= x && y >= z) {
    console.log(y + " is Largest");
} else {
    console.log(z + " is Largest");
}

// Program 13: Leap Year Check
console.log("\n===== Program 13: Leap Year Check =====");
const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}

// Program 14: Voting Eligibility
console.log("\n===== Program 14: Voting Eligibility =====");
const age = 20;
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// Program 15: Check Divisible by 5 and 11
console.log("\n===== Program 15: Divisible by 5 and 11 =====");
const value = 55;
if (value % 5 === 0 && value % 11 === 0) {
    console.log(value + " is divisible by both 5 and 11");
} else {
    console.log(value + " is not divisible by both 5 and 11");
}

// Program 16: Smallest of Two Numbers
console.log("\n===== Program 16: Smallest of Two Numbers =====");
const p = 18;
const q = 30;
if (p < q) {
    console.log(p + " is Smaller");
} else {
    console.log(q + " is Smaller");
}
// Program 17: Percentage Calculator
console.log("\n===== Program 17: Percentage Calculator =====");
const s1 = 85;
const s2 = 90;
const s3 = 88;
const s4 = 91;
const s5 = 86;
const total = s1 + s2 + s3 + s4 + s5;
const percentage = total / 5;
console.log("Percentage =", percentage + "%");
// Program 18: Grade Calculator
console.log("\n===== Program 18: Grade Calculator =====");
if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 75) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}
// Program 19: BMI Calculator
console.log("\n===== Program 19: BMI Calculator =====");
const weight = 55;
const height = 1.60;
const bmi = weight / (height * height);
console.log("BMI =", bmi.toFixed(2));

// Program 20: Electricity Bill Calculator
console.log("\n===== Program 20: Electricity Bill Calculator =====");
const units = 120;
let bill;
if (units <= 100) {
    bill = units * 2;
} else {
    bill = (100 * 2) + ((units - 100) * 3);
}console.log("Electricity Bill = ₹" + bill);