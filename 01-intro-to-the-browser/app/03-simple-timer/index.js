const timerEl = document.getElementsByClassName('timer')[0];
const startButtonEl = document.getElementById('startButton');

let elapsedTime = 0;
let timer = undefined;

function onStartClick() {
  if (!timer) {
    elapsedTime = 0;
    timer = window.setInterval(tick, 1000);
  } else {
    // Timer is already running, cancel it.
    window.clearInterval(timer);
    timer = undefined;
  }
}

function tick() {
  elapsedTime += 1000;
  console.log(elapsedTime);
}

startButtonEl.addEventListener('click', onStartClick);
