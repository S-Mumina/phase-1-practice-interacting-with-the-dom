// Get DOM elements
const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const restartButton = document.getElementById('restart');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

// Counter functionality
let counterValue = 0;
let intervalId;

function updateCounterDisplay() {
  counterDisplay.innerText = counterValue;
}

function incrementCounter() {
  counterValue++;
  updateCounterDisplay();
}

function decrementCounter() {
  counterValue--;
  updateCounterDisplay();
}

function startTimer() {
  intervalId = setInterval(incrementCounter, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function restartTimer() {
  counterValue = 0;
  updateCounterDisplay();
}

// Like functionality
function addLike() {
  const like = document.createElement('li');
  like.innerText = `Number ${counterValue} has been liked!`;
  likesList.appendChild(like);
}

// Comment functionality
function addComment(event) {
  event.preventDefault();
  const comment = document.createElement('div');
  comment.innerText = commentInput.value;
  commentsList.appendChild(comment);
  commentInput.value = '';
}

// Event listeners
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
heartButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', () => {
  pauseTimer();
  plusButton.disabled = true;
  minusButton.disabled = true;
  heartButton.disabled = true;
  restartButton.disabled = true;
  pauseButton.innerText = 'resume';
});
restartButton.addEventListener('click', () => {
  startTimer();
  plusButton.disabled = false;
  minusButton.disabled = false;
  heartButton.disabled = false;
  restartButton.disabled = false;
  pauseButton.innerText = 'pause';
  restartTimer();
});
commentForm.addEventListener('submit', addComment);

// Start the timer on page load
startTimer();
