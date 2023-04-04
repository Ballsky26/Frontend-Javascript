// let a = "Kita mau coba 'pakai'";
// console.log(a);

// String length
// let a = "Hallo We World";
// console.log(a.length);

// String extraction
// Slice : Mengambil 2 parameter posisi awal dan akhir
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);

// Awalnya aja : Startnya saja
// let part = str.slice(7);

// Nilai awal dan akhir kurang dari 0
// let str = "Apple, Banana, Kiwi";
// let part = str.slice(-7, -13);
// console.log(part);

// Mengambil 2 parameter dari belakang
// let str1 = "Apple, Banana, Kiwi";
// let part2 = str2.slice(-12, -6);
// console.log(part2);

// Substring
// Perbedaan nilai awl dan akhir kurang dari 0
// let str = "Apple, Banana, Kiwi";
// let part1 = str.substring(7, 13); //result:banana
// let part2 = str.substring(-7, 13); //result: Apple, Banana
// console.log(part1);
// console.log(part2);

// Substr
// let str = "Apple, Banana, Kiwi";
// parameter pertama mencari tempatnya, kedua panjang yang mau di panggil
// console.log(str.substr(5, 2));
// Jika parameter kedua di kosongin, maka akan mengambil sisa nya
// console.log(str.substr(5));
// console.log(str.substring(5));

// String Replace
// let text = "Hello World";
// let newText = text.replace("World", "Ballsky"); // Parameter kedua tulisan yang mau di ganti
// let newText = text.replace(/WORLD/i, "Ballsky"); //Pakai Regex Tulisan besar kecil tidak pengaruh // Parameter kedua tulisan yang mau di ganti
// console.log(newText);

// String toUpperCase & toLowerCase
// let text1 = "Hello World";
// console.log(text1.toUpperCase);
// console.log(text1.toLowerCase);
// Atau bisa digabung dengn string replace
// console.log(text1.replace(/hello/i, "kecil").toLowerCase);

// String Concat()
// Menggabungkan text
// let text1 = "Hello";
// let text2 = "World";
// console.log(text1.concat(" "), text2);
// Atau
// console.log(text1 + " " + text2);

// String Trim
// Menghilangkan spasi putih dari kedua sisi string
// let text = "        Hello World";
// console.log(text.trim());

// String Indexof()
// let str = "Please locate where 'locate' occurs!";
// Mencari kata ganda dengan hasil angka dan akan mengambil huruf yang pertama
// console.log(str.indexOf("locate"));
// Kebalikan dari yang atas (mencari kata yang terakhir)
// console.log(str.lastIndexOf("locate"));

// String Search
// Mencari untuk nilai tertentu dan hanya yg pertama
// let str = "Please locate where 'locate' occurs!";
// console.log(str.search("locate"));

// String Includes()
// Mencari kata, misal katanya ada akan true jika tidak ada akan false
// let str = "Please locate where 'locate' occurs!";
// console.log(str.includes("locate"));

// String StartsWith
// Mencari kata diawalnya saja akan true, kalo selain kata diawal bakal false
let str = "Please locate where occurs!";
console.log(str.startsWith("Please"));
