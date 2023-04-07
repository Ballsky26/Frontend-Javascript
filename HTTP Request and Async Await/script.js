function setJokePromise(value) {
  const left = document.getElementById("left");
  left.innerHTML = `<h1>Dari Promise</h1>
    <p>${value.setup}</p>
    <p>${value.delivery}`;
}

function setJokeAsync(value) {
  const right = document.getElementById("right");
  right.innerHTML = `<h1>Dari Async</h1>
    <p>${value.setup}</p>
    <p>${value.delivery}`;
}

function getJokePromise() {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      setJokePromise(parsedResponse);
    });
}

getJokePromise();

//ubah kode diatas menjadi async await

async function getJokeAsync() {
  //kode kamu disini

  setJokeAsync(___);
}

getJokeAsync();
