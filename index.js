var arr = [10, 1000, 1, 59.1, 120, 4, -1, 30];

// console.log(Math.max(...data));
// Output 1000
// console.log(Math.min(...data));
// Output -1

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= max) {
    max = arr[i];
    // console.log("Max value = ", max);
  }
}
console.log("Max value = ", max);

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    // console.log("Max value = ", max);
  }
}
console.log("Min value = ", min);
