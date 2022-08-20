import { addLeadingZeros} from './helpers.js'
import { ele } from './elements.js'

let seconds = 59;
const min   = document.querySelector(".time__min");
const sec   = document.querySelector(".time__sec");

export function startTimer(time) {
    if(ele.timerIsRunning === false) {
        ele.timerIsRunning = true;
        ele.timer = setInterval(function() { 
            if (seconds < 10) {
                seconds = addLeadingZeros(seconds);
            }
            if (ele.minutes < 10) {
                ele.minutes = addLeadingZeros(ele.minutes);
            }
            min.innerHTML = ele.minutes.toString();
            sec.innerHTML = seconds.toString();
            ele.minutes = parseFloat(ele.minutes);
            if (seconds === "00" && ele.minutes == "00" ) {
                ele.timerButton.firstElementChild.innerHTML = "restart";
                stopTimer();
                seconds = 59;
                ele.minutes = ele.pomodoro;
            }
            if (seconds === "00") {
                seconds = 60;
                ele.minutes --;
            }
            seconds --;
        }, 10);
    }
}

export function stopTimer() {
    clearInterval(ele.timer);
    ele.timerIsRunning = false;
}