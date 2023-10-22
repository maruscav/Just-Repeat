// JavaScript code containing quiz and leaderboard functionality.
// Include this script in your HTML file using <script src="script.js"></script>

const germanWordElement = document.getElementById("german-word");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("current-score"); // Updated score display element
const leaderboardElement = document.getElementById("leaderboard"); // Updated leaderboard element
const progressBar = document.querySelector(".progress");
const progressBarMaxValue = 10; // Adjust this value based on the number of words in each set

let scoreRight = 0;
let scoreWrong = 0;

let currentQuestionIndex = 0;
let vocabulary = []; // Vocabulary array based on the selected category

// Function to start the quiz with the selected vocabulary set
function startQuiz(category) {
  // Determine the selected category and load the corresponding vocabulary set
  if (category === "5Words") {
    vocabulary = vocabulary5Words;
  } else if (category === "10Words") {
    vocabulary = vocabulary10Words;
  } else {
    // Default to 10 words category if no valid category is provided
    vocabulary = vocabulary10Words;
  }

  // Clear the category selection options and display the quiz section
  document.getElementById("category-selection").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";

  // Reset the progress bar
  progressBar.style.width = "0%";

  // Initialize the quiz with the selected vocabulary set
  initializeQuiz();
}

// Initialize the quiz with the selected vocabulary set
function initializeQuiz() {
  // Reset any quiz-related variables (scoreRight, scoreWrong, currentQuestionIndex, etc.)
  scoreRight = 0;
  scoreWrong = 0;
  currentQuestionIndex = 0;
  scoreElement.textContent = 0;
  scoreElement.textContent = "Correct: 0 / 10";

  // Shuffle the vocabulary array for a random order of questions
  shuffleArray(vocabulary);

  // Start the quiz with the selected vocabulary set
  displayQuestion();
}

// Function to display the current question
function displayQuestion() {
  const currentQuestion = vocabulary[currentQuestionIndex];

  germanWordElement.textContent = currentQuestion.german;

  // Shuffle the options to display them in random order
  const shuffledOptions = shuffleArray([
    currentQuestion.english,
    getRandomOption(),
    getRandomOption(),
    getRandomOption(),
  ]);

  optionsContainer.innerHTML = "";

  shuffledOptions.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });

  // Update the progress bar
  updateProgressBar();
}

// Function to update the progress bar
function updateProgressBar() {
  const progressPercentage = (currentQuestionIndex / progressBarMaxValue) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  // Reset the progress bar to 0% when the quiz is completed
  if (currentQuestionIndex > progressBarMaxValue) {
    progressBar.style.width = "0%";
  }
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
  const currentQuestion = vocabulary[currentQuestionIndex];

  // Remove click event listeners and disable pointer events on all choices
  const choices = optionsContainer.getElementsByClassName("option");
  for (let i = 0; i < choices.length; i++) {
    choices[i].removeEventListener("click", checkAnswer);
    choices[i].style.pointerEvents = "none";
  }

  // Add color to indicate correct and wrong choices
  const correctChoice = currentQuestion.english;
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].textContent === correctChoice) {
      choices[i].classList.add("correct");
    } else if (choices[i].textContent === selectedAnswer) {
      choices[i].classList.add("wrong");
    }
  }

  // Check if the selected answer is correct
  if (selectedAnswer === correctChoice) {
    scoreRight++;
    scoreElement.textContent = scoreRight; // Update the score display
  } else {
    scoreWrong++;
  }

  currentQuestionIndex++;

  // Check if there are more questions or the quiz is completed
  if (currentQuestionIndex < vocabulary.length) {
    setTimeout(displayQuestion, 1000); // Delay before displaying the next question
  } else {
    setTimeout(showFinalScore, 1000); // Delay before showing the final score
  }
}

// Function to display the final score and add the user to the leaderboard
function showFinalScore() {
  germanWordElement.textContent = "Quiz Completed!";
  optionsContainer.innerHTML = "";
  submitButton.style.display = "none";

  // Update the leaderboard after the quiz is completed (optional)
  //  const username = prompt("Please enter your name:");
  //  updateLeaderboard(username || "Anonymous", scoreRight, scoreWrong);
}

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to get a random option from the vocabulary
function getRandomOption() {
  const randomIndex = Math.floor(Math.random() * vocabulary.length);
  return vocabulary[randomIndex].english;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  scoreRight = 0;
  scoreWrong = 0;

  scoreElement.textContent = "Correct: 0 / 10"; // Reset the score display
  initializeQuiz();

  // Reset the progress bar
  progressBar.style.width = "0%";
}

// Add event listeners to category selection buttons
document.getElementById("btn-5-words").addEventListener("click", () => {
  document.getElementById("category-selection").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  startQuiz("5Words");
});

document.getElementById("btn-10-words").addEventListener("click", () => {
  document.getElementById("category-selection").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  startQuiz("10Words");
});

// Function to go back to the category selection page
function backToCategory() {
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("category-selection").style.display = "block";
  document.getElementById("german-word").textContent = "Choose category:";
  document.getElementById("options").innerHTML = "";
  document.getElementById("submit-btn").style.display = "inline";
  document.getElementById("score").style.display = "block";
  document.getElementById("back-to-category").style.display = "inline";

  displayLeaderboard();
}
