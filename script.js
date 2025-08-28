const questions = [
  {
    a: "Be able to fly",
    b: "Be invisible"
  },
  {
    a: "Have free pizza for life",
    b: "Have free Wi-Fi wherever you go"
  },
  {
    a: "Only be able to whisper",
    b: "Only be able to shout"
  },
  {
    a: "Live in a video game world",
    b: "Live in a movie universe"
  },
  {
    a: "Never use social media again",
    b: "Never watch another movie or TV show"
  },
  {
    a: "Fight 100 duck-sized horses",
    b: "Fight 1 horse-sized duck"
  }
];

const questionText = document.getElementById('question');
const btnA = document.getElementById('optionA');
const btnB = document.getElementById('optionB');
const nextBtn = document.getElementById('nextBtn');

let currentQuestion = {};

function loadNewQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  currentQuestion = q;
  questionText.innerHTML = `Would you rather <strong>${q.a}</strong> or <strong>${q.b}</strong>?`;
  btnA.textContent = q.a;
  btnB.textContent = q.b;
}

btnA.addEventListener('click', () => {
  alert(`You chose: ${currentQuestion.a}`);
});

btnB.addEventListener('click', () => {
  alert(`You chose: ${currentQuestion.b}`);
});

nextBtn.addEventListener('click', loadNewQuestion);

// Load first question
loadNewQuestion();
