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

// question 3

// Entire string reverse
// "hello world" → "dlrow olleh"

function reverse(string) {
  let output = "";
  // let str = "";

  for (let i = string.length - 1; i >= 0; i--) {
    output = output + string[i];
  }

  return output;
}

console.log(reverse("hello world"));

// question 4
// Find the missing number from an array

// Input: [1, 2, 4, 5, 6]

function findMissingNumber(arr) {
  const n = arr.length + 1; // array is 1..n minus one number
  const expected = (n * (n + 1)) / 2;
  const actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3

// question 5
// Find first duplicate element from an array
// Input: [2, 5, 1, 3, 5, 2, 4]

// Output: 5

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return nums.length;
};

console.log(duplicateElem([2, 5, 1, 3, 5, 2, 4]));

// question 6
// Find the largest number	[2, 8, 4, 10] → 10

function largestNum(array) {
  let number = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      number = array[i];
    }
  }
  return number;
}

console.log(largestNum([2, 8, 4, 10]));

// question 7
// Reverse a string	"hello" → "olleh"

function stringReverse(string) {
  let str = "";

  for (let i = string.length - 1; i >= 0; i--) {
    str = str + string[i];
  }

  return str;
}

console.log(stringReverse("hello"));

// question 8
// Count vowels	`"javascript" → 3

function prepVowels(string) {
  let count = "";
  let vowels = "aeiou";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}

console.log(prepVowels("javascript"));

CompressionStreaml;
