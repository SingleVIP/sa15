const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Mark Twain"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        correctAnswer: "Mitochondria"
    },
    {
        question: "What is the closest planet to the Sun?",
        options: ["Earth", "Mars", "Jupiter", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "My mother’s mother is my…what?",
        options: ["Myself", "Aunt", "Grandmother", "Mother"],
        correctAnswer: "Grandmother"
    },
    {
        question: "How many colors of the rainbow are there?",
        options: ["Six", "Seven", "Eight", "Nine"],
        correctAnswer: "Seven"
    }
];

const quizSection = document.getElementById("quiz-section");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            loadQuestion();
        }, 1000); // Delay for 1 second before loading the next question
    } else {
        setTimeout(() => {
            showResult();
        }, 1000);
    }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${quizData.length}!\nYou can refresh page to restart.`;
}

loadQuestion();
