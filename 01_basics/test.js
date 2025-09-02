
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

