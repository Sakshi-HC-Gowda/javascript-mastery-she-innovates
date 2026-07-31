// JavaScript Loop Programs

// Program 1: Print Numbers 1 to 10 (for loop)
console.log("===== Program 1: Print 1 to 10 =====");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Program 2: Sum of Natural Numbers
console.log("\n===== Program 2: Sum of Natural Numbers =====");
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);

// Program 3: Multiplication Table
console.log("\n===== Program 3: Multiplication Table =====");

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Program 4: Factorial
console.log("\n===== Program 4: Factorial =====");

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);

// Program 5: Fibonacci Series
console.log("\n===== Program 5: Fibonacci Series =====");

let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}

// Program 6: Prime Number
console.log("\n===== Program 6: Prime Number =====");

let prime = 17;
let isPrime = true;

if (prime <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < prime; i++) {
        if (prime % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(prime + " is Prime");
} else {
    console.log(prime + " is Not Prime");
}