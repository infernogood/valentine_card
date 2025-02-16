let currentQuestion = 0;
let correctAnswers = 0;
const questions = [
    {
        image: "question1.jpg",
        text: "Что мы сейчас будем делать?",
        answers: [
            { text: "Тыкать кнопочки на рандом", correct: false },
            { text: "Верно отвечать на вопросики", correct: true },
            { text: "Хэзэ ващ", correct: false }
        ],
        correctResponse: "Да, это так)",
        incorrectResponse: "Не-а, мы займемся другим!"
    },
    {
        image: "question2.jpg",
        text: "Как думаешь, я тебя люблю?",
        answers: [
            { text: "ОПРЕДЕЛЕННО ДА", correct: true },
            { text: "Ну чучуть", correct: false },
            { text: "Пфф, нет", correct: false }
        ],
        correctResponse: "А как иначе!",
        incorrectResponse: "Я чего-то не знаю?"
    },
    {
        image: "question3.jpg",
        text: "Будешь моим котенком?",
        answers: [
            { text: "Да", correct: true },
            { text: "Конечно", correct: true },
            { text: "С радостью", correct: true }
        ],
        correctResponse: "Мур-мяу! Правильно!",
        incorrectResponse: "Ну как же так?"
    },
    {
        image: "question4.jpg",
        text: "Почему я всегда улыбаюсь, когда вижу тебя?",
        answers: [
            { text: "Просто дурачок", correct: false },
            { text: "Вспоминаются мемы", correct: false },
            { text: "Тебя хочется поцеловать", correct: true }
        ],
        correctResponse: "Да, и правда)",
        incorrectResponse: "Не угадала!"
    },
    {
        image: "question5.jpg",
        text: "Почему мне так комфортно рядом с тобой?",
        answers: [
            { text: "Мечтаю о постели", correct: false },
            { text: "Ты похожа на котенка", correct: true },
            { text: "Думаю о еде", correct: false }
        ],
        correctResponse: "Точно! Ты как котенок!",
        incorrectResponse: "Не-а, подумай еще!"
    },
    {
        image: "question6.jpg",
        text: "Так, и почему же я не пришел вчера в школу?",
        answers: [
            { text: "Бегал до трех ночи", correct: false },
            { text: "Играл в майнкрафт до утра", correct: false },
            { text: "Делал этот сайт для тебя всю ночь", correct: true }
        ],
        correctResponse: "Верно! Я трудился над этим сайтом!",
        incorrectResponse: "Недооцениваешь)"
    }
];

// Показываем начальную гифку
document.getElementById('valentineGif').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('caption').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion(currentQuestion);
});

function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    document.getElementById('questionImage').src = `images/${question.image}`;
    document.getElementById('questionText').textContent = question.text;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.onclick = () => checkAnswer(questionIndex, answer.text);
        answersDiv.appendChild(button);
    });
    document.getElementById('result').textContent = '';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('retryQuestion').style.display = 'none';
}

function checkAnswer(questionIndex, selectedAnswer) {
    const question = questions[questionIndex];
    const result = document.getElementById('result');
    const isCorrect = question.answers.find(answer => answer.text === selectedAnswer).correct;
    if (isCorrect) {
        result.style.color = '#5cb85c'; /* Зеленый для правильного ответа */
        result.textContent = question.correctResponse;
        correctAnswers++;
    } else {
        result.style.color = '#d9534f'; /* Красный для неправильного ответа */
        result.textContent = question.incorrectResponse;
    }
    document.getElementById('nextQuestion').style.display = 'block';
    document.getElementById('retryQuestion').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    } else {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('finalScreen').style.display = 'block';
        document.getElementById('finalResult').textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
    }
}

function retryQuestion() {
    loadQuestion(currentQuestion);
}
