// JavaScript Functions Programs

// Program 1: Sum of Two Numbers
console.log(" Program 1: Sum of Two Numbers ");
function add(a, b) {
    return a + b;
}
console.log("Sum =", add(10, 20));

// Program 2: Find Maximum of Two Numbers
console.log("\n Program 2: Maximum of Two Numbers ");
function findMaximum(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log("Maximum =", findMaximum(45, 72));

// Program 3: Check Even or Odd
console.log("\n Program 3: Even or Odd ");
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("12 is", checkEvenOdd(12));

// Program 4: Calculate Factorial
console.log("\n Program 4: Factorial");
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5 =", factorial(5));

// Program 5: Check Prime Number
console.log("\n Program 5: Prime Number");
function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let number = 17;
if (checkPrime(number)) {
    console.log(number, "is Prime");
} else {
    console.log(number, "is Not Prime");
}