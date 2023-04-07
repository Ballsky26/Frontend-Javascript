// function logAfterTwoSecond() {
//   console.log("object");
// }
// setTimeout(logAfterTwoSecond, 2000); // Event Loop => Callback => Menunggu 2 Detik => masuk ke callback => Callbak Queue

function logAfterTwoSecond() {
  console.log(1); // Cetak angka 1
}
console.log(2); // cetak angka 2 sebelum panggil setTimeout
setTimeout(logAfterTwoSecond, 2000);
console.log(3); // cetak angka 3 setelah panggil setTimeout
