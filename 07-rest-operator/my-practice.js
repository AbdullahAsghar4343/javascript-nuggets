// ✅ Rest Operator in JavaScript

// The rest operator (...) collects multiple elements into a single array.
// Commonly used in function parameters and destructuring.

function sum(...numbers) {
  // 'numbers' is an array of all arguments passed
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 📦 Used in array or object destructuring
const [first, ...restItems] = [10, 20, 30, 40];
console.log(restItems); // [20, 30, 40]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

// ⚠️ Pitfalls & Misconceptions

// ❌ Rest operator is NOT the same as spread operator
// Rest collects → used in function params or destructuring
// Spread expands → used in array/object literals or function calls

// ❌ Only one rest parameter allowed per function, and it must be last
// function badExample(...x, y) → ❌ SyntaxError

// ✅ Rest operator creates a real array (unlike 'arguments' object)
function logArgs(...args) {
  console.log(Array.isArray(args)); // true
}



// ✅ Use Cases of Rest Operator (...)

//
// 1. Function Parameters — collect variable number of arguments
//
function logAll(...args) {
  console.log(args); // logs all passed arguments as an array
}
logAll("a", "b", "c"); // ["a", "b", "c"]

//
// 2. Array Destructuring — gather remaining items
//
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

//
// 3. Object Destructuring — collect remaining properties
//
const user = { id: 1, name: "Ali", age: 25 };
const { id, ...details } = user;
console.log(details); // { name: "Ali", age: 25 }

//
// 4. Variadic Utility Functions — like custom math ops
//
function multiplyAll(multiplier, ...nums) {
  return nums.map(n => n * multiplier);
}
console.log(multiplyAll(2, 3, 4, 5)); // [6, 8, 10]

//
// 5. React Props — rest operator to forward remaining props
//
function Button({ label, ...props }) {
  return <button {...props}>{label}</button>;
}

// ⚠️ Pitfalls

// ❌ Only one rest parameter allowed in function, and must be last
// function bad(...x, y) → SyntaxError

// ❌ Rest creates a new array — avoid if performance is critical in tight loops

// ❌ Not usable in object literals without destructuring
// const obj = ...rest → ❌ invalid
