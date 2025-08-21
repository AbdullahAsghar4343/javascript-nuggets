// ✅ Set in JavaScript

// A Set is a built-in object that stores unique values of any type.
// It automatically removes duplicates and maintains insertion order.

const mySet = new Set(); // creates an empty Set

mySet.add(1);             // adds 1
mySet.add(2);             // adds 2
mySet.add(2);             // duplicate, ignored
mySet.add("hello");       // adds a string
mySet.add({ a: 1 });      // adds an object

console.log(mySet);       // Set(4) { 1, 2, 'hello', { a: 1 } }

// 🔍 Common operations
mySet.has(2);             // true
mySet.delete(1);          // removes 1
mySet.size;               // 3

// 🔁 Iterating over a Set
for (let item of mySet) {
  console.log(item);      // logs each unique item
}

// ⚠️ Pitfalls & Misconceptions

// ❌ Set does NOT deep compare objects
mySet.add({ a: 1 });      // this is a different object than the earlier one
console.log(mySet.size); // 4 — both objects are treated as unique

// ❌ You can't access items by index like arrays
// mySet[0] → undefined

// ✅ Use Array.from() or spread (...) to convert Set to array
const arr = [...mySet];   // [2, 'hello', { a: 1 }, { a: 1 }]


const mySet = new Set();

mySet.add('one');
mySet.add('two');
mySet.add('two');
mySet.add('two');
mySet.add('two');
mySet.add('three');
mySet.add('four');
mySet.add('five');
mySet.add('six');

mySet.delete('two');

// mySet.clear();

// console.log(mySet)

// console.log(mySet.has('one'));
// console.log(mySet.has('seven'));
// console.log(mySet.size);

// mySet.forEach((value) => {
//     const aNum = Math.floor(Math.random() * 10);
//     console.log(value, aNum);
// });

const arr = [...mySet];
const arr2 = Array.from(mySet);

// console.log(arr[2]);
// console.log(arr2[1]);


const menu = [
    { name: 'burger', price: 5.99 },
    { name: 'fries', price: 2.99 },
    { name: 'soda', price: 1.99 },
    { name: 'burger', price: 5.99 },
    { name: 'fries', price: 2.99 },
];

const uniqueMenu = ['all',...new Set(menu.map((item) => item.name))]

const result = document.querySelector('.result');
result.innerHTML = uniqueMenu.map((name) => {
    return `<button>${name}</button>`;
})

console.log(uniqueMenu); 