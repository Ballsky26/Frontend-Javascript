// Function Declaration (Default text undefined)
// function showMessage(from, text) {
//   console.log(from + " : " + text);
// }
// showMessage("Ballsky", "Hello World");
// showMessage("Ari", "Hello World Too");

// Default text bisa di ubah
// function showMessage(from, text = "Apa Kabar?") {
//   console.log(from + " : " + text);
// }
// showMessage("Ballsky");
// showMessage("Ari", "Hello World Too");

// Call Function
// function greet() {
//   console.log("Hello World");
// }
// Pemanggilan fungsi
// greet();

// Memanggil dua function
// function greet() {
//   console.log("Hello World");
// }
// function welcome() {
//   console.log("Welcome Hello World");
// }
// function allFunction() {
//   greet();
//   welcome();
// }
// allFunction();

// Return Value
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// console.log("Hasilnya adalah " + result);

function cekUmur(umur) {
  if (umur >= 18) {
    return true;
  } else {
    return false;
  }
}
let umur = 19;
if (cekUmur(umur)) {
  console.log("Anda Dewasa");
} else {
  console.log("Anda Masih Bocil");
}
function showJob(umur) {
  if (!cekUmur(umur)) {
    return;
  }
  console.log("Ini list Job nya");
}
showJob(umur);
