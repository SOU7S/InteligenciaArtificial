const questions = [
    {
        question: "Você sabe qual a porcentagem de água potável no mundo?",
        options: ["1%", "10%", "30%", "3%"],
        answer: "3%"
    },
    {
        question: "Como a poluição das águas subterrâneas afeta a saúde pública e o meio ambiente?",
        options: ["Afirmação 1", "Afirmação 2", "Ambas as afirmações", "Nenhuma das afirmações"],
        answer: "Ambas as afirmações"
    },
    {
        question: "Na sua opinião, a dessalinização para produzir água potável possui mais vantagens ou desvantagens do uso dessa técnica?",
        options: ["Vantagens", "Desvantagens", "Ambas", "Nenhuma das opções"],
        answer: "Ambas"
    },
    {
        question: "Você acredita que os impactos são positivos ou negativos das barragens hidroelétricas em comunidades locais?",
        options: ["Impactos positivos", "Impactos negativos", "Ambos", "Nenhuma das opções"],
        answer: "Ambos"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score-value');
const quizElement = document.getElementById('quiz');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');

// Função para iniciar o jogo
function startQuiz() {
    showQuestion();
    nextButton.addEventListener('click', showNextQuestion);
    restartButton.addEventListener('click', restartQuiz);
}

// Função para mostrar a próxima pergunta
function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Função para exibir a pergunta atual
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', checkAnswer);
        optionsElement.appendChild(button);
    });
}

// Função para verificar a resposta selecionada
function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    showNextQuestion();
}

// Função para exibir o resultado final
function showResult() {
    quizElement.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = score + "/" + questions.length;
}

// Função para recomeçar o jogo
function restartQuiz() {
    quizElement.classList.remove('hidden');
    resultElement.classList.add('hidden');
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// Iniciar o jogo quando a página carrega
document.addEventListener('DOMContentLoaded', startQuiz);