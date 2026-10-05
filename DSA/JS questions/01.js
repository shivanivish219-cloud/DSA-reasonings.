// question 1

// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]
// Har number ko square karo

input = [1, 2, 3, 4, 5];

for (let i = 0; i < input.length; i++);
const output = input.map((i) => i * i);

console.log(output);

// question 2

// Input: [1, 2, 3, 4, 5, 6, 7, 8]
// Output: [2, 4, 6, 8]
// Sirf even numbers return karo

input = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < input.length; i++);
const output2 = input.filter((i) => i % 2 === 0);

console.log(output2);

// question 3
// Input: [10, 20, 30, 40, 50], start = 1, end = 4
// Output: [20, 30, 40]
// Index 1 se 4 tak ke elements nikalo

((input = [10, 20, 30, 40, 50]), (start = 1), (end = 4));

for (let i = 0; i < input.length; i++);
const output3 = input.splice(1, 4);

console.log(output3);

// question 4
// Input: [5, 12, 8, 130, 44]
// Output: 130
// Pehla number jo 100 se bada ho

input = [5, 12, 8, 130, 44];

for (let i = 0; i < input.length; i++);
const output4 = input.find((i) => i > 100);

console.log(output4);

// question 4
// Remove Duplicate characters from String
// Input: "programming"
// Output: "progamin"

input = "programming";

const str = input
  .split("")
  .filter((char, index, arr) => arr.indexOf(char) === index)
  .join("");

console.log(str);

// same question
Input: "aabbcc";
// Output: "abc"

const str2 = Input.split("")
  .filter((char, index, arr) => arr.indexOf(char) === index)
  .join("");

console.log(str2);

// question 5
// Remove Duplicate characters from array of element and find the count of an elements using set
// Input: [1, 2, 2, 3, 3, 3, 4]
// Output:
//   Unique: [1, 2, 3, 4]
//   Count: {1: 1, 2: 2, 3: 3, 4: 1}

const input = [1, 2, 2, 3, 3, 3, 4];

const output5 = [...new Set(input)];

const count = {};

for (let element of input) {
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log("output5:", output5);
console.log("count:", count);
