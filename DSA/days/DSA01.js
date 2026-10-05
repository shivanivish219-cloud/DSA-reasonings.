// Find the longest common prefix from an array of strings
Input: ["flower", "flow", "flight"];

Output: "fl";

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Remove duplicate elements from the array

Input: [1, 2, 2, 3, 4, 4, 4, 4, 1, 2, 3, 4, 1, 2, 3, 4, 2, 1, 2, 3, 4];

Output: [1, 2, 3, 4];

const input = [1, 2, 2, 3, 4, 4, 4, 4, 1, 2, 3, 4, 1, 2, 3, 4, 2, 1, 2, 3, 4];

let output = [];

for (let i = 0; i < input.length; i++) {
  if (!output.includes(input[i])) {
    output.push(input[i]);
  }
}

console.log(output);

// next problem

input - AAAABBBCCDAA;
output - "4A3B2C1D2A";

const input = "AAAABBBCCDAA";
// let newArr = 1;
const output = input.split("").reduce((result, char) => {
  const last = result[result.length - 1];

  if (last && last.char === char) {
    last.count++;
  } else {
    result.push({
      char: char,
      count: 1,
    });
  }
  return result;
}, []);

const newArr = output.map((item) => item.count + item.char).join("");

console.log(newArr);

// next question
printSeries(1, 4);

// Output
1;
2;
3;
4;

let output = [];

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

// next question
// Remove Duplicate characters from String
Input:  "programming"
Output: "progamin"


const input = "programming";
let output = "";

for (let char of input){
    if(!output.includes(char)){
        output += char;
    }
}

console.log(output);


// next question
// - Remove Duplicate characters from array of element using filter
input = [1,2,3,4,5,3,4,3,3,6,7,100,7,100,50]

output = [1, 2, 3, 4, 5, 6, 7, 100, 50]


const input = [1,2,3,4,5,3,4,3,3,6,7,100,7,100,50];

const output = input.filter((element, index)=>{
    return input.indexOf(element)=== index;
})
console.log(output);



// next question
// To find longest word from a string using functions
Input:
"I am learning JavaScript programming"

Output:
"programming"


const input = "I am learning JavaScript programming";

 function findLongestWord(str){
    const words = str.split(" ");

    let longest = "";

    for (let i= 0; i<words.length; i++){
        if(words[i].length >longest.length){
            longest = words[i];
        }
    }
    return longest;
 }

console.log(findLongestWord(input));
