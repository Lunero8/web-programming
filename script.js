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

    Strings:
        str[0];         // "H"
        str.length;      // 5
        str[str.length - 1];   // "o" (last character)

        str.slice(0, 5);       // "Hello" (like array slice — start to end, end exclusive)
        str.slice(-5);          // "World" (negative = from the end)
        str.toUpperCase();       // "HELLO WORLD"
        str.toLowerCase();        // "hello world"
        str.charAt(0);             // "H" (alternative to str[0])

        // Searching within strings
        str.includes("World");      // true
        str.indexOf("World");        // 6 (starting index, -1 if not found)
        str.startsWith("Hello");      // true
        str.endsWith("World");         // true

        // Case conversion & trimming
        "  hello  ".trim();          // "hello" (removes whitespace from both ends)
        "  hello  ".trimStart();      // "hello  "
        "  hello  ".trimEnd();         // "  hello"
        "HELLO".toLowerCase();          // "hello"
        "hello".toUpperCase();           // "HELLO"

        // Splitting & joining
        "a,b,c".split(",");            // ["a", "b", "c"]
        "hello".split("");              // ["h","e","l","l","o"]  (split into individual chars)
        ["a", "b", "c"].join("-");       // "a-b-c"
        ["a", "b", "c"].join("");         // "abc"

        // Replace
        "Hello World".replace("World", "JS");        // "Hello JS" (replaces first match)
        "a-a-a".replaceAll("a", "b");                  // "b-b-b" (replaces ALL matches)

        // Comparing strings
        "apple" === "apple";       // true
        "apple" === "Apple";        // false → case-sensitive
        "apple" < "banana";          // true → alphabetical comparison

        // Concatenation (multiple ways)
        first + " " + last;             // "John Doe" → old way
        `${first} ${last}`;              // "John Doe" → preferred, template literal
        first.concat(" ", last);           // "John Doe" → rarely used
    
    Set:
        const unique = new Set(nums);
        console.log(unique);                // Set(3) {1, 2, 3}

        const arr = [...unique];            // convert back to array
        console.log(arr);                   // [1, 2, 3]

        const deduped = [...new Set(nums)];
        console.log(deduped);               // [1, 2, 3]

        unique.add(4);
        unique.has(2);                      // true
        unique.delete(1);
        unique.size;                        // number of items

    Map:
        map.get("name");        // "Alice"
        map.has("age");         // true
        map.delete("age");
        map.size;               // 1
*/



/*
    ===================================
    Declaring variables:
    ===================================
*/
        let age = 25;        // can be reassigned later
        const name = "Sam";  // cannot be reassigned
        var old = "avoid";   // legacy way, don't use  
        // use "const" unless you know the value will change, then use "let"

/*
    ===================================
    Data types: 
    ===================================
*/    
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

    // Falsy values (only these 6)
        /*
            false
            0
            ""          // empty string
            null
            undefined
            NaN
        */



/*
    ===================================
    Input and Outpur:
    ===================================
*/
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



/*
    ===================================
    Operators, if-else, loops:
    ===================================
*/
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



/*
    ===================================
    Functions:
    ===================================
*/
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

    

/*
    ===================================
    Arrays:
    ===================================
*/
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


    
/*
    ===================================
    Objects:
    ===================================
*/
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



/*
    ===================================
    Strings:
    ===================================
*/
    // Creating strings
        const s1 = "hello";
        const s2 = 'hello';
        const s3 = `hello`;     // template literal — allows ${} substitution
        // All three work the same for plain text. Backticks are special because they allow ${variable} 
        // and multi-line strings:
        const multi = `line one
        line two`;      // actual newline preserved

        // Strings are immutable, you can't change a character directly
        s1[0] = "J";
        console.log(s1);   // "hello" ← unchanged! No error, just silently fails

    // Strings functions / methods
        // Common string methods
        const str2 = "Hello";

        str[0];         // "H"
        str.length;      // 5
        str[str.length - 1];   // "o" (last character)

        const str3 = "Hello World";

        str3.slice(0, 5);       // "Hello" (like array slice — start to end, end exclusive)
        str3.slice(-5);          // "World" (negative = from the end)
        str3.toUpperCase();       // "HELLO WORLD"
        str3.toLowerCase();        // "hello world"
        str3.charAt(0);             // "H" (alternative to str[0])

        // Searching within strings
        str3.includes("World");      // true
        str3.indexOf("World");        // 6 (starting index, -1 if not found)
        str3.startsWith("Hello");      // true
        str3.endsWith("World");         // true

        // Case conversion & trimming
        "  hello  ".trim();          // "hello" (removes whitespace from both ends)
        "  hello  ".trimStart();      // "hello  "
        "  hello  ".trimEnd();         // "  hello"

        "HELLO".toLowerCase();          // "hello"
        "hello".toUpperCase();           // "HELLO"

        // Splitting & joining
        "a,b,c".split(",");            // ["a", "b", "c"]
        "hello".split("");              // ["h","e","l","l","o"]  (split into individual chars)
        ["a", "b", "c"].join("-");       // "a-b-c"
        ["a", "b", "c"].join("");         // "abc"

        // Replace
        "Hello World".replace("World", "JS");        // "Hello JS" (replaces first match)
        "a-a-a".replaceAll("a", "b");                  // "b-b-b" (replaces ALL matches)

        // Comparing strings
        "apple" === "apple";       // true
        "apple" === "Apple";        // false → case-sensitive
        "apple" < "banana";          // true → alphabetical comparison

        // Concatenation (multiple ways)
        const first = "John";
        const last = "Doe";

        first + " " + last;             // "John Doe" → old way
        `${first} ${last}`;              // "John Doe" → preferred, template literal
        first.concat(" ", last);           // "John Doe" → rarely used



/*
    ===================================
    Advanced Language Features:
    ===================================
*/
    // Truthy / Falsy
        // In JS, every value is either "truthy" or "falsy" when used in a boolean context (like if), even if it's not literally true/false

        // Falsy values (only these 6)
        /*
            false
            0
            ""          // empty string
            null
            undefined
            NaN
        */

        // Everything else is truthy, including things you might not expect:
        /*
            "0"          // truthy! (non-empty string)
            "false"       // truthy! (non-empty string)
            []             // truthy! (empty array is still truthy)
            {}              // truthy! (empty object is still truthy)
        */
        
        if ("") {
            console.log("truthy");
        } else {
            console.log("falsy");     // this runs
        }

        if ([]) {
            console.log("truthy");     // this runs! empty array is truthy
        }

        function greet(name) {
            if (name) {          // checks truthy, not just undefined
                console.log(`Hello ${name}`);
            } else {
                console.log("Hello stranger");
            }
        }
        greet("");        // "Hello stranger" — empty string is falsy
        greet("Sam");       // "Hello Sam"
        greet();              // "Hello stranger" — undefined is falsy

    // Optional chaining ?.
        // Safely access nested properties without crashing if something's missing.
        const user4 = { name: "Alice" };

        console.log(user4.address.city);     // Error: Cannot read properties of undefined
        console.log(user4.address?.city);     // undefined (no crash)

        // Without ?., trying to read a property of undefined/null throws an error and crashes your program. With ?., JS just returns undefined instead of crashing.

        // Works with function calls too
        user.greet?.();     // calls greet() only if it exists, otherwise does nothing (no error)

    // Nullish coalescing ??
        // Provides a fallback value only when the left side is null or undefined (NOT for other falsy values like 0 or "")
        const count = 0;
        console.log(count || 10);     // 10 : WRONG, if 0 is a valid value! (|| treats 0 as falsy)
        console.log(count ?? 10);      // 0 : correct, only falls back on null/undefined

        let a1 = null;
        let b1 = undefined;
        let c1 = 0;
        let d1 = "";

        console.log(a1 ?? "default");    // "default"
        console.log(b1 ?? "default");     // "default"
        console.log(c1 ?? "default");      // 0        ← kept, because 0 isn't null/undefined
        console.log(d1 ?? "default");       // ""       ← kept, same reason

        // use ?? instead of || when you want to allow 0, "", or false as valid values, and only fall back for truly missing (null/undefined) data.

    // && and || as shortcuts
        // && → runs right side only if left is truthy
        const isLoggedIn = true;
        isLoggedIn && console.log("Welcome!");    // prints, since isLoggedIn is truthy

        // || → common way to set defaults (careful with falsy values, see above)
        const name2 = userInput || "Guest";

    // Set: Collection of unique values
        // Very handy for removing duplicates from an array in one line
        const nums = [1, 2, 2, 3, 3, 3];
        const unique = new Set(nums);
        console.log(unique);            // Set(3) {1, 2, 3}

        const arr5 = [...unique];        // convert back to array
        console.log(arr5);               // [1, 2, 3]

        unique.add(4);
        unique.has(2);                  // true
        unique.delete(1);
        unique.size;                    // number of items
        
        const arr6 = [1, 1, 2, 2, 3];
        const deduped = [...new Set(arr6)];
        console.log(deduped);           // [1, 2, 3]

    // Map: key-value pairs (like an object, but more flexible)
        // Difference from objects: Map keys can be any type (numbers, objects, even functions), not just strings. Objects only allow string/symbol keys.
        const map = new Map();
        map.set("name", "Alice");
        map.set("age", 30);

        map.get("name");     // "Alice"
        map.has("age");        // true
        map.delete("age");
        map.size;                // 1

        // iterate
        for (const [key, value] of map) {
        console.log(key, value);
        }



        /*
            ====================
            ====================
            ====================
        */


            
/*
    ===================================
    Asynchronous JavaScript:
    ===================================
*/
    /* 
        Asynchronous JavaScript

        This is one of the most important JS-specific topics — spend real time here. Here's what we'll cover:

        Why async exists (single-threaded + event loop)
        Callbacks (and callback hell)
        Promises
        async / await
        Error handling (try/catch)
        Promise.all → running things in parallel
        setTimeout / setInterval
    */

    // Why async exists (single-threaded + event loop):
    // JS runs on a single thread, it can only do one thing at a time. But things like network requests, file reads, or timers take time to complete, and JS can't afford to freeze while waiting.
    // So JS uses an event loop: it starts a slow task, moves on to other code immediately, and comes back to handle the result later, once it's ready without blocking anything else.
        console.log("1");
        // setTimeout(() => , );
        setTimeout(() => console.log("2"), 1000);   // scheduled for later, doesn't block
        console.log("3");

        // Output order:
        // 1
        // 3
        // 2   ← printed last, even though it's written 2nd, because it waits 1 second

        // This is the core mental shift coming from synchronous languages: code doesn't always run top-to-bottom in real time, some things get scheduled for later.

    // Callbacks : the original way to handle async
        function fetchData(callback) {
            setTimeout(() => {
                callback("Data received");
            }, 1000);
        }

        fetchData((result) => {
            console.log(result);   // "Data received" (after 1 second)
        });

        // Callback hell: the problem with chaining many async steps using callbacks
        // Having too many nested callbacks, making asynchronous JavaScript code difficult to read, understand, and maintain.
        // This is exactly why Promises were introduced.

    // Promises:
        // A Promise represents a value that will be available later, either it succeeds (resolve) or fails (reject)
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve("Data received");
                } else {
                    reject("Error occurred");
                }
            }, 1000);
        });

        promise
        .then((result) => console.log(result))    // runs if resolved
        .catch((error) => console.log(error));     // runs if rejected

        // Chaining promises (fixes callback hell):
        getUser(id)
            .then(user => getPosts(user.id))
            .then(posts => getComments(posts[0].id))
            .then(comments => console.log(comments))
            .catch(error => console.log("Something failed:", error));
        // Much flatter and more readable than nested callbacks.

    // async / await (the modern, preferred way)
        // Makes async code look synchronous, even though it isn't
        // Compare this to the .then() chain above: same logic, much cleaner to read.
        async function getData() {
            const user = await getUser(id);
            const posts = await getPosts(user.id);
            const comments = await getComments(posts[0].id);
            console.log(comments);
        }
        // await can only be used inside an async function
        // await pauses execution of that function until the Promise resolves, without blocking the rest of the program
        // An async function always returns a Promise, even if you return a plain value
        async function getNumber() {
            return 5;
        }
        getNumber().then(num => console.log(num));   // 5
        console.log(getNumber());    // Promise {<pending>} — NOT 5 directly!

    // Error handling with try/catch
        async function getData() {
        try {
            const user = await getUser(id);
            const posts = await getPosts(user.id);
            console.log(posts);
        } catch (error) {
            console.log("Error:", error);
        }
        }
        // This replaces .catch() when using async/await, wrap your await calls in try/catch to handle failures.

    // Promise.all: run multiple async tasks in parallel
        // If tasks don't depend on each other, running them one-by-one with await wastes time

        // Slow — each waits for the previous to finish
        const user51 = await getUser(id);      // 1 second
        const posts = await getAllPosts();     // 1 second
        // Total: ~2 seconds

        // Fast — runs both at the same time
        const [user52, posts2] = await Promise.all([
            getUser(id),
            getAllPosts()
        ]);
        // Total: ~1 second (whichever takes longer)

    // setTimeout / setInterval
        setTimeout(() => {
            console.log("Runs once, after 2 seconds");
        }, 2000);

        const id = setInterval(() => {
            console.log("Runs every 1 second");
        }, 1000);

        clearInterval(id);   // stops it

    // Real example fetching data from an API
        async function getUser() {
            try {
                const res = await fetch("https://api.example.com/user");
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log("Failed to fetch:", error);
            }
        }

        // What prints first, code before setTimeout, or code after it (if the timeout is 0ms)?
        // Rewrite this using async/await instead of .then()
        function getData() {
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }



/*
    ===================================
    Classes / OOP:
    ===================================
*/
    /*
        Class basics (constructor, methods)
        Instances (new)
        Inheritance (extends, super)
        Getters/setters
        Static methods
        Private fields
    */

    // Class basics
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            greet() {
                console.log(`Hi, I'm ${this.name}, age ${this.age}`);
            }
        }
        // constructor runs automatically when you create a new instance, sets up initial properties.
        // Methods (like greet) are shared across all instances (not copied per object, more memory-efficient).

    // Creating instances (new)
        const p1 = new Person("Alice", 30);
        const p2 = new Person("Bob", 25);

        p1.greet();   // "Hi, I'm Alice, age 30"
        p2.greet();   // "Hi, I'm Bob, age 25"
        // new creates a fresh object, runs the constructor, and links it to the class's methods.
    
    // Inheritance (extends and super)
        class Animal {
            constructor(name) {
                this.name = name;
            }
            speak() {
                console.log(`${this.name} makes a sound`);
            }
        }

        class Dog extends Animal {
            constructor(name, breed) {
                super(name);          // calls the parent's constructor
                this.breed = breed;
            }
            speak() {                 // overrides parent's speak()
                console.log(`${this.name} barks`);
            }
        }

        const d = new Dog("Rex", "Labrador");
        d.speak();       // "Rex barks"
        console.log(d.breed);   // "Labrador"

        // super() must be called first in a child class's constructor, before using `this`, otherwise JS throws an error. It runs the parent class's constructor logic so `this` gets properly set up.

        // Calling parent's method from child (not just overriding it)
        class Dog extends Animal {
            speak() {
                super.speak();              // calls Animal's speak() first
                console.log(`${this.name} also barks`);
            }
        }
    
    // Getters / setters
        class Circle {
            constructor(radius) {
                this.radius = radius;
            }
            get area() {                // accessed like a property, not called like a method
                return Math.PI * this.radius ** 2;
            }
            set diameter(d) {           // lets you "assign" to something that runs custom logic
                this.radius = d / 2;
            }
        }

        const c = new Circle(5);
        console.log(c.area);            // 78.53... (no parentheses — called like a property!)
        c.diameter = 20;                // uses the setter
        console.log(c.radius);          // 10

    // Static methods: belong to the class itself, not instances
        class MathHelper {
            static square(n) {
                return n * n;
            }
        }

        MathHelper.square(5);           // 25
        const m = new MathHelper();
        m.square(5);                    // Error, static methods aren't available on instances
        // Used for utility functions related to the class but not tied to a specific instance's data.

    // Private fields (modern JS feature)
        class BankAccount {
            #balance = 0;               // # prefix = private, only accessible inside the class

            deposit(amount) {
                this.#balance += amount;
            }
            getBalance() {
                return this.#balance;
            }
        }

        const acc = new BankAccount();
        acc.deposit(100);
        console.log(acc.getBalance());  // 100
        /* console.log(acc.#balance); */     // Error, can't access from outside the class
        // This gives real encapsulation, unlike regular properties (this.balance), which anyone can read/modify directly from outside.