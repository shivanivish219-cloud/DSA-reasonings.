// question 1
// Remove Duplicate characters from array of element and find the count of an elements using set

// Array =  [1, 2, 2, 3, 4, 4, 5];
// Unique elements: [1, 2, 3, 4, 5]
// Count: 5

const array = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
let count = 0;

for (let i = 0; i < array.length; i++) {
  let found = false;

  for (let j = 0; j < count; j++) {
    if (array[i] === unique[j]) {
      found = true;
      break;
    }
  }
  if (found === false) {
    unique[count] = array[i];
    count++;
  }
}
console.log(unique);
console.log(count);

// question 2

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let palin = "";
  let str = String(x);

  for (let i = str.length - 1; i >= 0; i--) {
    palin = palin + str[i];
  }

  return palin === str;
};

// question 3

// - Convert an Array into an object
// - const input = ["John", "Peter", "Sally", "Jane"];\
//   \
//   // Output\
//   { 0: "John", 1: "Peter", 2: "Sally", 3: "Jane" }

const input = ["John", "Peter", "Sally", "Jane"];
let object = {};

for (let i = 0; i < input.length; i++) {
  object[i] = input[i];
}

console.log(object);

// function se

function convertObject(input) {
  let object = {};

  for (let i = 0; i < input.length; i++) {
    object[i] = input[i];
  }
  return object;
}
const input = ["Ravi", "Payal"];
console.log(convertObject(input));

// question 4

// To find the maximum repetation of the character in a string
// const input = "aaaabbaaccccccccccccccccccde";

// // Output
// {
//     character: 'c',
//     count: 18
// }

const inputt = "aaaabbaaccccccccccccccccccde";

let maxRep = {};
let countt = 0;

for (let i = 0; i < inputt.length; i++) {
  if (maxRep === inputt[i]) {
    countt++;
  }
}

console.log(maxRep);
console.log(countt);

// question5

// To find all the missing numbers from an array
// const input = [1, 2, 6];

// // Output
// [3, 4, 5];

const arr = [1, 2, 6];
let missNum = [];

for (let i = 0; i < 6; i++) {
  let found = false;
  for (let j = 0; j < arr.length; j++) {
    if (i === arr[j]) {
      found = true;
      break;
    }
  }
  if (found === false) {
    missNum.push(i);
  }
}

console.log(missNum);

// builtin  method

const arr = [1, 2, 6];
let missNum = [];

for (let i = 0; i < 6; i++) {
  if (!arr.includes(i)) {
    missNum.push(i);
  }
}

console.log(missNum);

// question6
// Print of all numbers from start to end given number

const printSeries = (1, 4);

let no = 0;

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

printSeries(1, 4);
