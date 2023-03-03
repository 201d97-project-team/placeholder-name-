

const userArray = JSON.parse(localStorage.getItem('userInfo'));

// const savedUserArray = ['James', 'red', 'dog'];

// Deconstruct Array 
function UserInfo(userArray) {
  this.name = userArray[0];
  this.color = userArray[1];
  this.animal = userArray[2];
  // this.turns = 0;
}

const userInfo = new UserInfo(userArray);
// const userNameDiv = document.getElementById('user-name');
// userNameDiv.textContent = userInfo.name;


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

// let hardCodedArray= ["img/white-dog.png", "img/white-dog.png", "img/two-puppies.png", "img/two-puppies.png", "img/scared-pug.png", "img/scared-pug.png", "img/dog-bone.png", "img/dog-bone.png"]

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
// Good to here //
console.log(cardArray);



const cardImages = document.querySelectorAll('.AnimalImage');
for (let i = 0; i < cardArray.length; i++) {
  let src = cardArray[i].imageUrl
  cardImages[i].src = src;
  cardImages[i].id = i;
}
// Should place cards randomly within the each image
// cards.forEach(card => {
//   const img = new Image();
//   img.src = card.imageUrl;
//   img.alt = card.name;
//   AnimalImage.appendChild(img);
// });

// function createGame() {
//   let selectedCards = [];
//   // Arrow function passes another function into a function... whoa... lot of functions
//   cardImages.forEach((cardImage, index) => {
//     cardImage.addEventListener('click', (e) => {
//       // Check if the card has already been selected
//       //add some sort of css property, if image clicked, apply. Make visibility hidden. 
//       // visible =document.getElementsByClassName('front');
//       // visible.style.visibility='hiddden;
//       e.target.classList.toggle('back');
//       if (selectedCards.includes(index)) {

//         return;
//       }

//       // Add the index of the selected card to the selectedCards array
//       selectedCards.push(index);

//       // Flip the card over
//       cardImage.src = cardArray[index].imageURL;

//       // Check if two cards have been selected
//       if (selectedCards.length === 2) {
//         // Check if the two cards match
//         if (cardArray[selectedCards[0]].CardName === cardArray[selectedCards[1]].CardName) {
//           /*           // Increase score and update score display
//                     score++;
//                     document.getElementById('score').textContent = `Score: ${score}`; */

//           // Remove the selected cards from the array
//           selectedCards = [];
//         } else {
//           // Flip the cards back over after a delay
//           setTimeout(() => {
//             cardImages[selectedCards[0]].src = "";
//             cardImages[selectedCards[1]].src = "";
//             selectedCards = [];
//           }, 500);
//         }
//       }
//     });
//   });
// }



function createGame() {
  let matches = 0;
  let turns = 0;
  let selectedCards = [];

  console.log(cardImages);

  for (let i = 0; i < cardImages.length; i++) {
    cardImages[i].addEventListener('click', handleClick);
    frontCard[i].addEventListener('click', handleClick);
  }
  console.log(cardImages);

  function handleClick(event) {
    console.log(event.target.id);
    // event.target.classList.toggle('.container');

    selectedCards.push(event.target.id);
    //kee from clicking same card twice
    //keep card available, 
    checkMatches();

  }


  function checkMatches() {
    console.log("check matchs");
    if (selectedCards.length === 2) {
      console.log("2 itens slected");
      if (selectedCards[0] === selectedCards[1]) {
        matches++;
        selectedCards = [];
        turns++;
        //dom that keeps cards flipped over, remove event listerners, remove class name?

        event.target.classList.toggle('back');
      } else {
        turns++;
        selectedCards = [];
      }
    }
  }




  if (matches === 4){
    alert(`Good job ${UserInfo.name}, your score is ${turns}`);
  };
  
}

createGame();
//Global Variables

// let cardArray = ['./red.jpeg','./green.jpeg','./blue.jpeg']; 

// let catArray = [];

// let dogArray = [];

// let birdArray = [];

// //Open Local Storage
// let formInfo = localStorage.getItem(infoArray);

// let name = formInfo[0];
// let color = formInfo[1];
// let animalArray = formInfo[2];

// //Constructor Function

// let newCard = new Cards(formInfo[0], formInfo[1], formInfo[2]);

// function Cards(name, color, animalArray) {
//   this.name = name;
//   this.color = color;
//   this.animalArray = animalArray*2;   //we can verify card match through checking for equivalent strings at decisions. 
//   turnCounter = 0;
//   this.renderCards();
// }

// //Prototype Function

// Cards.prototype.renderCards = function () {
//   let cards = document.getElementById('card-square');
//   cards.appendChild(this.color);
//}