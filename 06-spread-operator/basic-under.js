// ✅ Spread Operator in JavaScript

// The spread operator (...) expands iterable elements (like arrays or objects)
// into individual elements. It's used for copying, merging, and passing values.

//
// 1. Expanding arrays
//
const baseNums = [1, 2, 3];
const extendedNums = [...baseNums, 4, 5]; // [1, 2, 3, 4, 5]

//
// 2. Copying arrays
//
const copiedNums = [...baseNums]; // shallow copy of baseNums

//
// 3. Merging arrays
//
const firstArray = [1, 2];
const secondArray = [3, 4];
const mergedArray = [...firstArray, ...secondArray]; // [1, 2, 3, 4]

//
// 4. Expanding objects
//
const sourceObj1 = { a: 1 };
const sourceObj2 = { b: 2 };
const expandedObj = { ...sourceObj1, ...sourceObj2 }; // { a: 1, b: 2 }

//
// 5. Function arguments
//
function logThree(x, y, z) {
  console.log(x, y, z);
}
const greetArgs = ["Hi", "there", "!"];
logThree(...greetArgs); // "Hi" "there" "!"

// ⚠️ Pitfalls & Misconceptions

// ❌ Spread only does shallow copy — nested objects/arrays are still referenced
const nestedOriginal = { nested: { x: 1 } };
const shallowClone = { ...nestedOriginal };
shallowClone.nested.x = 99;
console.log(nestedOriginal.nested.x); // 99 — original is affected!

// ❌ Can't spread non-iterables in array context
// const invalidSpread = [...123]; → ❌ TypeError

// ❌ Order matters when merging objects — later keys overwrite earlier ones
const overwriteExample = { a: 1, a: 2 }; // final value of 'a' is 2



// ✅ Use Cases of Spread Operator (...)

//
// 1. Copying Arrays (shallow copy)
//
const numbers = [1, 2, 3];
const numbersCopy = [...numbers]; // avoids mutation of original

//
// 2. Merging Arrays
//
const arrayA = [1, 2];
const arrayB = [3, 4];
const combinedArray = [...arrayA, ...arrayB]; // [1, 2, 3, 4]

//
// 3. Copying Objects (shallow copy)
//
const userObj = { x: 1, y: 2 };
const userClone = { ...userObj }; // new object with same properties

//
// 4. Merging Objects
//
const defaultSettings = { a: 1 };
const userSettings = { a: 2, b: 3 };
const finalSettings = { ...defaultSettings, ...userSettings }; // { a: 2, b: 3 }

//
// 5. Passing Arguments to Functions
//
function displayMessage(x, y, z) {
  console.log(x, y, z);
}
const messageArgs = ["Hello", "World", "!"];
displayMessage(...messageArgs); // "Hello" "World" "!"

//
// 6. In React — forwarding props
//
function Input({ label, ...restProps }) {
  return <input aria-label={label} {...restProps} />;
}

//
// 7. Expanding Strings into Arrays
//
const greeting = "hello";
const charArray = [...greeting]; // ['h', 'e', 'l', 'l', 'o']

// ⚠️ Pitfalls

// ❌ Only shallow copies — nested objects/arrays still share references
// ❌ Order matters when merging — later values overwrite earlier ones
// ❌ Can't spread non-iterables in array context (e.g., numbers, objects without Symbol.iterator)
