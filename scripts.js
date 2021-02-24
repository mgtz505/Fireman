function runGame() {
  //Making the infomational Modal & Reset Button
  const open = document.getElementById("openModal");
  const modal = document.getElementById("modalTextbox");
  const close = document.getElementById("closeModal");

  //Create Event Holders
  const closeModal = () => {
    modal.style.display = "none";
  };
  const openModal = () => {
    modal.style.display = "block";
  };

  //Event Listeners
  open.addEventListener("click", openModal);
  close.addEventListener("click", closeModal);
  //Reset Button
  //Timer Construction

  let mysteryWord = prompt("Enter your phrase here").toUpperCase();
  let difficulty = parseInt(
    prompt(
      "On a scale of 1-5, 5 being the easist, choose your difficulty level"
    )
  );
  let splitWord = mysteryWord.split("");
  let wordTally = splitWord.length;

  //Create the guess- workspace and apply event-listeners to register selection
  answerCheckArray = [];
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
  // Attempt at getting the letter to display in the yellow child div
  function displayLetter(letterValue) {
    let myDivs = document.getElementsByClassName("custom_class");
    for (let i = 0; i <= splitWord.length - 1; i++) {
      myDivs.onclick = function () {
        this.innerHTML = letterValue;
      };
    }
  }
  const letterBoxes = document.getElementsByClassName("placeholders");
  // console.log(letterBoxes);
  let letters = Array(26).fill("");
  let value = null;
  let letterValue = null;
  function pushLetter() {
    for (let i = 0; i <= letters.length - 1; i++) {
      const letterValue = letterBoxes[i].getAttribute("data-id");
      letterBoxes[i].addEventListener("click", () => {
        //   this.classList.add(".strikeOutAnimation");
        letters[i] = letterValue;
        value = letters[i];
        answerCheckArray.push(value);
        //   console.log(letters);
        // displayLetter(value);
        checkForMatch(value);

        return value;
      });
    }
    return;
  }

  let counter = wordTally;
  let incorrectCounter = wordTally + difficulty;
  //calibrate difficulty above
  function checkForMatch(letter) {
    console.log(mysteryWord.includes(letter));
    const isWordIncluded = mysteryWord.includes(letter);
    if (isWordIncluded == true) {
      console.log(`Match Made with ${letter}!`);
      counter--;
      console.log(counter);
      const indexOfLetter = mysteryWord.indexOf(letter);
      document.querySelectorAll(".custom_class")[
        indexOfLetter
      ].innerHTML = letter;
    } else {
      console.log("Incorrect Guess");
      incorrectCounter--;
      console.log("Incorrect Counter:" + incorrectCounter);
    }
    if (counter === 0) {
      console.log("All Letters Successfully Deduced!");
      //This will trigger the victory condition
      setTimeout(pausedWinAlert, 1000);
      function pausedWinAlert() {
        alert("Success! You put out the fire!");
      }
      let flame = document.querySelector(".flame");
      flame.classList.add("flameAnimation");
    } else {
      if (incorrectCounter === 0) {
        setTimeout(pausedLoseAlert, 1000);
        function pausedLoseAlert() {
          alert(
            "🔥You failed to guess all the letters and extinguish the fire!🔥"
          );
          let flame = document.querySelector(".flame");
          flame.classList.add("infernoAnimation");
        }
      }
    }
    console.log(counter);
    return counter;
  }
  pushLetter();
}
runGame();
//Sources Consulted:

//https://stackoverflow.com/questions/51327671/how-to-style-dynamically-created-elements-with-css

//Repeating Array:
//https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times
//Data-id:
//https://stackoverflow.com/questions/5309926/how-to-get-the-data-id-attribute
//https://stackoverflow.com/questions/42764079/get-data-id-from-html-element
//https://stackoverflow.com/questions/35817843/comparing-elements-of-two-arrays

//Image Source: https://lh3.googleusercontent.com/proxy/ei60f6SxDjlmVo6Qhz75oRFQAqw-VzWh_DomzA-yG444WhVxfeFTVJBOySgUKnu0fmNZpZ8stFPoJWXeLXc8RwY1eN_QC1CQ

//Animation Resources:
//https://css-tricks.com/controlling-css-animations-transitions-javascript/
//https://bricampgomez.com/blog/how-to-overlap-images-in-css/
