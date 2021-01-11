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
        question: "What is México's official name (in English)",
        optA: "Republic of México",
        optB: "México",
        optC: "Mexican United States",
        correct: "C"
    },
    {
        question: "Which of the following was invented by a Mexican?",
        optA: "Washing machine",
        optB: "Birth Control Pill",
        optC: "Adhesive tape",
        correct: "B"
    },
    {
        question: "When were the Olympic games celebrated in México?",
        optA: "1976",
        optB: "1988",
        optC: "1968",
        correct: "C"
    },
    {
        question: "Which of the following is one of the main products México exports?",
        optA: "Tomato",
        optB: "Chile",
        optC: "Strawberry",
        correct: "A"
    },
    {
        question: "What was México's name prior to its independence?",
        optA: "México",
        optB: "New Spain",
        optC: "Tenochtitlán",
        correct: "B"
    },
    {
        question: "What is México's estimated population by 2020?",
        optA: "130 million",
        optB: "100 million",
        optC: "115 million",
        correct: "A"
    },
    {
        question: "Which is the only state where Tequila is produced?",
        optA: "Chihuahua",
        optB: "Tlaxcala",
        optC: "Jalisco",
        correct: "C"
    },
    {
        question: "When does México celebrate the \"Day of the Dead\"?",
        optA: "November 2nd",
        optB: "May 5th",
        optC: "October 31st",
        correct: "A"
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
]

document.querySelector("#form").style.visibility = "hidden";
document.querySelector("#next").style.visibility = "hidden";
document.querySelector("#exit").style.visibility = "hidden";
document.querySelector("#playAgain").style.visibility = "hidden";
document.querySelector("#score").style.visibility = "hidden";
document.querySelector("#correctAnswer").style.display = "none";
document.querySelector("#imgToDisplay").style.display = "none";

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

//SELECCIÓN RESPUESTA
const selectAnswer1 = document.querySelector("#answer1");
selectAnswer1.addEventListener("click", dummyFunction);
const selectAnswer2 = document.querySelector("#answer2");
selectAnswer2.addEventListener("click", dummyFunction);
const selectAnswer3 = document.querySelector("#answer3");
selectAnswer3.addEventListener("click", dummyFunction);

let dummyVariable = "";
let dummyResponse = "";
function dummyFunction(event) {
    event.target.id;
    dummyVariable = event.target.id;
    if (dummyVariable === "answer1") {
        dummyResponse = "A";
    } else if (dummyVariable === "answer2") {
        dummyResponse = "B";
    } else {
        dummyResponse = "C"
    }
    console.log(dummyResponse);
}

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
    document.querySelector("#question").style.display= "initial";
    document.querySelector("#answer1").innerText= "A. "+ questionsDataBase[i].optA;
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
    document.querySelector("#game").style.backgroundColor = "whitesmoke";
    document.querySelector("#game").style.border = "5px solid #ce1126";
}

function checkAnswer(event) {
    event.preventDefault();
    const answerInput = document.querySelector("#yourAnswer").value;
    const capAnswerInput = answerInput.toUpperCase();
    console.log(capAnswerInput);
    if (capAnswerInput !== "A" && capAnswerInput !== "B" && capAnswerInput !== "C") {
        document.querySelector("#responseMsg").style.display = "initial"
        document.querySelector("#responseMsg").innerText = capAnswerInput + " is not a valid option";
        document.querySelector("#yourAnswer").value = "";
    } else {
    document.querySelector("#next").style.visibility = "initial";
    document.querySelector("#responseMsg").innerText = "";
    document.querySelector("#yourAnswer").value = "";
    if (capAnswerInput === questionsDataBase[i].correct) {
        yourScore += 1;
        document.querySelector("#imgToDisplay").style.display = "initial";
        document.querySelector("#imgToDisplay").setAttribute("src", imgSrc[i])
        console.log("yourScore= "+yourScore);
        document.querySelector("#responseMsg").style.display = "initial"
        document.querySelector("#responseMsg").innerText = "That is correct!";
        document.querySelector("#form").style.visibility = "hidden";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#imgToDisplay").style.display = "initial";
        document.querySelector("#imgToDisplay").setAttribute("src", imgSrc[i])
        document.querySelector("#responseMsg").style.display = "initial"
        document.querySelector("#responseMsg").innerText = "That is incorrect!";
        document.querySelector("#correctAnswer").style.display = "initial"
        document.querySelector("#correctAnswer").innerText = "The correct answer is " + questionsDataBase[i].correct;
        document.querySelector("#form").style.visibility = "hidden";
        } 
    }
    document.querySelector("#score").style.visibility = "initial";
    document.querySelector("#yourScore").value = yourScore;
    document.querySelector("#ignorance").value = ignorance;
    finalScore = yourScore - ignorance;
    return finalScore;
}

function nextQuestion() {
    i ++;
    document.querySelector("#imgToDisplay").style.display = "none";
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

function exitGame() {
    document.querySelector("#form").style.visibility = "hidden";
    document.querySelector("#next").style.visibility = "hidden";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#responseMsg").style.display = "initial";
    document.querySelector("#question").style.display = "none";
    document.querySelector("#answer1").style.visibility = "hidden";
    document.querySelector("#answer2").style.visibility = "hidden";
    document.querySelector("#answer3").style.visibility = "hidden";
    document.querySelector("h1").innerText = "THANK YOU FOR PLAYING";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#correctAnswer").style.display = "none";
    document.querySelector("#imgToDisplay").style.display = "none";
    if (finalScore > 0) {
        document.querySelector("#responseMsg").innerText = "You won by " + finalScore+ " points and beat the ignorance!";
    } else if (finalScore < 0) {
        document.querySelector("#responseMsg").innerText = "The ignorance beat you by " + (-1 * finalScore) + " points!";
    } else {
        document.querySelector("#responseMsg").innerText = "It's a tie!";
    }
    document.querySelector("#playAgain").style.visibility = "initial";
    document.querySelector("#score").style.visibility = "hidden";
    console.log(finalScore);
}

function playAgain() {
    location.reload();
}

console.log(questionsDataBase.length);