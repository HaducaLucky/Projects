const question = [
    {
        question: "Which app has the most total users?",
        answers: [
            { text: "TikTok", correct: false},
            { text: "Snapchat", correct: false},
            { text: "Instagram", correct: true},
            { text: "Twitch", correct: false},
        ]
    },
    {
        question: "What company makes the Xperia model of smartphone?",
        answers: [
            { text: "Samsung", correct: false},
            { text: "Sony", correct: true},
            { text: "Nokia", correct: false},
            { text: "Oppo", correct: false},
        ]
    },
    {
        question: "Where was the first example of paper money used?",
        answers: [
            { text: "China", correct: true},
            { text: "Turkey", correct: false},
            { text: "Greece", correct: false},
            { text: "Indonesia", correct: false},
        ]
    },
    {
        question: "Which horoscope sign is a fish?",
        answers: [
            { text: "Aquarius", correct: false},
            { text: "Cancer", correct: false},
            { text: "Leo", correct: false},
            { text: "Pisces ", correct: true},
        ]
    },
    {
        question: " Which Game of Thrones character is known as the Young Wolf?",
        answers: [
            { text: "Robb Stark", correct: true},
            { text: "Arya Stark", correct: false},
            { text: "Sansa Stark", correct: false},
            { text: "Tony Stark ", correct: false},
        ]
    },
    {
        question: "How long did dinosaurs live on the earth?",
        answers: [
            { text: "100-150 million years", correct: false},
            { text: "150-200 million years", correct: true},
            { text: "200+ million years", correct: false},
            { text: "300+ million years ", correct: false},
        ]
    },
    {
        question: "Sino Love Mo?",
        answers: [
            { text: "Lucky", correct: true},
            { text: "Lucky Pogi🤭", correct: true},
            { text: "Lucky the best", correct: true},
            { text: "All of the above", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "Block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})



startQuiz();