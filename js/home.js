
//Form Controls

let submissionForm = document.getElementById('user-info');

function handleSubmit(event) {
  event.preventDefault();
  
  let name = event.target.name.value;
  if (name === ''){
    alert('Please enter your name');
    return;
  }
  
  let animal = event.target.animal.value;
  let color = event.target.color.value;
  

  let infoArray = [name,color,animal];
  let stringifiedInfoArray = JSON.stringify(infoArray);
  localStorage.setItem('userInfo',stringifiedInfoArray);

  window.location.href = './content.html';

}

//Executable Code

submissionForm.addEventListener('submit', handleSubmit);

// function localStorage(name, color, animal) {
//   if (name != null || color != null || animal != null) {
//     let infoArray = [name,color,animal];
//     let stringifiedInfoArray = JSON.stringify(infoArray);
//     localStorage.setItem(stringifiedInfoArray);
//   }
//   else{
//     alert('Please fill out all fields');
//   }
// }

  // if (animal === 'cat') {
  //   animal = catArray;
  // }
  // else if (animal === 'dog') {
  //   animal = dogArray;
  // }
  // else {
  //   animal = birdArray;
  // }

  //var from inside select or option element
  // if (color === 'red') {
  //   color = cardArray[0];
  // } 
  // else if (color === 'green') {
  //   color = cardArray[1];
  // } 
  // else {
  //     color = cardArray[2];
  // } 
// catArray.push();
// dogArray.push();
// birdArray.push();