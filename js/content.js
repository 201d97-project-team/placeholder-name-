// Get local storage of User info
const userArray = JSON.parse(localStorage.getItem('userInfo'));

//Global
let matches = 0;

// Deconstruct Array 
function UserInfo(userArray) {
  this.name = userArray[0];
  this.color = userArray[1];
  this.animal = userArray[2];
  // this.turns = 0;
}

const userInfo = new UserInfo(userArray);

class Card {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
}



function getCardArray() {
  if (userInfo.animal === 'dogs') {
    const cardArray = [
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('sillyDog', 'img/white-dog.png'),
      new Card('sillyDog', 'img/white-dog.png')
    ];
    console.log(cardArray);
    return cardArray;
  } else if (userInfo.animal === 'cats') {
    const cardArray = [
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('sillyDog', 'img/white-dog.png'),
      new Card('sillyDog', 'img/white-dog.png')
    ];
    console.log(cardArray);
    return cardArray;
  } else {
    const cardArray = [
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('dog-bone', 'img/dog-bone.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('pug', 'img/scared-pug.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('puppies', 'img/two-puppies.png'),
      new Card('sillyDog', 'img/white-dog.png'),
      new Card('sillyDog', 'img/white-dog.png')
    ];
    console.log(cardArray);
    return cardArray;
  }

}
const cardArray = getCardArray();

// Get a reference to the card container by its ID
const cardAnimalImageContainer = document.getElementById('.back');

let frontCard = document.querySelectorAll('.ColorImage');
if (userInfo.color === 'blue') {
  frontCard.forEach(card => card.src = "img/blue.png");
} else if (userInfo.color === 'red') {
  frontCard.forEach(card => card.src = "img/red.png");
} else {
  frontCard.forEach(card => card.src = "img/green.png");
}

// Generate random cards
cardArray.sort(() => 0.5 - Math.random());
frontCard.forEach((card, i) => card.id = cardArray[i].name)

// Should place cards randomly within the each image
const cardImages = document.querySelectorAll('.AnimalImage');
for (let i = 0; i < cardArray.length; i++) {
  let src = cardArray[i].imageUrl
  cardImages[i].src = src;
  cardImages[i].id = i;
}

function createGame() {
  let turns = 0;
  let selectedCards = [];

  console.log(cardImages);

  for (let i = 0; i < cardImages.length; i++) {
    cardImages[i].addEventListener('click', handleClick);
    frontCard[i].addEventListener('click', handleClick);
  }
  console.log(cardImages);

  function handleClick(event) {

    // let cardFlip = document.querySelector('.card');
    // cardFlip.style.transform = 'rotateY(180deg)';
    //rotate card 180 degrees
    console.log(event.target.id);
    // event.target.classList.toggle('.container');

    selectedCards.push(event.target.id);
    // for (let i = 0; i < selectedCards.length; i++) {
    //   selectedCards[i].classList.remove('.container');

    //kee from clicking same card twice
    //keep card available, 
    checkMatches();

  }

//Working with the .container:focus to get first card clicked to stay turned over
  function checkMatches() {
    if (selectedCards.length === 2) {
      if (selectedCards[0] === selectedCards[1]) {
       console.log('hello');
        matches++;
        console.log("matches" + matches);
        //We need this part to iterate through the array and cat on both cards to keep flipped
        for (let i = 0; i < selectedCards.length; i++) {
          selectedCards[i].classList.remove('.container');
        }
        selectedCards = [];
        turns++;
        if (matches === 4){
          alert(`Good job ${UserInfo.name}, you took ${turns} turns to win.`);
          window.location.href = './index.html';
        };
        event.target.classList.toggle('back');
      } else {
        turns++;
        selectedCards = [];
      }
    }
  }
  
}



createGame();
