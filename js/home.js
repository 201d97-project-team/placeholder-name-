
// Moved to  content
/* //Global Variables
let cardArray = ['./red.jpeg','./green.jpeg','./blue.jpeg']; 
let catArray = [];
let dogArray = [];
let birdArray = []; */ 



//Form Controls

let submissionForm = document.getElementById('submission-form');

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
    
  localStorage(name,color,animal);
}

function localStorage(name, color, animalArray) {
  if (name != null || color != null || animalArray != null) {
    let infoArray = [name,color,animalArray];
    let stringifiedInfoArray = JSON.stringify(infoArray);
    localStorage.setItem(stringifiedInfoArray);
  }
  else{
    alert('Please fill out all fields');
  }
}

//Executable Code

submissionForm.addEventListener('submit', handleSubmit);

catArray.push();
dogArray.push();
birdArray.push();