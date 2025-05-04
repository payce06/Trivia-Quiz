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