
// Data type =====>

//  1.premitive data type  
// ------------------------------//

// a. string 

// let username = "Soumalya";
// let message = `Hello, ${username}!`; 
// console.log(message)
// console.log(typeof message)

// b. number

// let age = 28;
// let price = 199.99;
//  console.log(price)
//  console.log(typeof price)

// c. boolean

// let isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("Welcome back!");
// }
// else{
//    console.log("user not found") 
// }

// d. undefined

// let user;
// console.log(user); 

// e. null

// let selectedProduct = null;

// f. symbol


// g. bigint

// let bigNumber = 123456789012345678901234567890n;

  
// 2.non premitive / reference type
// ------------------------------//

// a. Array

// let numbers = [1, 2, 3, 4];

// b. Object

// let user = { name: "Krishiv", age: 1 };


// <=========== ========= prefix and post fix concept ============= ==========>
    

// Prefix (++x) → Update first, then use.

// let a = 5;
// let b = ++a;  // a becomes 6, then b = 6
// console.log(a); // 6
// console.log(b); // 6


// Postfix (x++) → Use first, then update.
// let x = 5;
// let y = x++;  // y = 5 (old value), then x becomes 6
// console.log(x); // 6
// console.log(y); // 5

// Postfix (x++ / x--) → “First use, then change.”

// Prefix (++x / --x) → “First change, then use.”



// <============== memory usage ==============>

    // stack (all premitive data types) 

        // Used for primitive data types (Number, String, Boolean, Null, Undefined, Symbol, BigInt).
        // Stores value directly.
        // Very fast & managed automatically.
        // Memory is cleared when the function ends.
    
    
    // heap (non premitive type)

        // Used for non-primitive (reference) types → Objects, Arrays, Functions.
        // Stores reference (address) in stack, but the actual value lives in heap.
        // Changes through one reference affect all variables pointing to it.


// ===============Most Important & Commonly Used String Methods =============//

// 1.length Gives the number of characters.
    //    let str = "JavaScript";
    //    console.log(str.length); // 10

// 2.toUpperCase() Converts to uppercase.
    //    let str = "hello";
    //    console.log(str.toUpperCase()); // "HELLO"      

// 3.toLowerCase() Converts to lowercase.
    //    let str = "WORLD";
    //    console.log(str.toLowerCase()); // "world"

// 4.indexOf() & lastIndexOf() Finds position of substring.
    //    let str = "Hello, world!";
    //    console.log(str.indexOf("world")); // 7
    // console.log(str.lastIndexOf("l"));

// 5.trim() / trimStart() / trimEnd()   Removes whitespace.
    //    let str = "   Hello   ";
    //    console.log(str.trim()); // "Hello"
    //    console.log(str.trimStart()); // "Hello  "
    //    console.log(str.trimEnd()); // "  Hello"

// 6. charAt(index) / charCodeAt(index)  Gets character or its Unicode at index.
    //    let str = "Hello";
    //    console.log(str.charAt(1)); // "e"
    //    console.log(str.charCodeAt(1)); // 101

// 7. includes() Checks if substring exists.
    //    let str = "Hello, world!";
    //    console.log(str.includes("world")); // true

// 8. startsWith() / endsWith() Checks start/end of string.
    //    let str = "Hello, world!";
    //    console.log(str.startsWith("Hello")); // true
    //    console.log(str.endsWith("!")); // true   

// 9. slice(start, end) / substring(start, end) Extracts part of string.
    //    let str = "Hello, world!";
    //    console.log(str.slice(0, 5)); // "Hello"
    //    console.log(str.slice(-6));
    //    console.log(str.substring(7, 12)); // "world"   Similar to slice, but doesn’t accept negative indexes.  

// 10. substr(start, length) Extracts substring by start and length.
    //    let str = "Hello, world!";
    //    console.log(str.substr(7, 5)); // "world"   (deprecated, avoid using)     

// 11.  replace() / replaceAll() Replaces substring(s).
    //    let str = "Hello, world!";
    //    console.log(str.replace("world", "there")); // "Hello, there!"
    //    let str2 = "foo foo foo";
    //    console.log(str2.replaceAll("foo", "bar")); // "bar bar bar"

// 12.  split(separator) Splits string into array.
    //    let str = "a,b,c";
    //    console.log(str.split(",")); // ["a", "b", "c"]   

// 13.  concat()  Joins strings.
    //    let str1 = "Hello, ";
    //    let str2 = "world!";
    //    console.log(str1.concat(str2)); // "Hello, world!"    

// ===============Most Important & Commonly Used Number Methods =============//


    // 1. toFixed(digits)  Formats a number using fixed-point notation.

        // let price = 9.876;
        // console.log(price.toFixed(2)); // "9.88"

    // 2. toPrecision(digits)  Formats a number to a specified length.

        // let num = 123.456;
        // console.log(num.toPrecision(5)); // "123.46"

    // 3. toLocaleString()  Converts number to string using locale settings.

        // let num = 123456.789;
        // console.log(num.toLocaleString("en-US")); // "123,456.789"
        // console.log(num.toLocaleString("de-DE")); // "123.456,789"


 //============ Number Properties =============

        // Number.MAX_VALUE → Largest possible number.

        // Number.MIN_VALUE → Smallest positive number.

        // Number.POSITIVE_INFINITY / Number.NEGATIVE_INFINITY

        // Number.NaN → Not-a-Number.

        // console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
        // console.log(Number.MIN_VALUE);  // 5e-324
        // console.log(Number.NaN);        // NaN


//   ====================== MATH =======================      
// 1. Rounding Methods
    // console.log(Math.round(4.6)); // 5
    // console.log(Math.floor(4.9)); // 4
    // console.log(Math.ceil(4.1));  // 5
    // console.log(Math.trunc(4.9)); // 4

// 2. Random Number (random range is between 0 and 1)
    // console.log(Math.random());           // 0.12345...
    // console.log((Math.random() * 10) + 1); // 1–10
    // console.log(Math.floor(Math.random() * 10) + 1); 
    // console.log(Math.round(Math.random() * 10) + 1); 

    // const min = 10
    // const max = 20

    // console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// 3. Min & Max
    // console.log(Math.min(5, 10)); // 5
    // console.log(Math.max(5, 10)); // 10

    // ==================Date ======================

    // let date = new Date();

// console.log(date.getFullYear());  // 2025
// console.log(date.getMonth());     //(month)
// console.log(date.getDate());      //(day of month)
// console.log(date.getDay());       // (0 = Sunday, 1 = Monday...)
// console.log(date.getHours());     // 20
// console.log(date.getMinutes());   // 30
// console.log(date.getSeconds());   //(seconds)
// console.log(date.getMilliseconds()); //(milliseconds)
// console.log(date.getTime());      //(timestamp in ms since 1970)
//  console.log(date.toDateString()); 


// =====================Array ==============================

// An array is a special type of object used to store multiple values in a single variable.
// Values inside an array are called elements.
// Each element has an index (position), starting from 0




// const myArr = [1, 2, 3, 4, 5]

// console.log(myArr.push(6));
// console.log(myArr.pop(3));
// console.log(myArr.includes(7));
// console.log(myArr.indexOf(2));
// console.log(myArr);


// 1. filter => Creates a new array with every element in an array that pass a test
// 2. find => Returns the value of the first element in an array that pass a test
// 3. forEach => Calls a function for each array element
// 4. map => Creates a new array with the result of calling a function for each array element
// 5. pop => Removes the last element of an array, and returns that element
// 6.push => Adds new elements to the end of an array, and returns the new length
// 7.Reduce => Reduce the values of an array to a single value (going left-to-right)
// 8.reverse => 	Reverses the order of the elements in an array
// 9. shift => Removes the first element of an array, and returns that element
// 10. slice => Selects a part of an array, and returns the new array
// 11. sort => Sorts the elements of an array
// 12.splice => 	Adds/Removes elements from an array
// 13.unshift => Adds new elements to the beginning of an array, and returns the new length
// 14 join => Joins all elements of an array into a string




// slice or splice 
// note:
// slice is non-destructive (does not change the original array).
// splice is destructive (modifies the original array).

// let nums = [10, 20, 30, 40, 50];

// console.log(nums.slice(1, 4)); // [20, 30, 40]  (copy portion, no change)
// console.log(nums);             // [10, 20, 30, 40, 50] (original array unchanged)

// nums.splice(2, 1, 99);         // remove 1 element at index 2, insert 99
// console.log(nums);             // [10, 20, 99, 40, 50]


// methods of array

// const marvelHeros = ["Iron Man", "Spider-Man", "Thor", "Hulk", "Black Widow"];

// const dcHeros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[5][0]);


// const allHeros = marvelHeros.concat(dcHeros)
//  console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

// const allnewArray = [1,2,3,[1,2,3],4,[5,6,7,[9,10]]];

// console.log(allnewArray.flat(Infinity));


// console.log(Array.from("soumalya"));


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// ******************  OBJECT  *******************
// const id = Symbol("id");    // important for interview     

// const person = {
//     name: "John",
//     lastName: "Doe",
//     "full Name": "Jhon DOW",
//     age: 30,
//     [id]: 123, // symbol as key
//     isStudent: false,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// console.log(person.name);
// console.log(person["age"]);
// console.log(person["full Name"]);
// console.log(typeof person[id]);
// person.greet();

// spread operator


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj); // { a: 1, b: 3, c: 4 } (obj2's 'b' overwrites obj1's 'b')


//-------- many objects inside one Array ------------

// const users = [
//     { name: "Alice", age: 25, isStudent: true },
//     { name: "Bob", age: 30, isStudent: false },
//     { name: "Charlie", age: 22, isStudent: true },
//     { name: "Diana", age: 28, isStudent: false }
// ];

// console.log(users[1].age);

// console.log(Object.keys(users[0])); 
// console.log(Object.values(users[0])); 
// console.log(users[0].hasOwnProperty("age")); // true
// console.log(users[0].hasOwnProperty("gender")); // false


// singleton object and non singleton object

// const tinderUser = new object ()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Soumalya"
// tinderUser.isLoggedIn = false
// tinderUser.age = 28

// console.log(tinderUser)

// const regularUser = {
//     email: "ac@gmail.com",   
//         fullName: {
//             userFullName: "soumalya sen",
//             firstName: "Soumalya",
//             lastName: "sen"
//         }
// }
//  console.log(regularUser.fullName.firstName)


// const user = [
//     {id: 1, name: "Soumalya", age: 28},
//     {id: 2, name: "Krishiv", age: 1},
//     {id: 3, name: "Anwesha", age: 26},
//     {id: 4, name: "Sourav", age: 32}
// ]

// user[1].name

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age")); // true


// const num = new Number(42);
// console.log(num.valueOf()); // 42


// const course = {
//     title: "JavaScript Basics",
//     lessons: 20,
//     isFree: true,
// }

// const {title, lessons, isFree} = course

// console.log(title);
// console.log(lessons);
// console.log(isFree);


//============ Renaming Variables ==============


// const user = {
//   id: 1,
//   name: "Soumalya",
//   age: 28,
//   isLoggedIn: false
// };

// const { name: fullName, age: years } = user;
// console.log(fullName); // "Soumalya"
// console.log(years);    // 28

// ========== Default Values ============

// const { email = "not provided" } = user;
// console.log(email); // "not provided"



//============ Nested Destructuring ==============

// const regularUser = {
//   email: "ac@gmail.com",
//   fullName: {
//     firstName: "Soumalya",
//     lastName: "Sen"
//   }
// };

// const { fullName: { firstName, lastName } } = regularUser;
// console.log(firstName); // "Soumalya"
// console.log(lastName);  // "Sen"

// ------------------------function basics---------------------------

// Function Syntax
// ----------------------

// function functionName(parameters) {
//   // code to be executed
//   return result;  // optional
// }

// function greet(name) {
//   return "Hello " + name + "!";
// }

// console.log(greet("Soumalya"));  // Hello Soumalya!

// greet → function name
// name → parameter
// "Soumalya" → argument (actual value passed)
// return → sends result back

// Default Parameters------------

// function greet(name = "Guest") {
//   return "Hello " + name;
// }
// console.log(greet());       // Hello Guest
// console.log(greet("Raj"));  // Hello Raj


// ---------------------Block Scope--------------------
// Variables declared with let or const inside {} are only available inside that block.
// But var does not follow block scope (only function scope).

// {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(c); //  works (var is function-scoped)
// console.log(a); //  Error
// console.log(b); //  Error

// ------GLOBAL SCOPE-----

// let globalVar = "I am Global";

// function show() {
//   console.log(globalVar); //  accessible
// }
// show();

// console.log(globalVar); //  accessible


// --------------Nested Scope Example----------------

// function outer() {
//   let outerVar = "I am from Outer";

//   function inner() {
//     let innerVar = "I am from Inner";

//     console.log(outerVar); //  inner can access outer
//     console.log(innerVar); //  inner can access itself
//   }

//   inner();
//   console.log(innerVar); //  Error (outer cannot access inner)
// }

// outer();

// -------------Hoisting with Functions----------------

// Function Declarations are fully hoisted (you can call them before writing).

// greet(); //  works

// function greet() {
//   console.log("Hello");
// }

// Function Expressions (var, let, const) follow variable hoisting rules.

// With let / const, you get ReferenceError before declaration.

// sayHi(); //  TypeError: sayHi is not a function

// var sayHi = function () {
//   console.log("Hi");
// };



// 1.----------------- Basic Arrow Function---------------------
// const greet = () => "Hello, World!";
// console.log(greet()); // Hello, World!

// // 2. With Parameters
// const square = (x) => x * x;
// console.log(square(5)); // 25

// // 3. Multiple Parameters
// const multiply = (a, b) => a * b;
// console.log(multiply(4, 3)); // 12

// 🔹============== What is an IIFE?==========================

//  IIFE stands for Immediately Invoked Function Expression.
// It’s a function that is defined and executed immediately after creation.
// Why use IIFE? 1. Avoid polluting the global scope
// Useful for private variables, initialization, and modular code

// (function(name) {
//   console.log("Hello " + name);
// })("Soumalya");

// ------------ Arrow Function IIFE // You can also use arrow functions:

// (() => {
//   console.log("Arrow IIFE running!");
// })();


// ********************* important interview*************************

// how javascript works




// --------------------------------contol flows---------------------------



// Symbol	Meaning	        Example	                          Result

// ==	Equal to (loose)	5 == "5"	true (checks only value, not type)
// ===	Strict equal	5 === "5"	false (checks value + type)
// !=	Not equal (loose)	5 != "5"	false
// !==	Strict not equal	5 !== "5"	true
// >	Greater than	8 > 5	true
// <	Less than	3 < 7	true
// >=	Greater than or equal	5 >= 5	true
// <=	Less than or equal	4 <= 3	false
// &&	AND (both true)	(5 > 3 && 10 > 7)	true
// ||	OR (any true)	(5 > 10 || 7 > 2)	true
// !	NOT (negation)	!(5 > 3)	false


// ======================== switch case =============================

// switch is a conditional statement like if...else.
// It lets you compare one value against multiple possible cases.
// Makes code cleaner when you have many conditions.


// switch(expression) {
//   case value1:
//     // code if expression === value1
//     break;

//   case value2:
//     // code if expression === value2
//     break;

//   default:
//     // code if no case matches
// }



// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Weekend");
// }





// -----------------falsy value 

// When JavaScript tries to evaluate a value in a condition, if it’s "empty" or "invalid", it is treated as false.

// false
// 0 (zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)

// -----------------Truthy value 

// Anything that is not falsy is truthy.

// "0"
// 'false'
// " " 
// "hello" (non-empty string)
// 123
// -50
// {} (empty object)
// [] (empty array)
// function() {}


// ===================What is Nullish Coalescing (??)?

// The nullish coalescing operator (??) is used to provide a default value only when the left-hand side 
// is null or undefined.


// let val1
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

// val1 = null ?? 10 ?? 20;            

// console.log(val1);

//-------- turnary operator

// condition ? true : false

// const teaprice = 100;

// teaprice >= 120 ? console.log("Tea is expensive") : console.log("Tea is affordable");

// *********************** loops ***************************

// ---------------for loop 


// What is a for loop?
// A loop allows you to run a block of code multiple times until a condition is false.
// The basic for loop has 3 parts:

// for (initialization; condition; update) {
//   // code to run
// }


// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0 → initialization (runs once at the start)
// i < 5 → condition (checked before each loop)
// i++ → update (runs after each loop)

// Skipping Values (Even Numbers)
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// break → exit loop completely
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
// // Output: 1 2 3 4

//  continue → skip current iteration
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// // Output: 1 2 4 5

//------------------ for of loop

// for...of (arrays, iterables)

// Iterates values.

// let numbers = [10, 20, 30];
// for (let num of numbers) {
//   console.log(num);
// }
// // Output: 10 20 30


// let numbers = [10, 20, 30];
// for (let num of numbers) {
//   if (num === 20) {
//     console.log(num);
//   }
// }
// // Output: 20


// for...in (objects)

// Iterates keys of an object.

// let user = { name: "Soumalya", age: 30 };
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// Output: name : Soumalya
//         age : 30



//------------------------ while Loop 

// A while loop runs a block of code as long as a condition is true.
// Unlike do...while, the condition is checked before the block runs.


// while (condition) {
//   // code block
// }


// let j = 5;

// while (j < 5) {
//   console.log("This won't run");
// }


// let seconds = 5;

// while (seconds > 0) {
//   console.log("Time left:", seconds);
//   seconds--;
// }

// console.log("Time's up!");



//================= do...while Loop

// A do...while loop is like a while loop, but it always runs the block at least once 
// (even if the condition is false).

//  Useful when you want the code to run at least once before checking the condition.


// do {
//   // code block
// } while (condition);


// let i = 0;

// do {
//   console.log("Number:", i);
//   i++;
// } while (i < 3);



// let x = 5;

// do {
//   console.log("Runs at least once!");
//   x++;
// } while (x < 5);

// const coding = ["js","ruby","java","python","CPP"];

// coding.forEach((element, index) => {

// });


// ---------------for each 

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 30
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 28
//   }
// ];

// users.forEach( (item, index, arr) => {
//     console.log(item.age)
// })


// ----------------------------filter method--------------------

// const books = [
//   { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", publishedYear: 1925 },
//   { id: 2, title: "Atomic Habits", author: "James Clear", category: "Self-help", publishedYear: 2018 },
//   { id: 3, title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", publishedYear: 1997 },
//   { id: 4, title: "Deep Work", author: "Cal Newport", category: "Self-help", publishedYear: 2016 },
//   { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic", publishedYear: 1960 }
// ];

// // Example 1: Books published after 2000
// const recentBooks = books.filter((book) => {
//   return book.publishedYear > 2000;
// });
// console.log("Books published after 2000:", recentBooks);

// // Example 2: Only 'Self-help' books
// const selfHelpBooks = books.filter((book) => {
//   return book.category === "Self-help";
// });
// console.log("Self-help books:", selfHelpBooks);

// // Example 3: 'Classic' books before 1970
// const oldClassics = books.filter((book) => {
//   return book.category === "Classic" && book.publishedYear < 1970;
// });
// console.log("Old classics:", oldClassics);


// -------------- map method ------------

// const authors = [
//   {
//     name: "J.K. Rowling",
//     books: [
//       { title: "Harry Potter 1", year: 1997 },
//       { title: "Harry Potter 2", year: 1999 },
//       { title: "Harry Potter 3", year: 2003 }
//     ]
//   },
//   {
//     name: "George R.R. Martin",
//     books: [
//       { title: "Game of Thrones", year: 1996 },
//       { title: "Clash of Kings", year: 1998 },
//       { title: "Storm of Swords", year: 2000 }
//     ]
//   }
// ];

// const filteredBooks = authors.map((author) => {
//   return {
//     author: author.name,
//     books: author.books.filter((book) => {
//       return book.year > 2000;
//     })
//   };
// });

// console.log(filteredBooks);


// const categories = [
//   {
//     name: "Electronics",
//     products: [
//       { id: 1, title: "Laptop", price: 55000, inStock: true },
//       { id: 2, title: "Smartphone", price: 25000, inStock: false },
//       { id: 3, title: "Headphones", price: 2000, inStock: true }
//     ]
//   },
//   {
//     name: "Clothing",
//     products: [
//       { id: 4, title: "T-shirt", price: 500, inStock: true },
//       { id: 5, title: "Jeans", price: 2000, inStock: true },
//       { id: 6, title: "Jacket", price: 4000, inStock: false }
//     ]
//   }
// ];

// const filteredProducts = categories.map((category) => {
//   return {
//     category: category.name,
//     products: category.products.filter((product) => {
//       return product.inStock === true && product.price < 5000;
//     })
//   };
// });

// console.log(filteredProducts);