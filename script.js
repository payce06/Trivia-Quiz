const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById('options');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-btn');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Lisbon'],
        correct: 1
    },
    {
        question: 'What is 5+ 7?',
        options: ['12', '11', '13', '13'],
        correct: 0
    },
    {
        question: 'Who wrote Harry Potter?',
        options: ['J.R.R. Tolkien', 'George R.R. Martin', 'J.K. Rowling', 'Suzanne Collins'],
        correct: 2
    },
    {
        question: 'What is the chemical symbol for water?',
        options: ['02', 'CO2', 'HO2', 'H2O'],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startTimer() {
    let timeLeft = 10;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextButton.style.display = 'inline-block';
        }
    }, 1000);
}