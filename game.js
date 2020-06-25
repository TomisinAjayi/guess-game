var randomNumber = Math.floor(Math.random() * 50) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

var guessCount = 1;
var resetButton; 


var playerName = document.querySelector('.playerName');

playerName.addEventListener( 'click' , updateName)

function updateName() {
    var name = prompt('Enter your name');
    playerName.textContent = 'Hello, ' + name;
}

function checkGuess() {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: '; 
    } 
    guesses.textContent += userGuess + ', ';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lastResult.backgroundColor = 'red';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last Guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last Guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
    showProgress();
}

guessCount === 1;

guessSubmit.addEventListener('click' , checkGuess);

function showProgress() {
    const turnNumber = document.querySelector('strong');
    var turnsLeft = 11 - guessCount;
    turnNumber.innerHTML = "Pick a number between 1 - 50." + "<br>" + "You have " +turnsLeft + " TURNS.";
};

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click' , resetGame);
    resetButton.style.backgroundColor = 'purple';
    resetButton.style.borderRadius = '20px';
    resetButton.style.border = '1px solid purple';
    resetButton.style.color = 'white';
    resetButton.style.marginLeft = '45%';
    resetButton.style.marginTop = '20px';
    resetButton.style.textAlign = 'center';
    resetButton.style.fontSize = '20px';
    resetButton.style.width = '200px';
    resetButton.style.marginBottom = '100px';
}

function resetGame() {
    guessCount = 1;

    const reset = document.querySelectorAll('.result p');
    for (var i = 0; i < reset.length; i++) {
        reset[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    showProgress();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 50) + 1;
}
