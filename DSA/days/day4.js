// Input - [1,4,6,10,3,10]

// Find the first and second and third largest no in the array



    const input =  [1, 4, 6, 10, 3, 10];

let maxNo = input[0]; // 1

/**
 * Step 1 - Iterate the array (Loop chalao array par)
 * Step 2 - Find the largest no through comparision
 */

for (let i = 1; i < input.length; i++) {
  // Get the current value
  const currVal = input[i]; // 1,2,3,4,5
//   console.log("CurrVal: ", currVal, "i:", i);

  if (currVal > maxNo) {
    maxNo = currVal;
  }
}

console.log("MaxNo: ", maxNo);


const input2 =  [1, 4, 6, 10, 3, 10];

 let maxNo2 = input2[0];//1
let maxnum2 = "";

for (let i = 1; i<input.length; i++){ 
    const currVal = input[i]; //4
    if(currVal > maxNo){

       maxnum2 = maxNo; //1
       maxNo = currVal ; //4
    }

  }
console.log({maxNo, maxnum2});



const input3 =  [1, 4, 6, 10,5, 3, 10];

let maxNo3 = input3[0];//1
let maxnum2 = "x";
let maxnum3 = "";

for(let i = 1; i<input3.length; i++){
  const currVal = input3[i]; //4
   
  if(currVal > maxNo3){
    maxnum3 = maxnum2
maxnum2 = maxNo3
maxNo3 = currVal
  }
}

console.log(maxNo3, maxnum3);