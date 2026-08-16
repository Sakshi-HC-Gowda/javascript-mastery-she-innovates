// objects.js

// Program 19: Create and Display Student Object

console.log("===== Program 19: Student Object =====");

let student = {
    name: "Sakshi H C",
    age: 20,
    branch: "Computer Science",
    cgpa: 9.05
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Branch:", student.branch);
console.log("CGPA:", student.cgpa);


// Program 20: Update Object Property

console.log("\n===== Program 20: Update Object Property =====");

console.log("Before Update:", student.cgpa);

student.cgpa = 9.10;

console.log("After Update:", student.cgpa);