


const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];// Output: [1, 2, 3, 4, 5]

// Interview Tip: If they ask you to do it without a Set, use filter and indexOf:
// arr.filter((item, index) => arr.indexOf(item) === index);// Output: [1, 2, 3, 4, 5]



//  Remove duplicate object from array

const employees = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Bob' }
];


// how does Map works internally

console.log("newMap ==>>", new Map());
console.log("newMap ==>>", new Map([[0, 1], [1, 2], [2, 3]]));
console.log("newMap ==>>", new Map([employees]));



console.log(new Map(employees));
// Output: Map { 1 => { id: 1, name: 'John' }, 2 => { id: 2, name: 'Jane' }, 3 => { id: 3, name: 'Bob' } }

// 

const employeesMap = employees.map((value, i) => [value.id, value])
console.log("employees.map ==>>>", employeesMap);


// const uniqueEmployees = Array.from(
//     new Map(employeesMap).values()
// );

console.log("uniqueEmployeesMAP ==>>>", Array.from(new Map(employeesMap).values()));
console.log("uniqueEmployeesSET ==>>>", Array.from(new Set(employeesMap)));



// Output: [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Bob' }
// ]


function isPalindrome(str) {
    // always do cleaning in palindrome question.
    const cleanStr = str.toLowerCase().replace("[^/a-z0-9]/g", "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

console.log("isPalindrome ==>>>>", isPalindrome("Madam"));
console.log("isPalindrome ==>>>>", isPalindrome("A man, a plan, a canal: Panama"));
console.log("isPalindrome ==>>>>", isPalindrome("Was it a car or a cat I saw?"));
console.log("isPalindrome ==>>>>", isPalindrome("No ‘x’ in Nixon"));
console.log("isPalindrome ==>>>>", isPalindrome("race a car"));
console.log("isPalindrome ==>>>>", isPalindrome("racecar"));



// output ==>> true
// Output: [ 'M', 'a', 'd', 'a', 'm' ]
// Output: [ 'M', 'a', 'd', 'a', 'm' ]
// madam === madam ==>> true


// 2. Closures & Advanced Functions



function debounce(func, delay) {
    let timerID;
    return function (...args) {
        clearTimeout(timerID);
        timerID = setTimeout(() => {
            func.apply(this, args);
        }, delay || 500)
    };
};


const handleSearch = debounce((queryText) => {
    console.log("queryText ==>>", queryText);
}, 500)

handleSearch("A");
handleSearch("Ap");
handleSearch("App");
handleSearch("Appl");
handleSearch("Apple", "aaa", "bbb");



// 3. Flatten a nested array (e.g., [1, [2, [3, 4]]] to [1, 2, 3, 4]).
// Answer: In modern JS, use the built-in flat(Infinity) method.

// JavaScript
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(Infinity));
// Interview Tip: If they ask you to write it from scratch to test your knowledge of recursion:

// JavaScript
function flattenArray(arr) {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
}




function getFibonacciSequence(length) {
    if (length <= 0) return [];
    if (length === 1) return [0];

    const fibSequences = [0, 1];

    for (let i = 2; i < length; i++) {
        fibSequences.push(fibSequences[i - 1] + fibSequences[i - 2])
    };

    return fibSequences;
};

console.log("getFibonacciSequence. ==>>", getFibonacciSequence(2));
console.log("getFibonacciSequence. ==>>", getFibonacciSequence(3));
console.log("getFibonacciSequence. ==>>", getFibonacciSequence(4));
console.log("getFibonacciSequence. ==>>", getFibonacciSequence(8));
// console.log("getFibonacciSequence. ==>>", getFibonacciSequence(15));
// console.log("getFibonacciSequence. ==>>", getFibonacciSequence(19));


function myDebounce(func, delay) {
    let timerID;
    return function (...args) {
        console.log("typeOf ==>>", Array.isArray(args));

        clearTimeout(timerID);
        // setTimeout(greet.bind(null, "Hardik", "Hello"), 2000); // as per this example can I do below thing
        timerID = setTimeout(func.bind(this, args), delay ?? 500);
        // timerID = setTimeout(() => {
        //     // func.apply(this, args);// takes second argument as single param and calls the function immidaitly.
        //     // func.call(this, args);// takes second argument as array and calls the function immidaitly.
        //     // func.bind(this, args)(); // takes second argument as array and returns a new function with this binding.
        // }, delay || 500);
    };
};

const myHandleSearch = myDebounce((args) => {
    console.log("args ==>>>", args);
}, 500);

myHandleSearch("a");
myHandleSearch("aa");
myHandleSearch("aaa");
myHandleSearch("aaaa", "bb", "ccc");


const num = [3, 4, 5, 6, 24];

console.log("Math.max(num) =>>", Math.max.apply(null, num));
console.log("Math.max(num) =>>", Math.min(...num));



