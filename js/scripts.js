import { setInputsValues, toggleSettings, setMinutes, addLeadingZeros }  from './helpers.js'
import { startTimer, stopTimer } from './timer.js'
import { setFontsAndColors }     from './fonts&colors.js'
import { setActiveButton }       from './cycles.js'
import { ele }                   from './elements.js'
import './set-minutes.js'

const main        = document.querySelector("main");

const applyButton = document.querySelector(".apply-btn");

main.addEventListener("click", (event) => {
    if(event.target.classList.contains("settings-btn")) {
        toggleSettings();
    }
    if(event.target.classList.contains("settings__close-btn")) {
        setInputsValues();
        toggleSettings();
    }
    if(event.target.classList.contains("overlay")) {
        if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
            setInputsValues();
            toggleSettings();
        }
    }
})



ele.timerButton.addEventListener("click", () => {
    if( ele.timerButton.innerHTML === "start") {
        ele.timerButton.innerHTML = "pause";
        startTimer();
    } else if (ele.timerButton.innerHTML === "pause") {
        ele.timerButton.innerHTML = "start";
        stopTimer();
    } else if (ele.timerButton.innerHTML === "restart") {
        ele.timerButton.innerHTML = "pause";
        startTimer();
    }
})

applyButton.addEventListener("click", () => {
    if(ele.timerIsRunning) {
        ele.timerButton.innerHTML = "start";
        stopTimer();
    }
    ele.addFontsAndColors();
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

setFontsAndColors();



