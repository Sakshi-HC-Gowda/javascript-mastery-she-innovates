// methods.js

// Program 21: map()

console.log("===== Program 21: map() =====");

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function(number) {
    return number * number;
});

console.log("Original:", numbers);
console.log("Squares:", squares);


// Program 22: filter()

console.log("\n===== Program 22: filter() =====");

let values = [10, 15, 20, 25, 30];

let evenNumbers = values.filter(function(number) {
    return number % 2 === 0;
});

console.log("Original:", values);
console.log("Even Numbers:", evenNumbers);


// Program 23: reduce()

console.log("\n===== Program 23: reduce() =====");

let marks = [80, 75, 90, 85];

let total = marks.reduce(function(sum, mark) {
    return sum + mark;
}, 0);

console.log("Marks:", marks);
console.log("Total =", total);


// Program 24: find()

console.log("\n===== Program 24: find() =====");

let numbersList = [10, 20, 30, 40, 50];

let result = numbersList.find(function(number) {
    return number > 25;
});

console.log("First number greater than 25:", result);


// Program 25: sort()

console.log("\n===== Program 25: sort() =====");

let unsortedNumbers = [45, 12, 78, 23, 9];

let sorted = [...unsortedNumbers].sort(function(a, b) {
    return a - b;
});

console.log("Original:", unsortedNumbers);
console.log("Sorted:", sorted);