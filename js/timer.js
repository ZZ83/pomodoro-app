import { addLeadingZeros} from './helpers.js'
import { ele } from './elements.js'

const min   = document.querySelector(".time__min");
const sec   = document.querySelector(".time__sec");

let previousValue;
let currentValue;

export function startTimer() {
    if(ele.timerIsRunning === false) {
        ele.timerIsRunning = true;
        ele.timer = setInterval(function() { 
            if(ele.currentCycle === parseInt(ele.min.innerHTML)) {
                ele.minutes -= 1;
            }
            if (ele.seconds < 10) {
                ele.seconds = addLeadingZeros(ele.seconds);
            }
            if (ele.minutes < 10) {
                ele.minutes = addLeadingZeros(ele.minutes);
            }
            min.innerHTML = ele.minutes.toString();
            sec.innerHTML = ele.seconds.toString();
            ele.minutes = parseFloat(ele.minutes);
            if (ele.seconds === "00" && ele.minutes == "00" ) {
                ele.timerButton.innerHTML = "restart";
                stopTimer();
                ele.seconds = 59;
                ele.minutes = ele.currentCycle;
            }
            if (ele.seconds === "00") {
                ele.seconds = 60;
                ele.minutes --;
            }
            ele.seconds --;

            currentValue = parseInt( ele.min.innerHTML );
            if (previousValue !== currentValue) {
                previousValue = parseInt( ele.min.innerHTML );
                const progressBarSmall  = 742;
                const progressBarMedium = 1002;
                let resultSmall  = progressBarSmall /  (ele.currentCycle / currentValue);
                let resultMedium = progressBarMedium / (ele.currentCycle / currentValue);
                ele.body.style.setProperty('--progress-bar-small',   progressBarSmall - resultSmall);
                ele.body.style.setProperty('--progress-bar-medium', progressBarMedium - resultMedium);
            }
            
        }, 10);
    }
}

export function stopTimer() {
    clearInterval(ele.timer);
    ele.timerIsRunning = false;
}