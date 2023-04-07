// Callback
// function greeting(name) {
//   // Deklarasi callback
//   alert("Hello " + name);
// }
// function processUserInput(callback) {
//   // Fungsi pemanggil
//   var name = prompt("Please enter your name");
//   callback(name);
// }
// // Melemparkan callback sebagai argumen
// processUserInput(greeting);

// Atau
// function processUserInput(callback) {
//   // Fungsi pemanggil
//   var name = prompt("Please enter your name");
//   callback(name);
// }

// // Deklarasi callback di dalam argumen
// processUserInput(function (name) {
//   alert("Hello " + name);
// });

// Menggunakan Arrow Function
// const greeting = (name) => {
//   // Deklarasi callback
//   alert("Hello " + name);
// };
// const processUserInput = (callback) => {
//   // Fungsi pemanggil
//   var name = prompt("Please enter your name");
//   callback(name);
// };

// Atau
// const processUserInput = (callback) => {
//   // Fungsi pemanggil
//   var name = prompt("Please enter your name");
//   callback(name);
// };
// // Melemparkan callback sebagai argumen
// processUserInput((name) => {
//   alert("Hello " + name);
// });

// Function Customization
// function compare(a,b){
//     if(a is less than b by some ordering criterion) {
//         return - 1;
//     }
//     if (a is greater than b by the ordering criterion){
//         return 1
//     }
//     // a must be equal to b
//     return 0;
// }
// function compareNumbers(a, b) {
//   return a - b;
// jika a > b : a - b akan mengembalikan nilai positif (>0)
// jika a < b : a - b akan mengembalikan nilai negatif (<0)
// jika a = b : a - b akan mengembalikan nilai 0
// }

// function compareNumbers(a, b) {
//   return a - b;
// }
// var list = [1, 30, 4, 21, 100000];
// list.sort(compareNumbers); // akan mengembalikan [1, 4, 21, 30, 100000]

// var list = [1, 30, 4, 21, 100000];
// list.sort();

// Menggunakan Arrow Function
// var list = [1, 30, 4, 21, 100000];
// list.sort((a, b) => {
//   return a - b;
// }); // akan mengembalikan [1, 4, 21, 30, 100000]

// One-liner arrow function
var list = [1, 30, 4, 21, 100000];
list.sort((a, b) => {
  a - b;
});
