var randomNumbrer1 =Math.floor(Math.random() * 6) + 1;
var randomDiceSource = "images/dice" + randomNumbrer1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSource);

var randomNumber2  = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

 if(randomNumbrer1 > randomNumber2){
  document.querySelector("h1").innerHTML="player 1 wins !&#9889;";
 }
 else if (randomNumbrer1 < randomNumber2){
  document.querySelector("h1").innerHTML="player 2 wins!&#9889;";
 }
  else {
  document.querySelector("h1").innerHTML="draw !";
  }