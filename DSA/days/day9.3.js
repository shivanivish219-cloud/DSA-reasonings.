const input = "ankit jain";
const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

const result = { consonentCount: 0 };
for (let i = 0; i < input.length; i++) {
  const char = input[i];

  //   if (char === " ") {
  //     continue;

  //   }
  if (char !== " " && !vowels[char]) {
    result.consonentCount++;
  }
}
console.log(result);




// 2 option

let input = "Ankit jain";

let count = 0;

for (let j=0; j< input.length; j++) {

    let char = input[j];

    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
char ==="u" ||   

) { count++;

}}

console.log({vowelsCount: count });