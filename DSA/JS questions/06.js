// question 1
// - Find the missing number from an array

// arr = [1, 2, 3, 5, 6];
// num = 4;

const arr = [1, 2, 3, 5, 6];

let num = 0;

for (let i = 0; i <= 6; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}

// question 2

// - To find unique values from 2 arrays and keep into one array. i.e. Union.

// arr1 = [1, 2, 3, 4];
// arr2 = [3, 4, 5, 6];

// output = [1, 2, 3, 4, 5, 6];

const arr1 = [1, 2, 3, 4];

const arr2 = [3, 4, 5, 6];

let unique = [];

for (let i = 0; i < arr1.length; i++) {
  let found = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr1[i] === unique[j]) {
      found = true;
    }
  }

  if (!found) {
    unique.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++) {
  let found = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr2[i] === unique[j]) {
      found = true;
    }
  }
  if (!found) {
    unique.push(arr2[i]);
  }
}

console.log("unique:", unique);

// question03
// Find first duplicate element from an array
// array =[2, 5, 1, 3, 5, 2];
// result = [];

const array = [2, 5, 1, 3, 5, 2];
let duplicate = [];

for (let i = 0; i < array.length; i++) {
  let miss = false;
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      miss = true;
      break;
    }
  }
  if (miss) {
    duplicate = array[i];
    break;
  }
}

console.log(duplicate);
