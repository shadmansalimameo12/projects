// Array variables
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["text", 42, true, null];

// Non-array variables
let name = "John Doe";
let age = 30;
let isStudent = false;
let address = {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
};

console.log(Array.isArray( fruits, address, numbers, mixedArray, name, age, isStudent )); // true