const timerEl = document.getElementsByClassName('timer')[0];
const startButtonEl = document.getElementById('startButton');

let startTime = undefined;

function onStartClick() {
  if (!startTime) {
    startTime = Date.now();
    startButtonEl.innerText = 'Stop';
    update();
  } else {
    startTime = undefined;
    startButtonEl.innerText = 'Start'
  }
}

function update() {
  requestAnimationFrame(() => {
    if (startTime) {
      paintTimer();

      // Request an additional UI update on the next frame.
      update();
    }
  })
}

function paintTimer() {
  const secondsElapsed = (Date.now() - startTime) / 1000;
  const seconds = Math.floor(secondsElapsed);
  const millis = Math.floor((secondsElapsed % 1) * 1000).toString();
  timerEl.innerText = `${seconds}.${millis.padStart(3, '0')}`;
}

startButtonEl.addEventListener('click', onStartClick);
