//  Write a function to reduce an Array of characters of length 5 to string.
const arr = ["a", "b", "c", "d", "e"];

const arrReduce = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, []);

console.log(arrReduce);
console.log(typeof arrReduce);
