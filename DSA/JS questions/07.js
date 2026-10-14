// question 01
// Check if two strings are anagrams
// Description: Determine whether two strings contain the same characters in the same frequency.
// Input: "listen", "silent"
// Output: true

// const input = "listen";
// const output = "silent";

// const result1 = input.split("").sort().join("");
// const result2 = output.split("").sort().join("");

// if (result1 === result2) {
//   console.log("its anagram");
// } else {
//   console.log("its not an anagram");
// }

// solution No 2
const input = "listen";
const output = "silent";

let isAnagram = true;
if (input.length !== output.length) {
  isAnagram = false;
}

for (let i = 0; i < input.length; i++) {
  let found = false;
  for (let j = 0; j < output.length; j++) {
    if (input[i] === output[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    isAnagram = false;
    break;
  }
}
if (isAnagram) {
  console.log("its anagram");
} else {
  console.log("its not an anagram");
}

// question 02
// Reverse a string with individual words reversed
// Description: Reverse the entire string including characters of each word.
// Input: "Hello World"
// Output: "dlroW olleH"

const inputStr = "Hello World";
// const outputStr = "dlroW olleH";

const outputStr = inputStr
  .split(" ")
  .reverse()
  .map((words) => words.split("").reverse().join(""))
  .join(" ");

console.log("outputStr:", outputStr);

// solution no 02

const inputStrr = "Hello World";
let result = "";

for (let i = inputStrr.length - 1; i >= 0; i--) {
  result = result + inputStrr[i];
}

console.log(result);
//   question03

// Find factorial of a number
// Description: Calculate the factorial of a given non-negative integer.
// Input: 5
// Output: 120

const inputNum = 5;
// const outputNum = 1;
let outputNum = 1;

for (let i = 1; i <= inputNum; i++) {
  outputNum = outputNum * i;
}

console.log(outputNum);

// question4

// Check if two strings are anagrams
// Description: Determine whether two strings contain the same characters in the same frequency.
// Input: "listen", "silent"
// Output: true

// question 05

// const inputStr = "Hello World";
// /const outputStr = "dlroW olleH";

const string = "Hello World";

let outputString = "";

for (let i = string.length - 1; i >= 0; i--) {
  outputString = outputString + string[i];
}

console.log(outputString);

// question 06
// const inputStr = "Hello World";
// /const outputStr = "olleH dlroW";

const inputStr1 = "Hello World";

const outputStr1 = inputStr1.split(" ");

let final = "";

for (let i = 0; i < outputStr1.length; i++) {
  // let result = false;

  for (let j = outputStr1[i].length - 1; j >= 0; j--) {
    final = final + outputStr1[i][j];
    // result = true;
  }
  final = final + " ";
}
console.log(final);
