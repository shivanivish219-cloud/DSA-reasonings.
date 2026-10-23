// question 1
// To find a first pair from a number array whose sum is zero using indexing
// arr = [-5, -2, 1, 2, 4, 5];
// output = [-5, 5];

const arr = [-5, -2, 1, 2, 4, 5];
let output = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
      (arr[i], arr[j]);
    }
  }
}

console.log(output);

// question 2
// My name is Ankit Jain
// Unique Consonant = 7;
// Occurence of Consonant = {
//     m : 2,
//     y : 1,
//     n :3,
//     s :1,
//     k:1,
//     t: 1,
//     j: 1,
//     n: 1
// };

const str = "My name is Ankit Jain";
let unique = 0;
const Consonant = {};
// const value  = {
//     m: 1,
//     y:1,
//     n: 1,
//     s: 1,
//     k: 1,
//     t: 1,
//     j:1,
//     n: 1
// };

for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();

  if (char >= "a" && char <= "z" && !"aeiou".includes(char)) {
    if (Object.hasOwn(Consonant, char)) {
      Consonant[char]++;
    } else {
      Consonant[char] = 1;
      unique++;
    }
  }
}
console.log("Unique Consonants:", unique);
console.log("Occurrence:", Consonant);

// question 3
// Ek array nums diya hai. Agar koi bhi value 2 ya zyada baar aati hai to true return karo, warna false.
// [1, 2, 3, 1] → true

const num = [1, 2, 3, 1];
let res = [];

for (let i = 0; i < num.length; i++) {
  if (res.includes(num[i])) {
    console.log("true");
  } else {
    console.log("false");
    res.push(num[i]);
  }
}

console.log(res);

// question4

// Given an array, find the largest number without using built-in methods like Math.max() or sort().
// largest =  [12, 5, 28, 7, 19];
// outcome = 28;

const largest = [12, 5, 28, 7, 19];
let outcome = largest[0];

for (let i = 0; i < largest.length; i++) {
  if (largest[i] > outcome) {
    outcome = largest[i];
  }
}

console.log(outcome);

// question5
// Reverse a string

// output = "hello"
// input = "olleh";

const strr = "hello";
let result = "";

// const rev = strr.split();
for (let i = strr.length - 1; i >= 0; i--) {
  result = result + strr[i];
}

console.log(result);

// question 06
// Check palindrome
// input =  "madam";
// true or false;

const palin = "madam";
let palin2 = "";

for (let i = palin2.length - 1; i >= 0; i--) {
  palin2 = palin2 + palin[i];
}

if (palin === palin2) {
  console.log("true");
} else {
  console.log("false");
}

// question 07
// Find all unique two no whose sum equals a given value
// Description: Return all two no where the sum of three numbers equals the target value.

// nums = [-1, 0, 1, 2, -1, -4, 3, 5, -2]
// target = 0
// Output (all unique pairs whose sum equals 0):
// Output:
// [[-1, 1], [-2, 2]]

const nums = [-1, 0, 1, 2, -1, -4, 3, 5, -2];
const target = 0;

const findTwoNoPair = (nos, ourTarget) => {
  const pairs = [];

  for (let i = 0; i < nos.length; i++) {
    for (let j = i + 1; j < nos.length; j++) {
      if (nos[i] !== 0 && nos[j] !== 0 && nos[i] + nos[j] === ourTarget) {
        pairs.push([nos[i], nos[j]]);
      }
    }
  }

  return pairs;
};

const results = findTwoNoPair(nums, target);
console.log(results);
