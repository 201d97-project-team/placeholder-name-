
// Call in Local Memory for name, color, and animal
/* const UserArray = JSON.parse(localStorage.getItem('savedUserArray')); */
// Local array for test
const savedUserArray = ['James', 'red', 'dog'];

// Deconstruct Array 
function UserInfo(savedUserArray){
  this.name = savedUserArray[0];
  this.color = savedUserArray[1];
  this.animal = savedUserArray[2];
  this.turns = 0;
}

const userInfo = new UserInfo(savedUserArray);
const userNameDiv = document.getElementById('user-name');
userNameDiv.textContent = userInfo.name;


function Card(CardName, imageURL) {
  this.CardName = CardName;
  this.imageURL = imageURL;
}

const cardArray = [
  new Card('Cooldog', 'https://picsum.photos/id/237/200/300'),
  new Card('Cooldog', 'https://picsum.photos/id/237/200/300'),
  new Card('BadDog', 'https://fastly.picsum.photos/id/603/200/300.jpg?grayscale&hmac=cujnuCJXkMqphdasLuvAQ6eccbNToQQpUNT3sCAF52k'),
  new Card('BadDog'),
  new Card('GoodDog'),
  new Card('GoodDog'),
  new Card('SillyDog'),
  new Card('SillyDog')
];

// Generate random cards
cardArray.sort(() => 0.5 - Math.random());

const cardImages = document.querySelectorAll('.card-image');
for (let i = 0; i < cardImages.length; i++) {
  cardImages[i].src = cardArray[i].imageURL;
}

// Keep score
function createGame() {
  let score = 0;
  let selectedCards = [];

  cardImages.forEach((cardImage, index) => {
    cardImage.addEventListener('click', () => {
      // Check if the card has already been selected
      if (selectedCards.includes(index)) {
        return;
      }

      // Add the index of the selected card to the selectedCards array
      selectedCards.push(index);

      // Flip the card over
      cardImage.src = cardArray[index].imageURL;

      // Check if two cards have been selected
      if (selectedCards.length === 2) {
        // Check if the two cards match
        if (cardArray[selectedCards[0]].CardName === cardArray[selectedCards[1]].CardName) {
          // Increase score and update score display
          score++;
          document.getElementById('score').textContent = `Score: ${score}`;

          // Remove the selected cards from the array
          selectedCards = [];
        } else {
          // Flip the cards back over after a delay
          setTimeout(() => {
            cardImages[selectedCards[0]].src = "";
            cardImages[selectedCards[1]].src = "";
            selectedCards = [];
          }, 500);
        }
      }
    });
  });
}

createGame();
=======
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
