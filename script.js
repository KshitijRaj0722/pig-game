'use strict'

const name0=document.querySelector('#score--0')
const name1=document.querySelector('#score--1')
const diceEl=document.querySelector('.dice')
const newBtn=document.querySelector('.btn--new')
const rollBtn=document.querySelector('.btn--roll')
const holdBtn=document.querySelector('.btn--hold')
const current0=document.querySelector('#current--0')
const current1=document.querySelector('#current--1')
let current = 0


name0.textContent=0
name1.textContent=0
diceEl.classList.add('hidden')

rollBtn.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden')
    diceEl.src =`dice-${dice}.png`

    if(dice !==1){
        current=current+dice
        current0.textContent=current
    } else {
        
    }
});


