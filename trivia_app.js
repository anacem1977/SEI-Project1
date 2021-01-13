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
        correctAns: "United Mexican States"
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

//FISHER-YATES ALGORITHM TO SHUFFLE AN ARRAY
//tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
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
document.querySelector("#moreInfoButton").style.visibility = "hidden";
document.querySelector("#playAgain").style.visibility = "hidden";
document.querySelector("#score").style.display = "none";
document.querySelector("#correctAnswer").style.display = "none";
document.querySelector("#imgToDisplay").style.display = "none";
document.querySelector("#finalMsg").style.display = "none";
document.querySelector("#myModal").style.display = "none";
document.querySelector("#moreInfoModal").style.display = "none";

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

//MORE INFO
const moreInfo = document.getElementById("moreInfoModal");
const openMoreInfo = document.getElementById("moreInfoButton");
openMoreInfo.addEventListener("click", getMoreInfo);
const span = document.getElementsByClassName("close")[0];

let yourScore = 0;
let ignorance = 0;
let i=0;
let finalScore = 0;
let playerName = ""

function startGame() {
    playerName = (document.querySelector("#yourName").value);
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
    return playerName;
}

function confirmExit(event) {
    event.preventDefault();
    modal.style.display = "block";
    document.querySelector("#game").style.opacity= "0";
    document.querySelector("#exit").style.opacity= "0";
    document.querySelector("#moreInfoButton").style.visibility = "hidden";
}

function cancelExit(event) {
    event.preventDefault();
    document.querySelector("#game").style.opacity= "1";
    document.querySelector("#exit").style.opacity= "1";
    modal.style.display = "none";
    document.querySelector("#moreInfoButton").style.visibility = "initial";
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
    document.querySelector("#moreInfoButton").style.visibility = "initial";
    if (capAnswerInput === questionsDataBase[myArray[i]].correct) {
        yourScore += 1;
        document.querySelector("#imgToDisplay").style.display = "initial";
        document.querySelector("#imgToDisplay").setAttribute("src", imgSrc[myArray[i]])
        document.querySelector("#responseMsg").style.display = "initial"
        document.querySelector("#responseMsg").innerText = "That is correct!";
    } else {
        ignorance += 1;
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

span.onclick = function() {
    moreInfo.style.display = "none";
    document.querySelector("#game").style.opacity= "1";
    document.querySelector("#exit").style.opacity= "1";
}

function nextQuestion(event) {
    i ++;
    event.preventDefault();
    document.querySelector("#moreInfoButton").style.visibility = "hidden";
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
        exitGame();
    }
}

function exitGame(event) {
    event.preventDefault();
    document.querySelector("#game").style.opacity= "1";
    document.querySelector("form").style.display = "none";
    document.querySelector("#myModal").style.display = "none";
    document.querySelector("#next").style.visibility = "hidden";
    document.querySelector("#exit").style.visibility = "hidden";
    document.querySelector("#moreInfoButton").style.visibility = "hidden";
    document.querySelector("#responseMsg").style.display = "none";
    document.querySelector("#question").style.display = "none";
    document.querySelector("#answer1").style.visibility = "hidden";
    document.querySelector("#answer2").style.visibility = "hidden";
    document.querySelector("#answer3").style.visibility = "hidden";
    document.querySelector("h1").innerText = "THANK YOU FOR PLAYING " + playerName + "!";
    document.querySelector("#subtitle").style.display = "none";
    document.querySelector("#correctAnswer").style.display = "none";
    document.querySelector("#imgToDisplay").style.display = "none";
    document.querySelector("#finalMsg").style.display = "initial";
    if (finalScore > 0) {
        document.querySelector("#finalMsg").innerText = "You won and beat the ignorance by " + finalScore+ " points !";
    } else if (finalScore < 0) {
        document.querySelector("#finalMsg").innerText = "The ignorance beat you by " + (-1 * finalScore) + " points!";
    } else {
        document.querySelector("#finalMsg").innerText = "It's a tie!";
    }
    document.querySelector("#playAgain").style.visibility = "initial";
    document.querySelector("#score").style.display = "none";
}

function getMoreInfo(event) {
    event.preventDefault();
    moreInfo.style.display = "block";
    document.querySelector("#game").style.opacity= "0";
    document.querySelector("#exit").style.opacity= "0";
    document.querySelector("#text2InModal").innerText = moreInformation[myArray[i]];
    document.querySelector("#moreInfoButton").style.visibility = "hidden";
}

function playAgain() {
    location.reload();
}

let imgSrc = [
    "images/bandera.jpg",
    "images/independencia.jpg",
    "images/EUM2.png",
    "images/pill.jpg",
    "images/1968.jpg",
    "images/tomato.jpeg",
    "images/nuevaespana.jpg",
    "images/poblacion.jpg",
    "images/tequila.jpg",
    "images/muertos.jpg"
];

let moreInformation = [
    "The flag of Mexico is a vertical tricolor of green, white, and red with the national coat of arms charged in the center of the white stripe. The coat of arms features an eagle, holding a serpent in its talon, is perched on top of a prickly pear cactus; the cactus is situated on a rock that rises above a lake. (en.wikipedia.org/wiki/Flag_of_Mexico)",
    "Miguel Hidalgo y Costilla was a Roman Catholic priest and is now considered the father of Mexican independence. His uprising on 16 September 1810 is considered the spark igniting the Mexican War of Independence when he rang his church bell and gave the call to arms. (en.wikipedia.org/wiki/Cry_of_Dolores, en.wikipedia.org/wiki/Mexican_War_of_Independence",
    "Mexico officially the United Mexican States (Estados Unidos Mexicanos), is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico. en.wikipedia.org/wiki/Mexico",
    "Luis Ernesto Miramontes Cárdenas (March 16, 1925 – September 13, 2004) was a Mexican chemist known as the co-inventor of the progestin norethisterone used in one of the first three oral contraceptives. en.wikipedia.org/wiki/Luis_E._Miramontes",
    "The 1968 Summer Olympics, officially known as the Games of the XIX Olympiad, were an international multi-sport event held from 12 to 27 October 1968 in Mexico City, Mexico. These were the first Olympic Games to be staged in Latin America and the first to be staged in a Spanish-speaking country. en.wikipedia.org/wiki/1968_Summer_Olympics",
    "Mexico exports a wide variety of products, led by tomatoes, peppers, asparagus, onions, and cucumbers. In particular, Mexico is an important source of winter vegetables for the United States. www.ers.usda.gov/webdocs/outlooks/40425/15579_wrs0406f_1_.pdf?v=577.5",
    "The Viceroyalty of New Spain was an integral territorial entity of the Spanish Empire, established by Habsburg Spain during the Spanish colonization of the Americas. It included what is now Mexico plus the current U.S. states of California, Nevada, Colorado, Utah, New Mexico, Arizona, Texas, Oregon, Washington, Florida, Louisiana, the Captaincy General of Guatemala, the Captaincy General of Cuba, and the Captaincy General of the Philippines. en.wikipedia.org/wiki/New_Spain",
    "With a population of about 126 million in 2019, Mexico is the 10th most populated country in the world. It is the most populous Spanish-speaking country and the third-most populous in the Americas after the United States and Brazil. en.wikipedia.org/wiki/Demographics_of_Mexico",
    "Santiago de Tequila is a Mexican town and municipality located in the state of Jalisco about 60 km from the city of Guadalajara.Tequila is best known as being the birthplace of the drink that bears its name, “tequila,” which is made from the blue agave plant, native to this area. en.wikipedia.org/wiki/Tequila,_Jalisco",
    "The Day of the Dead is a Mexican holiday celebrated in Mexico and elsewhere associated with the Catholic celebrations of All Saints' Day and All Souls' Day. The multi-day holiday involves family and friends gathering to pray for and to remember friends and family members who have died. It is commonly portrayed as a day of celebration rather than mourning. en.wikipedia.org/wiki/Day_of_the_Dead"
]