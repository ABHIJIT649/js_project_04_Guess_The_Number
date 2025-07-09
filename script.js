let randomNumber = parseInt( Math.random() * 100 + 1) // random number generate
console.log("random number :" , randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.Guesses');
const reamining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resultParas');

const p =  document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function(e) {
        e.preventDefault();  //preventDefault mean -> roko kehi mat lo me lunga
       const guess = parseInt( userInput.value);
       console.log(guess);
       validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess); // Fixed: checkGuess instead of chackGuess
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is tooo low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    userInput.value = ' '
    guessSlot.innerHTML += `${guess}  `
    numGuess ++;
    reamining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}


function endGame () {    
    userInput.value = ' '
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
 }

function newGame () {    
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click' , function(e) {
      randomNumber = parseInt( Math.random() * 100 + 1)
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML = ' '
      reamining.innerHTML = `${11 - numGuess}`
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame = true
   })
}

