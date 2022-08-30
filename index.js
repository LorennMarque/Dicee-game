
var btn = document.querySelector("button").addEventListener("click", randomDices);

function randomDices(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var source1 = "images/dice" + randomNumber1 + ".png"
  var source2 = "images/dice" + randomNumber2 + ".png"

  var image1 = document.querySelectorAll("img")[0]
  var image2 = document.querySelectorAll("img")[1]

  image1.setAttribute("src", source1);
  image2.setAttribute("src", source2);

  var title = document.querySelectorAll("h1")[0]

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!"
  } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins!"
  } else {
    title.innerHTML = "Draw"
}
}
