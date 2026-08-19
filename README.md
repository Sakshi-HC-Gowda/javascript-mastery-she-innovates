# Task 1 — JavaScript Basics

## 📌 Objective

This task introduces the fundamentals of JavaScript by implementing small programs that exercise:

- Variables
- Data types
- Operators
- Conditional statements (`if` / `else`)
- Basic mathematical calculations

## Overview

The goal is to build confidence using JavaScript (ES6) in both Node.js and the browser console by solving common beginner problems.

## Prerequisites

- Node.js (for running scripts in the terminal) — optional if you prefer the browser console
- A text editor (e.g., VS Code)

## Concepts Covered

### Variables
Use `let` and `const` to declare variables.

Example:
```javascript
let a = 10;
const PI = 3.14159;
```

### Data Types
Common types used in these exercises:

- Number
- String
- Boolean (via conditional checks)

Example:
```javascript
let age = 20;
let name = "John";
let isEligible = true;
```

### Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`, `+=`, `-=`
- Comparison: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Logical: `&&`, `||`, `!`

### Conditional Statements
`if`, `else if`, `else` to implement decision logic.

## 📝 Programs Implemented (with short descriptions)

1. Swap Two Numbers — swap values using a temporary variable or destructuring
2. Average of Three Numbers — compute mean
3. Area of Rectangle — width × height
4. Area of Circle — π × r²
5. Perimeter of Rectangle — 2 × (width + height)
6. Simple Interest Calculator — (P × R × T) / 100
7. Celsius to Fahrenheit Conversion
8. Fahrenheit to Celsius Conversion
9. Even or Odd Check
10. Positive, Negative, or Zero Check
11. Largest of Two Numbers
12. Largest of Three Numbers
13. Leap Year Checker
14. Voting Eligibility Checker — based on age
15. Divisibility by 5 and 11
16. Smallest of Two Numbers
17. Percentage Calculator — (marksObtained / totalMarks) × 100
18. Grade Calculator — grade from percentage
19. BMI Calculator — body mass index computation and category
20. Electricity Bill Calculator — simple tiered example (placeholder)

Each program is implemented as a small, focused function or script in `task1.js` (or separated files if you prefer).

## 💻 Technologies Used

- JavaScript (ES6)
- Node.js (optional)
- Browser Console (optional)

## ▶️ How to Run

### Using Node.js
1. Install Node.js.
2. Save the program(s) in the `Task-1/` folder (e.g., `Task-1/task1.js`).
3. Open a terminal and navigate to the project folder.
4. Run:
```bash
node Task-1/task1.js
```
Output will appear in the terminal.

### Using the Browser Console
1. Open your browser (Chrome, Firefox, Edge).
2. Open Developer Tools → Console.
3. Paste functions or run the script (via an HTML file that includes your script) and inspect results in the console.

## 📂 Recommended File Structure

```
Task-1/
├── task1.js        # main script implementing the exercises
└── README.md       # this file
```

If you split each exercise into its own file, consider:
```
Task-1/
├── exercises/
│   ├── swap-numbers.js
│   ├── average-three.js
│   └── ...
├── task1.js        # optional runner that imports exercises
└── README.md
```

## Tips & Examples

- Prefer small functions with clear inputs and outputs for each exercise to make testing easier.
- Example: swap two numbers using destructuring
```javascript
let x = 5, y = 8;
[x, y] = [y, x];
console.log(x, y); // 8 5
```

## 📖 Learning Outcomes

After completing this task you will be able to:

- Declare variables using `let` and `const`
- Work with JavaScript data types
- Use arithmetic, comparison, and logical operators
- Implement decision-making using `if`/`else`
- Solve basic real-world problems using JavaScript

## ✅ Conclusion

This task builds a solid foundation in JavaScript fundamentals through hands-on practice. Completing these exercises prepares you for more advanced topics like functions, arrays, and object manipulation.

## Contributing / Next Steps

- Consider separating each exercise into its own file and adding a simple test or example output.
- Add comments to explain approach and edge cases for each exercise.
- Optional: include automated tests (Jest or a simple test harness) for key functions.
