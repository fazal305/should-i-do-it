const questionInput = document.getElementById("questionInput");
const decideBtn = document.getElementById("decideBtn");
const resultBox = document.getElementById("resultBox");
const askAgainBtn = document.getElementById("askAgainBtn");
const whatsappShareBtn = document.getElementById("whatsappShareBtn");
const actionButtons = document.querySelector(".action-buttons");
const historyList = document.getElementById("historyList");

let lastQuestion = "";
let lastAnswer = "";
let history = [];

const responses = [
    { text: "✅ YES", color: "#00ff99" },
    { text: "❌ NO", color: "#ff4d6d" },
    { text: "🚫 ABSOLUTELY NOT", color: "#ff2e63" },
    { text: "👩 ASK YOUR MOTHER", color: "#ffd166" },
    { text: "☕ TRY AGAIN AFTER CHAI", color: "#f4a261" },
    { text: "🤷 THE UNIVERSE IS UNSURE", color: "#70d6ff" },
    { text: "😂 BHAI SERIOUSLY?", color: "#c77dff" },
    { text: "🔁 FLIP A COIN INSTEAD", color: "#72efdd" },
    { text: "😴 MAYBE AFTER A NAP", color: "#a29bfe" },
    { text: "🙏 PRAY FIRST", color: "#f9c74f" }
];

function playPopSound() {
    const audioContext = new AudioContext();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 500;
    gainNode.gain.value = 0.08;

    oscillator.start();

    setTimeout(() => {
        oscillator.stop();
    }, 80);
}

function vibratePhone() {
    if (navigator.vibrate) {
        navigator.vibrate(80);
    }
}

function updateWhatsappLink(question, answer) {
    const message = `I asked: "${question}"%0AThe answer was: ${answer}%0A%0ATry this decision generator 😂`;

    whatsappShareBtn.href = `https://wa.me/?text=${message}`;
}

function updateHistory(question, answer) {
    history.unshift({
        question: question,
        answer: answer
    });

    history = history.slice(0, 5);

    historyList.innerHTML = "";

    history.forEach((item) => {
        const li = document.createElement("li");

        li.innerHTML = `
      <strong>Q:</strong> ${item.question}<br>
      <strong>A:</strong> ${item.answer}
    `;

        historyList.appendChild(li);
    });
}

function showRandomAnswer(question) {

  const randomIndex = Math.floor(Math.random() * responses.length);

  const selectedResponse = responses[randomIndex];

  lastAnswer = selectedResponse.text;

  resultBox.textContent = selectedResponse.text;

  resultBox.style.color = selectedResponse.color;

  actionButtons.style.display = "grid";

  updateWhatsappLink(question, selectedResponse.text);

  updateHistory(question, selectedResponse.text);

  playPopSound();

  vibratePhone();

  // Remove old animations first
  resultBox.classList.remove(
    "bounce",
    "spin",
    "shake",
    "fade"
  );

  // Random animation selection
  const animations = [
    "bounce",
    "spin",
    "shake",
    "fade"
  ];

  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  // Re-add animation
  setTimeout(() => {
    resultBox.classList.add(randomAnimation);
  }, 10);
}

function generateDecision() {
    const question = questionInput.value.trim();

    if (question === "") {
        resultBox.textContent = "⚠️ Ask something first";
        resultBox.style.color = "#ffffff";
        return;
    }

    lastQuestion = question;
    showRandomAnswer(question);
}

function askAgain() {
    if (lastQuestion === "") {
        resultBox.textContent = "⚠️ Ask one question first";
        resultBox.style.color = "#ffffff";
        return;
    }

    showRandomAnswer(lastQuestion);
}

decideBtn.addEventListener("click", generateDecision);
askAgainBtn.addEventListener("click", askAgain);

// Allow Enter key to submit
questionInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    generateDecision();
  }

});