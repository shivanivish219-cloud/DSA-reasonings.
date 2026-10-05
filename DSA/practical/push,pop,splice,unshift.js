// input - [1,2,3,70,1,2,10]
// output [90,1,2,3,1,2,10,70]

// Index remove & add to the end
// Then add 90 to the start

// Index 3 remove & add to the end
// Then add 90 to the start

const input = [1, 2, 3, 70, 1, 2, 10];

input.unshift(90); //90,1,2,3,70,1,2,10

const splicedElem = input.splice(3, 1); //90,1,2,70,1,2,10

const pushElem = input.push(3); //90, 1, 2, 70, 1, 2, 10, 3
