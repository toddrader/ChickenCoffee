var imageParent = document.getElementById("chickens");
var newImage = document.createElement("img");
newImage.setAttribute("src", "http://bit.ly/blue-chirpus");
imageParent.appendChild(newImage);

var addStripes = document.getElementById("list");
addStripes.classList.add("striped");

var tShirt ="<li>T-Shirts</li>";
addStripes.innerHTML += (tShirt);

var moreCoffee = document.getElementById("coffee-count");
var buttonCoffee = document.getElementsByTagName("button")[0];
buttonCoffee.onclick = function() {
  var coffeeValue = moreCoffee.value;
  var addCoffee = document.createElement("li");
  addCoffee.innerText = coffeeValue + " Coffee";
  addStripes.appendChild(addCoffee);
}
