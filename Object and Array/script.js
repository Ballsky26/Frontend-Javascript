// Object
// const person = {
//   name: "Ballsky",
//   age: 23,
//   isMarried: false,
// };

// let person = {
//   name: "Ballsky",
//   age: 23,
//   isMarried: false,
// };

// Menampilkan object menggunakan for
// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// Mengecek object
// console.log("age" in person);
// console.log("isMarried" in person);
// let cari = "age";
// console.log(cari in person);

// Bracket Notation
// console.log(person.name);
// console.log(person.age);
// console.log(person["name"]);
// console.log(person["age"]);

// Menambah dan menghapus properti pada object
// Menambah
// person.isMarried = false;

// Menghapus
// delete person.isMarried;
// console.log(person);

// Array
// let person = ["Ari", "Ballsky", "Miki", "Rasya"];
// Cek panjang
// console.log(person.length);

// Menambah Array sesuai tempat
// person[5] = "Eko";
// console.log(person);

// Menghapus elemen terakhir
// person.pop();
// console.log(person);

// Menambah Array di akhir
// person.push("Eko");
// console.log(person);

// Menambah Array di awal
// person.unshift("Eko");
// console.log(person);

// Mengubah isi Array
// person[2] = "Eko";
// console.log(person);

// function makePerson(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// Atau bisa di shorthand seperti ini
function makePerson(name, age) {
  return {
    name,
    age,
  };
}
let person = makePerson("Ballsky", 23);
console.log(person);
