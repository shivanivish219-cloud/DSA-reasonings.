// Input - [1,2,2,2,2,3,4,5,6,7,5,3,5]
// K = 2
// Output - 2 -> 4

// K = 1
// Output - 1-> 1

// K = 3
// Output - 23-> 2

const input = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 5, 3, 5];
let count = 0;
let k = 3;

// const findOccurance = input.find(
//     findOccurance(arr, k) === input() &&

// )

for (let i = 0; i < input.length; i++) {
  if (k === input[i]) {
    count++;
  }
}
console.log(count);

// question 02
// Check if a string is an Anagram

AnInput = "listen";
output = "silent";

const input2 = AnInput.split("").sort().join("");

const output2 = output.split("").sort().join("");

if (input2 === output2) {
  console.log("anagram");
} else {
  console.log("not anagram");
}

console.log(output);

// question03
// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing
//  input = "I am learning JavaScript";
//  output = "JavaScript";

const inputStr = "I am learning JavaScript";

const word = inputStr.split(" ");

let longestStr = "";

for (const element of word) {
  if (element.length > longestStr.length) {
    longestStr = element;
  }
}

console.log(longestStr);

// question04
// Remove Duplicate characters from array of element using filter
// input = [1, 2, 2, 3, 3, 3, 4];
// output = [1,2,3,4]

const arr = [1, 2, 2, 3, 3, 3, 4];

const duplicateArr = [];

// const duplicateArr = arr.filter((element, index) => {
//   return arr.indexOf(element) === index;
// });

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === i) {
    duplicateArr.push(arr[i]);
  }
}

console.log(duplicateArr);

// question 05
// My name is Ankit Jain

// shortest = my , is

const strr = "My name is a Ankit Jain";

const words = strr.split(" ");
let shortestStrr = words[0];

for (let elements of words) {
  if (elements.length < shortestStrr.length) {
    shortestStrr = elements;
  }
}

console.log(shortestStrr);

// question 06
// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
// input = "121"
// output =  "121"

const string = "121";

const palindorme = string.split("").reverse().join("");

{
  if (string === palindorme) {
    console.log("palindorme");
  } else {
    console.log("notpalindrome");
  }
}
