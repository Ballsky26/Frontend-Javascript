// For Loop
// const n = 5;
// for (i = 1; i <= 5; i++) {
//   console.log("Hello World Ke - ", i);
// }

// for (i = 0; i < 10; i++) {
//   console.log("Anjay");
// }

// While Loop
// let i = 0;
// while (i < 5) {
//   console.log("Ini adalah while loop ke ", i);
//   i++;
// }

// let b = 3;
// while (b) {
//   console.log(b);
//   b--;
// }

// Do While
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// let result = 0;
// let i = 0;
// do {
//   i++;
//   result = result + i;
// } while (i < 5);
// console.log("ini adalah hasil ", result);

// Continue Statement
// for (let i = 0; i < 15; i++) {
// Jika true, lewati sisa kode dan lanjut ke loop berikutnya
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// For Of
// Array
// const numbers = [100, 200, 300];
// for (const number of numbers) {
//   console.log(number);
// }
// String
const huruf = "Ballsky";
for (const characters of huruf) {
  console.log(characters);
}

// Set
const list = new Set([1, 2, 3]);
for (const item of list) {
  console.log(item);
}

// Map
const keyValPairs1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const pair of keyValPairs1) {
  console.log(pair);
}

// Destructuring Assignment
const keyValPairs = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const [key, value] of keyValPairs) {
  console.log(`key = ${key}, value = ${value}`);
}
