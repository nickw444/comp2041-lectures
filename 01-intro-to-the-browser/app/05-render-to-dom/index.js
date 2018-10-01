const timerEl = document.getElementsByClassName('timer')[0];
const startButtonEl = document.getElementById('startButton');

let startTime = undefined;
let timer = undefined;

function onStartClick() {
  if (!timer) {
    startTime = Date.now();
    timer = window.setInterval(update, 1000); // (Try 1000/60 for 60 updates per second)
    startButtonEl.innerText = 'Stop'
  } else {
    // Timer is already running, cancel it.
    window.clearInterval(timer);
    timer = undefined;
    startButtonEl.innerText = 'Start'
  }
}

function update() {
  paintTimer();
}

function paintTimer() {
  const secondsElapsed = (Date.now() - startTime) / 1000;
  const seconds = Math.floor(secondsElapsed);
  const millis = Math.floor((secondsElapsed % 1) * 1000).toString();
  timerEl.innerText = `${seconds}.${millis.padStart(3, '0')}`;
}

startButtonEl.addEventListener('click', onStartClick);
