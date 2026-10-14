// Fibonacci Series (0,1,1,2,3,5,8,13....)

let first = 0;
let second = 1;

for (let i = 0; i < 10; i++) {
  let next = first + second;

  console.log(next);

  first = second;
  second = next;
}

// question 2

// Sorting of a string/characters
Input: "dcab";
output: "abcd";

const input = "dcab";
let char = input.split("");

for (let i = 0; i < char.length; i++) {
  for (let j = i + 1; j < char.length; j++) {
    if (char[i] > char[j]) {
      let temp = char[i];
      char[i] = char[j];
      char[j] = temp;
    }
  }
}

console.log(char.join(""));

// question 3

// To check if given number is prime or not

const num = 5;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("prime");
} else {
  console.log("not prime");
}

// question 4

// To find vowels and its count in a given string
// Input: "hello world"
// Vowels: e, o, o
// Count: 3

const value = "hello world ";

// const result = value.split(" ");
let count = 0;
let vowels = "";

let preVowels = "aioue";

for (let i = 0; i < value.length; i++) {
  if (preVowels.includes(value[i])) {
    vowels = vowels + value[i] + " ";
    count++;
  }
}

console.log(count);
console.log(vowels);

// question 09 )
// - To find the index of an element from an array
//  arr = [10, 20, 30, 40, 50];
//  target = 30;
//  output = 2;

const arr = [10, 20, 30, 40, 50];
const target = 30;

let output = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    output = i;
    break;
  }
}
console.log(output);

// question 10

// / Input - This is Ankit Jain from Morena
//  Output
// const vowels = {
//   a: 3,
//   e: 1,
//   i: 2,
//   o: 1,
//   u: 0
// };

const strr = "This is Ankit Jain from Morena";
let countt = 0;
let output2 = "";
const vowels = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

for (let i = 0; i < strr.length; i++) {
  if (Object.hasOwn(vowels, strr[i])) {
    output2 += strr[i];
    countt++;
  }
}

console.log({ output2, countt });
// {output2: 'iiiaiooea', countt: 9}
