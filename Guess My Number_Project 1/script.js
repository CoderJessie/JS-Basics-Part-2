'use strict';

/*
console.log(document.querySelector('.message').textContent); //since its a class use(.) but if id use(#)

//Selecting and Manipulatig Elements
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});