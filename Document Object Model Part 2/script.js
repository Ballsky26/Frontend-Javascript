// document.body.onload = addElement;
// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");
//   // and give it some content
//   const newContent = document.createTextNode("Hi there 🤣");
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   // add the newly created element and its content
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv.nextSibling);
// }

// Menambahkan Item
// function myFunction() {
//   let node = document.createElement("li");
//   let textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }

// Merubah Warna style
// function myFunction() {
//   document.getElementById("myP").style.backgroundColor = "red";
//   document.getElementById("myP").style.color = "white";
// }

// Mengetahui style yg ada
// function myFunction() {
//   // var x = document.getElementsByTagName("style")[0];
//   var x = document.querySelectorAll("#myP")[0];
//   document.getElementById("demo").innerHTML = x.innerHTML;
// }

// Addeventlistener click
// document.getElementById("myBtn").addEventListener("click", function () {
//   alert("Hello World");
// });
// Menjalankan 2 function dalam 1 klik
// var x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);
// function myFunction() {
//   alert("Hello World");
// }
// function someOtherFunction() {
//   alert("This Function was also Executed");
// }
// Resize Window
// window.addEventListener("resize", function () {
//   document.getElementById("demo").innerHTML = Math.random();
// });

// Passing Parameter
let p1 = 25;
let p2 = 20;
document.getElementById("myBtn").addEventListener("click", function () {
  myFunction(p1, p2);
});
function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a + b;
}
