// Variable declarations
let name = "sai";              // String
const age = 25;                  // Number (constant)
var isStudent = true;            // Boolean
let height = 5.8;                // Number (float)
let hobbies = ["reading", "coding"]; // Array
let person = {                   // Object
    firstName: "sai",
    lastName: "chharan"
};
let nothing = null;              // Null
let undefinedVar;                // Undefined

// Display variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Height:", height);
console.log("Hobbies:", hobbies);
console.log("Person:", person);
console.log("Nothing:", nothing);
console.log("Undefined:", undefinedVar);

// Type checking
console.log("\nData Types:");
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isStudent);   // "boolean"
console.log(typeof hobbies);     // "object" (arrays are objects)
console.log(typeof person);      // "object"
console.log(typeof nothing);     // "object" (null quirk)
console.log(typeof undefinedVar);// "undefined"

//arithmetic operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

// Increment and Decrement
let count = 5;
count++;  // 6
count--;  // 5
console.log("Count after ++ and --:", count);

// Assignment operators
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
console.log("Final x:", x);

//comparison operators and logical operators
let num1 = 10;
let num2 = "10";
let num3 = 20;

// Comparison operators
console.log("Equal (==):", num1 == num2);      // true (loose equality)
console.log("Strict Equal (===):", num1 === num2); // false (type check)
console.log("Not Equal (!=):", num1 != num2);  // false
console.log("Strict Not Equal (!==):", num1 !== num2); // true
console.log("Greater Than (>):", num1 > num3); // false
console.log("Less Than (<):", num1 < num3);    // true
console.log("Greater or Equal (>=):", num1 >= num2); // true
console.log("Less or Equal (<=):", num1 <= num3); // true

// Logical operators
let isAdult = true;
let hasLicense = false;

console.log("\nLogical AND (&&):", isAdult && hasLicense); // false
console.log("Logical OR (||):", isAdult || hasLicense);    // true
console.log("Logical NOT (!):", !isAdult);                 // false

//string concatenation and template literals
let firstName = "sai";
let lastName = "chharan";

// String concatenation
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Template literals
let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting); 

// String methods
let message = "JavaScript is awesome";
console.log("Length:", message.length);           // 22
console.log("Uppercase:", message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log("Lowercase:", message.toLowerCase()); // "javascript is awesome"
console.log("Contains 'Java':", message.includes("Java")); // true
console.log("Substring:", message.substring(0, 10)); // "JavaScript"

// type conversion and operators
// Explicit type conversion
let stringNum = "42";
let actualNum = Number(stringNum);
console.log("String to Number:", actualNum); // 42
console.log("Type:", typeof actualNum);      // "number"

let numToString = String(123);
console.log("Number to String:", numToString); // "123"
console.log("Type:", typeof numToString);      // "string"

let boolToString = String(true);
console.log("Boolean to String:", boolToString); // "true"

// Implicit type conversion (type coercion)
console.log("\nType Coercion:");
console.log("5 + '3' =", 5 + "3");     // "53" (string concatenation)
console.log("'5' - 3 =", "5" - 3);     // 2 (numeric subtraction)
console.log("'5' * '2' =", "5" * "2"); // 10 (numeric multiplication)
console.log("true + 1 =", true + 1);   // 2 (true = 1)
console.log("false + 1 =", false + 1); // 1 (false = 0)

// Boolean conversion
console.log("\nBoolean Conversion:");
console.log("Boolean('hello'):", Boolean("hello"));   // true
console.log("Boolean(''):", Boolean(""));             // false
console.log("Boolean(0):", Boolean(0));               // false
console.log("Boolean(1):", Boolean(1));               // true
console.log("Boolean(null):", Boolean(null));         // false
console.log("Boolean(undefined):", Boolean(undefined)); // false