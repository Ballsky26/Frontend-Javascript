// Date Object
// let d = new Date();
// let d = new Date(2023, 3, 6, 12, 12, 12);
// let d = new Date("April 22, 2023 12:12:12");
// console.log(d);

// Date Method
// let d = new Date("April 22, 2023 12:12:12");
// console.log(d.toUTCString());
// console.log(d.toDateString());
// console.log(d.toISOString());

// Date Format
// let d = new Date("2023-10-24");
// let d = new Date("2023-10-24T10:00:10Z"); Iso Date
// let d = new Date("3/25/2022"); // Short Date
// let d = new Date("2002/2/24"); // Short Date
// let d = new Date("06 Maret 2023"); // Long Date
// console.log(d);

// Get Method
// let d = new Date();
// console.log(d.getFullYear()); // Tahun
// console.log(d.getMonth()); // Bulan
// console.log(d.getDay()); // Hari

// Date Set Method
const d = new Date();
// d.setTime(10000000); // berapa milisecond dari tahun 1970
// d.setFullYear(2021); // set dari tahun sekarang
// d.setMonth(); // set dari bulan sekarang
d.setHours(); // set dari tanggal sekarang
console.log(d);
