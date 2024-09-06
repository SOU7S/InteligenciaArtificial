const questions = [
    {
        question: "Como a poluição das águas subterrâneas afeta a saúde pública e o meio ambiente?",
        options: ["A poluição das águas subterrâneas compromete a saúde pública ao contaminar água potável e prejudica o meio ambiente ao afetar o solo, vegetação e fauna.", "A poluição das águas subterrâneas não afeta a saúde pública nem o meio ambiente, pois a água subterrânea não é usada para consumo e não interage com ecossistemas externos.", "A poluição das águas subterrâneas afeta a qualidade do ar, não tendo impacto direto sobre a saúde pública ou o meio ambiente.", "A poluição das águas subterrâneas causa apenas danos econômicos, sem consequências significativas para a saúde humana ou para o meio ambiente."],
        answer: "A poluição das águas subterrâneas compromete a saúde pública ao contaminar água potável e prejudica o meio ambiente ao afetar o solo, vegetação e fauna."
    },
    {
        question: "Na sua opinião, a dessalinização para produzir água potável possui mais vantagens ou desvantagens do uso dessa técnica?",
        options: ["A dessalinização é extremamente vantajosa, sendo barata e sem impactos ambientais negativos.", "A dessalinização não possui vantagens, pois é cara e ineficaz para resolver a escassez de água.", "A dessalinização oferece vantagens, como fornecer água potável a partir de fontes salinas, mas tem desvantagens, como altos custos e impacto ambiental da salmoura concentrada.", "A dessalinização é desvantajosa, produz água de baixa qualidade e não é adequada para grandes populações."],
        answer: "A dessalinização oferece vantagens, como fornecer água potável a partir de fontes salinas, mas tem desvantagens, como altos custos e impacto ambiental da salmoura concentrada."
    },
    {
        question: "Quais são os principais desafios enfrentados pelo Brasil na gestão de seus recursos hídricos, considerando a variabilidade climática e as desigualdades regionais na distribuição da água?",
        options: ["A água é uniformemente distribuída pelo Brasil e a variabilidade climática não afeta a disponibilidade de água.", "A poluição das águas é o principal desafio, causado pela falta de regulamentação.", "O Brasil enfrenta desafios na gestão hídrica devido à desigualdade na distribuição de água entre regiões e à variabilidade climática, como secas e chuvas intensas, que complicam o planejamento e a distribuição.", "Todos os estados têm acesso igual a água tratada e distribuída de forma eficiente."],
        answer: "O Brasil enfrenta desafios na gestão hídrica devido à desigualdade na distribuição de água entre regiões e à variabilidade climática, como secas e chuvas intensas, que complicam o planejamento e a distribuição."
    },
    {
        question: "Como a poluição das águas subterrâneas afeta a saúde pública e o meio ambiente?",
        options: ["A poluição das águas subterrâneas não afeta a saúde pública nem o meio ambiente, pois a água subterrânea não é usada para consumo e não interage com ecossistemas externos.", "A poluição das águas subterrâneas afeta a qualidade do ar, não tendo impacto direto sobre a saúde pública ou o meio ambiente.", "A poluição das águas subterrâneas causa apenas danos econômicos, sem consequências significativas para a saúde humana ou para o meio ambiente.", "A poluição das águas subterrâneas compromete a saúde pública ao contaminar água potável e prejudica o meio ambiente ao afetar o solo, vegetação e fauna."],
        answer: "A poluição das águas subterrâneas compromete a saúde pública ao contaminar água potável e prejudica o meio ambiente ao afetar o solo, vegetação e fauna."
    },
    {
        question: "Como você acredita que a inteligência artificial pode ser usada para melhorar a eficiência no gerenciamento e tratamento de recursos hídricos em áreas afetadas por escassez de água?",
        options: ["A inteligência artificial pode transformar a água potável em água desalinizada usando processos químicos avançados que são totalmente automatizados por máquinas inteligentes.", "A inteligência artificial pode otimizar o gerenciamento e tratamento de recursos hídricos através da análise de grandes volumes de dados em tempo real.", "Sistemas de inteligência artificial podem substituir completamente a necessidade de monitoramento humano dos corpos d'água, pois são capazes de identificar e resolver todos os problemas relacionados à poluição e qualidade da água de forma autônoma.", "A inteligência artificial pode aumentar a quantidade de água disponível em áreas áridas simplesmente ajustando o clima local através de técnicas de modificação climática automatizadas."],
        answer: "A inteligência artificial pode otimizar o gerenciamento e tratamento de recursos hídricos através da análise de grandes volumes de dados em tempo real."
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