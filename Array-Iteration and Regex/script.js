// forEach
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//   console.log(value);
// }

// map
// const numbers = [45, 4, 9, 16, 25];
// const numbers2 = numbers.map(myFunction);
// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers);

// Filter
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18);

// every & some
// every memeriksa apakah semua nilai array lulus tes jika salah satu aja yg memenuhi maka akan false
// some memeriksa apakah beberapa nilai dari lulus tes dan akan mengembalikan fungsi true
// const numbers = [45, 4, 9, 16, 25];
// const someover18 = numbers.some(myFunction);
// let allUnder18 = numbers.every(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allUnder18);
// console.log(someover18);

// indexof : mengembalikan pada posisi berapa
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// console.log(fruits);

// find mengembalikan nilai elemen pertama yg lolos pengujian
// const numbers = [114, 13, 196, 25, 29];
// let first = numbers.find(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(numbers);

// REGEX (Regular Expression)

// Modifier
// let text = "visit mySkill";
// let a = text.search("mySkill");
// let a = text.search("myskill");
// let a = text.search(/myskill/i);
// let a = text.search(/myskill/g);
// let a = text.search(/myskill/m);
// console.log(a);

// Pattern : jika huruf yg dicari maka akan true
// let patern = /i/;
// let patern = /[a-zA-Z]/;
// let patern = /1/;
let patern = /(?=,*[0-9])([a-zA-Z0-9!@#$]){6,20}/g;
// let text = "visit mySkill";
let text = "Password123#";
console.log(pattern.test(text));
