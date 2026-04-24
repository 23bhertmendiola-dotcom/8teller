const eightBall = document.getElementById('eightBall');
const answer = document.getElementById('answer');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');

// NORMAL ANSWERS
const responses = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "Very unlikely"
];

// SARCASTIC ANSWERS
const sarcasticAnswers = [
  "Seriously? That's your question?",
  "You already know the answer.",
  "Why are you asking me?",
  "Use your brain next time."
];

// 🔥 YOUR C++ LOGIC (converted)
function processQuestion(question) {
  let lowerQuestion = question.toLowerCase().replace(/\?/g, "");

  // EXIT
  if (lowerQuestion.includes("exit")) {
  return "__EXIT__";
}

  // CUSTOM RESPONSES
  if (lowerQuestion.includes("real")) {
    return "As real as your imagination :3";
  }

  if (lowerQuestion.includes("sarcastic")) {
    return "Because you need feedback :D";
  }

  if (lowerQuestion.includes("bored")) {
    return "not really";
  }

  if (lowerQuestion.includes("status")) {
    return "Alive inside the code";
  }

  if (lowerQuestion.includes("college")) {
    return "A place where sleep disappears and stress increases";
  }

  if (lowerQuestion.length < 5) {
    return "That's not even a real question";
  }

  // RANDOM MOOD
  let mood = Math.floor(Math.random() * 2);

  if (mood === 0) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else {
    return sarcasticAnswers[Math.floor(Math.random() * sarcasticAnswers.length)];
  }
}

function shakeBall() {
  const userQuestion = questionInput.value;
  const result = processQuestion(userQuestion);

  // EXIT
  if (result === "__EXIT__") {
    alert("bye!");
    window.location.href = "https://www.google.com";
    return;
  }

  // RESET FIRST
  answer.classList.remove("show");
  answer.textContent = "";

  eightBall.classList.remove('shake');
  void eightBall.offsetWidth;
  eightBall.classList.add('shake');

  setTimeout(() => {
    answer.textContent = result;

    answer.classList.remove("show");
    void answer.offsetWidth;

    answer.classList.add("show");

    // RESET BACK
    setTimeout(() => {
      answer.classList.remove("show");

      setTimeout(() => {
        answer.textContent = "";
        answer.classList.add("show");
      }, 400);

    }, 2000);

  }, 500);
}

// BUTTON CLICK
questionInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && questionInput.value.trim() !== '') {
    shakeBall();
    questionInput.value = '';
  }
});
askButton.addEventListener('click', () => {
  if (questionInput.value.trim() !== '') {
    shakeBall();
    questionInput.value = '';
    questionInput.focus();
  }
});
