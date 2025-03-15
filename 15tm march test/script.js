//1st question
function reverseString(str) {
    // Your logic here
     let reversed=""
     for(let i=str.length-1; i>=0; i--){
        reversed+=str[i];
     }
     return reversed;
}
console.log(reverseString("hello")); // Expected output: "olleh"


//2nd question
function isPalindrome(str) {
    // Your logic here
    let reversed=""
    for(let i=str.length-1; i>=0; i--){
       reversed+=str[i];
    }
    return reversed===str;
    
}
console.log(isPalindrome("racecar")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false


//3rd question
function findMax(arr) {
    // Your logic here
    let max=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }

    }
    return max;
}
console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

//4th question
function removeDuplicates(arr) {
    // Your logic here
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]


//5th question
function factorial(n) {
    // Your logic here
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5)); // Expected output: 120

//6th question
function fibonacci(n) {
    // Your logic here
    if (n<=0){
        return [];
    }else if(n===1){
        return[0];
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]

//7th question
function areAnagrams(str1, str2) {
    // Your logic here
    if (str1.length!==str2.length){
        return false;
    }else{
        return str1.split('').sort().join('') === str2.split('').sort().join('');

    }
}
console.log(areAnagrams("listen", "silent")); // Expected output: true

//8th question
function secondLargest(arr) {
    // Your logic here
    arr.sort((a,b)=>b-a);
    return arr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45

//9th question
function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum; 
}
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3

//10th question
function countOccurrences(str) {
    // Your logic here
    let occurrences = {};

    for (let char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    return occurrences;

}
console.log(countOccurrences("hello")); // Expected output: { h: 1, e: 1, l: 2, o: 1 }

// Question - 11
function flattenArray(arr) {
    // Your logic here
    arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Expected output: [1, 2, 3, 4, 5, 6]

// Question - 15
function arrayIntersection(arr1, arr2) {
    // Your logic here
    return arr1.filter(num => arr2.includes(num));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]

// Question - 17
function mergeSortedArrays(arr1, arr2) {
    // Your logic here
    return arr1.concat(arr2).sort((a,b) => a-b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected output: [1, 2, 3, 4, 5, 6]

// Question - 20
function firstNonRepeatingChar(str) {
    // Your logic here
    for (let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    } 
    return null;
}
console.log(firstNonRepeatingChar("aabbcce")); // Expected output: "e"


//output based questions
//1st question
/*
122
32
02
112
NaN2
NaN

2nd question
false

3rd question
456

//4th question
undefined

*/

//5th question
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(sum(2)(3)(4));

//6th question
function delayExecution(func, delay) {
    const start = Date.now(); 
    const end = start + delay; 
    while (Date.now() < end);

    
    func();
}

delayExecution(() => {
    console.log("Executed after delay!");
}, 2000);

//7th question
Array.prototype.customMap = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const result = [];

    
    for (let i = 0; i < this.length; i++) {
       
        if (this.hasOwnProperty(i)) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};


const arr = [1, 2, 3, 4];
const doubled = arr.customMap(num => num * 2);
console.log(doubled);

//8th question
//number

//10th question
//undefined 
//5








