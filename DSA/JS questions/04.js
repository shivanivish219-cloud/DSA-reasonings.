// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method
// output = "anna"
// input = "anna"

const input = "anna";

const output = input.split("").reverse().join("");

{
  if (output === input) {
    console.log("palindrome");
  } else {
    console.log("not a palindrome");
  }
}

// que 02
// To find longest word from a string using functions
// input = "I am learning JavaScript"
// output = "JavaScript"

const str = "I am learning JavaScript";

function longestStr(string) {
  const words = string.split(" ");

  let result = "";

  for (let word of words) {
    if (word.length > result.length) {
      result = word;
    }
  }

  return result;
}

console.log(longestStr(str));

// question 03
// To find a first pair from a number array whose sum is zero
// arr = [-5, -2, 0, 2, 4, 6];
// output = -2 + 2 = 0;

const arr = [-5, -2, 0, 2, 4, 6];

// and= -2, 2

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
      console.log(arr[i], arr[j]);
    }
  }
}
// console.log(arr);

const arr = [-5, -2, 0, 2, 4, 6];

// and= -2, 2

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 6) {
      console.log(arr[i], arr[j]);
    }
  }
}

// question04

// Sorting of a string/characters

// output = "shiekoevhusoabfobaeoemsorhffvudhhhhownsk";
// input = "";

const char = "shiekoevhusoabfobaeoemsorhffvudhhhhownsk";
// const inputt = "";
const sortChar = char.split("").sort().join("");

console.log(sortChar);

// Sorting of a number array with or without inbuilt methods
// output = "shiekoevhusoabfobaeoemsorhffncjshiqpdurwdvudhhhhownsk";
// input = "";

const char2 = "shiekoevhusoabfobaeoemsorhffvudhhhhownsk";
const sortChar2 = char2.split("");

for (let i = 0; i < sortChar2.length; i++) {
  for (let j = i + 1; j < sortChar2.length; j++) {
    if (sortChar2[i] > sortChar2[j]) {
      let temp = sortChar2[i];
      sortChar2[i] = sortChar2[j];
      sortChar2[j] = temp;
    }
  }
}
// char2.join("");

console.log(sortChar2.join(""));
