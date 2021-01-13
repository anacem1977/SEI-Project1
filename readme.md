# Software Engineer Immersive Program - Project 1
## Trivia Game
Multiple choice question game about México

## Description & Motivation
I would like people to learn about some interesting and fun facts about México by playing this game. The player will be asked 10 random questions with three choices to select their answer from and they will need to beat the Ignorance by scoring the highest amount of correct answers.

## Technologies Used
+ Command Line: Interaction with the computer and navigating the file system.
+ Source Control: Interaction, management and uploading files and changes on code to Git repository
+ Visual Studio Code: Coding on HTML, CSS and JavaScript
+ Google Chrome Web Browser: Launching the website
+ Google Chrome Developer Tools: Debugging and solving problems in the code

## Installation
+ No special installation required:
+ Web Browser
+ Internet Connectivity

## Approach
The game uses an array of objects to store the questions, response choices and correct answers. A separate array stores sources of images to be displayed when a 
question is answered.

By using the Fisher-Yates algorithm, the game is able to randomize the order in which the questions are displayed each time the webpage is loaded.

The game begins by clicking on the "Start" button and it moves forward by using the "Next" button. The player is able to quit at any point once the game has 
started by using the "Exit" button. Once on the exit screen, the game can be reloaded by using the "Play Again" button.

Both the player's and "ignorance" (incorrectly answered questions) scores are stored in separate variables and shown on each screen. Once the 10 questions have been 
answered, the game will automatically take the player to the Exit screen and will render who won the game.

## Images
### Wireframe
![WF1](/readme_images/wireframe1.jpeg)
![WF2](/readme_images/wireframe2.jpeg)

### Welcome Screen
![Intro](/readme_images/Intro.png)

### Question
![Question](/readme_images/Question.png)

### Answer & Score
![Answer](/readme_images/Answer.png)

### Exit
![Exit](/readme_images/Exit.png)

## Goals
### Minimum Viable Product
+ 10 multiple choice questions ✔︎
+ No photos ✔︎
+ Type answer and hit submit ✔︎
+ Score shown on exit screen ✔︎
### Stretch Goal 1
+ Background image  ✔︎
+ Display images about correctanswers once responses are submitted ✔︎
+ Click on answer to select instead of typing ✔︎
+ Ask and display player's name ✔︎
### Stretch Goal 2
+ Add categories to select questions from
+ Add questions
+ Select how many questions to answer
+ Randomize questions  ✔︎
+ Display scores for player and ignorance ✔︎
+ Add modal when clicking "Exit" button (Are you sure you want to exit?) ✔︎
### Strecth Goal 3
+ Display information about the correct answer ✔︎
+ Add audio effects

## Author
Ana Cecilia Maldonado Cervantes