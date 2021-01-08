console.log("Vamos a jugar!");

let questionsDataBase = [
    {
        question: "What animal is on México's flag?",
        optA: "Eagle",
        optB: "Cow",
        optC: "Dog",
        correct: 1
    },
    {
        question: "When does México celebrates Independence Day?",
        optA: "May 5th",
        optB: "September 16th",
        optC: "November 20th",
        correct: 2
    }
]

const startBtn = document.querySelector("#start");
//event listener para el botón de start
//cuando se presione start se debe cambiar el título y las instruccionesy desaparecer el botón.

//debe ir moviendose a través del array conforme se vaya respondiendo y registrando el score
document.querySelector("#question").innerText = questionsDataBase[0].question;
document.querySelector("#answer1").innerText = questionsDataBase[0].optA;
document.querySelector("#answer2").innerText = questionsDataBase[0].optB;
document.querySelector("#answer3").innerText = questionsDataBase[0].optC;

const submitBtn = document.querySelector("#submitAnsr");
//even listener para el boton SUBMIT

const exitBtn = document.querySelector("#exit");
//even listener para el boton EXIT

console.log(questionsDataBase);