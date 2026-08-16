// JavaScript Array Programs

// Program 6: Find Largest Element
console.log(" Program 6: Largest Element ");
let numbers = [12, 45, 23, 67, 34];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Array:", numbers);
console.log("Largest =", largest);

// Program 7: Find Smallest Element
console.log("\n Program 7: Smallest Element ");
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Smallest =", smallest);

// Program 8: Sum of Array Elements
console.log("\n Program 8: Sum of Array ");
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log("Sum =", sum);

// Program 9: Average of Array
console.log("\nProgram 9: Average of Array ");
let average = sum / numbers.length;
console.log("Average =", average);

// Program 10: Reverse an Array
console.log("\n Program 10: Reverse Array ");
let reversed = [...numbers].reverse();
console.log("Original Array:", numbers);
console.log("Reversed Array:", reversed);

// Program 11: Remove Duplicate Elements
console.log("\n Program 11: Remove Duplicates ");
let values = [10, 20, 10, 30, 20, 40, 30];
let uniqueValues = [...new Set(values)];
console.log("Original Array:", values);
console.log("Unique Array:", uniqueValues);

// Program 12: Find Second Largest Element
console.log("\nProgram 12: Second Largest");
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Second Largest =", sortedNumbers[1]);