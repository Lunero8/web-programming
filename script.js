/*  
    ===================================
    Functions :
    ===================================

    alert() → shows a popup window with a message
    alert("Hello!");

    typeof() → returns the data type of a value (as a string)
    typeof(123);     // "number"
    typeof("123");   // "string"
    typeof(true);    // "boolean"
    typeof(undefined); // "undefined"  

    prompt() → get inputs
    prompt("Whats your name");
*/



    // Declaring variables
        let age = 25;        // can be reassigned later
        const name = "Sam";  // cannot be reassigned
        var old = "avoid";   // legacy way, don't use  
        // use "const" unless you know the value will change, then use "let"

    // Data types
        let str = "hello";          // string
        let num = 42;               // number (no separate int/float — just "number")
        let big = 42n;              // BigInt (for huge numbers, rare use)
        let bool = true;            // boolean
        let nothing = null;         // intentional empty value
        let notSet;                 // undefined (declared, no value assigned)
        let arr = [1, 2, 3];        // array
        let obj = { key: "value" }; // object
        // null vs undefined
        let a;                      // undefined — variable exists but has no value yet
        let b = null;               // null — you deliberately set "no value"
        // Both mean "empty," but undefined is JS's default/automatic empty, null is something you assign on purpose.
        // there's only one number type. No int, float, double — just number. This can cause precision issues with very large numbers or decimals (e.g. 0.1 + 0.2 doesn't equal 0.3 exactly).

    // Checking types/return data types
        typeof "hello"     // "string"
        typeof 42          // "number"
        typeof true        // "boolean"
        typeof undefined   // "undefined"
        typeof null        // "object" this is a famous JS bug, ignore the weirdness
        typeof [1,2,3]      // "object" (arrays are technically objects)
        typeof {}           // "object"



    // input
        prompt("What is your name") ;

    // Output: 
        console.log("Hello, world!");        // main way, prints to console/terminal
        console.log("Value:", x, y);         // can pass multiple things
        console.error("Something broke");    // error-styled output
        console.warn("Careful...");          // warning-styled output
    // in the browser:
        alert("Hello!");           // shows a popup window with a message
        document.write("Hi");      // writes to the page (rarely used) 



    // Operators, == vs ===
        5 == "5"      // true   → loose equality, converts types before comparing
        5 === "5"     // false  → strict equality, no conversion, checks type AND value
        0 == false     // true   → weird, avoid
        0 === false   // false
        null == undefined   // true   → special case
        null === undefined  // false
        // always use === and !==. Never use ==/!= unless you have a very specific reason. Loose equality causes unpredictable bugs because of hidden type conversion.
    
    // if / else
        let age2 = 20;

        if (age >= 18) {
            console.log("Adult");
        } else if (age >= 13) {
            console.oog("Teen")
        } else {
            console.log("Child")
        }

    // Ternary operator
        let status = age2 >= 18 ? "Adult" : "Minor";
    
    // switch / case
        let day = "Mon";

        switch (day) {
            case "Mon":
                console.log("Start of week");
                break;
            case "Fri":
                console.log("Almost weekend");
                break;
            default:
                console.log("Regular day");
        }

    // Loops
        // for
        for (let i = 0 ; i < 5 ; i++) {
            colsole.log(i);
        }

        // while
        let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }

        // for of : loops over values (arrays, strings, any iterable)
        const arr2 = [10, 20, 30];
        for (const val of arr2) {
            console.log(val);       // 10, 20, 30
        }

        for (const ch of "hi") {
            console.log(ch);        // "h", "i"
        }


        // for in : loops over keys/indices (mainly for objects)
        const obj2 = { a: 1, b: 2, c: 3 };
        for (const key in obj2) {
        console.log(key, obj2[key]);   // "a" 1, "b" 2, "c" 3
        }

        const arr3 = [10, 20, 30];
        for (const index in arr3) {
        console.log(index);    // "0", "1", "2"  (as strings!)
        }
        //  for...of = values, for...in = keys