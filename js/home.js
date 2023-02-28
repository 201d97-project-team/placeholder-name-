//Global Variables

let cardArray = ['./red.jpeg','./green.jpeg','./blue.jpeg']; 

let catArray = [];

let dogArray = [];

let birdArray = [];

//Form Control

let submissionForm = document.getElementById('submission-form');

submissionForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  let name = event.target.name.value;
  
  let color = event.target.color.value; //var from inside select or option element
  if (color === 'red') {
    color = cardArray[0];
  } 
  else if (color === 'green') {
    color = cardArray[1];
  } 
  else {
      color = cardArray[2];
  } 

  let animal = event.target.animal.value;
  if (animal === 'cat') {
    animal = catArray;
  }
  else if (animal === 'dog') {
    animal = dogArray;
  }
  else {
    animal = birdArray;
  }

  let newCard = new Cards(name, color, animalArray);
}

//Constructor Function

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

//Executable Code... technically this is happening inside the constructor function. save for pushing in pics of animals

catArray.push();
dogArray.push();
birdArray.push();



