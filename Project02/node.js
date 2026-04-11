const question = [
{
    question: "Which is the largest animal in the world?",
    answer: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false }
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answer: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
    ]
},
{
    question: "Who is the founder of Microsoft?",
    answer: [
        { text: "Steve Jobs", correct: false },
        { text: "Bill Gates", correct: true },
        { text: "Elon Musk", correct: false },
        { text: "Mark Zuckerberg", correct: false }
    ]
},
{
    question: "Which is the fastest land animal?",
    answer: [
        { text: "Lion", correct: false },
        { text: "Cheetah", correct: true },
        { text: "Tiger", correct: false },
        { text: "Horse", correct: false }
    ]
},
{
    question: "Which is the smallest prime number?",
    answer: [
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false }
    ]
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    answer: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "Korea", correct: false },
        { text: "Thailand", correct: false }
    ]
},
{
    question: "Which gas do plants use for photosynthesis?",
    answer: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];

    questionElement.innerText = 
        `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach(ans => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(ans.correct){
            button.dataset.correct = ans.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerText = 
        `🎉 You scored ${score} out of ${question.length}`;

    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length - 1){
        currentQuestionIndex++;
        showQuestion();
    } else if(nextButton.innerText === "Play Again"){
        startQuiz();
    } else {
        showScore();
    }
});

startQuiz();