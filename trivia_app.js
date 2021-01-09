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

//BOTÓN START
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);
//cuando se presione start se debe cambiar el título y las instruccionesy desaparecer el botón.

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

//el  siguiente código debe ir moviéndose a través del array conforme se vaya respondiendo y registrando el score
document.querySelector("#question").innerText = questionsDataBase[0].question;
document.querySelector("#answer1").innerText = "A. "+ questionsDataBase[0].optA;
document.querySelector("#answer2").innerText = "B. "+ questionsDataBase[0].optB;
document.querySelector("#answer3").innerText = "C. "+ questionsDataBase[0].optC;

function checkAnswer(event) {
    event.preventDefault();
    const answerInput = document.querySelector("#yourAnswer").value;
    const capAnswerInput = answerInput.toUpperCase();
    console.log(capAnswerInput);
    if (capAnswerInput !== "A" && capAnswerInput !== "B" && capAnswerInput !== "C") {
        document.querySelector("#responseMsg").innerText = capAnswerInput + " is not a valid option";
        document.querySelector("#yourAnswer").value = "";
    } else {
    document.querySelector("#responseMsg").innerText = "";
    document.querySelector("#yourAnswer").value = "";
    if (capAnswerInput === questionsDataBase[0].correct) {
        yourScore += 1;
        console.log(yourScore);
        document.querySelector("#responseMsg").innerText = "That is correct!";
    } else {
        ignorance += 1;
        console.log(ignorance);
        document.querySelector("#responseMsg").innerText = "That is not correct!"
        //LIMPIAR
        //SI LA RESPUESTA ES INCORRECTA PASAR A LA SIGUIENTE PREGUNTA
        //BOTON NEXT
    }
    
}
    //LLEVAR REGISTRO DEL SCORE
}

console.log(questionsDataBase);