// Functional Programming
// Filters
// const array1 = [
//   {
//     name: "Ari",
//     age: 25,
//   },
//   {
//     name: "Miki",
//     age: 30,
//   },
//   {
//     name: "Ballsky",
//     age: 23,
//   },
//   {
//     name: "Rasya",
//     age: 27,
//   },
// ];
// const umur = array1.filter((hasil) => hasil.age > 17);
// console.log(umur);

// Map
// const array1 = [
//   {
//     name: "Ari",
//     age: 25,
//   },
//   {
//     name: "Miki",
//     age: 30,
//   },
//   {
//     name: "Ballsky",
//     age: 23,
//   },
//   {
//     name: "Rasya",
//     age: 27,
//   },
// ];
// const umur = array1.map((hasil) => `${hasil.name + " berusia " + hasil.age}`);
// console.log(umur);

// Reduce
// const students = [
//   {
//     name: "John",
//     age: 15,
//   },
//   {
//     name: "Ismail",
//     age: 10,
//   },
//   {
//     name: "Juan",
//     age: 12,
//   },
//   {
//     name: "Anjay",
//     age: 16,
//   },
// ];
// const sumAges = students.reduce((prev, current) => prev + current.age, 0);
// const averageAge = sumAges / students.length;
// console.log(averageAge);

// Currying
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3));

// const curriedMultiply = (a) => (b) => a * b;
// console.log(curriedMultiply(2)(3));

// Tanpa Currying
// const generateURL = (protocol, hostname, page) => {
//   return `${protocol}${hostname}${page}`;
// };
// generateURL("http", "ballsky.com", "/login");
// generateURL("http", "ballsky.com", "/page1");
// generateURL("http", "ballsky.com", "/page2");
// generateURL("http", "ballsky.com", "/page3");
// console.log(generateURL);

// Dengan Currying
// const generateURL = (protocol) => (hostname) => (page) =>
//   `${protocol}${hostname}${page}`;
// const httpBallsky = generateURL("https://")("Ballsky.com");
// const loginBallsky = httpBallsky("/login");
// const pageSatu = httpBallsky("/page/1");
// const pageDua = httpBallsky("/page/2");
// const pageTiga = httpBallsky("/page/3");
// console.log(httpBallsky);

// Destructuring Assignment
// Array
// const array = ["Hello", "World"];
// const [first, second] = array;
// console.log(first);
//atau
// const [first, second] = ["Hello", "World"];
// console.log(first);
// const [first, second = "default"] = ["Hello"];
// console.log(first);
// console.log(second);

// Object
const { nama, mesin, speed } = {
  nama: "Civic",
  mesin: "Honda",
  speed: "200kph",
};
console.log(nama, mesin, speed);
