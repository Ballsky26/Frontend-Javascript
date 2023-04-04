// getElementById
// const element = document.getElementById("intro");
// document.getElementById("demo").innerHTML =
//   "The Text from the intro paragraf is : " + element.innerHTML;

// getElementsByClassName
// const element = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML =
//   'The first Paragraf (index 0) with class ="intro" is : ' +
//   element[0].innerHTML;

// getElementsByTagName
// const element = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML =
//   "The text in first Paragraf (index 0) is : " + element[0].innerHTML;

// querySelectorAll
const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML =
  'The first paragraph (index 0) with class = "intro" is : ' + x[0].innerHTML;
