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

    reduce() → takes an array and collapses it into a single value
        const nums = [1, 2, 3, 4];
        console.log(nums.reduce((a, b) => a + b, 0));   // 10
        const nums = [4, 9, 2, 7];
        const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc));
        console.log(max);   // 9

    Arrays:
        arr.length;
        arr.push(4);        // adds to end → [1,2,3,4]
        arr.pop();           // removes from end → [1,2,3]
        arr.unshift(0);      // adds to start → [0,1,2,3]
        arr.shift();          // removes from start → [1,2,3]
        arr.slice(1, 3);      // returns NEW array, elements from index 1 to 2 (end exclusive) → [2,3], doesn't modify original array
        arr.splice(1, 1);     // REMOVES 1 element starting at index 1, MODIFIES original array, arr becomes [1,3]

    Objects:
        person.name;            // dot notation → "Alice"
        person["name"];         // bracket notation → "Alice" (needed if key is dynamic/variable)
        person.great();         // "Hi, I'm Alice"
        person.city = "NYC";    // add new property
        delete person.age;      // remove property
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



    // Functions
        // Function declaration
        function add(a, b) {
            return a + b;
        };

        console.log(add(2, 3)); // 5
        // -----------------------------------
        console.log(add(2,5)); // works fine, prints 5

        function add(a, b){
            return a + b;
        };

        function isEven(n) {
            return n % 2 === 0;   
        }

        // Function expression
        const add = function(a, b) {
            return a + b;
        };

        console.log(add(2, 3));   // 5
        // ---------------------------------------
        console.log(add(2, 3));   // Error: Cannot access 'add' before initialization
        const add = function(a, b) { 
            return a + b; 
        };

        // Arrow functions
        const add = (a, b) => a + b;
        const square =  x => x * x;
        const greet = () => console.log("hi");
        const multiple_line = (a, b) => {
            const result = a * b;
            return result;
        }
        console.log(add(4, 6));    // 10
        console.log(add(2, 3));    // 5
        console.log(add(-1, 1));   // 0

        // Parameters
        function greet(name = "Guest") {
            console.log(`Hello, ${name}`); // "Hello Guest" backticks → replaces with actual value
            console.log("Hello, ${name}"); // "Hello, ${name}" double quotes → prints literal text "${name}" 
            console.log('Hello, ${name}'); // 'Hello, ${name}' single quotes → prints literal text "${name}"
        }
        greet();        // "Hello Guest"
        greet("Sam");   // "Hello Sam"


        function sum(...nums) {
            return nums.reduce((a, b) => a + b, 0);
            // nums = [1, 2, 3, 4]
            // reduce starts with 0, then adds each number one by one:
            // 0 + 1 = 1
            // 1 + 2 = 3
            // 3 + 3 = 6
            // 6 + 4 = 10
            // final result = 10
        }
        console.log(sum(1, 2, 3, 4));   // 10

    

    // Arrays
        // basic
        const arr20 = [10, 20, 30, 40];

        arr20[0];                   // 10 (zero-indexed)
        arr20.length;               // 4
        arr20[arr20.length - 1];    // 40 (last element)

        const arr21 = [1, 2, 3]; // let arr21 = [1, 2, 3];

        arr21.push(4);              // adds to end → [1,2,3,4]
        arr21.pop();                // removes from end → [1,2,3]
        arr21.unshift(0);           // adds to start → [0,1,2,3]
        arr21.shift();              // removes from start → [1,2,3]
        arr21.slice(1, 3);          // returns NEW array, elements from index 1 to 2 (end exclusive) → [2,3], doesn't modify original array
        arr21.splice(1, 1);         // REMOVES 1 element starting at index 1, MODIFIES original array, arr becomes [1,3]
        // slice → doesn't change original, just returns a piece
        // splice → changes the original array directly (can remove/add/replace elements)


    
    // Objects
        // Object basics
        const person = {
            name: "Alice",
            age: 30,
            greet: function() {
                console.log(`Hi, I'm ${this.name}`);
            }
        };

        person.name;            // dot notation → "Alice"
        person["name"];         // bracket notation → "Alice" (needed if key is dynamic/variable)
        person.great();         // "Hi, I'm Alice"
        person.city = "NYC";    // add new property
        delete person.age;      // remove property

        // Object.keys / values / entries
        const obj3 = { a: 1, b: 2, c: 3 };

        Object.keys(obj3);      // ["a", "b", "c"]
        Object.values(obj3);     // [1, 2, 3]
        Object.entries(obj3);     // [["a",1], ["b",2], ["c",3]]

        // commonly used to loop objects safely
        Object.entries(obj3).forEach(([key, val]) => {
        console.log(key, val);
        });

        // Nested objects/arrays (very common in real data)
        const user = {
        name: "Alice",
        address: {
            city: "NYC",
            zip: "10001"
        },
        hobbies: ["reading", "chess"]
        };

        user.address.city;       // "NYC"
        user.hobbies[0];          // "reading"

        // nested destructuring
        const { address: { city } } = user;
        console.log(city);        // "NYC"