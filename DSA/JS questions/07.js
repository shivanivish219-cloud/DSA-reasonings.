// question 01
// Check if two strings are anagrams
// Description: Determine whether two strings contain the same characters in the same frequency.
// Input: "listen", "silent"
// Output: true

const input = "listen";
const output = "silent";

const result1 = input.split("").sort().join("");
const result2 = output.split("").sort().join("");

if (result1 === result2) {
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
