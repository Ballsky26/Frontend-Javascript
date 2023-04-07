// Promise
// function downloadImage(url) {
//   return new Promise(function (resolve, reject) {
//     // download sebagai contoh fungsi pengunduh yang bersifat synchronous
//     const image = download(url);
//     if (image) resolve(image);
//     else reject(`gagal mengunduh gambar: url salah`);
//   });
// }

// downloadImage("https://situsku.com/gambarku.jpg")
// .then(function (image){
//     // do something with image
// })

// .catch(function (error){
//     console.log(error);
// })

// downloadImage("https://situsku.com/gambarku.jpg")
//   .then(function (image) {
//     //  make image black and white

//     return blackWhiteImage;
//   })
//   .then(function (blackWhiteImage) {
//     // do something with black and white image
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Promise Static Method
// Promise All
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }); // expected output: Array [3, 42, "Foo"]

// Promise Any
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout((resolve, 100, "quick")));
// const promise3 = new Promise((resolve) => setTimeout((resolve, 500, "slow")));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// Expected output : "quick"

// Promise Race
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output : "Two"
