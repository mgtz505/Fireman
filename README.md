# Fireman

A fun little word game for two players! I created this game to reflect on the HTML/CSS/JS skills I've developed thus-far. The game instructions can be found in the modal on the left side of the page.

## Link to hosted project in my github repo

## Game Overview

https://media.git.generalassemb.ly/user/34057/files/e2614a00-769a-11eb-8182-f6577f978a40"

- Fireman is a simple word game for two players, both of whom need to be sitting at the computer. Player one selects a word, the mystery word, which player two must then deduce to win the game. Player two has a guess for each letter in the word, plus several additional guesses which are determined by a difficulty calibration, The calibration is selected when player one chooses their word; five being the easiest (five additional guesses atop one for each letter in the word), one proving to be the most challenging (only one additional guess, yikes).
- For each letter in the mystery word, a yellow box is generated. When a correct letter is guessed by player two, the corresponding box will populate with the letter. Incorrect guesses do not register, making this a game of memory as well as deduction.
- An alert will communicate to both players that the word has been successfully deduced. If player two is not successful, a "game-over" message is displayed. For either outcome, an animation plays.
-Below, you can view screenshots demonstrating the gameplay detailed above:

<img width="641" alt="Screen Shot 2021-02-24 at 10 52 53 PM" src="https://user-images.githubusercontent.com/63027187/109101412-a3f87900-76f4-11eb-970d-0c3182226cf1.png">


<img width="1435" alt="Screen Shot 2021-02-24 at 10 52 09 PM" src="https://user-images.githubusercontent.com/63027187/109101484-c9858280-76f4-11eb-8b81-2a1519310482.png">

<img width="1384" alt="Screen Shot 2021-02-24 at 10 54 12 PM" src="https://user-images.githubusercontent.com/63027187/109101516-d7d39e80-76f4-11eb-940e-a184da00611e.png">


## Installation Instructions

## List of Technologies used

- This project was coded with HTML, CS and JavaScript. I did some rudimentary design using Figma for the building PVG. The flame is pixel art I found online.

The link to my Figma rendering is below:
https://www.figma.com/file/vlse2VUxTIw3iGzakXdJep/Untitled?node-id=0%3A1

## User Stories for this Project

- As a game player, I need to see that I am able to guess individual letters and that my correct guesses are registered by the game.
- As a game player, I need to see that the game remembers my letter choices for each subsequent turn.
- As a game player, I need to see, on a basic level, that the visual element representing a successful outcome is alterred in some capacity.
- As a game player, I need to have a winning condition; in this instance, successfully guessing the mystery word. A message or alert should be displayed alerting me that I have lost.
- As a game player, I need to have a losing condition; in this instance, when I run out of guesses. A message or alert should be displayed alerting me that I have lost.

## Production Wireframes

https://media.git.generalassemb.ly/user/34057/files/b4ee4980-721f-11eb-93ac-a7a6f63aa4cb

- The above image is a rudimentary representation of the graphic I intend this game to feature.

https://user-images.githubusercontent.com/63027187/108919836-b47bf700-7601-11eb-8ff5-269af42f770f.png

- The above image is the pixel art that will be animated by CSS once the ame win/loss condition has been met.

## Reflection / Issues Encountered

- This was a rewarding project, albeit frustrating at times (then again, seems like this is the norm for coding). My progress was a step-wise function; I'd find myself strugggling with an error, usually a bug in my code, or logistical issue for an hour or so. Once I had figured how to address this roadblock, I'd make quick progress untill I met my next hang-up!
  -Scope! I encountered more issues with local vs global scope than I'd like to admit with this project. I think that this process has helped me have a better understanding of scope, and my hope is that this practice serves as a strong foundation moving forward as I continue to code.
- An issue that I had not anticpated at the outset of this project was, simply put, how difficult it can be to manage a decent amount of code. I quickly found that pseudocode was absolutely essential to managing my workflow and ensuring that my code was coherent and easy to read.
- I feel like this project really reinforced the importance of having a roadmap prior to tackling an endeavour such as this one. I benefited from developing my wireframes and user stories prior to drafting my pseudocode, which I believe helped me ensure that all of my code had a purpose. No room for fluff!
- That said, it's obvious to me that there's always room for improvement. I would certainly benefit from continuing to practice DRY coding. Moreover, I could have simplified my code into object containers. At the time of this reflection, it seems intuitive to me that these changes would be the most apparent way to improve my code.
- Given more time, I would have liked to embelish some of the feature of my code, such as having the flame animation respond to correct / incorrect guesses rather than only responding to the game-end conditions. A countdown clock would have also been nice to incorporate.


## Sources Consulted in this project
- Shoutout to Jen, Esin and Carlos for their help in office hours!
#### CSS Formatting / Editing / Data Ids
- https://www.w3schools.com/css/css_positioning.asp
- https://stackoverflow.com/questions/51327671/how-to-style-dynamically-created-elements-with-css
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://stackoverflow.com/questions/5309926/how-to-get-the-data-id-attribute
- https://stackoverflow.com/questions/42764079/get-data-id-from-html-element
- https://stackoverflow.com/questions/35817843/comparing-elements-of-two-arrays
- https://bricampgomez.com/blog/how-to-overlap-images-in-css/

#### Array Manipulation
- https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/
- https://stackoverflow.com/questions/12503146/create-an-array-with-same-element-repeated-multiple-times

#### Animation Resources
- https://css-tricks.com/controlling-css-animations-transitions-javascript/

#### Flame Pixel Art Source
- https://lh3.googleusercontent.com/proxy/ei60f6SxDjlmVo6Qhz75oRFQAqw-VzWh_DomzA-yG444WhVxfeFTVJBOySgUKnu0fmNZpZ8stFPoJWXeLXc8RwY1eN_QC1CQ

