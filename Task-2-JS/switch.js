// JavaScript Switch Statement Programs
// Program 1: Simple Calculator
console.log("===== Program 1: Simple Calculator =====");
let num1 = 20;
let num2 = 5;
let operator = "*";
switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;

    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;

    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;

    case "%":
        console.log(`${num1} % ${num2} = ${num1 % num2}`);
        break;

    default:
        console.log("Invalid Operator");
}
// Program 2: Day of the Week
console.log("\n===== Program 2: Day of the Week =====");
let day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number");
}
// Program 3: Traffic Signal
console.log("\n===== Program 3: Traffic Signal =====");
let signal = "Yellow";
switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
