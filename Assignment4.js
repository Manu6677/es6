// const arr = [1, 10, 5, 9, 3].sort();
// const sortedArr = arr.sort();
// console.log(arr);

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(numbers);
