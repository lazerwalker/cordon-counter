var timeout;
var interval = 1000;

var $waiting = document.getElementById('waiting')
var $live = document.getElementById('live')

var $minute1 = document.getElementById('minute1')
var $minute2 = document.getElementById('minute2')
var $seconds1 = document.getElementById('seconds1')
var $seconds2 = document.getElementById('seconds2')

function nextGameTime() {
  var currentMinutes = new Date().getMinutes()
  var next = new Date()
  next.setSeconds(0)

  if (currentMinutes < 20) {
    next.setMinutes(20);
  } else if (currentMinutes < 40) {
    next.setMinutes(40);
  } else {
    next.setHours(next.getHours() + 1)
    next.setMinutes(0);
  }

  return next;
}

function countdown() {
  var now = new Date();
  var next = nextGameTime();

  var totalSeconds = (next - now) / 1000;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  console.log(totalSeconds, minutes, seconds)

  if (minutes >= 15) { // Games are 5 minutes, so the current game is still active
    $waiting.style.display = 'none';
    $live.style.display = 'block';
  } else {
    $waiting.style.display = 'block';
    $live.style.display = 'none';

    $minute1.innerText = Math.floor(minutes / 10)
    $minute2.innerText = Math.floor(minutes % 10)
    $seconds1.innerText = Math.floor(seconds / 10)
    $seconds2.innerText = Math.floor(seconds % 10)
  }

  setTimeout(countdown, interval)
}


window.onload = countdown;