// input - [1,5,10,4,22,345,3,1,2,5,6,7]

// output - {
//   1: 2,
//   5: 2,
//   10: 1,
//   4: 1,
//   22: 1,
//   345: 1,
//   3: 1,
//   2: 1,
//   6: 1,
//   7: 1
// }

const input = [1, 5, 10, 4, 22, 345, 3, 1, 2, 5, 6, 7];

const output = {};

for (let i = 0; i < input.length; i++) {
  const inputElem = input[i];

  if (output.hasOwnProperty(inputElem)) {
    output[inputElem]++;
  } else {
    output[inputElem] = 1;
  }
}
console.log(output);

// ankita

// {
// a:2,
// n:1,
// k:1,
// i:1,
// t:1
// }

const input1 = "ankita";
const result = {};

for (let i = 0; i < input1.length; i++) {
  const input1Elem = input1[i];
  if (result.hasOwnProperty(input1Elem)) {
    result[input1Elem]++;
  } else {
    result[input1Elem] = 1;
  }
}
console.log(result);
