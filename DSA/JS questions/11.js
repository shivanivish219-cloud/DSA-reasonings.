// Count character frequency in a string
// Input: "aabbbc"

// Output:

// { a: 2, b: 3, c: 1 }

function count(input) {
  let output = {};

  for (char of input) {
    console.log(char, input[char]);

    if (char in output) {
      output[char]++;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(count("aabbbc"));

// question 2
// Count how many times a character appears in a string "javascript".

// Character: "a"

// Output: 2

function appears(string, target) {
  let output = 0;

  for (let ch of string) {
    if (ch === target) {
      output++;
    }
  }
  return output;
}
console.log(appears("javascript", "a"));

// question3
// Find the smallest number in an array.
// array = [12, 5, 8, 2, 19];
// result = 2;

function smallest(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}
console.log(smallest([12, 5, 8, 2, 19]));

// question 4
// Count positive numbers in an array.
// array = [-2, 5, 0, 8, -4, 3];
// output = 3;

function positive(array) {
  let num = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      num++;
    }
  }
  return num;
}
console.log(positive([-2, 5, 0, 8, -4, 3]));

// question 5
// Sum of digits
// 1234
// 10

function sum(input) {
  let result = 0;
  let str = String(input);

  for (let i = 0; i < str.length; i++) {
    result = result + Number(str[i]);
  }
  return result;
}

console.log(sum(1234));

// question 6

// Count digits in a number
// output = 12345
// input = 5;

function DigitsCount(input) {
  let num = 0;
  let str = String(input);

  for (let i = 0; i < str.length; i++) {
    num++;
  }

  return num;
}

console.log(DigitsCount(12345));

// question 7
// Find sum of digits
// 5678
// 26

function sum(input) {
  let result = 0;
  let arr = String(input);

  for (let i = 0; i < arr.length; i++) {
    result = result + Number(arr[i]);
  }
  return result;
}

console.log(sum(5678));

// question 8
// Count even numbers
// [2,5,8,3,10]
// 3

function evenCount(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result++;
    }
  }
  return result;
}

console.log(evenCount([2, 5, 8, 3, 10]));

// question 9
// Find largest number	[4,9,2,15,6]	15

function LargestNum(array) {
  let res = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > res) {
      res = array[i];
    }
  }
  return res;
}

console.log(LargestNum([4, 9, 2, 15, 6]));

// question 10
// Count negative numbers	[-2,5,-8,3,-1]	3

function negativeNum(array) {
  let num = 0;

  for (let item of array) {
    if (item < 0) {
      num++;
    }

    // for (let i = 0; i < array.length; i++) {
    //   if (array[i] < num) {
    //     num++;
    //   }
  }
  return num;
}
console.log(negativeNum([-2, 5, -8, 3, -1]));

// question 11
// 	Reverse a string	"hello"	"olleh"

function reverseStr(input) {
  let result = "";
  // let strr = String(input);

  for (let i = input.length - 1; i >= 0; i--) {
    result = result + input[i];
  }

  return result;
}

console.log(reverseStr("hello"));
