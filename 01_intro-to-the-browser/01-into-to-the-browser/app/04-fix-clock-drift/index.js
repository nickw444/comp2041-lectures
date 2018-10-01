const timerEl = document.getElementsByClassName('timer')[0];
const startButtonEl = document.getElementById('startButton');

let startTime = undefined;
let timer = undefined;

function onStartClick() {
  if (!timer) {
    startTime = Date.now();
    timer = window.setInterval(update, 1000);
  } else {
    // Timer is already running, cancel it.
    window.clearInterval(timer);
    timer = undefined;
  }
}

function update() {
  const elapsedTime = Date.now() - startTime;
  console.log(elapsedTime);
}

startButtonEl.addEventListener('click', onStartClick);
