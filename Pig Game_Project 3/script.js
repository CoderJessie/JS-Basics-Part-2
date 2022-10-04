'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Resetting the scores
score0El.textContent = 0;
score1El.textContent = 0;

//Hidding the dice
diceEl.classList.add('hidden');
