// Launch -> Something predictive with pre-written functions, probably.

// Fundamental data types

const studentID = "j61L22";
let firstName = "Jayden";
let age = 19;
let year = "freshman";
let isStudent = true;
let gpa = 4.0;
let major = undefined;

// Reassignment (no let)

age = 20;
age = age + 1;
age += 1;

// Essential Operations

age + 10;
age - 5;
age * 2;
age / 5;

// Additional operations

Math.floor(21 / 4);
Math.round(5.8);

// Concatenation v. templates

firstName + " is " + age + " years old.";
`${firstName} is ${age} years old.`;

// String methods

firstName.toUpperCase(); // () CALL the method.

// Comparison operators - true or false?

age === 10;
"42" === 42;
age > 10;
age <= 99;
year === "freshman";

// Conditional statements;

let username = "Miles";
let age2 = 18;

if (username === "Miles" && age === 18) {
  console.log("Welcome, Spiderman");
} else if (age2 < 18) {
  console.log("Unauthorized youth access.");
} else {
  console.log(`Welcome ${username}`);
}

// functions

// Returns half the number if it can be halved; otherwise returns false
function getHalf(x) {
  if (x % 2 === 0) {
    return x / 2;
  } else {
    return false;
  }
}

a = getHalf(10); // () CALL the function
b = getHalf(22);
c = getHalf(3);

console.log(a, b, c);

// Functions can also be written as arrows. Body of function doesn't change, just the signature.

let getHalf = (x) => {
  if (x % 2 === 0) {
    return x / 2;
  } else {
    return false;
  }
};

// Practice - refactor existing functions as arrow functions. Call functions. Figure out what functions do / predict what functions do.
