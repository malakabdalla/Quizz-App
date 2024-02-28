const quizData = [
  {
    question: "how old is florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "what is the most used programming language is 2019?",
    a: "java",
    b: "C",
    c: "python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "who is the president of the US?",
    a: "florin Pop",
    b: "Donald trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "what does HTML stand for?",
    a: "hypertext markup language",
    b: "cascading style sheet",
    c: "Jason object Nation",
    d: "helicopters terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "what year was Javascript launched?",
    a: "2020",
    b: "2019",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You Answered correctly  ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reset Quiz</button>`;
    }
  }
});
