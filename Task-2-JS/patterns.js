// JavaScript Pattern Programs

// Program 1: Half Pyramid

console.log("===== Program 1: Half Pyramid =====");

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// Program 2: Inverted Pyramid

console.log("\n===== Program 2: Inverted Pyramid =====");

for (let i = 5; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// Program 3: Number Pattern

console.log("\n===== Program 3: Number Pattern =====");

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }

    console.log(pattern);
}

// Program 4: Floyd's Triangle

console.log("\n===== Program 4: Floyd's Triangle =====");

let count = 1;

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += count + " ";
        count++;
    }

    console.log(pattern);
}