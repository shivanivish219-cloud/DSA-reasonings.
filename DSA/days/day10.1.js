/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
    i: true,
  },
};

const findPath = (object, path) => {
  // write logic here
  const keys = path.split(".");
  let traversing = { ...object };

  for (let item of keys) {
    // console.log("Item: ", item);
// for (let i=0; i<item.lenght; i++) {
    if (traversing.hasOwnProperty(item)) {
      //   console.log("traversing Before: ", traversing, { item });
      traversing = traversing[item];
      //   console.log("traversing After: ", traversing, { item });
    } else {
      return "Not available";
    }
  }

  return traversing;
};

console.log(findPath(obj, "a.b.c.k")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // not available
console.log(findPath(obj, "a.c")); // not available
console.log(findPath(obj, "a.b.c.d")); // not available
console.log(findPath(obj, "a.b.c.d.e")); // not available
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //not available
console.log(findPath(obj, "a.k")); //null
console.log(findPath(obj, "a.i")); //true
// jump to the end for the solution
