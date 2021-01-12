console.log("Vamos a jugar!");

let questionsDataBase = [
    {
        question: "What animal is on México's flag?",
        optA: "Eagle",
        optB: "Cow",
        optC: "Dog",
        correct: "A",
        correctAns: "Eagle"
    },
    {
        question: "When does México celebrate Independence Day?",
        optA: "May 5th",
        optB: "September 16th",
        optC: "November 20th",
        correct: "B",
        correctAns: "September 16th"
    },
    {
        question: "What is México's official name (in English)",
        optA: "Republic of México",
        optB: "México",
        optC: "Mexican United States",
        correct: "C",
        correctAns: "Mexican United States"
    },
    {
        question: "Which of the following was invented by a Mexican?",
        optA: "Washing machine",
        optB: "Birth Control Pill",
        optC: "Adhesive tape",
        correct: "B",
        correctAns: "Birth Control Pill"
    },
    {
        question: "When were the Olympic games celebrated in México?",
        optA: "1976",
        optB: "1988",
        optC: "1968",
        correct: "C",
        correctAns: "1968"
    },
    {
        question: "Which of the following is one of the main products México exports?",
        optA: "Tomato",
        optB: "Chile",
        optC: "Strawberry",
        correct: "A",
        correctAns: "Tomato"
    },
    {
        question: "What was México's name prior to its independence?",
        optA: "México",
        optB: "New Spain",
        optC: "Tenochtitlán",
        correct: "B",
        correctAns: "New Spain"
    },
    {
        question: "What is México's estimated population by 2020?",
        optA: "130 million",
        optB: "100 million",
        optC: "115 million",
        correct: "A",
        correctAns: "130 million"
    },
    {
        question: "Which is the only state where Tequila is produced?",
        optA: "Chihuahua",
        optB: "Tlaxcala",
        optC: "Jalisco",
        correct: "C",
        correctAns: "Jalisco"
    },
    {
        question: "When does México celebrate the \"Day of the Dead\"?",
        optA: "November 2nd",
        optB: "May 5th",
        optC: "October 31st",
        correct: "A",
        correctAns: "November 2nd"
    }
]

let imgSrc = [
    "images/bandera.jpg",
    "images/independencia.jpg",
    "images/EUM.jpg",
    "images/pill.jpg",
    "images/1968.jpg",
    "images/tomato.jpeg",
    "images/nuevaespana.jpg",
    "images/poblacion.jpg",
    "images/tequila.jpg",
    "images/muertos.jpg"
];

//FISHER-YATES ALGORITHM TO SHUFFLE AN ARRAY
//tutorialspoint.com/what-is-fisher-yates-shuffle-in.javascript
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let j = 0;
let k = 0;
let temp = 0;
function shuffle(myArray) {
    for (j = myArray.length -1; j > 0; j--) {
        k = Math.floor(Math.random() * (j + 1));
        temp = myArray[k];
        myArray[k] = myArray[j];
        myArray[j] = temp
    }
}
shuffle(myArray);

document.querySelector("#next").style.visibility = "hidden";
document.querySelector("#exit").style.visibility = "hidden";
document.querySelector("#playAgain").style.visibility = "hidden";
document.querySelector("#score").style.display = "none";
document.querySelector("#correctAnswer").style.display = "none";
document.querySelector("#imgToDisplay").style.display = "none";
document.querySelector("#finalMsg").style.display = "none";
document.querySelector("#myModal").style.display = "none";

//BOTÓN START
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);

//BOTÓN EXIT
const exitBtn = document.querySelector("#exit");
exitBtn.addEventListener("click", confirmExit);

//BOTÓN NEXT
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextQuestion);

//BOTÓN PLAY AGAIN
const playAgn = document.querySelector("#playAgain");
playAgn.addEventListener("click", playAgain);

//SELECCIÓN RESPUESTA
const selectAnswer1 = document.querySelector("#answer1");
selectAnswer1.addEventListener("click", checkAnswer);
const selectAnswer2 = document.querySelector("#answer2");
selectAnswer2.addEventListener("click", checkAnswer);
const selectAnswer3 = document.querySelector("#answer3");
selectAnswer3.addEventListener("click", checkAnswer);

//MODAL
const modal = document.getElementById("myModal");
const confirmYes = document.getElementById("exitYes");
confirmYes.addEventListener("click", exitGame)
const confirmNo = document.getElementById("exitNo");
confirmNo.addEventListener("click", cancelExit)

let yourScore = 0;
let ignorance = 0;
let i=0;
let finalScore = 0;

function startGame() {
    document.querySelector("#question").innerText = questionsDataBase[myArray[i]].question;
    document.querySelector("#question").style.display= "initial";
    document.querySelector("#answer1").innerText= "A. "+ questionsDataBase[myArray[i]].optA;
    document.querySelector("#answer1").style.visibility= "block";
    document.querySelector("#answer2").innerText = "B. "+ questionsDataBase[myArray[i]].optB;
    document.querySelector("#answer2").style.visibility= "block";
    document.querySelector("#answer3").innerText = "C. "+ questionsDataBase[myArray[i]].optC;
    document.querySelector("#answer3").style.visibility= "block";
    document.querySelector("#instructions").style.display = "none";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#exit").style.visibility = "initial";
    document.querySelector("#game").style.backgroundColor = "whitesmoke";
    document.querySelector("#game").style.border = "5px solid #ce1126";
}

function confirmExit(event) {
    event.preventDefault();
    console.log(i);
    modal.style.display = "block";
    document.querySelector("#game").style.opacity= "0";
    document.querySelector("#exit").style.opacity= "0";
}

function cancelExit(event) {
    event.preventDefault();
    console.log(i);
}

function checkAnswer(event) {
    event.preventDefault();
    answerInput = event.target.id;
    if (answerInput === "answer1") {
        capAnswerInput = "A";
    } else if (answerInput === "answer2") {
        capAnswerInput = "B";
    } else {
        capAnswerInput = "C"
    }
    document.querySelector("#next").style.visibility = "initial";
    document.querySelector("#answer1").style.display= "none";
    document.querySelector("#answer2").style.display= "none";
    document.querySelector("#answer3").style.display= "none";
    if (capAnswerInput === questionsDataBase[myArray[i]].correct) {
        yourScore += 1;
        document.querySelector("#imgToDisplay").style.display = "initial";
        document.querySelector("#imgToDisplay").setAttribute("src", imgSrc[myArray[i]])
        console.log("yourScore= "+yourScore);
        document.querySelector("#responseMsg").style.display = "initial"
        document.querySelector("#responseMsg").innerText = "That is correct!";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#imgToDisplay").style.display = "initial";
        document.querySelector("#imgToDisplay").setAttribute("src", imgSrc[myArray[i]])
        document.querySelector("#responseMsg").style.display = "initial";
        document.querySelector("#responseMsg").innerText = "That is incorrect!";
        document.querySelector("#correctAnswer").style.display = "initial";
        document.querySelector("#correctAnswer").innerText = "The correct answer is " + questionsDataBase[myArray[i]].correctAns;
        } 
    document.querySelector("#score").style.display = "flex";
    document.querySelector("#yourScore").value = yourScore;
    document.querySelector("#ignorance").value = ignorance;
    finalScore = yourScore - ignorance;
    return finalScore;
}

function nextQuestion(event) {
    i ++;
    event.preventDefault();
    document.querySelector("#imgToDisplay").style.display = "none";
    document.querySelector("#answer1").style.display= "block";
    document.querySelector("#answer2").style.display= "block";
    document.querySelector("#answer3").style.display= "block";
    if (i < questionsDataBase.length) {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.display = "none";
        document.querySelector("#correctAnswer").style.display = "none";
        startGame();
    } else {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.display = "none";
        console.log("GAME OVER");
        exitGame();
    }
}

function exitGame(event) {
    event.preventDefault(event);
    document.querySelector("#game").style.opacity= "1";
    document.querySelector("#myModal").style.display = "none";
    document.querySelector("#next").style.visibility = "hidden";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#responseMsg").style.display = "none";
    document.querySelector("#question").style.display = "none";
    document.querySelector("#answer1").style.visibility = "hidden";
    document.querySelector("#answer2").style.visibility = "hidden";
    document.querySelector("#answer3").style.visibility = "hidden";
    document.querySelector("h1").innerText = "THANK YOU FOR PLAYING";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#correctAnswer").style.display = "none";
    document.querySelector("#imgToDisplay").style.display = "none";
    document.querySelector("#finalMsg").style.display = "initial";
    if (finalScore > 0) {
        document.querySelector("#finalMsg").innerText = "You won by " + finalScore+ " points and beat the ignorance!";
    } else if (finalScore < 0) {
        document.querySelector("#finalMsg").innerText = "The ignorance beat you by " + (-1 * finalScore) + " points!";
    } else {
        document.querySelector("#finalMsg").innerText = "It's a tie!";
    }
    document.querySelector("#playAgain").style.visibility = "initial";
    document.querySelector("#score").style.display = "none";
    console.log(finalScore);
}

function playAgain() {
    location.reload();
}

console.log(questionsDataBase.length);