// ✅ Object Destructuring in JavaScript

// 1️⃣ Basic Object Destructuring
const person = {
  name: "Ayesha",
  age: 27,
  city: "Lahore"
};

// Extracting properties directly into variables
const { name, age, city } = person;

console.log(name); // "Ayesha"
console.log(age);  // 27
console.log(city); // "Lahore"

// --------------------------------------------------

// 2️⃣ Renaming Variables During Destructuring
const product = {
  id: 101,
  price: 2500
};

// Rename 'id' to 'productId' and 'price' to 'productPrice'
const { id: productId, price: productPrice } = product;

console.log(productId);    // 101
console.log(productPrice); // 2500

// --------------------------------------------------

// 3️⃣ Setting Default Values
const config = {
  theme: "dark"
};

// 'layout' doesn't exist in config, so default to "grid"
const { theme, layout = "grid" } = config;

console.log(theme);  // "dark"
console.log(layout); // "grid" (default value)

// --------------------------------------------------

// 4️⃣ Nested Object Destructuring
const profile = {
  username: "coder123",
  stats: {
    followers: 1200,
    posts: 75
  }
};

// Extract nested properties directly
const {
  stats: { followers, posts }
} = profile;

console.log(followers); // 1200
console.log(posts);     // 75

// Note: 'stats' itself is not available as a variable here

// --------------------------------------------------

// 5️⃣ Destructuring in Function Parameters
function greetUser({ name, city }) {
  // Directly access 'name' and 'city' from the passed object
  console.log(`Hello ${name} from ${city}`);
}

greetUser({ name: "Bilal", city: "Karachi" }); // Hello Bilal from Karachi

// --------------------------------------------------

// 6️⃣ Using Rest Operator to Capture Remaining Properties
const settings = {
  mode: "auto",
  resolution: "1080p",
  fps: 60
};

// Extract 'mode' and group the rest into 'otherSettings'
const { mode, ...otherSettings } = settings;

console.log(mode);           // "auto"
console.log(otherSettings);  // { resolution: "1080p", fps: 60 }

// --------------------------------------------------

// ⚠️ Common Pitfall: Property Must Exist in Object
const user = {
  name: "Zain"
};

// Trying to destructure a non-existent property gives 'undefined'
const { name2, email } = user;

console.log(name2);  // "Zain"
console.log(email); // undefined
