// JavaScript String Programs
// Program 13: Reverse a String
console.log("===== Program 13: Reverse String =====");
let text = "JavaScript";
let reversedText = text.split("").reverse().join("");
console.log("Original:", text);
console.log("Reversed:", reversedText);

// Program 14: Check Palindrome

console.log("\n===== Program 14: Palindrome =====");

let word = "madam";

let reverseWord = word.split("").reverse().join("");

if (word === reverseWord) {
    console.log(word, "is a Palindrome");
} else {
    console.log(word, "is Not a Palindrome");
}

// Program 15: Count Vowels

console.log("\n===== Program 15: Count Vowels =====");

let sentence = "JavaScript Programming";
let vowels = "aeiou";
let vowelCount = 0;

for (let character of sentence.toLowerCase()) {
    if (vowels.includes(character)) {
        vowelCount++;
    }
}

console.log("Vowel Count =", vowelCount);

// Program 16: Count Words

console.log("\n===== Program 16: Count Words =====");

let message = "JavaScript is easy to learn";

let words = message.split(" ");

console.log("Number of Words =", words.length);

// Program 17: Convert to Uppercase

console.log("\n===== Program 17: Uppercase =====");

let name = "sakshi hc";

console.log("Original:", name);
console.log("Uppercase:", name.toUpperCase());

// Program 18: Character Frequency
console.log("\n===== Program 18: Character Frequency =====");

let input = "hello";
let character = "l";

let count = 0;

for (let char of input) {
    if (char === character) {
        count++;
    }
}

console.log("Character:", character);
console.log("Frequency:", count);