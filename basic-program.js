//1 Addition
let a = 10, b = 20;
console.log("1.", a + b);

//2 Subtraction
console.log("2.", b - a);

//3 Multiplication
console.log("3.", a * b);

//4 Division
console.log("4.", b / a);

//5 Modulus
console.log("5.", b % a);

//6 Square
let n = 5;
console.log("6.", n * n);

//7 Cube
console.log("7.", n * n * n);

//8 Average
let x = 10, y = 20, z = 30;
console.log("8.", (x + y + z) / 3);

//9 Celsius to Fahrenheit
let c = 25;
console.log("9.", (c * 9 / 5) + 32);

//10 Fahrenheit to Celsius
let f = 77;
console.log("10.", (f - 32) * 5 / 9);

//11 Area of Rectangle
let l = 5, w = 4;
console.log("11.", l * w);

//12 Area of Circle
let r = 7;
console.log("12.", 3.14 * r * r);

//13 Perimeter of Rectangle
console.log("13.", 2 * (l + w));

//14 Circumference of Circle
console.log("14.", 2 * 3.14 * r);

//15 Swap using third variable
let p = 5, q = 10;
let temp = p;
p = q;
q = temp;
console.log("15.", p, q);

//16 Even or Odd
let num = 12;
console.log("16.", num % 2 === 0 ? "Even" : "Odd");

//17 Positive or Negative
let number = -6;
console.log("17.", number >= 0 ? "Positive" : "Negative");

//18 Largest of Two Numbers
let m = 15, n1 = 20;
console.log("18.", m > n1 ? m : n1);

//19 Largest of Three Numbers
let n2 = 25, n3 = 30;
console.log("19.", Math.max(m, n1, n2));

//20 Simple Interest
let P = 5000, R = 5, T = 2;
console.log("20.", (P * R * T) / 100);