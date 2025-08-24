
const startingMinutes = 10;
let time = startingMinutes * 60;
const startBtn = document.querySelector('.startbtn')
const stopBtn = document.querySelector('.stopbtn');
const resetBtn = document.querySelector('.resetbtn');
const countdownEl = document.getElementById('Countdown');


let interval = null;


function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0'+ seconds : seconds

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;

      if (time < 0) {
        clearInterval(interval);
        
        return;
  }
}

startBtn.addEventListener('click',()=> {
    if(interval!== null) return;
    interval = setInterval(updateCountdown, 1000)
});
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    time = startingMinutes * 60;
    countdownEl.innerText = `${startingMinutes}:00`;
});