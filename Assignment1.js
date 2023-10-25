/**
1) Create an array with 10 values, write a JavaScript function. Use ForEach to
convert the array into json and save it in another variable
 */

let arr = ["Paris", "Madrid", "Rome", "London"];
let arr1 = JSON.stringify(arr);
console.log(arr1);
console.log(typeof arr1);

let arro = [1, 2, 3, 4, 5];
let arr2 = [];
for (let value of arro) {
  arr2.push(JSON.stringify(value));
}
console.log(arr2);
console.log(typeof arr2);
