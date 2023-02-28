//Global Variables

let cardArray = ['./red.jpeg','./green.jpeg','./blue.jpeg']; 

let catArray = [];

let dogArray = [];

let birdArray = [];

//Open Local Storage
let formInfo = localStorage.getItem(infoArray);

let name = formInfo[0];
let color = formInfo[1];
let animalArray = formInfo[2];

//Constructor Function

let newCard = new Cards(formInfo[0], formInfo[1], formInfo[2]);

function Cards(name, color, animalArray) {
  this.name = name;
  this.color = color;
  this.animalArray = animalArray*2;   //we can verify card match through checking for equivalent strings at decisions. 
  turnCounter = 0;
  this.renderCards();
}

//Prototype Function

Cards.prototype.renderCards = function () {
  let cards = document.getElementById('card-square');
  cards.appendChild(this.color);
}
