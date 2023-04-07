// Method
// class Person {
//   constructor(newName) {
//     this.name = newName;
//     this.age = this.randomize();
//   }
//   randomize() {
//     return Math.floor(Math.random(100) * 100);
//   }
// }
// const person1 = new Person("Ballsky");
// console.log(person1.age);

// Static Method
// class Person {
//   constructor(newName) {
//     this.name = newName;
//   }
//   static randomize() {
//     return Math.floor(Math.random(100) * 100);
//   }
// }
// console.log(Person.randomize());

// Getter
// class Person {
//   constructor(newName, newAge, newGender) {
//     this.name = newName;
//     this.age = newAge;
//     this.gender = newGender;
//   }
//   getName() {
//     return (this.gender === "L" ? "Halo Sir " : "Halo Ms ") + this.name;
//   }
// }
// const person1 = new Person("Ballsky", 23, "L");
// console.log(person1.getName());

// Setter
// class Person {
//   constructor(newName, newAge) {
//     this.name = newName;
//     this.age = newAge;
//   }
//   get getName() {
//     return this.name;
//   }
//   set setName(changeName) {
//     this.name = changeName;
//   }
// }
// const person1 = new Person("Ballsky", 23);
// console.log(person1.getName);
// person1.setName = "Ari";
// console.log(person1.getName);

// Public & Private Property
// class Person {
//    Tanda pagar disini menandakan bahwa relationship adalah properti private
//   #relationship;
//   constructor(name, age) {
//      Tanpa tanda pagar berarti public
//     this.name = name;
//     this.age = age;
//     this.#relationship = "In Shambles";
//   }
//   get getRelationship() {
//     return this.#relationship;
//   }
//   getRelationship() {
//     return this.#relationship;
//   }
// }
// const person = new Person("Ballsky", 23);
// console.log(person.getRelationship); // "In Shambles"
// console.log(person.getRelationship()); // "In Shambles"
// Apabila mencoba mengakses secara langsung
// console.log(person.#relationship); // Private field "#relationship" must be declared
// console.log(person.relationship); // undefined

// Atau
// class Person {
//   #age;
//   constructor(newName, newAge, newGender) {
//     this.name = newName;
//     this.#age = newAge;
//     this.gender = newGender;
//   }
//   getAge() {
//     return this.#age;
//   }
//   getName() {
//     return (this.gender === "L" ? "Halo Sir " : "Halo Ms ") + this.name;
//   }
// }
// const person1 = new Person("Ballsky", 23, "L");
// console.log(person1.getName());
// console.log(person1.age); // undefined
// console.log(person1.getAge());

// Encapsulation
// class Ongkir {
//   #pajak;
//   constructor(weight) {
//     this.#pajak = 1000;
//     this.biaya = this.calculatePrice(weight);
//   }
//   calculatePrice(weight) {
//     return weight * 2000;
//   }
//   get totalPrice() {
//     return this.#pajak + this.biaya;
//   }
// }
// const ongkir = new Ongkir(10);
// console.log(ongkir.totalPrice);
// ongkir.pajak = 5000;
// console.log(ongkir.totalPrice);

// Inheritance
// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.job = "Jobless";
//   }
//   get getJob() {
//     return this.job;
//   }
// }

// // child class
// class PersonWithJob extends People {
//   constructor(name, age, job) {
//     // super dibawah ini bisa diangap sebagai new People (name, age)
//     super(name, age);
//     this.job = job;
//   }
// }

// const people1 = new People("Ari", 26);
// const people2 = new PersonWithJob("Ballsky", 26, "Web Development");
// console.log(people1);
// console.log(people2);

// Polymorphism
class Indonesian {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Halo, nama saya ${this.name}`;
  }
}
class Javanese extends Indonesian {
  constructor(name) {
    super(name);
  }
  greeting() {
    return `Sugeng enjing, nami kula ${this.name}`;
  }
}

const indonesian = new Indonesian("Ballsky");
const javanese = new Javanese("Ari");
console.log(indonesian.greeting()); // Halo, nama saya Ballsky
console.log(javanese.greeting()); // Sugeng enjing, nami kula Ari
