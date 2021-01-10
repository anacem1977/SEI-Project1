console.log("Vamos a jugar!");

let questionsDataBase = [
    {
        question: "What animal is on México's flag?",
        optA: "Eagle",
        optB: "Cow",
        optC: "Dog",
        correct: "A"
    },
    {
        question: "When does México celebrates Independence Day?",
        optA: "May 5th",
        optB: "September 16th",
        optC: "November 20th",
        correct: "B"
    },
    {
        question: "What is Mexico's official name (in English)",
        optA: "Republic of Mexico",
        optB: "Mexico",
        optC: "Mexican United States",
        correct: "C"
    }
]
document.querySelector("#form").style.visibility = "hidden";
document.querySelector("#next").style.visibility = "hidden";
document.querySelector("#exit").style.visibility = "hidden";
document.querySelector("#playAgain").style.visibility = "hidden";
document.querySelector("#score").style.visibility = "hidden";

//BOTÓN START
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);

//BOTÓN SUBMIT
const submitBtn = document.querySelector("#submitAnsr");
submitBtn.addEventListener("click", checkAnswer);
submitBtn.addEventListener("enter", checkEnter);
//no funciona con ENTER :(

//BOTÓN EXIT
const exitBtn = document.querySelector("#exit");
exitBtn.addEventListener("click", exitGame);

//BOTÓN NEXT
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextQuestion);

//BOTÓN PLAY AGAIN
const playAgn = document.querySelector("#playAgain");
playAgn.addEventListener("click", playAgain);

function checkEnter(event) {
    console.log(event);
    if (event.keyCode === 13) {
        checkAnswer(event)
    }
}

let yourScore = 0;
let ignorance = 0;
let i=0;
let finalScore = 0;

function startGame() {
    document.querySelector("#question").innerText = questionsDataBase[i].question;
    document.querySelector("#question").style.visibility= "initial";
    document.querySelector("#answer1").innerText = "A. "+ questionsDataBase[i].optA;
    document.querySelector("#answer1").style.visibility= "initial";
    document.querySelector("#answer2").innerText = "B. "+ questionsDataBase[i].optB;
    document.querySelector("#answer2").style.visibility= "initial";
    document.querySelector("#answer3").innerText = "C. "+ questionsDataBase[i].optC;
    document.querySelector("#answer3").style.visibility= "initial";
    document.querySelector("#form").style.visibility = "initial";
    document.querySelector("#instructions").style.display = "none";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#exit").style.visibility = "initial";
    console.log("i= "+i);
}

function checkAnswer(event) {
    event.preventDefault();
    const answerInput = document.querySelector("#yourAnswer").value;
    const capAnswerInput = answerInput.toUpperCase();
    console.log(capAnswerInput);
    if (capAnswerInput !== "A" && capAnswerInput !== "B" && capAnswerInput !== "C") {
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = capAnswerInput + " is not a valid option";
        document.querySelector("#yourAnswer").value = "";
    } else {
    document.querySelector("#next").style.visibility = "initial";
    document.querySelector("#responseMsg").innerText = "";
    document.querySelector("#yourAnswer").value = "";
    if (capAnswerInput === questionsDataBase[i].correct) {
        yourScore += 1;
        console.log("yourScore= "+yourScore);
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = "That is correct!";
        document.querySelector("#form").style.visibility = "hidden";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#responseMsg").style.visibility = "initial"
        document.querySelector("#responseMsg").innerText = "That is not correct!";
        document.querySelector("#form").style.visibility = "hidden";
        } 
    }
    document.querySelector("#score").style.visibility = "initial";
    document.querySelector("#yourScore").value = yourScore;
    document.querySelector("#ignorance").value = ignorance;
    finalScore = yourScore - ignorance;
    if (finalScore > 0) {
        console.log("PLAYER WINS");
    } else if (finalScore < 0) {
        console.log("IGNORANCE WINS");
    } else {
        console.log("IT'S A TIE");
    }
    return finalScore;
}

function nextQuestion() {
    i ++;
    if (i < questionsDataBase.length) {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.visibility = "hidden";
        startGame();
    } else {
        document.querySelector("#next").style.visibility = "hidden";
        document.querySelector("#responseMsg").style.visibility = "hidden";
        console.log("GAME OVER");
        exitGame();
        //MOSTRAR REGISTRO DEL SCORE
    }
}

function exitGame() {
    document.querySelector("#form").style.visibility = "hidden";
    document.querySelector("#next").style.visibility = "hidden";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#responseMsg").style.visibility = "hidden";
    document.querySelector("#question").style.visibility = "hidden";
    document.querySelector("#answer1").style.visibility = "hidden";
    document.querySelector("#answer2").style.visibility = "hidden";
    document.querySelector("#answer3").style.visibility = "hidden";
    document.querySelector("h1").innerText = "THANK YOU FOR PLAYING";
    document.querySelector("#subtitle").style.display = "initial";
    document.querySelector("subtitle").innerText = "Winner!";
    document.querySelector("#playAgain").style.visibility = "initial";
    document.querySelector("#score").style.visibility = "hidden";
    console.log(finalScore);
}

function playAgain() {
    document.querySelector("h1").innerText = "How much do you know about México?";
    document.querySelector("#form").style.visibility = "hidden";
    document.querySelector("#instructions").style.display = "initial";
    document.querySelector("#start").style.display = "initial";
    document.querySelector("#subtitle").style.display = "initial";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#playAgain").style.visibility = "hidden";
    document.querySelector("#score").style.visibility = "hidden";
    i=0;
}

console.log(questionsDataBase.length);