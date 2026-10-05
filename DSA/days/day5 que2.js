// question...

// const findLargestNo = (arr, k) => {
// // Write logic here
// }

// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220,
//  57, 13, 89, 301, 76, 45, 199, 8, 64, 150,
//  23, 91, 7, 312, 54, 28, 140, 67, 5, 88,
//  210, 33, 72, 16, 99, 260]

// const result = findLargestNo(input, 11);

// solution

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(
  removeDuplicates([
    1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220, 57, 13, 89, 301, 76, 45,
    199, 8, 64, 150, 23, 91, 7, 312, 54, 28, 140, 67, 5, 88, 210, 33, 72, 16,
    99, 260,
  ]),
);

// 1, 4, 6, 10, 3, 11, 2, 222, 220, 57, 13, 89, 301, 76, 45, 199, 8, 64, 150, 23, 91, 7, 312, 54, 28, 140, 67, 5, 88, 210, 33, 72, 16, 99, 260

const arr = [
  1, 4, 6, 10, 3, 11, 2, 222, 220, 57, 13, 89, 301, 76, 45, 199, 8, 64, 150, 23,
  91, 7, 312, 54, 28, 140, 67, 5, 88, 210, 33, 72, 16, 99, 260,
];

const k = 11;
function klargest(arr, k) {
  let sorted = [...arr].sort((a, b) => b - a); //sort descending
  return arr[k - 1];
}

console.log(`${k}th largest =`, klargest(arr, k));

//DRY RUN...
//4-1=3 [4]
//6-4=2[6]
//10-6=4[10]
//3-10= 7[10]
