const guessedLetter = document.querySelector(".guessed-Letter");
const guessLetterbutton = docuemnt.querySelector(".guess");
const textInput = document.querySelector(".text-input");
const wordinProgress = document.querySelector("word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const spanInside = document.querySelector(".span-inside");
const messages = document.querySelector(".messages");
const hiddenButton = document.querySelector(".hidden-button");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt")
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
}
getWord();
const placeholder = function(word) {
 const placeholderLetters =[];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordinProgress.innerText = placeholderLetters.join();

};
placeholder(word);
guessLetterbutton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
});
const guess = textInput.value; {
const goodGuess = validateInput(guess);
if (goodGuess) {
    makeGuess(guess);
}
textInput.value = "";
};
const validateInput = function (input) {
    const acceptedLetter =  /[a-zA-Z]/;
    if (input.length ===0) {
        messages.innerText = "Please enter a single letter.";
    } else if (input.length > 1) {
        messages.innerText = "Please enter a leter from ! to Z";
    } else if (!input.match(acceptedLetter)) {
        messages.innerText = "please enter a single letter.";
    } else {
        return input;
    }
};
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        messages.innerText = "You already guessed that letter, silly, try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};
const showGuessedLetters = function () {
    guessedLettersElements.innerHTML = "";
    for (const letter of guessedLetters) {
        const li =document.createElement("li");
        li.innerText = letter;
        guessedLettersElements.append(li);        
    }
}
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
    } else {
        revealWord.push("●");
    }
}
wordinProgress.innerText = revealWord.join("");
checkIfWin();
};

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        messages.innerText = `Soory, the word has no ${guess}.`;
        remainingGuess -= 1;
    } else {
        messages.innerText = `Good guess! The word has the letter ${guess}.`;
    }
    if (remainingGuesses === 0) {
        messages.innerText = `Game over! The word was <span class="highlight">${word}</span>.`;
} else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
}
}
const checkIfWin = function () {
    if (word.toUpperCase() === wordinProgress.innerText) {
        messages.classList.add("win");
        messages.innerHTML = `<p class="highlight">You guessed the correct word! 
Congrats!</p>`;
    }
};

