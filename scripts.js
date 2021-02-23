//Player One enteres the "mystery word, MW"

// let word = inputBox.value;
// const submitButton = document.querySelector(".submit_button");
// const inputBox = document.querySelector(".input_p1");

//The MW is hidden / obstructed / length is communicated to the player

let mysteryWord = prompt("Enter your phrase here").toUpperCase();
let splitWord = mysteryWord.split("");
let wordTally = splitWord.length;
//Make changes for difficulty calibration here
//wordTally ++

//Create the guess- workspace and apply event-listeners to register selection
answerCheckArray = [];
// for (let i=0; i<= wordTally; i++) {
//     answerCheckArray.push("");
// }
const guessSection = document.querySelector(".answerSpace");

function applyGuessDiv() {
  const guessDiv = document.createElement("div");
  guessDiv.className = "custom_class";
  const currentDiv = document.querySelector(".answerSpace");
  currentDiv.appendChild(guessDiv);
}
for (let i = 0; i <= splitWord.length - 1; i++) {
  applyGuessDiv();
}
//Attempt at getting the letter to display in the yellow child div
// function displayLetter() {
//    let myDivs = document.getElementsByClassName("custom_class")
//     for (let i =0; i <=splitWord.length-1;i++){
//         myDivs.onclick = function() {
//             this.innerHTML = letterValue
//         }
//     }
// }

const letterBoxes = document.getElementsByClassName("placeholders");
// console.log(letterBoxes);

let letters = Array(26).fill("");
let value = null;
let letterValue = null;
function pushLetter() {
  for (let i = 0; i <= letters.length - 1; i++) {
    const letterValue = letterBoxes[i].getAttribute("data-id");
    letterBoxes[i].addEventListener("click", () => {
      letters[i] = letterValue;
      value = letters[i];
      answerCheckArray.push(value);
    //   console.log(letters);
      //   displayLetter()
      checkForMatch();
      return value;
    });
  }
}
let counter = wordTally;
function checkForMatch() {
  console.log(answerCheckArray);
  for (let i = 0; i < wordTally; i++) {
    if (answerCheckArray[i] === splitWord[i]) {
      console.log(
        `Match Made with ${splitWord[i]}! There are ${
          wordTally - i - 1
        } letter slots that remain to be discovered!`);
        if(wordTally - i -1 < 0){
            return
        }
    } else {
      if (answerCheckArray[i] !== splitWord[i]) {
        console.log(`No Match Made -- ${answerCheckArray[i]} is incorrect`);
        // counter--


        // were it not for the continual iteration, could use .pop to remove the incorrect answer


        //Penalty for incorrect Guesses
        // counter--
        //     if( counter < 0){
        //         console.log("PLACEHOLDER")
        //         return
        //     }
      }
    }
  }
  console.log(counter);
  return counter;
}
console.log(letters);

// let position = 0;
// answerCheckArray[position++] = num
//             console.log(answerCheckArray);

// for (let i=0; i<= wordTally; i++){
//     if(answerCheckArray[i] === splitWord[i]){
//         console.log("match made");
//     }
// }

pushLetter();
// checkForMatch();
// let position = 0;
//     answerCheckArray[position++] = pushLetter()
//     console.log(answerCheckArray);

//Player Two begins the deduction process

// console.log(answerCheckArray.length);
// console.log(answerCheckArray);
// console.log(letters);
// console.log(splitWord);

// Create the comparison for loop
// for (let i=0; i<= wordTally; i++){
//     if(answerCheckArray[i] === splitWord[i]){
//         console.log("match made");
//     }
// }

// When a letter is correctly deduced, a visual
//element of the fire is removed

//When a letter is not removed, either
//A meter on the side of the screen fills-in
//or
//the building animates to become more charred

//If the word is correctly deduced, the victory
//condition is met // victory for P2

//If the word is not correctly deduced, the victory
//condition is not met // victory for P1

//Sources Consulted:

//https://stackoverflow.com/questions/51327671/how-to-style-dynamically-created-elements-with-css

//Repeating Array:
//https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times
//Data-id:
//https://stackoverflow.com/questions/5309926/how-to-get-the-data-id-attribute
//https://stackoverflow.com/questions/42764079/get-data-id-from-html-element
