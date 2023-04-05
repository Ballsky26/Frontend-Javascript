// to String : mengkonversi array ke string
// const fruits = ["Apple", "Banna", "Lemon"];
// console.log(fruits.toString());
// console.log(fruits.join(" - ")); // kasih pemisah

// pop : mengeluarkan item dari array (menghapus elemen terakhir)
// const fruits = ["Apple", "Banna", "Lemon", "Mango"];
// console.log(fruits.pop());
// console.log(fruits);

// push : memunculkan item dari array (menambahkan element baru diakhir)
// const fruits = ["Apple", "Banna", "Lemon", "Mango"];
// console.log(fruits.push("Melon"));
// console.log(fruits);

// shifting element shift : mengeluarkan item dari array (menghapus elemen awal)
// const fruits = ["Apple", "Banna", "Lemon", "Mango"];
// console.log(fruits.shift());
// console.log(fruits);

// shifting element unshift : mengeluarkan item dari array (menambahkan element baru awal)
// const fruits = ["Apple", "Banna", "Lemon", "Mango"];
// console.log(fruits.unshift("Starfruit"));
// console.log(fruits);

// element change : mengubah element array diakses dengan nomor indeksnya
// const fruits = ["Apple", "Banna", "Lemon", "Mango"];
// fruits[0] = "Starfruit";
// fruits[fruits.length] = "Starfruit"; // menambahkan ke indeks terakhir
// console.log(fruits);

// Concat : membuat array baru dengan menggabungkan array yang ada
// const player1 = ["Ari, Ballsky, Miki, Rasya"];
// const player2 = ["Bagus", "Mike"];
// const gabungan = player1.concat(player2);
// console.log(gabungan);

// element delete : menghapus element di array dan indeks yg di hapus akan menjadi empty
// const player1 = ["Ari, Ballsky, Miki, Rasya"];
// delete player1[0];
// console.log(player1);

// Splicing array : menambahkan item baru sesuka kita
// (Parameter pertama : mendefinisikan element baru yg akan ditambahkan)
// (Parameter kedua : menentukan berapa banyak elemen yang harus dihapus)
// const player1 = ["Ari, Ballsky, Miki, Rasya"];
// player1.splice(2, 0, "Eko", "Bagus");
// player1.splice(0, 1); // Menghapus array tanpa meninggalkan lubang empty

// Slicin array
// const player1 = ["Ari, Ballsky, Miki, Rasya, Bagus"];
// const citrus = player1.slice(1, 3); // parameter pertama mulai dari mana, parameter kedua stop dimana mengiris/memotong array menjadi baru
// console.log(player1);

// Sort : mengurutkan array sesuai abjad
// const player1 = ["Ari, Ballsky, Miki, Rasya, Bagus"];
// console.log(player1.sort());

// reserve : kebalikan dari sort
// const player1 = ["Ari, Ballsky, Miki, Rasya, Bagus"];
// console.log(player1.reverse());

// sort numerik
// const angka = [300, 100, 2, 1, 150];
// const salah = angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// sortir array dalam object
const cars = [
  { type: "Ferrari", year: 2020 },
  { type: "Mercedes", year: 2021 },
  { type: "Honda", year: 2022 },
];
cars.sort(function (a, b) {
  return a.year - b.year;
});
console.log(cars);
