// question 1
// Remove Duplicate characters from array of element using filter
// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: [1, 2, 3, 4]

input = [1, 2, 2, 3, 3, 3, 4];

// for (let i= 0; i < input.length; i++){
const output = input.filter((element, index) => {
  return input.indexOf(element) === index;
});

console.log(output);
// Output: [1, 2, 3, 4]

// question 2
// Input: ['apple', 'banana', 'apple', 'cherry']
// Output: ['apple', 'banana', 'cherry']

input = ["apple", "banana", "apple", "cherry"];

const output2 = input.filter((element, index) => {
  return input.indexOf(element) === index;
});

console.log(output2);

// question 3
// String Reverse without Reversing Individual Words
// Input: "Hello World JavaScript"
// Output: "JavaScript World Hello"

input = "Hello World JavaScript";

const output3 = input.split(" ").reverse().join(" ");

console.log(output3);

// question 4
// String reverse with reversing of individual words
// Input:
// "Hello World JavaScript"
// Output:
// "tpircSavaJ dlroW olleH"

input = "Hello World JavaScript";

const output4 = input
  .split(" ")
  .reverse()
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(output4);

// question 5
// String reverse without using inbult function
// input = "Hello World"
// output = "dlroW olleH"

input = "Hello World";
output = "";

for (let i = 0; i < input.lenght; i++) {
  output = output + input[i];
}

console.log(output);

//  Input - Input: [1, 2, 2, 3, 3, 3]
// Output - count: { 1: 1, 2: 2, 3: 3 }

// FInd occurence of numbers

const input = [1, 2, 2, 3, 3, 3];

// const output5 = [...new Set(input)];

const count = {};

for (let element of input) {
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log("count:", count);

// question6
// find duplicate number
// input = [1, 2, 3, 4, 2, 5, 3];
// output = 2, 3

const input2 = [1, 2, 3, 4, 2, 5, 3];
const output6 = new Set();
const seen = new Set();

for (let i = 0; i < input.length; i++) {
  if (seen.has(input2[i])) {
    output6.add(input2[i]);
  } else {
    seen.add(input2[i]);
  }
}

console.log(output6);

// question 07
// Check whether two strings contain the same characters with the same frequency.

// input = "listen"
// output = "silent"

const strr1 = "listen";
const strr2 = "silent";

const strOutput1 = strr1.split("").sort().join("");
const strOutput2 = strr2.split("").sort().join("");

if (strOutput1 === strOutput2) {
  console.log("anagram");
} else {
  console.log("not anagram");
}

console.log("strr2");

// question 08
// Swapping of 2 numbers with third variable
// a = 10
// b = 20

let a = 10;
let b = 20;
let temp = a;

a = b;
b = temp;

console.log(a);
console.log(b);

// question09
// Swapping of 2 numbers without third variable
// p = 30
// q = 20

let p = 30;
let q = 20;

p = p + q; //10
q = p - q; //10
p = p - q; //50

console.log(p); //20
console.log(q); //30

// question 10
// Given an array and a target, find two elements whose sum equals the target.

// input = [2, 7, 11, 15]
// output = 9

const arr = [2, 7, 11, 15];
const target = 9;

for (let i = 0; i < arr.length; i++) {
  for (let j = 1 + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(arr[i], arr[j]);
    }
  }
}
console.log(target);

// question 11
// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

// 121

const inputt = "121";
const palindrome = inputt.split("").reverse().join("");

if (inputt === palindrome) {
  console.log("palindrome");
} else {
  console.log("not palindorme");
}
