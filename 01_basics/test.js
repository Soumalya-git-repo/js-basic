
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