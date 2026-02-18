// variables
let name = "Alice";
const PI = 3.14;
var count = 0;

// operators
count += 1;              // arithmetic
let age = 20;
let isAdult = age >= 18; // comparison
let greeting = "Hello, " + name; // string concatenation

// condition
if (count > 0) {
    console.log("Count is positive");
} else {
    console.log("Count is zero or negative");
}

// loop
for (let i = 0; i < 5; i++) {
    console.log("Loop number", i);
}

// function
function add(a, b) {
    return a + b;
}
console.log("2 + 3 =", add(2, 3));

// events (browser)
// this code needs to run in a page; it listens for a click anywhere
document.addEventListener("click", function () {
    alert("You clicked anywhere on the page");
});

// class & object
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound.");
    }
}

const cat = new Animal("Undir");
cat.speak();

// create a button and attach an event
let btn = document.createElement("button");
btn.textContent = "Click me";
btn.addEventListener("click", function () {
    console.log("Button clicked");
});
document.body.appendChild(btn);