

//Psuedo Code

//Player One enteres the "mystery word, MW"


// let word = inputBox.value;
// const submitButton = document.querySelector(".submit_button");
// const inputBox = document.querySelector(".input_p1");


//The MW is hidden / obstructed / length is communicated to the player

let mysteryWord = prompt("Enter your phrase here");
// console.log(mysteryWord);
let splitWord = mysteryWord.split("");
// console.log(splitWord);
let wordTally = splitWord.length;
// console.log(wordTally);
//Make changes for difficulty calibration here
//wordTally ++


//Player Two begins the deduction process

answerCheckArray = [];
for (let i=0; i<= wordTally.length; i++) {
    answerCheckArray.push("");
    // console.log(answerCheckArray.length);
}

//Create the guess- workspace


const guessSection = document.querySelector(".answerSpace");

function applyGuessDiv() {
    const guessDiv = document.createElement("div");
    guessDiv.className = "custom_class"
    const currentDiv = document.querySelector(".answerSpace");
        document.body.appendChild(guessDiv);
};
    for(let i = 0;i <= splitWord.length-1; i++) {   
        applyGuessDiv();   
    };

    let listener = document.querySelectorAll(".placeholder")
    listener.addEventListener ("click", 
    });

    function registerLetter() {
        dispatchEvent.value
    }

//https://stackoverflow.com/questions/51327671/how-to-style-dynamically-created-elements-with-css


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

