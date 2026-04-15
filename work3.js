// Simulate a user's score
let score = 85;
let hasBonus = true;

console.log(`--- Score Check: ${score} ---`);

// Basic If Statement
if (score >= 90) {
    console.log("Grade: A (Excellent!)");
} 
// Else If Statement
else if (score >= 80) {
    console.log("Grade: B (Good job)");
    
    // Nested If
    if (hasBonus) {
        console.log("-> Bonus applied: Final Grade is A-");
    }
} 
else if (score >= 70) {
    console.log("Grade: C (Average)");
} 
else if (score >= 60) {
    console.log("Grade: D (Needs Improvement)");
} 
// Else Statement
else {
    console.log("Grade: F (Failed)");
}

// Ternary Operator (Shorthand If-Else)
let status = (score >= 60) ? "Passed" : "Failed";
console.log(`Status: ${status}`);

// Logical Operators in Conditions
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Access: Admin Dashboard");
} else if (isLoggedIn || isAdmin) {
    console.log("Access: User Dashboard");
} else {
    console.log("Access: Login Page");
}
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7: // Multiple cases for the same result
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid Day";
}

console.log(`Day ${dayNumber} is: ${dayName}`);

// Switch with Strings
let fruit = "Apple";
let price;

switch (fruit.toLowerCase()) {
    case "apple":
        price = 1.50;
        break;
    case "banana":
        price = 0.80;
        break;
    case "orange":
        price = 1.20;
        break;
    default:
        price = "Not available";
}

console.log(`Price of ${fruit}: $${price}`);
console.log("--- Standard For Loop ---");

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// Generate Even Numbers
console.log("\nEven Numbers up to 10:");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Reverse Countdown
console.log("\nCountdown:");
for (let i = 5; i > 0; i--) {
    if (i === 1) {
        console.log(`${i}... Blast off!`);
    } else {
        console.log(`${i}...`);
    }
}

// Nested For Loop (Multiplication Table snippet)
console.log("\n2x Multiplication Table:");
for (let i = 1; i <= 3; i++) {
    let result = 2 * i;
    console.log(`2 x ${i} = ${result}`);
}

console.log("--- While Loop ---");
let counter = 0;

while (counter < 3) {
    console.log(`While iteration: ${counter}`);
    counter++;
}

console.log("\n--- Do...While Loop ---");
let attempt = 0;

do {
    console.log(`Attempt number: ${attempt + 1}`);
    attempt++;
    // This loop runs even if the condition was initially false
} while (attempt < 3);

// Practical Example: Validating Input (Simulated)
console.log("\n--- Input Validation Simulation ---");
let userInput = "";
let attempts = 0;
const maxAttempts = 3;
const correctCode = "1234";

// Simulating a scenario where we keep asking until correct or max attempts reached
while (userInput !== correctCode && attempts < maxAttempts) {
    // Simulate input (in real app, this would be prompt())
    if (attempts === 0) userInput = "0000";
    else if (attempts === 1) userInput = "9999";
    else userInput = "1234"; 

    attempts++;
    
    if (userInput === correctCode) {
        console.log("Access Granted!");
    } else {
        console.log(`Incorrect code. Attempts left: ${maxAttempts - attempts}`);
    }
}

console.log("--- Break Example ---");
// Stop looping when we hit 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Found 5! Stopping loop.");
        break; 
    }
    console.log(i);
}

console.log("\n--- Continue Example ---");
// Skip even numbers, print only odds
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue; // Skip the rest of this iteration
    }
    console.log(`Odd number: ${i}`);
}

// Data Setup
const colors = ["Red", "Green", "Blue"];
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    city: "New York"
};

console.log("--- For...Of (Arrays & Iterables) ---");
// Best for arrays, strings, maps, sets
for (const color of colors) {
    console.log(`Color: ${color}`);
}

// Iterating over a string
const word = "JS";
for (const char of word) {
    console.log(`Char: ${char}`);
}

console.log("\n--- For...In (Object Properties) ---");
// Best for objects (iterates over keys)
for (const key in person) {
    // Access value using bracket notation
    console.log(`${key}: ${person[key]}`);
}

console.log("\n--- Array Indices with For...In (Not Recommended but possible) ---");
for (const index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}