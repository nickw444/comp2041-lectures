const timerEl = document.getElementsByClassName('timer')[0];
const startButtonEl = document.getElementById('startButton');

function onStartClick() {
  console.log('Start was clicked');
}

startButtonEl.addEventListener('click', onStartClick);
