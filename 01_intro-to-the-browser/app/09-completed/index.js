const startButtonEl = document.getElementById('startButton');
const timerEl = document.getElementsByClassName('timer')[0];
let startTime = undefined;

function onStartClick() {
  if (!startTime) {
    startTime = Date.now();
    startButtonEl.innerText = 'Stop';
    render();
  } else {
    startTime = undefined;
    startButtonEl.innerText = 'Start';
  }
}

function render() {
  if (startTime) {
    requestAnimationFrame(() => {
      paintTimer();
      render();
    })
  }
}

function paintTimer() {
  if (startTime) {
    const secondsElapsed = (Date.now() - startTime) / 1000;
    const seconds = Math.floor(secondsElapsed);
    const millis = Math.floor((secondsElapsed % 1) * 1000).toString();
    timerEl.innerText = `${seconds}.${millis.padStart(3, '0')}`;
  }
}

startButtonEl.addEventListener('click', onStartClick);
