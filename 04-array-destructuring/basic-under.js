// ✅ Array Destructuring in JavaScript

// Destructuring allows unpacking values from arrays into distinct variables.

const numbers = [10, 20, 30];

// Basic destructuring
const [first, second, third] = numbers;
console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30

//
// Skipping elements
//
const [x, , z] = numbers;
console.log(x); // 10
console.log(z); // 30

//
// Using rest operator with destructuring
//
const [head, ...tail] = numbers;
console.log(head); // 10
console.log(tail); // [20, 30]

//
// Default values
//
const [a = 1, b = 2, c = 3, d = 4] = [100];
console.log(a, b, c, d); // 100, 2, 3, 4

// ⚠️ Pitfalls & Misconceptions

// ❌ Destructuring fails silently if array is shorter than expected
const [p, q, r] = [1];
console.log(p, q, r); // 1, undefined, undefined

// ❌ Order matters — destructuring pulls values by position, not name
const data = [true, "yes"];
const [isValid, message] = data; // correct
// const [message, isValid] = data; // wrong order → incorrect values

// ❌ Works only with iterable values (like arrays, strings)
// const [foo] = null; → ❌ TypeError



// ✅ Array Destructuring Use Cases in JavaScript

// 1️⃣ Swapping Variables Without a Temporary Holder
let redFruit = "apple";
let greenFruit = "kiwi";

// Swap values using destructuring
[redFruit, greenFruit] = [greenFruit, redFruit];

console.log(redFruit);   // kiwi
console.log(greenFruit); // apple

// --------------------------------------------------

// 2️⃣ Extracting Multiple Values from a Function Return
function fetchCoordinates() {
  return [24.8607, 67.0011]; // latitude, longitude
}

// Destructure returned array
const [latitude, longitude] = fetchCoordinates();
console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

// --------------------------------------------------

// 3️⃣ Ignoring Unwanted Elements in an Array
const apiResponse = ["OK", 200, "Success", "Extra"];

// Skip first and fourth elements
const [, status, message2] = apiResponse;
console.log(status);  // 200
console.log(message2); // Success

// --------------------------------------------------

// 4️⃣ Using with Iterables like Strings
const fullName = "Zara Noor";

// Split string and destructure
const [givenName, familyName] = fullName.split(" ");
console.log(givenName); // Zara
console.log(familyName); // Noor

// --------------------------------------------------

// 5️⃣ Looping Through Array of Arrays
const userData = [
  ["Ali", 25],
  ["Sara", 30],
  ["Omar", 28]
];

// Destructure inside loop
for (const [user, age] of userData) {
  console.log(`${user} is ${age} years old`);
}

// --------------------------------------------------

// 6️⃣ Providing Default Values When Data Is Missing
const settings = [undefined, "dark"];

// Use default for missing first value
const [theme = "light", mode = "auto"] = settings;

console.log(theme); // light
console.log(mode);  // dark
