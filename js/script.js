const guessedLetter = document.querySelector(".guessed-Letter");
const guessLetterbutton = docuemnt.querySelector(".guess");
const textInput = document.querySelector(".text-input");
const wordinProgress = document.querySelector("word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const spanInside = document.querySelector(".span-inside");
const messages = document.querySelector(".messages");
const hiddenButton = document.querySelector(".hidden-button");
const word = "magnolia";
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