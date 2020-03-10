const buttonElement = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const instructionsParagrapragh = document.querySelector('.js-instructions');
const counter = document.querySelector('.js-counter');
console.log(counter);

// FUNCIÓN PARA EL RANDOM NUMBER

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

// FUNCIÓN PARA MOSTRAR INSTRUCCIONES

function showResult() {
  const number = parseInt(inputElement.value);
  if (number === randomNumber) {
    instructionsParagrapragh.innerHTML = 'Has ganado campeona!!!';
  } else if (number > 100) {
    instructionsParagrapragh.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (number > randomNumber) {
    instructionsParagrapragh.innerHTML = 'Demasiado alto';
  } else if (number < randomNumber) {
    instructionsParagrapragh.innerHTML = 'Demasiado bajo';
  } else if (isNaN(number)) {
    instructionsParagrapragh.innerHTML = 'Por favor introduce caracteres numéricos';
  }
}

let acc = 0;
function showCount() {
  acc++;
  counter.innerHTML = 'Número de intentos:' + acc;
}

function updateAll() {
  showResult();
  showCount();
}

// LISTENERS

buttonElement.addEventListener('click', updateAll);

console.log('Ready to go');
