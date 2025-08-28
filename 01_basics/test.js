
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