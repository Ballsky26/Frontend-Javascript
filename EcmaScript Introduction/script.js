// Arrow Function (Argument)
// const increment = (x) => x + 1;
// console.log(x);

// Arrow Function (Tanpa Argument)
// const something = () => console.log("Testing");
// something();

// Satu Argument
// const something = (a) => console.log(a * a);
// something(3);

// Lebih Satu Argument
// const something = (a, b, c) => console.log(a + b + c);
// something(3, 2, 1);

// Multi line Argument
// const cekUmur = (n) => {
//   if (n < 18) {
//     return false;
//   }
//   return true;
// };
// console.log(cekUmur(23));

// Spread Syntax
// let array = [3, 4];
// const array2 = [1, 2, ...array];
// console.log(array2);

// Penggunaan pada argument
// function tambahTigaAngka(a, b, c) {
//   return a + b + c;
// }
// const tigaAngka = [2, 1, 2];
// console.log(tambahTigaAngka(...tigaAngka));

// Penggunaan pada object
// const objSatu = {
//   firstName: "Anjay",
//   lastName: "Togaru",
// };
// const objDua = {
//   age: 23,
// };
// const objTiga = { ...objSatu, objDua };
// console.log(objTiga);

// For Of Loop
// pada array
// const numbers = [1, 2, 3];
// console.log(numbers);
// for (const number of numbers) {
//   console.log(number);
// }

// Pada string
// const strings = "a,b,c";
// for (const string of strings) {
//   console.log(string);
// }

// For In Loop
const obj1 = {
  name: "anjay",
  age: 23,
};
for (const key in obj1) {
  console.log(key);
}
