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
        optC: "United Mexican States",
        correct: "C"
    }
]
document.querySelector("#form").style.visibility = "hidden";
document.querySelector("#next").style.visibility = "hidden";

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
//PENDIENTE: event listener para el boton EXIT y código para salir

//BOTÓN NEXT
const nextBtn = document.querySelector("#next");
//PENDIENTE: event listener para el boton NEXT y código para salir

//una vez que se valide la respuesta, las preguntas y respuestas se deben reemplazar por las siguientes

function checkEnter(event) {
    console.log(event);
    if (event.keyCode === 13) {
        checkAnswer(event)
    }
}

let yourScore = 0;
let ignorance = 0;

function startGame() {
    //el  siguiente código debe ir moviéndose a través del array conforme se vaya respondiendo y registrando el score
    document.querySelector("#question").innerText = questionsDataBase[0].question;
    document.querySelector("#answer1").innerText = "A. "+ questionsDataBase[0].optA;
    document.querySelector("#answer2").innerText = "B. "+ questionsDataBase[0].optB;
    document.querySelector("#answer3").innerText = "C. "+ questionsDataBase[0].optC;
    document.querySelector("#form").style.visibility = "initial";
    document.querySelector("#instructions").style.display = "none";
    document.querySelector("#subtitle").style.display = "none";
}

function checkAnswer(event) {
    event.preventDefault();
    const answerInput = document.querySelector("#yourAnswer").value;
    const capAnswerInput = answerInput.toUpperCase();
    console.log(capAnswerInput);
    if (capAnswerInput !== "A" && capAnswerInput !== "B" && capAnswerInput !== "C") {
        document.querySelector("#responseMsg").innerText = capAnswerInput + " is not a valid option";
        document.querySelector("#yourAnswer").value = "";
    } else {
    document.querySelector("#next").style.visibility = "initial";
    document.querySelector("#responseMsg").innerText = "";
    document.querySelector("#yourAnswer").value = "";
    if (capAnswerInput === questionsDataBase[0].correct) {
        yourScore += 1;
        console.log(yourScore);
        document.querySelector("#responseMsg").innerText = "That is correct!";
        document.querySelector("#form").style.visibility = "hidden";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#responseMsg").innerText = "That is not correct!";
        document.querySelector("#form").style.visibility = "hidden";
        //LIMPIAR
        //SI LA RESPUESTA ES INCORRECTA PASAR A LA SIGUIENTE PREGUNTA
        //BOTON NEXT
    }
    
}
    //LLEVAR REGISTRO DEL SCORE
}

console.log(questionsDataBase.length);