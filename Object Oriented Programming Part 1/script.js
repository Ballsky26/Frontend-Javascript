// Constructor Function
// Huruf kapital awal nama function menandakan ini adalah constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Lalu kita bisa membuat intansi dengan cara seperti ini
// const person1 = new Person("Ballsky", 23);
// const person2 = new Person("Ari", 25);
// console.log(person1);
// console.log(person2);

// Prototype
// function Person(name, age) {
//   this.name = name;
// }
// Person.prototype.age = 23;
// const person1 = new Person("Ballsky");
// const person2 = new Person("Ari");
// console.log(person1.age);
// console.log(person2.age);

// This = menggunakan Arrow Function
// const Person = (newName) => {
//   this.name = newName;
//   return {
//     name: this.name,
//   };
// };
// const x = Person("Ballsky");
// console.log(x.name);

// Atau
// const Person = () => {
//   this.name = "Ballsky";
//   return {
//     name: this.name,
//   };
// };
// const x = Person();
// console.log(x.name);

// Constructor
class Person {
  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
}
const person1 = new Person("Ballsky", 23);
const person2 = new Person("Ari", 25);
console.log(person1);
console.log(person2);
