// 🧩 Problem: Delete Value at Given Path

// Write a function deletePath that takes:
// 1. An object
// 2. A string path with keys separated by dots

// The function should:
// - Delete the value at the given path if it exists
// - Return true if deletion was successful
// - Return false if the path does not exist

// Example:

const obj = {
  a: {
    b: {
      c: 12,
      d: 20,
    },
  },
};

const deletePath = (obj, path) => {
  const keys = path.split(".");
  let output = { ...obj };
  // your code here

  for (let i = 0; i< keys.length; i++) {
    if (output.hasOwnProperty(keys)) {
      output = output[keys];
    } else if (keys in output) {
      delete output[keys];
    } else {
      return "not allowed";
    }
  }
  return output;
};

console.log(deletePath(obj, "a.b.c")); // → true
// After deletion, obj becomes:
// { a: { b: { d: 20 } } }

console.log(deletePath(obj, "a.b.x")); //→ false
console.log(deletePath(obj, "a.x.c")); //→ false
console.log(deletePath(obj, "a.b.c.d")); //→ false




const obj = {
  a: {
    b: {
      c: 12,
      d: 20,
    },
  },
};

const deletePath = (obj, path) => {
  const keys = path.split(".");
  let output = structuredClone(obj);
  let res = output;

  // your code here

  for (let i = 0; i< keys.length-1; i++) {
  const currKey = keys[i]; // "a", "b"
    if (res.hasOwnProperty(currKey)) {
      res = res[currKey]; // {b:{...}}, {c,d}
    }else {
      return "not allowed";
    }
  }
  
  const lastKey = keys[keys.length - 1];
  if(res.hasOwnProperty(lastKey)){
  delete res[lastKey];
  }else{
  return 'Not available'
  }
  
  
  return output;
};
