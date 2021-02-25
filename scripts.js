//RunGame is how the program is initialized
function runGame() {
  //Making the infomational Modal ("About this Game")
  const open = document.getElementById("openModal");
  const modal = document.getElementById("modalTextbox");
  const close = document.getElementById("closeModal");

  //Create Event Holders for the Modal
  const closeModal = () => {
    modal.style.display = "none";
  };
  const openModal = () => {
    modal.style.display = "block";
  };

  //Create Event Listeners for the Modal
  open.addEventListener("click", openModal);
  close.addEventListener("click", closeModal);

  //Define the Mystery Word (MW) which needs to be guessed by Player 2
  let mysteryWord = prompt("Enter your phrase here").toUpperCase();
  //Allow difficulty to be calibrate; for each lettter n in MW, 1 turn, + difficulty factor
  //1 is the most difficut, n+1 turns, etc.
  let difficulty = parseInt(
    prompt(
      "On a scale of 1-5, 5 being the easist, choose your difficulty level"
    )
  );
  //Convert MW into Array
  let splitWord = mysteryWord.split("");
  let wordTally = splitWord.length;
  //Create the guess- workspace and apply event-listeners to register selection
  answerCheckArray = [];
  const guessSection = document.querySelector(".answerSpace");
  //Apply the Guess Divs / Yellow boxes to the page (each represents one letter)
  function applyGuessDiv() {
    const guessDiv = document.createElement("div");
    guessDiv.className = "custom_class";
    const currentDiv = document.querySelector(".answerSpace");
    currentDiv.appendChild(guessDiv);
  }
  for (let i = 0; i <= splitWord.length - 1; i++) {
    applyGuessDiv();
  }
  // Get the letter selected in the placeholder element to display in the yellow child div
  function displayLetter(letterValue) {
    let myDivs = document.getElementsByClassName("custom_class");
    for (let i = 0; i <= splitWord.length - 1; i++) {
      myDivs.onclick = function () {
        this.innerHTML = letterValue;
      };
    }
  }
  //Define the placeholders (red boxes), assign event listeners, and set inner HTML = to letter selected
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
  //Define counter to establish win / loss conditions; difficulty was defined above
  let counter = wordTally;
  let incorrectCounter = wordTally + difficulty;
  //See if match between MW and selected letters in yellow boxes
  function checkForMatch(letter) {
    // console.log(mysteryWord.includes(letter));
    const yellowBoxes = document.querySelectorAll(".custom_class");
    const isWordIncluded = mysteryWord.includes(letter);
    if (isWordIncluded == true) {
      //   console.log(`Match Made with ${letter}!`);
      counter--;
      //   console.log(counter);

      //Loop through the MW and find all instances of that letter, if match, then:
      //check if corresponding yellow boxes, check if empty string / content
      let runThru = false;
      for (let i = 0; i <= splitWord.length - 1; i++) {
        if (letter === splitWord[i]) {
          //   console.log(letter, yellowBoxes[i]);
          if (yellowBoxes[i].innerHTML === "" && runThru === false) {
            yellowBoxes[i].innerHTML = letter;
            runThru = true;
          }
        }
      }
    } else {
      //   console.log("Incorrect Guess");
      //Decrement counter to reflect bad guess
      incorrectCounter--;
      //   console.log("Incorrect Counter:" + incorrectCounter);
    }
    if (counter === 0) {
        //Win Condition Triggered
      //   console.log("All Letters Successfully Deduced!");
      //This will trigger the victory condition
      setTimeout(pausedWinAlert, 1000);
      function pausedWinAlert() {
        alert("Success! You put out the fire!");
      }
      //Trigger Winning Flame Animation
      let flame = document.querySelector(".flame");
      flame.classList.add("flameAnimation");
    } else {
        //Loss Condition Triggered
      if (incorrectCounter === 0) {
        setTimeout(pausedLoseAlert, 1000);
        function pausedLoseAlert() {
          alert(
            "🔥You failed to guess all the letters and extinguish the fire!🔥"
          );
          //Trigger loss Flame Animation
          let flame = document.querySelector(".flame");
          flame.classList.add("infernoAnimation");
        }
      }
    }
    // console.log(counter);
    return counter;
  }
  //Call Function
  pushLetter();
}
//Call Function
runGame();

//End of Code