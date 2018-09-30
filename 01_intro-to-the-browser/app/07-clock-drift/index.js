const startButtonEl = document.getElementById('startButton');
const timerEl = document.getElementsByClassName('timer')[0];
let timer = undefined;
let time = 0;

function onStartClick() {
  if (!timer) {
    time = 0;
    timer = window.setInterval(tick, 1000);
    startButtonEl.innerText = 'Stop';
  } else {
    window.clearInterval(timer);
    timer = undefined;
    startButtonEl.innerText = 'Start';
  }
}

function tick() {
  time += 1000;
  paintTimer();
}

function paintTimer() {
  const secondsElapsed = time / 1000;
  const seconds = Math.floor(secondsElapsed);
  const millis = Math.floor((secondsElapsed % 1) * 1000).toString();
  timerEl.innerText = `${seconds}.${millis.padStart(3, '0')}`;
}

startButtonEl.addEventListener('click', onStartClick);
