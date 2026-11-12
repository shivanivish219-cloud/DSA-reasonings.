// question 01
// - To find longest word from a string using functions
// Input: "I love learning JavaScript programming";

// Output: "programming";

function longestWord(string) {
  let output = "";
  let word = string.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i] > output) {
      output = word[i];
    }
  }
  return output;
}

console.log(longestWord("I love learning JavaScript programming"));

// question 2
// To find a first pair from a number array whose sum is zero
// Input: [-5, 2, 4, 3, -2, 5]

// Output: [-5, 5]

function firstPair(array) {
  // // let sum = 0;
  // let pair= [];

  for (let i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
}

console.log(firstPair([-5, 2, 4, 3, -2, 5]));
