console.log("Hello, World!");

// const ramArr = ["eat", "tea", "tan", "ate", "nat", "bat"];


// function createAnnagrams(arr){
//     const myAnnagram = {};

//     for(let i = 0; i < arr.len; i++){
//         const unique = arr[i].split("").sort().join("");
//         // console.log("unique ==>>>",unique);
//         if(myAnnagram[unique]){
//             myAnnagram[unique].push(arr[i]);
//         }else{
//             myAnnagram[unique] = [];
//             myAnnagram[unique].push(arr[i]);
//         }
//     }
//     console.log("myAnnagram =>",myAnnagram);
// };


// createAnnagrams(ramArr);


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// function getFibonacciSequence(len){
//     console.log("len ==>>>",len);
//     if(len <= 0) return [];
//     if(len === 1) return [0];

//     const fibBase = [0,1];
//     for(let i = 2; i<len ;i++){
//         fibBase.push(fibBase[i - 1] + fibBase[i-2]);
//     };
//     return fibBase;
// };


// console.log("getFibonacciSequence ==>>",getFibonacciSequence(7));

// function jsCurring(a){
//     return function(b){
//         if(b) return jsCurring(a+b);
//         return a;
//     };
// };
// console.log("jsCurring ==>>",jsCurring(1)(2)(4)(3)());

// ************************************************************************************
// ************************************************************************************
// ************************************************************************************



// const numArray = [4, 7, 2, 9, 1, 5];

// function findMax(arr) {
//     console.log("arr ==>>",arr);
//     if(!Array.isArray(arr)) return "given value is not an Array";
//     if(!arr.length) return "there is no number present";
//     if(arr.length === 1) return arr[0];

//     let defaultMax = arr[0];

//     for(let i = 1;i<arr.length;i++){
//         if(defaultMax < arr[i]) defaultMax = arr[i];
//     };
//     return defaultMax;
// };

// console.log("findMax ==>>>",findMax(numArray));


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const numArray = [4, 7, 2, 9, 1, 5];

// function findSecondMax(arr) {
//     if(!Array.isArray(arr)) return "given value is not an Array";
//     if(!arr.length) return "there is no number present";
//     if(arr.length === 1) return arr[0];

//     let nums = [arr[0], arr[1]];
//     if(arr.length >= 2){
//         if(arr[0] < arr[1]) nums = [arr[0], arr[1]];
//         else nums = [arr[1], arr[0]];

//         if(arr.length === 2) return nums[0];
//     };

//     for(let i = 2; i < arr.length; i++){
//         if(nums[1] < arr[i]){
//             nums[0] = nums[1];
//             nums[1] =  arr[i];
//         };
//         if(nums[0] < arr[i] && nums[1] !== arr[i]){
//             nums[0] = arr[i];
//         };
//     };

//     return nums[0];
// };

// console.log("findSecondMax ==>>>",findSecondMax(numArray));
// console.log("findSecondMax ==>>>",findSecondMax([5,5,5,5]));
// console.log("findSecondMax ==>>>",findSecondMax([4,5,4,5]));
// console.log("findSecondMax ==>>>",findSecondMax([9,3,5,6,33,5,9]));


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const numArray = [4, 7, 2, 9, 1, 5];


// function findSecondMin(arr) {
//     if(!Array.isArray(arr)) return "given value is not an array";
//     if(arr.length < 2) return "there is not anough numbers present in array";

//     let smallest = Infinity;
//     let seconSmallest = Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < smallest){
//             seconSmallest = smallest;
//             smallest = arr[i];
//         }else if(arr[i] < seconSmallest && arr[i] !== smallest){
//             seconSmallest = arr[i];
//         };
//     };

//     return seconSmallest;
// };


// console.log("findSecondMin ==>>>",findSecondMin(numArray));
// console.log("findSecondMin ==>>>",findSecondMin([2,5,6,8,4]));
// console.log("findSecondMin ==>>>",findSecondMin([5,6,7,6,5,6]));


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const numArray = [4, 7, 2, 9, 1, 5, 8, 6];


// function countEvenOdd(arr) {
//     if(!Array.isArray(arr)) return "the given value is not an Array";
//     if(arr.length < 1) return "there is not enough numbers present in Array";

//     const oddEvenObj = {
//         even: 0,
//         odd: 0
//     };

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0) oddEvenObj.even = oddEvenObj.even +1; 
//         else oddEvenObj.odd = oddEvenObj.odd+1;
//     };
//     return oddEvenObj;
// };



// countEvenOdd([2, 4, 6, 8]);
// // { even: 4, odd: 0 }

// countEvenOdd([1, 3, 5, 7]);
// // { even: 0, odd: 4 }

// countEvenOdd([0, -2, -5, -8]);
// // { even: 3, odd: 1 }

// countEvenOdd([]);
// // decide the behavior
// console.log("countEvenOdd ==>>>",countEvenOdd(numArray));
// console.log("countEvenOdd ==>>>",countEvenOdd([2, 4, 6, 8]));// { even: 4, odd: 0 }
// console.log("countEvenOdd ==>>>",countEvenOdd([1, 3, 5, 7]));// { even: 0, odd: 4 }
// console.log("countEvenOdd ==>>>",countEvenOdd([0, -2, -5, -8]));// { even: 3, odd: 1 }
// console.log("countEvenOdd ==>>>",countEvenOdd([])); // decide the behavior


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const arr = [2, 4, 2, 7, 2, 9, 4, 2];


// function countFrequency(arr, target) {
//     if(!Array.isArray(arr)) return "given first parameter value is not an Array";
//     if(typeof target !== "number") return "target value is not number"; // thinking user can give 0 to find as well.

//     let frequencyOfTarget = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target) ++frequencyOfTarget;// checking with 3 === for safety is that good.
//     };

//     return frequencyOfTarget;
// };



// console.log("countFrequency(arr, 2) ==>",countFrequency(arr, 2)); // 4
// console.log("countFrequency(arr, 4) ==>>",countFrequency(arr, 4)); // 2
// console.log("countFrequency(arr, 7) ==>>",countFrequency(arr, 7)); // 1
// console.log("countFrequency(arr, 10) ==>>>",countFrequency(arr, 10)); // 0
// console.log("countFrequency(arr, 0) ==>>>",countFrequency(arr, 0)); // 0



// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const arr = [2, 4, 7, 2, 9, 4, 2, 7];

// function findDuplicates(arr) {
//     if (!Array.isArray(arr)) return "given value is not an Array.";
//     if (arr.length < 1) return "there is no values in given Array.";

//     const uniqueValueSet = new Map();
//     const foundedDuplicateValues = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueValueSet.has(arr[i])) uniqueValueSet.set(arr[i], arr[i]);
//         else foundedDuplicateValues.add(arr[i]);
//     };
//     return [...foundedDuplicateValues];
// };

// // Expected: [2, 4, 7]
// console.log("findDuplicates([2, 4, 7, 2, 9, 4, 2, 7]) ==>>", findDuplicates([2, 4, 7, 2, 9, 4, 2, 7]));// [2, 4, 7]
// console.log("findDuplicates([1, 2, 3, 4]) =>", findDuplicates([1, 2, 3, 4]));// []
// console.log("findDuplicates([5, 5, 5, 5]) =>", findDuplicates([5, 5, 5, 5]));// [5]
// console.log("findDuplicates([]) =>", findDuplicates([]));// []



// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// const arr = [2, 4, 7, 9, 2, 5];


// function containsDuplicate(arr) {
//     if (!Array.isArray(arr)) return "given value is not an Array.";
//     if (arr.length <= 1) return false;

//     const uniqueValueSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueValueSet.has(arr[i])) {
//             return true;
//             break;
//         } else {
//             console.log("arr[i] =>", i, arr[i]);
//             uniqueValueSet.add(arr[i]);
//         };
//     };

//     return false;
// };

// console.log("containsDuplicate([2, 4, 7, 9, 2, 5]) ==>>", containsDuplicate([2, 4, 7, 9, 2, 5]));// true
// console.log("containsDuplicate([1, 2, 3, 4, 5]) =>", containsDuplicate([1, 2, 3, 4, 5]));// false
// console.log("containsDuplicate([5, 5, 5]) =>", containsDuplicate([5, 5, 5]));// true
// console.log("containsDuplicate([]) =>", containsDuplicate([]));// false


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************


// Next — Problem 8: Two Sum 🔥
// Find two numbers whose sum equals the target.
// Expected:- [2, 7]

// const arr = [2, 7, 11, 15];
// const target = 9;


// function twoSum(arr, target) {
//     if (!Array.isArray(arr)) return "given first param is not an Array.";
//     if (typeof target !== "number") return "given second param is not an valid Number.";
//     if (arr.length < 2) return `there is no element found which could be sum to target "${target}"`;

//     let founded2sum = [0, 0];
//     for (let i = 1; i < arr.length; i++) {
//         if ((arr[0] + arr[i]) === target) {
//             founded2sum = [arr[0], arr[i]];
//         };
//     };

//     if (!((founded2sum[0] + founded2sum[1]) === target)) {
//         arr.shift();
//         return twoSum(arr, target);
//     };

//     return founded2sum;
// };


// function twoSum(arr, target) {
//     if (!Array.isArray(arr)) return "given first param is not an Array.";
//     if (typeof target !== "number") return "given second param is not an valid Number.";
//     if (arr.length < 2) return `there is no element found which could be sum to target "${target}"`;

//     const uniqueValueSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueValueSet.has(target - arr[i])) {
//             return [arr[i], target - arr[i]];
//         } else {
//             uniqueValueSet.add(arr[i]);
//         };
//     };

//     return `there is no element found which could be sum to target "${target}"`;
// };



// console.log("twoSum([2, 7, 11, 15], 9) =>", twoSum([2, 7, 11, 15], 9));// [2, 7]
// console.log("twoSum([3, 2, 4], 6) =>", twoSum([3, 2, 4], 6));// [2, 4]
// console.log("twoSum([2, 11, 7, 15], 9) =>", twoSum([2, 11, 7, 15], 9));// [2, 7]
// console.log("twoSum([3, 3], 6) =>", twoSum([3, 3], 6));// [3, 3]
// console.log("twoSum([1, 2, 3], 10) =>", twoSum([1, 2, 3], 10));// decide what to return


// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************





// Next Problem — Problem 9: First Non-Repeating Element 🧠
// Find the first element that appears only once.
// // Expected:- 2
// const arr = [4, 5, 1, 2, 1, 4, 5];


// function findFirstUnique(arr) {
//     if (!Array.isArray(arr)) return "given value is not an valid array.";
//     if (arr.length < 1) return "given array is does not containing any elements";

//     if (arr.length === 2) {
//         if (arr[0] === arr[1]) return "not found any Non-Repeating Element";
//         else return arr[0];
//     };

//     const uniqueValuesMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueValuesMap.has(arr[i])) uniqueValuesMap.set(arr[i], (uniqueValuesMap.get(arr[i]) + 1));
//         else uniqueValuesMap.set(arr[i], 1);
//     };
//     for (const [key, value] of uniqueValuesMap) {
//         if (value === 1) return key;
//     };
//     return "not found any Non-Repeating Element";
// };



// console.log("findFirstUnique([4, 5, 1, 2, 1, 4, 5]) =>", findFirstUnique([4, 5, 1, 2, 1, 4, 5]));// 2
// console.log("findFirstUnique([1, 2, 3, 2, 1]) ==>", findFirstUnique([1, 2, 3, 2, 1]));// 3
// console.log("findFirstUnique([5, 5, 5]) =>", findFirstUnique([5, 5, 5]));// decide what to return
// console.log("findFirstUnique([]) =>", findFirstUnique([]));// decide what to return




// // 🚀 Problem 10 — Reverse an Array
// const arr = [1, 2, 3, 4, 5];


// function reverseArray(arr) {
//     if (!Array.isArray(arr)) return "given value is not an Array.";
//     if (arr.length < 1) return "the given Array is empty.";

//     const iterationCount = Math.round(arr.length / 2);

//     for (let i = 0; i < iterationCount; i++) {
//         const temp = arr[i];
//         arr[i] = arr[(arr.length - i - 1)];
//         arr[(arr.length - i - 1)] = temp;
//     };

//     return arr;
// };


// console.log("reverseArray([1, 2, 3, 4, 5]) ==>>>", reverseArray([1, 2, 3, 4, 5]));// [5, 4, 3, 2, 1]
// console.log("reverseArray([1, 2]) =>>>", reverseArray([1, 2]));// [2, 1]
// console.log("reverseArray([1]) ==>", reverseArray([1]));// [1]
// console.log("reverseArray([]) ==>>", reverseArray([]));// decide behavior


// Problem 11 — Two Sum on a Sorted Array
// Now let's use the two-pointer pattern for something more interesting.
// Given a sorted array:

// const arr = [1, 2, 3, 4, 6, 8, 11];
// const target = 10;

// // Expected:- [2, 8]

// // Rules
// // ❌ Don't use Set
// // ❌ Don't use Map
// // ❌ Don't use nested loops
// // ✅ Use two pointers
// // ✅ Aim for O(n) time
// // ✅ Aim for O(1) extra space


// function twoSum2Pointer(){

// };



// [1, [2, 3], [4, 5]]
// [1, 2, 3, 4, 5]

// 2. Flatten an array of arbitrary depth
// [1, [2, [3, [4, 5]]]]
// // [1, 2, 3, 4, 5]

function FlattenArray(arr) {
    // if (!Array.isArray(arr)) return "given value is not an Array.";
    // if (arr.length < 1) return "given array is empty.";
    if (!Array.isArray(arr)) return [];

    // const flatArr = arr.reduce((acc, ele, i) => {
    //     if (Array.isArray(ele)) {
    //         acc.push(...FlattenArray(ele));
    //     } else {
    //         acc.push(ele);
    //     };
    //     return acc;
    // }, []);
    // return flatArr;

    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) stack.push(...next);
        else result.unshift(next);
    };

    return result;
};


console.log("FlattenArray ==>>>", FlattenArray([1, [2, 3], { "H": "H" }, [4, 5]]));
console.log("FlattenArray ==>>>", FlattenArray([1, [2, [3, [4, 5, 6, [8]]]]]));



// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// Create:

// function mergeUnique(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "please give both valid Array";
//     const uniqueArr = [...new Set([...arr1, ...arr2]).values()];
//     return uniqueArr;
// };


// function mergeUnique(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "please give both valid Array";

//     const mergedArr = [...arr1, ...arr2];
//     const uniqueValues = {};
//     for (let i = 0; i < mergedArr.length; i++) {
//         uniqueValues[mergedArr[i]] = mergedArr[i];
//     };
//     return Object.values(uniqueValues);
// };


// console.log("mergeUnique ==>>>", mergeUnique(arr1, arr2));
// console.log("mergeUnique ==>>", mergeUnique([1, 2, 2, 3, 5, 6, 9], [2, 3, 4]));// [1, 2, 3, 4]
// console.log("mergeUnique ==>>", mergeUnique([5, 5, 5], [5, 5]));// [5]
// console.log("mergeUnique ==>>", mergeUnique([], [1, 2]));// [1, 2]
// console.log("mergeUnique ==>>", mergeUnique([1, 2], [-1, -3, -6, -10]));// [1, 2]