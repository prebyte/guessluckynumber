function onReady() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');

    let guessSubmit = document.querySelector('.guessSubmit');
    const guessSubmitElements = document.getElementsByClassName('guessSubmit');
    guessSubmit = guessSubmitElements[0];
    console.log(guessSubmit);
    const guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let resetButton;
    function checkGuess() {
        console.log("Something");
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
            guesses.style.marginTop = "100px";
            guesses.style.fontSize = "x-large";
            guesses.style.marginLeft = "30px";
            guesses.textContent = 'Previous Guesses:';
        }
        guesses.textContent += ' ' + userGuess + ' ';

        if (userGuess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!';
            lastResult.style.fontWeight = "900";
            lastResult.style.color = "blue";
            lowOrHi.textContent = '';
            setGameOver();
        } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
            lowOrHi.textContent = '';
            setGameOver();
        } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.fontWeight = "900";
            lastResult.style.color = "#ff0000";
            if(userGuess < randomNumber) {
                lowOrHi.textContent = 'Last guess was too low!';
            } else if(userGuess > randomNumber) {
                lowOrHi.textContent = 'Last guess was too high!';
            }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.style.backgroundColor = '#80d87f';
        resetButton.style.marginLeft ="200px";
        resetButton.style.height = "50px";
        resetButton.style.height = "50px";
        resetButton.style.borderRadius = "25px";
        resetButton.textContent = 'Start new game';
        document.getElementById("resultParas").appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
    function resetGame() {
        guessCount = 1;

        const resetParas = document.querySelectorAll('.resultParas p');
        for (let i = 0 ; i < resetParas.length ; i++) {
            resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();

        lastResult.style.backgroundColor = 'white';

        randomNumber = Math.floor(Math.random() * 100) + 1;
    }

}

window.onload = onReady;