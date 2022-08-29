import { setFontAndColor } from './fonts-colors.js';
import { addLeadingZeros } from './helpers.js';
import { setActiveButton } from './cycles.js'
import { toggleSettings }  from './toggleSettings.js';
import { stopTimer }       from './timer.js';
import { ele }             from './elements.js'

const applyButton = document.querySelector(".apply-btn");

applyButton.addEventListener("click", () => {
    if(ele.timerIsRunning) {
        ele.timerButton.innerHTML = "start";
        stopTimer();
    }
    setFontAndColor();
    ele.resetProgressBar();
    ele.minutesInputs[0].value = ele.minutesInputs[0].value;
    ele.minutesInputs[1].value = ele.minutesInputs[1].value;
    ele.minutesInputs[2].value = ele.minutesInputs[2].value;
    ele.pomodoro   = parseInt(ele.minutesInputs[0].value);
    ele.shortBreak = parseInt(ele.minutesInputs[1].value);
    ele.longBreak  = parseInt(ele.minutesInputs[2].value);
    ele.min.innerHTML = addLeadingZeros(ele.pomodoro);
    ele.sec.innerHTML = "00";
    ele.seconds = 59;
    ele.currentCycle = parseInt(ele.pomodoro);
    ele.minutes = ele.currentCycle;
    setActiveButton();
    toggleSettings(); 
})