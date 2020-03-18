'use strict';
const buttonElement = document.querySelector('.js-btn');
const buttonReset = document.querySelector('.js-btn-reset');
const inputElement = document.querySelector('.js-input');
const instructionsParagrapragh = document.querySelector('.js-instructions');
const instructions = document.querySelector('.page__footer');
// console.log(counter);

// FUNCIÓN PARA EL RANDOM NUMBER

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
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

// INTENTO DE PASAR EL CÓDIGO DE LAS INSTRUCCIONES A JAVASCRIPT

function getInstructionsHtmlCode() {
  let htmlCode = `<p class="js-counter page__footer--counter">número de intentos: </p>`;
  return htmlCode;
}

// FUNCIÓN PARA PINTAR EL CÓDIGO

function paintHtmlCode() {
  instructions.innerHTML = getInstructionsHtmlCode();
  console.log(instructions);
}

paintHtmlCode();

// LLAMO DEL HTML AL COUNTER ANTES DE USARLO

const counter = document.querySelector('.js-counter');

// FUNCIÓN PARA EL COUNTER

let acc = 0;
function showCount() {
  acc++;
  counter.innerHTML = '';
  instructions.innerHTML = getInstructionsHtmlCode() + acc;
  // counter.innerHTML = 'Número de intentos:' + acc;
}

function enterKey() {
  if (event.key === 13) {
    showCount();
    showResult();
  }
}

function reset() {
  randomNumber = getRandomNumber(100);
  inputElement.innerHTML = '';
  instructionsParagrapragh.innerHTML = 'Pista: Escribe un número y dale a Prueba';
  paintHtmlCode();
  acc = 0;
  console.log(randomNumber);
}

function updateAll(ev) {
  ev.preventDefault();
  showResult();
  showCount();
}

// LISTENERS

buttonElement.addEventListener('click', updateAll);
buttonReset.addEventListener('click', reset);

console.log('Ready to go');
